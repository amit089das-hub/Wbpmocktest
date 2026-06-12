# 🆕 নতুন ফিচারসমূহ - সেটআপ গাইড

এই আপডেটে নিচের জিনিসগুলো যুক্ত করা হয়েছে:

---

## ১. Admin Panel - Payment Gateway Settings (Cashfree)

`admin.html` এর উপরে নতুন বাটন: **💳 Payment Option**

এখানে ক্লিক করে আপনি সেভ করতে পারবেন:
- Cashfree **App ID (Client ID)**
- Cashfree **Secret Key**
- **Webhook Secret** (ঐচ্ছিক, কিন্তু সুরক্ষার জন্য রাখা ভালো)
- Mode: **Test (Sandbox)** বা **Live (Production)**
- যেকোনো extra script/note

এই তথ্য Firestore এর `config/paymentGateway` ডকুমেন্টে সেভ হয়, এবং `functions/index.js` এর
Cloud Function এই তথ্য ব্যবহার করে Cashfree API কল করবে। **Secret Key কখনো ব্রাউজারে publicly
পাঠানো হয় না** — শুধু Cloud Function (সার্ভার সাইড) এটা ব্যবহার করে।

---

## ২. পেমেন্ট হলে অটোমেটিক মক টেস্ট অ্যাক্সেস

`payment.html` এ এখন **"⚡ PAY NOW (Instant Access via Cashfree)"** বাটন আছে।

ফ্লো:
1. ইউজার বাটনে ক্লিক করে → `createCashfreeOrder` Cloud Function কল হয় → Cashfree Order/Payment
   Session তৈরি হয়।
2. Cashfree এর চেকআউট পেজ ওপেন হয়, ইউজার পেমেন্ট করে।
3. পেমেন্ট সফল হলে Cashfree **Webhook** (`cashfreeWebhook`) কল করে → স্বয়ংক্রিয়ভাবে:
   - `users/{uid}.purchasedExams.{examKey} = true`
   - `users/{uid}.examExpiry.{examKey}` = মেয়াদ শেষের তারিখ (বা lifetime হলে `null`)
   - `users/{uid}.purchaseHistory` এ নতুন এন্ট্রি যুক্ত হয় (exam, amount, date, expiry, status)
4. ইউজার `payment-status.html` পেজে রিডাইরেক্ট হয়, যেখানে স্ট্যাটাস দেখানো হয় এবং
   সরাসরি "টেস্ট শুরু করুন" বাটন থাকে।

**Admin ম্যানুয়ালি দিলে:** আগের মতোই `admin.html` থেকে "Activate" বাটনে ক্লিক করলে এখন
একটা প্রশ্ন আসবে — কতদিনের জন্য অ্যাক্সেস দিতে চান (দিন সংখ্যা লিখুন, **0 = Lifetime**)।

---

## ৩. Purchase History পেজ (Admin)

নতুন পেজ: **`purchase-history.html`**

এখান থেকে অ্যাডমিন দেখতে পারবেন:
- কোন ইউজার কোন মক টেস্ট কিনেছেন
- কত টাকা দিয়ে কিনেছেন
- কবে কিনেছেন (তারিখ ও সময়)
- কতদিনের জন্য (Duration) এবং কবে মেয়াদ শেষ হবে
- পেমেন্ট স্ট্যাটাস (SUCCESS / PENDING / FAILED)

নাম, ইমেইল, মোবাইল অথবা এক্সাম নাম দিয়ে সার্চ/ফিল্টার করা যাবে।
`admin.html` থেকে **📋 Purchase History** বাটনে ক্লিক করে এখানে আসা যাবে।

---

## ৪. ইউজার সেটিংস পেজ

নতুন পেজ: **`settings.html`** (ড্যাশবোর্ডের বটম নেভিগেশনে ⚙️ Settings যুক্ত হয়েছে)

এখান থেকে ইউজার:
- তার **নাম এডিট** করতে পারবেন (Save করলে Firestore + Firebase Auth profile দুটোই আপডেট হয়)
- দেখতে পারবেন কোন কোন এক্সাম **Active**, কোনটা **Locked**, এবং Active থাকলে
  **আর কতদিন বাকি** (অথবা Lifetime)

---

