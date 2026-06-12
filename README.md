# MockTest Project — Vercel Setup Guide

## ডিপ্লয় করার ধাপ

### ১. GitHub-এ Push করুন
এই পুরো ফোল্ডারটা আপনার GitHub repo-তে push করুন।

### ২. Vercel-এ Connect করুন
- https://vercel.com → New Project → আপনার GitHub repo সিলেক্ট করুন
- Deploy করুন (কোনো extra setting লাগবে না)

### ৩. Environment Variable যোগ করুন ⚠️ (গুরুত্বপূর্ণ)
Vercel Dashboard → আপনার Project → Settings → Environment Variables

| Name | Value |
|------|-------|
| `FIREBASE_SERVICE_ACCOUNT_KEY` | Firebase Console → Project Settings → Service Accounts → Generate New Private Key → JSON ফাইলের পুরো content |

### ৪. payment.html ও payment-status.html আপডেট করুন
`YOUR_PROJECT.vercel.app` এর জায়গায় আপনার আসল Vercel URL বসান:
```
const CLOUD_FUNCTIONS_BASE = "https://YOUR_PROJECT.vercel.app/api";
```

### ৫. Cashfree Webhook URL সেট করুন
Cashfree Dashboard → Developers → Webhooks:
```
https://YOUR_PROJECT.vercel.app/api/cashfreeWebhook
```

---

## ফাইল স্ট্রাকচার
```
├── api/
│   ├── _firebaseAdmin.js        ← Firebase Admin SDK (shared)
│   ├── createCashfreeOrder.js   ← POST /api/createCashfreeOrder
│   ├── cashfreeWebhook.js       ← POST /api/cashfreeWebhook
│   └── verifyCashfreeOrder.js   ← GET  /api/verifyCashfreeOrder
├── dashboard.html
├── settings.html   ← Logout বাটন এখানে
├── admin.html      ← Payment page links যোগ হয়েছে
├── payment.html
├── payment-status.html
├── package.json
└── vercel.json
```
