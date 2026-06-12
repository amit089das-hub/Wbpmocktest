/**
 * ==========================================================================
 *  CASHFREE PAYMENT GATEWAY - CLOUD FUNCTIONS
 * ==========================================================================
 *  এই ফাইলটি Firebase Cloud Functions এ ডিপ্লয় করতে হবে।
 *
 *  ডিপ্লয় করার আগে:
 *  1. টার্মিনালে গিয়ে এই "functions" ফোল্ডারের ভেতরে ঢুকুন
 *  2. রান করুন: npm install
 *  3. রান করুন: firebase deploy --only functions
 *
 *  Cashfree App ID / Secret Key অ্যাডমিন প্যানেল থেকে সেট করতে হবে
 *  (Firestore -> config/paymentGateway ডকুমেন্টে সেভ হয়)
 * ==========================================================================
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");
const cors = require("cors")({ origin: true });
const crypto = require("crypto");

admin.initializeApp();
const db = admin.firestore();

// ডিউরেশন (দিন) থেকে Date বানানোর হেল্পার। 0 বা null = লাইফটাইম (কখনো এক্সপায়ার হবে না)
function calculateExpiry(durationDays) {
  if (!durationDays || Number(durationDays) <= 0) return null; // lifetime
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + Number(durationDays));
  return admin.firestore.Timestamp.fromDate(expiry);
}

// Firestore থেকে Cashfree কনফিগ লোড করা
async function getCashfreeConfig() {
  const doc = await db.collection("config").doc("paymentGateway").get();
  if (!doc.exists) {
    throw new Error("Payment gateway not configured. অ্যাডমিন প্যানেল থেকে Cashfree সেটিংস সেভ করুন।");
  }
  const data = doc.data();
  if (!data.appId || !data.secretKey) {
    throw new Error("Cashfree App ID / Secret Key অনুপস্থিত।");
  }
  const baseUrl =
    data.mode === "PROD"
      ? "https://api.cashfree.com/pg"
      : "https://sandbox.cashfree.com/pg";
  return { ...data, baseUrl };
}

// ==========================================================================
// 1) ORDER তৈরি করা - payment.html থেকে কল হয়
// ==========================================================================
exports.createCashfreeOrder = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      if (req.method !== "POST") {
        return res.status(405).json({ error: "Only POST allowed" });
      }

      const { uid, examKey, examName, amount, durationDays, customerEmail, customerPhone, customerName, returnUrl } = req.body;

      if (!uid || !examKey || !amount) {
        return res.status(400).json({ error: "uid, examKey, amount আবশ্যক" });
      }

      const cfg = await getCashfreeConfig();
      const orderId = `MT_${examKey}_${uid.slice(0, 6)}_${Date.now()}`;

      const orderPayload = {
        order_id: orderId,
        order_amount: Number(amount),
        order_currency: "INR",
        customer_details: {
          customer_id: uid,
          customer_email: customerEmail || "guest@example.com",
          customer_phone: customerPhone || "9999999999",
          customer_name: customerName || "Student"
        },
        order_meta: {
          return_url: `${returnUrl || "https://example.com/payment-status.html"}?order_id={order_id}`
        },
        order_note: `${examName || examKey} mock test access (${durationDays || "lifetime"} days)`
      };

      const response = await fetch(`${cfg.baseUrl}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-client-id": cfg.appId,
          "x-client-secret": cfg.secretKey,
          "x-api-version": "2023-08-01"
        },
        body: JSON.stringify(orderPayload)
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Cashfree order error:", result);
        return res.status(400).json({ error: result.message || "Order creation failed", details: result });
      }

      // পরে রেফারেন্সের জন্য একটা purchase রেকর্ড "PENDING" স্ট্যাটাসে সেভ করা হলো
      await db.collection("purchases").doc(orderId).set({
        orderId,
        uid,
        examKey,
        examName: examName || examKey,
        amount: Number(amount),
        durationDays: durationDays || 0,
        status: "PENDING",
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });

      return res.json({
        orderId,
        paymentSessionId: result.payment_session_id
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
  });
});

// ==========================================================================
// 2) WEBHOOK - Cashfree সার্ভার থেকে পেমেন্ট স্ট্যাটাস আপডেট আসে এখানে
//    Cashfree Dashboard -> Developers -> Webhooks এ এই ফাংশনের URL সেট করতে হবে
// ==========================================================================
exports.cashfreeWebhook = functions.https.onRequest(async (req, res) => {
  try {
    const cfg = await getCashfreeConfig();

    // ----- সিগনেচার ভেরিফিকেশন (নিরাপত্তার জন্য) -----
    if (cfg.webhookSecret) {
      const signature = req.headers["x-webhook-signature"];
      const timestamp = req.headers["x-webhook-timestamp"];
      const rawBody = req.rawBody ? req.rawBody.toString() : JSON.stringify(req.body);

      const expectedSignature = crypto
        .createHmac("sha256", cfg.webhookSecret)
        .update(timestamp + rawBody)
        .digest("base64");

      if (signature !== expectedSignature) {
        console.warn("Webhook signature mismatch!");
        return res.status(401).send("Invalid signature");
      }
    }

    const event = req.body;
    const orderId = event?.data?.order?.order_id;
    const paymentStatus = event?.data?.payment?.payment_status; // SUCCESS / FAILED / etc.

    if (!orderId) {
      return res.status(400).send("No order_id in webhook payload");
    }

    const purchaseRef = db.collection("purchases").doc(orderId);
    const purchaseSnap = await purchaseRef.get();
    if (!purchaseSnap.exists) {
      console.warn("Unknown order_id from webhook:", orderId);
      return res.status(200).send("ok");
    }

    const purchase = purchaseSnap.data();

    if (paymentStatus === "SUCCESS") {
      const expiry = calculateExpiry(purchase.durationDays);

      // ১) ইউজারের purchasedExams + examExpiry আপডেট -> অ্যাক্সেস তৎক্ষণাৎ চালু
      const userRef = db.collection("users").doc(purchase.uid);
      await userRef.update({
        [`purchasedExams.${purchase.examKey}`]: true,
        [`examExpiry.${purchase.examKey}`]: expiry,
        purchaseHistory: admin.firestore.FieldValue.arrayUnion({
          examKey: purchase.examKey,
          examName: purchase.examName,
          amount: purchase.amount,
          orderId,
          durationDays: purchase.durationDays || 0,
          purchasedAt: new Date().toISOString(),
          expiresAt: expiry ? expiry.toDate().toISOString() : null,
          status: "SUCCESS"
        })
      });

      // ২) purchases কালেকশনে স্ট্যাটাস আপডেট
      await purchaseRef.update({
        status: "SUCCESS",
        paidAt: admin.firestore.FieldValue.serverTimestamp(),
        expiresAt: expiry || null
      });

      // ৩) অ্যাডমিন স্ট্যাটস আপডেট
      await db.collection("adminStats").doc("summary").set({
        totalPurchases: admin.firestore.FieldValue.increment(1)
      }, { merge: true });

    } else {
      await purchaseRef.update({ status: paymentStatus || "FAILED" });
    }

    return res.status(200).send("ok");
  } catch (err) {
    console.error("Webhook error:", err);
    return res.status(500).send("error");
  }
});

// ==========================================================================
// 3) ORDER স্ট্যাটাস ম্যানুয়ালি চেক করা - payment-status.html থেকে কল হয়
//    (যদি webhook দেরি করে / মিস হয়, এটা ব্যাকআপ হিসেবে কাজ করে)
// ==========================================================================
exports.verifyCashfreeOrder = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const orderId = req.query.order_id || req.body.order_id;
      if (!orderId) return res.status(400).json({ error: "order_id আবশ্যক" });

      const cfg = await getCashfreeConfig();

      const response = await fetch(`${cfg.baseUrl}/orders/${orderId}`, {
        method: "GET",
        headers: {
          "x-client-id": cfg.appId,
          "x-client-secret": cfg.secretKey,
          "x-api-version": "2023-08-01"
        }
      });
      const result = await response.json();
      const orderStatus = result.order_status; // PAID / ACTIVE / EXPIRED

      const purchaseRef = db.collection("purchases").doc(orderId);
      const purchaseSnap = await purchaseRef.get();
      if (!purchaseSnap.exists) {
        return res.status(404).json({ error: "Order পাওয়া যায়নি" });
      }
      const purchase = purchaseSnap.data();

      // যদি Cashfree বলে PAID কিন্তু আমাদের ডাটাবেজে এখনো PENDING (webhook মিস হয়েছে) -> এখানে ম্যানুয়ালি ফিক্স
      if (orderStatus === "PAID" && purchase.status !== "SUCCESS") {
        const expiry = calculateExpiry(purchase.durationDays);
        const userRef = db.collection("users").doc(purchase.uid);
        await userRef.update({
          [`purchasedExams.${purchase.examKey}`]: true,
          [`examExpiry.${purchase.examKey}`]: expiry,
          purchaseHistory: admin.firestore.FieldValue.arrayUnion({
            examKey: purchase.examKey,
            examName: purchase.examName,
            amount: purchase.amount,
            orderId,
            durationDays: purchase.durationDays || 0,
            purchasedAt: new Date().toISOString(),
            expiresAt: expiry ? expiry.toDate().toISOString() : null,
            status: "SUCCESS"
          })
        });
        await purchaseRef.update({ status: "SUCCESS", paidAt: admin.firestore.FieldValue.serverTimestamp(), expiresAt: expiry || null });
        await db.collection("adminStats").doc("summary").set({
          totalPurchases: admin.firestore.FieldValue.increment(1)
        }, { merge: true });
        purchase.status = "SUCCESS";
      }

      return res.json({ orderStatus, dbStatus: purchase.status, examKey: purchase.examKey, examName: purchase.examName });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
  });
});
