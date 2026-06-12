const { admin, db } = require("./_firebaseAdmin");
const crypto = require("crypto");

function calculateExpiry(durationDays) {
  if (!durationDays || Number(durationDays) <= 0) return null;
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + Number(durationDays));
  return admin.firestore.Timestamp.fromDate(expiry);
}

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Only POST allowed");

  try {
    const cfgDoc = await db.collection("config").doc("paymentGateway").get();
    const cfg = cfgDoc.data() || {};

    // Signature verification
    if (cfg.webhookSecret) {
      const signature = req.headers["x-webhook-signature"];
      const timestamp  = req.headers["x-webhook-timestamp"];
      const rawBody    = JSON.stringify(req.body);
      const expected   = crypto
        .createHmac("sha256", cfg.webhookSecret)
        .update(timestamp + rawBody)
        .digest("base64");
      if (signature !== expected)
        return res.status(401).send("Invalid signature");
    }

    const event         = req.body;
    const orderId       = event?.data?.order?.order_id;
    const paymentStatus = event?.data?.payment?.payment_status;

    if (!orderId) return res.status(400).send("No order_id");

    const purchaseRef  = db.collection("purchases").doc(orderId);
    const purchaseSnap = await purchaseRef.get();
    if (!purchaseSnap.exists) return res.status(200).send("ok");

    const purchase = purchaseSnap.data();

    if (paymentStatus === "SUCCESS") {
      const expiry  = calculateExpiry(purchase.durationDays);
      const userRef = db.collection("users").doc(purchase.uid);

      await userRef.update({
        [`purchasedExams.${purchase.examKey}`]: true,
        [`examExpiry.${purchase.examKey}`]: expiry,
        purchaseHistory: admin.firestore.FieldValue.arrayUnion({
          examKey:     purchase.examKey,
          examName:    purchase.examName,
          amount:      purchase.amount,
          orderId,
          durationDays: purchase.durationDays || 0,
          purchasedAt: new Date().toISOString(),
          expiresAt:   expiry ? expiry.toDate().toISOString() : null,
          status:      "SUCCESS"
        })
      });

      await purchaseRef.update({
        status:    "SUCCESS",
        paidAt:    admin.firestore.FieldValue.serverTimestamp(),
        expiresAt: expiry || null
      });

      await db.collection("adminStats").doc("summary").set(
        { totalPurchases: admin.firestore.FieldValue.increment(1) },
        { merge: true }
      );
    } else {
      await purchaseRef.update({ status: paymentStatus || "FAILED" });
    }

    return res.status(200).send("ok");

  } catch (err) {
    console.error("Webhook error:", err);
    return res.status(500).send("error");
  }
};