## ৫. সাবস্ক্রিপশন (Time-based Access)

প্রতিটা এক্সাম অ্যাক্সেসের একটা মেয়াদ (Expiry Date) থাকতে পারে, যা Firestore এ
`users/{uid}.examExpiry.{examKey}` ফিল্ডে সেভ হয়।

- পেমেন্টের মাধ্যমে কেনা হলে `payment.html` এর `examDetails` অবজেক্টে দেওয়া
  `durationDays` অনুযায়ী মেয়াদ সেট হবে।
- Admin ম্যানুয়ালি অ্যাক্সেস দিলে, দিনের সংখ্যা চাওয়া হবে (0 = Lifetime)।
- **`dashboard.html`** লোড হওয়ার সময় প্রতিবার চেক করা হয় — মেয়াদ শেষ হয়ে গেলে
  সেই এক্সাম স্বয়ংক্রিয়ভাবে `purchasedExams.{examKey} = false` করে দেওয়া হয়
  (অর্থাৎ বাটন আবার লক/পেমেন্ট পেজে চলে যাবে)।
- `admin.html` এবং `settings.html` এ মেয়াদ কতদিন বাকি আছে তা দেখানো হয়।

---

## ⚙️ ডিপ্লয়মেন্ট স্টেপ (গুরুত্বপূর্ণ!)

Cashfree পেমেন্ট অটোমেটিক করার জন্য একটা ব্যাকএন্ড (Cloud Function) প্রয়োজন,
কারণ Secret Key ব্রাউজার থেকে কখনো সরাসরি ব্যবহার করা ঠিক না।

1. **Firebase প্রজেক্টকে Blaze (Pay as you go) প্ল্যানে আপগ্রেড করুন** (Cloud Functions
   চালানোর জন্য এটা আবশ্যক — তবে ফ্রি লিমিটের মধ্যেই সাধারণত খরচ হয় না)।

2. টার্মিনালে:
   ```bash
   npm install -g firebase-tools
   firebase login
   cd functions
   npm install
   cd ..
   firebase deploy --only functions
   ```

3. ডিপ্লয় শেষে আপনি ৩টা ফাংশনের URL পাবেন:
   - `createCashfreeOrder`
   - `cashfreeWebhook`
   - `verifyCashfreeOrder`

   এই URL গুলো `payment.html` এবং `payment-status.html` এর
   `CLOUD_FUNCTIONS_BASE` ভ্যারিয়েবলে বসান (যদি রিজিয়ন/প্রজেক্ট আইডি ভিন্ন হয়)।

4. **Cashfree Dashboard** → Developers → Webhooks এ গিয়ে
   `cashfreeWebhook` এর URL টা যুক্ত করুন (PAYMENT_SUCCESS_WEBHOOK ইভেন্টের জন্য)।

5. `admin.html` → 💳 Payment Option থেকে Cashfree App ID, Secret Key, Mode সেভ করুন।

6. Firestore Security Rules এ নিশ্চিত করুন:
   - `config/paymentGateway` ডকুমেন্ট সাধারণ ইউজার যেন **এডিট** করতে না পারে (শুধু read
     allowed for mode check, কিন্তু secretKey ফিল্ড সাবধানে handle করুন — চাইলে
     secretKey আলাদা একটি admin-only ডকুমেন্টে রাখতে পারেন)।
   - `purchases` কালেকশন: ইউজার নিজের অর্ডার read করতে পারবে, write শুধু Cloud Function
     (Admin SDK) থেকে।

---

## 📁 নতুন/পরিবর্তিত ফাইলের তালিকা

- `admin.html` – Payment Gateway Settings মোডাল, Purchase History লিংক, ডিউরেশন-ভিত্তিক Activate
- `purchase-history.html` – নতুন অ্যাডমিন পেজ
- `settings.html` – নতুন ইউজার পেজ
- `payment.html` – Cashfree চেকআউট ইন্টিগ্রেশন
- `payment-status.html` – পেমেন্ট রিটার্ন/স্ট্যাটাস পেজ
- `dashboard.html` – Settings নেভ লিংক + সাবস্ক্রিপশন এক্সপায়ারি চেক
- `functions/index.js`, `functions/package.json` – Cashfree Cloud Functions
