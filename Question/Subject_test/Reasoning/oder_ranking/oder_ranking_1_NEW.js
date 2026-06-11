// Order & Ranking - Set 01 (Image Support Example)
// ছবি ছাড়া প্রশ্ন: image ফিল্ড দেবেন না বা image: null রাখুন
// ছবি সহ প্রশ্ন: image: "images/ফাইলের_নাম.png" দিন
// ছবিগুলো রাখুন: Subject_test/Reasoning/oder_ranking/images/ ফোল্ডারে

const TEST_TIME_IN_SECONDS = 600; // ১০ মিনিট

const rawQuestions = [

    // ---- ছবি ছাড়া প্রশ্ন (সাধারণ) ----
    {
        question: "একটি সারিতে রাম বাম দিক থেকে ৭ম এবং ডান দিক থেকে ১১তম। সারিতে মোট কতজন আছে?",
        options: ["১৬", "১৭", "১৮", "১৯"],
        correct: 1,
        subject: "Reasoning"
    },
    {
        question: "P, Q, R, S, T পাঁচজন বন্ধু। P হল Q-এর চেয়ে লম্বা। R হল S-এর চেয়ে খাটো। T সবচেয়ে লম্বা। S হল P-এর চেয়ে লম্বা। সবচেয়ে খাটো কে?",
        options: ["P", "Q", "R", "S"],
        correct: 1,
        subject: "Reasoning"
    },

    // ---- ছবি সহ প্রশ্ন ----
    {
        question: "নিচের ছবিতে দেখো — কে কার থেকে উঁচুতে বসে আছে?",
        image: "images/order_ranking_q3.png",   // ← ছবির পাথ
        options: ["A", "B", "C", "D"],
        correct: 2,
        subject: "Reasoning"
    },
    {
        question: "নিচের সিরিজ চিত্রটি দেখে পরবর্তী সংখ্যা বলো:",
        image: "images/series_q4.png",          // ← ছবির পাথ
        options: ["৩৬", "৪৯", "৬৪", "৮১"],
        correct: 1,
        subject: "Reasoning"
    },

    // ---- আরও সাধারণ প্রশ্ন ----
    {
        question: "যদি NORTH কে SKNZM লেখা হয়, তবে SOUTH কে কী লেখা হবে?",
        options: ["XTNZM", "XTPYM", "XTNPY", "XSPYM"],
        correct: 0,
        subject: "Reasoning"
    },
];
