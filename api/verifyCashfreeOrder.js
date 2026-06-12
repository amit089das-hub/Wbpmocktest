const { admin, db } = require("./_firebaseAdmin");
const fetch = require("node-fetch");

function calculateExpiry(durationDays) {
  if (!durationDays || Number(durationDays) <= 0) return null;
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + Number(durationDays));
  return admin.firestore.Timestamp.fromDate(expiry);
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const orderId = req.query.order_id;
    if (!orderId) return res.status(400).json({ error: "order_id আবশ্যক" });

    const cfgDoc = await db.collection("config").doc("paymentGateway").get();
    const cfg    = cfgDoc.data();
    const baseUrl = cfg.mode === "PROD"
      ? "https://api.cashfree.com/pg"
      : "https://sandbox.cashfree.com/pg";

    const response = await fetch(`${baseUrl}/orders/${orderId}`, {
      headers: {
        "x-client-id":     cfg.appId,
        "x-client-secret": cfg.secretKey,
        "x-api-version":   "2023-08-01"
      }
    });
    const result      = await response.json();
    const orderStatus = result.order_status;

    const purchaseRef  = db.collection("purchases").doc(orderId);
    const purchaseSnap = await purchaseRef.get();
    if (!purchaseSnap.exists)
      return res.status(404).json({ error: "Order পাওয়া যায়নি" });

    const purchase = purchaseSnap.data();

    if (orderStatus === "PAID" && purchase.status !== "SUCCESS") {
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
      purchase.status = "SUCCESS";
    }

    return res.json({
      orderStatus,
      dbStatus: purchase.status,
      examKey:  purchase.examKey,
      examName: purchase.examName
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};
