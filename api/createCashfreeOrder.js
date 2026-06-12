const { admin, db } = require("./_firebaseAdmin");
const fetch = require("node-fetch");

function calculateExpiry(durationDays) {
  if (!durationDays || Number(durationDays) <= 0) return null;
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + Number(durationDays));
  return admin.firestore.Timestamp.fromDate(expiry);
}

async function getCashfreeConfig() {
  const doc = await db.collection("config").doc("paymentGateway").get();
  if (!doc.exists) throw new Error("Payment gateway not configured.");
  const data = doc.data();
  if (!data.appId || !data.secretKey) throw new Error("Cashfree App ID / Secret Key অনুপস্থিত।");
  const baseUrl = data.mode === "PROD"
    ? "https://api.cashfree.com/pg"
    : "https://sandbox.cashfree.com/pg";
  return { ...data, baseUrl };
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Only POST allowed" });

  try {
    const {
      uid, examKey, examName, amount, durationDays,
      customerEmail, customerPhone, customerName, returnUrl
    } = req.body;

    if (!uid || !examKey || !amount)
      return res.status(400).json({ error: "uid, examKey, amount আবশ্যক" });

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
        return_url: `${returnUrl || "https://yourproject.vercel.app/payment-status.html"}?order_id={order_id}`
      },
      order_note: `${examName || examKey} mock test access`
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
    if (!response.ok)
      return res.status(400).json({ error: result.message || "Order creation failed", details: result });

    await db.collection("purchases").doc(orderId).set({
      orderId, uid, examKey,
      examName: examName || examKey,
      amount: Number(amount),
      durationDays: durationDays || 0,
      status: "PENDING",
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    return res.json({ orderId, paymentSessionId: result.payment_session_id });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};
