// RAILWAY RECRUITMENT BOARD (RRB) LEVEL 01 STAGE I - MOCK TEST
// Test Date: 27/11/2025 | Test Time: 4:30 PM - 6:00 PM
// Total Marks: 100 | Time: 90 Minutes (5400 Seconds)

const TEST_TIME_IN_SECONDS = 5400; // ১ ঘণ্টা ৩০ মিনিট

// ========================================================
// ১. বহুভাষিক প্রশ্ন ব্লক (General Science, Mathematics, Reasoning, General Awareness)
// ========================================================

const scienceQuestions = [
    {
        question: {
            bn: "যখন একটি বন্দুক থেকে গুলি চালানো হয়, তখন বুলেটটি সামনের দিকে এগিয়ে যায় কারণ:",
            en: "When a gun is fired, the bullet moves forward because:",
            hi: "जब एक बंदूक से गोली चलाई जाती है, तो गोली आगे बढ़ती है क्योंकि:"
        },
        options: {
            bn: ["ব্যারেল কোনো বল প্রয়োগ করে না", "বায়ুর প্রতিরোধ সামনের দিকে কাজ করে", "বন্দুকের রিকয়েল (recoil) প্রতিক্রিয়া হিসাবে পিছনের দিকে কাজ করে", "মহাকর্ষ এটিকে সামনের দিকে ঠেলে দেয়"],
            en: ["the barrel exerts no force", "air resistance acts forward", "the recoil of the gun acts backward as reaction", "gravity pushes it forward"],
            hi: ["बैरल कोई बल नहीं लगाता है", "वायु प्रतिरोध आगे की ओर कार्य करता है", "बंदूक का पीछे हटना (recoil) प्रतिक्रिया के रूप में पीछे की ओर कार्य करता है", "गुरुत्वाकर्षण इसे आगे धकेलता है"]
        },
        correct: 2,
        imageUrl: ""
    },
    {
        question: {
            bn: "নিচের কোন পর্যবেক্ষণটি সবচেয়ে ভালো প্রমাণ করে যে তরলের নির্দিষ্ট আয়তন আছে কিন্তু কোনো নির্দিষ্ট আকার নেই?",
            en: "Which of the following observations best supports that liquids have a definite volume but no fixed shape?",
            hi: "निम्नलिखित में से कौन सा अवलोकन सबसे अच्छा समर्थन करता है कि तरल पदार्थों का एक निश्चित आयतन होता है लेकिन कोई निश्चित आकार नहीं होता है?"
        },
        options: {
            bn: ["বায়ু পুরো পাত্রটি পূরণ করতে প্রসারিত হয়", "একটি কঠিন লোহার টুকরো যেকোনো পাত্রে তার আকার বজায় রাখে", "একটি স্পঞ্জ চেপে ধরলে তার আকার পরিবর্তন হয়", "জল তার পাত্রের আকার ধারণ করে কিন্তু তার আয়তন বজায় রাখে"],
            en: ["Air expands to fill the entire container", "A solid iron block retains its shape in any container", "A sponge changes its shape when squeezed", "Water takes the shape of its container but retains its volume"],
            hi: ["हवा पूरे कंटेनर को भरने के लिए फैलती है", "एक ठोस लोहे का ब्लॉक किसी भी कंटेनर में अपना आकार बनाए रखता है", "एक स्पंज निचोड़ने पर अपना आकार बदल लेता है", "पानी अपने कंटेनर का आकार ले लेता है लेकिन अपना आयतन बनाए रखता है"]
        },
        correct: 3,
        imageUrl: ""
    },
    {
        question: {
            bn: "মরিচা রোধ করতে ইস্পাত এবং লোহাকে দস্তার (zinc) একটি স্তর দিয়ে আবৃত করার প্রক্রিয়াকে কী বলা হয়?",
            en: "Which of the following methods involves coating steel and iron with a layer of zinc to prevent rusting?",
            hi: "निम्नलिखित में से किस विधि में जंग को रोकने के लिए स्टील और लोहे पर जस्ता (zinc) की एक परत चढ़ाना शामिल है?"
        },
        options: {
            bn: ["প্যাসিভেশন (Passivation)", "ক্যাথোডিক প্রোটেকশন (Cathodic protection)", "ইলেক্ট্রোপ্লেটিং (Electroplating)", "গ্যালভানাইজেশন (Galvanisation)"],
            en: ["Passivation", "Cathodic protection", "Electroplating", "Galvanisation"],
            hi: ["निष्क्रियता (Passivation)", "कैथोडिक संरक्षण (Cathodic protection)", "इलेक्ट्रोप्लेटिंग (Electroplating)", "गैल्वनीकरण (Galvanisation)"]
        },
        correct: 3,
        imageUrl: ""
    },
    {
        question: {
            bn: "বৈদ্যুতিক শক্তি (Energy), ক্ষমতা (Power) এবং সময়ের (Time) মধ্যে সম্পর্কটি হলো:",
            en: "The relation between electric energy, power and time is:",
            hi: "विद्युत ऊर्जा, शक्ति (Power) और समय के बीच का संबंध है:"
        },
        options: {
            bn: ["শক্তি = সময় - ক্ষমতা", "শক্তি = ক্ষমতা / সময়", "শক্তি = ক্ষমতা × সময়", "শক্তি = ক্ষমতা + সময়"],
            en: ["Energy = Time - Power", "Energy = Power / Time", "Energy = Power x Time", "Energy = Power + Time"],
            hi: ["ऊर्जा = समय - शक्ति", "ऊर्जा = शक्ति / समय", "ऊर्जा = शक्ति × समय", "ऊर्जा = शक्ति + समय"]
        },
        correct: 2,
        imageUrl: ""
    },
    {
        question: {
            bn: "চাঁদে কোনো বস্তুর ওজন পৃথিবীর চেয়ে কম হওয়ার কারণ কী?",
            en: "The weight of a body on the moon is less than on Earth because:",
            hi: "चंद्रमा पर किसी पिंड का वजन पृथ्वी की तुलना में कम होता है क्योंकि:"
        },
        options: {
            bn: ["চাঁদে মহাকর্ষীয় ত্বরণ কম", "চাঁদে বস্তুর ভর কমে যায়", "চাঁদে কোনো বায়ুমণ্ডল নেই", "চাঁদের ভর পৃথিবীর ভরের সমান"],
            en: ["Gravitational acceleration on the moon is smaller", "Mass of the body decreases on the moon", "The moon has no atmosphere", "Mass of the moon is equal to Earth's mass"],
            hi: ["चंद्रमा पर गुरुत्वाकर्षण त्वरण कम है", "चंद्रमा पर पिंड का द्रव्यमान घट जाता है", "चंद्रमा पर कोई वायुमंडल नहीं है", "चंद्रमा का द्रव्यमान पृथ्वी के द्रव्यमान के बराबर है"]
        },
        correct: 0,
        imageUrl: ""
    },
    {
        question: {
            bn: "অক্সিজেনের মতো ছোট অণুগুলি সহজেই কোষের পর্দা (cell membrane) ভেদ করতে পারে, কিন্তু স্টার্চ বা প্রোটিনের মতো বড় অণুগুলি পারে না কেন?",
            en: "Why can tiny molecules like oxygen easily pass through the cell membrane, but not the big ones like starch or proteins?",
            hi: "ऑक्सीजन जैसे छोटे अणु कोशिका झिल्ली (cell membrane) से आसानी से गुजर सकते हैं, लेकिन स्टार्च या प्रोटीन जैसे बड़े अणु क्यों नहीं गुजर पाते?"
        },
        options: {
            bn: ["ছোট অণুগুলির মধ্য দিয়ে যাওয়ার জন্য বিশেষ শক্তি থাকে।", "কোষের পর্দা নির্দিষ্ট কিছু পদার্থের জন্য অর্ধভেদ্য (selective permeable)।", "কোষের পর্দা সম্পূর্ণরূপে কঠিন।", "বড় অণুগুলিকে প্রবেশ করার জন্য ভেঙে যেতে হয়।"],
            en: ["Small molecules have special energy to push through.", "The cell membrane is permeable to selective substances.", "The cell membrane is completely solid.", "Big molecules have to break down for entry."],
            hi: ["छोटे अणुओं में प्रवेश करने के लिए विशेष ऊर्जा होती है।", "कोशिका झिल्ली चयनात्मक पदार्थों के लिए पारगम्य (selective permeable) होती है।", "कोशिका झिल्ली पूरी तरह से ठोस है।", "बड़े अणुओं को प्रवेश के लिए टूटना पड़ता है।"]
        },
        correct: 1,
        imageUrl: ""
    },
    {
        question: {
            bn: "একটি গাড়ি স্থির অবস্থা থেকে যাত্রা শুরু করে ৫ সেকেন্ডের জন্য ২ মি/সেকেন্ড² সুষম ত্বরণে চলে। গাড়িটির চূড়ান্ত বেগ কত হবে?",
            en: "A car starts from rest and accelerates uniformly at 2 m/s² for 5 seconds. What is the final velocity of the car?",
            hi: "एक कार विराम अवस्था से शुरू होती है और 5 सेकंड के लिए 2 m/s² की समान दर से त्वरित होती है। कार का अंतिम वेग क्या है?"
        },
        options: {
            bn: ["২০ মি/সেকেন্ড", "৫ মি/সেকেন্ড", "১০ মি/সেকেন্ড", "১৫ মি/সেকেন্ড"],
            en: ["20 m/s", "5 m/s", "10 m/s", "15 m/s"],
            hi: ["20 m/s", "5 m/s", "10 m/s", "15 m/s"]
        },
        correct: 2,
        imageUrl: ""
    },
    {
        question: {
            bn: "একটি উত্তল দর্পণের মেরু (pole) এবং বক্রতা কেন্দ্রের (centre of curvature) মধ্যবর্তী দূরত্ব + ৪০ সেমি। এই দর্পণের মেরু এবং ফোকাসের মধ্যবর্তী দূরত্ব কত হবে?",
            en: "The distance between the pole and the centre of curvature of a convex mirror is + 40 cm. What will be the distance between the pole and the focus of this mirror?",
            hi: "एक उत्तल दर्पण के ध्रुव (pole) और वक्रता केंद्र (centre of curvature) के बीच की दूरी + 40 सेमी है। इस दर्पण के ध्रुव और फोकस के बीच की दूरी क्या होगी?"
        },
        options: {
            bn: ["-২০ সেমি", "-৪০ সেমি", "+২০ সেমি", "+৪০ সেমি"],
            en: ["-20 cm", "-40 cm", "+20 cm", "+40 cm"],
            hi: ["-20 सेमी", "-40 सेमी", "+20 सेमी", "+40 सेमी"]
        },
        correct: 2,
        imageUrl: ""
    },
    {
        question: {
            bn: "নিচের কোন কোষ অঙ্গাণুতে ATP তৈরির রাসায়নিক বিক্রিয়ার জন্য পর্যাপ্ত পৃষ্ঠতল (surface area) থাকে?",
            en: "Which of the following cell organelles have enough surface area for ATP-generating chemical reactions?",
            hi: "निम्नलिखित में से किस कोशिका अंगक (cell organelle) में ATP उत्पन्न करने वाली रासायनिक प्रतिक्रियाओं के लिए पर्याप्त सतह क्षेत्र होता है?"
        },
        options: {
            bn: ["কোষ প্রাচীর", "ভ্যাকুওল", "লাইসোজোম", "মাইটোকন্ড্রিয়া"],
            en: ["Cell wall", "Vacuoles", "Lysosomes", "Mitochondria"],
            hi: ["कोशिका भित्ति", "रिक्तिकाएं (Vacuoles)", "लाइसोसोम", "माइटोकॉन्ड्रिया"]
        },
        correct: 3,
        imageUrl: ""
    },
    {
        question: {
            bn: "চুন জলের মধ্য দিয়ে কার্বন ডাই অক্সাইড গ্যাস চালনা করলে কী অধঃক্ষিপ্ত (precipitated) হয়?",
            en: "______ is precipitated, when carbon dioxide is passed through lime water.",
            hi: "चूने के पानी में कार्बन डाइऑक्साइड प्रवाहित करने पर ______ अवक्षेपित (precipitated) होता है।"
        },
        options: {
            bn: ["Ca(HCO3)2", "Ca(OH)2", "CaSO4", "CaCO3"],
            en: ["Ca(HCO3)2", "Ca(OH)2", "CaSO4", "CaCO3"],
            hi: ["Ca(HCO3)2", "Ca(OH)2", "CaSO4", "CaCO3"]
        },
        correct: 3,
        imageUrl: ""
    }
];

const mathQuestions = [
    {
        question: {
            bn: "মোহন ৪৬০ টাকায় একটি ঘড়ি কিনে ৪৮৩ টাকায় বিক্রি করে। তার লাভের শতকরা হার নির্ণয় করুন।",
            en: "Mohan buys a watch for ₹460 and sells it for 483. Find his percentage of profit.",
            hi: "मोहन ₹460 में एक घड़ी खरीदता है और उसे 483 में बेचता है। उसका लाभ प्रतिशत ज्ञात कीजिए।"
        },
        options: {
            bn: ["৫.৫%", "৫%", "৪%", "৪.৭%"],
            en: ["5.5%", "5%", "4%", "4.7%"],
            hi: ["5.5%", "5%", "4%", "4.7%"]
        },
        correct: 1,
        imageUrl: ""
    },
    {
        question: {
            bn: "একটি পার্সে কেবল ৫ টাকার এবং ১০ টাকার কয়েন আছে। মোট কয়েনের সংখ্যা ১১৮ এবং তাদের মোট মূল্য ৮৫৫ টাকা। ৫ টাকার কয়েন কয়টি আছে?",
            en: "A purse contains only ₹5 and 10 coins. The total number of coins is 118 and their total value is 855. How many coins of 5 are there?",
            hi: "एक पर्स में केवल ₹5 और 10 के सिक्के हैं। सिक्कों की कुल संख्या 118 है और उनका कुल मूल्य 855 है। 5 के कितने सिक्के हैं?"
        },
        options: {
            bn: ["৫৩", "৫৬", "৬৫", "৫৫"],
            en: ["53", "56", "65", "55"],
            hi: ["53", "56", "65", "55"]
        },
        correct: 2,
        imageUrl: ""
    },
    {
        question: {
            bn: "সরল করুন: [৭২ ÷ {৬ × (৩ + ২)} + ৫² - ৮] × ৫ / ৯৭",
            en: "Simplify: [72 ÷ {6 x (3 + 2)} + 5² - 8] x 5 / 97",
            hi: "सरल करें: [72 ÷ {6 x (3 + 2)} + 5² - 8] x 5 / 97"
        },
        options: {
            bn: ["৩", "৭", "১", "৫"],
            en: ["3", "7", "1", "5"],
            hi: ["3", "7", "1", "5"]
        },
        correct: 2,
        imageUrl: ""
    },
    {
        question: {
            bn: "একটি ক্লাসের ৫১ জন ছাত্রের গড় বয়স ২৪ বছর। যদি শিক্ষকের বয়সও অন্তর্ভুক্ত করা হয়, তবে পুরো গ্রুপের গড় বয়স হয় ২৫ বছর। শিক্ষকের বয়স (বছরে) কত?",
            en: "The average age of 51 students in a class is 24 years. If the age of the teacher is also included, the average age of the whole group becomes 25 years. The age (in years) of the teacher is:",
            hi: "एक कक्षा में 51 छात्रों की औसत आयु 24 वर्ष है। यदि शिक्षक की आयु को भी शामिल कर लिया जाए, तो पूरे समूह की औसत आयु 25 वर्ष हो जाती है। शिक्षक की आयु (वर्षों में) है:"
        },
        options: {
            bn: ["৭৬", "৭৫", "৭৭", "৭১"],
            en: ["76", "75", "77", "71"],
            hi: ["76", "75", "77", "71"]
        },
        correct: 0,
        imageUrl: ""
    },
    {
        question: {
            bn: "A, B এবং C একটি কাজ যথাক্রমে ৩, ৮ এবং ২৪ দিনে করতে পারে। তারা একসাথে কাজ করলে একই কাজের তিনগুণ কাজ করতে কত দিন সময় নেবে?",
            en: "A, B and C can do a piece of work in 3, 8 and 24 days, respectively. How long (in days) will they take to do thrice the same work, working together?",
            hi: "A, B और C एक काम को क्रमशः 3, 8 and 24 दिनों में कर सकते हैं। वे एक साथ काम करते हुए उसी काम का तीन गुना काम करने में कितना समय (दिनों में) लेंगे?"
        },
        options: {
            bn: ["৬", "১৮", "১২", "৭"],
            en: ["6", "18", "12", "7"],
            hi: ["6", "18", "12", "7"]
        },
        correct: 0,
        imageUrl: ""
    },
    {
        question: {
            bn: "প্রথম ৫০টি জোড় স্বাভাবিক সংখ্যার (even natural numbers) গড় কত?",
            en: "What is the average of the first 50 even natural numbers?",
            hi: "प्रथम 50 सम प्राकृतिक संख्याओं (even natural numbers) का औसत क्या है?"
        },
        options: {
            bn: ["৫২", "৫০", "৫৪", "৫১"],
            en: ["52", "50", "54", "51"],
            hi: ["52", "50", "54", "51"]
        },
        correct: 3,
        imageUrl: ""
    },
    {
        question: {
            bn: "১/২০ অংশ, ১/৬০ অংশের কত শতাংশ?",
            en: "1/20 is what percentage of 1/60?",
            hi: "1/20, 1/60 का कितना प्रतिशत है?"
        },
        options: {
            bn: ["১৬০%", "১৬৫%", "১৫০%", "৩০০%"],
            en: ["160%", "165%", "150%", "300%"],
            hi: ["160%", "165%", "150%", "300%"]
        },
        correct: 3,
        imageUrl: ""
    },
    {
        question: {
            bn: "একটি ত্রিভুজাকার মাঠের বাহুগুলির দৈর্ঘ্য যথাক্রমে ৪২ সেমি, ৩৪ সেমি এবং ২০ সেমি। দীর্ঘতম বাহুর বিপরীত শীর্ষবিন্দু থেকে অঙ্কিত উচ্চতার (altitude) দৈর্ঘ্য কত?",
            en: "A triangular field has sides measuring 42 cm, 34 cm and 20 cm. What is the length of the altitude corresponding to the longest side?",
            hi: "एक त्रिभुजाकार मैदान की भुजाएँ 42 सेमी, 34 सेमी और 20 सेमी हैं। सबसे लंबी भुजा के संगत ऊंचाई (altitude) की लंबाई क्या है?"
        },
        options: {
            bn: ["১৫ সেমি", "২০ সেমি", "১৬ সেমি", "১৮ সেমি"],
            en: ["15 cm", "20 cm", "16 cm", "18 cm"],
            hi: ["15 सेमी", "20 सेमी", "16 सेमी", "18 सेमी"]
        },
        correct: 2,
        imageUrl: ""
    }
];

const reasoningQuestions = [
    {
        question: {
            bn: "ইংরেজি বর্ণমালার ক্রম অনুসারে SDFH যেভাবে VYIC-এর সাথে সম্পর্কিত, এবং EJRN যেভাবে HEUI-এর সাথে সম্পর্কিত, সেই একই যুক্তি অনুসরণ করে NUAY নিচের কোনটির সাথে সম্পর্কিত?",
            en: "SDFH is related to VYIC in a certain way based on the English alphabetical order. In the same way, EJRN is related to HEUI. To which of the following options is NUAY related, following the same logic?",
            hi: "अंग्रेजी वर्णमाला के क्रम के आधार पर SDFH एक निश्चित तरीके से VYIC से संबंधित है। उसी तरह, EJRN, HEUI से संबंधित है। उसी तर्क का पालन करते हुए NUAY निम्नलिखित में से किस विकल्प से संबंधित है?"
        },
        options: {
            bn: ["QWET", "QPYU", "QPDT", "QSER"],
            en: ["QWET", "QPYU", "QPDT", "QSER"],
            hi: ["QWET", "QPYU", "QPDT", "QSER"]
        },
        correct: 2,
        imageUrl: ""
    },
    {
        question: {
            bn: "নিচের সংখ্যা সিরিজটি লক্ষ্য করুন এবং প্রশ্নের উত্তর দিন (বাম থেকে ডানে গণনা করতে হবে):\n(বাম) 5 7 1 8 4 2 3 9 5 7 6 1 (ডান)\nএমন কতগুলি জোড় সংখ্যা (even numbers) আছে যার ঠিক পরেই একটি বিজোড় সংখ্যা (odd number) আছে?",
            en: "Refer to the following number series and answer the question that follows. Counting to be done from left to right only:\n(Left) 5 7 1 8 4 2 3 9 5 7 6 1 (Right)\nHow many even numbers are there which are immediately followed by odd numbers?",
            hi: "निम्नलिखित संख्या श्रृंखला को देखें और उत्तर दें। गणना केवल बाएं से दाएं की जानी है:\n(बाएं) 5 7 1 8 4 2 3 9 5 7 6 1 (दाएं)\nऐसे कितने सम अंक (even numbers) हैं जिनके ठीक बाद एक विषम अंक (odd number) है?"
        },
        options: {
            bn: ["তিনটির বেশি", "তিনটি", "দুটি", "একটি"],
            en: ["More than three", "Three", "Two", "One"],
            hi: ["तीन से अधिक", "तीन", "दो", "एक"]
        },
        correct: 1,
        imageUrl: ""
    },
    {
        question: {
            bn: "প্রদত্ত সিরিজে প্রশ্নবোধক চিহ্নের (?) স্থানে কী আসবে?\n834, 840, 848, ?, 870, 884",
            en: "What should come in place of the question mark (?) in the given series?\n834 840 848 ? 870 884",
            hi: "दी गई श्रृंखला में प्रश्नवाचक चिह्न (?) के स्थान पर क्या आना चाहिए?\n834 840 848 ? 870 884"
        },
        options: {
            bn: ["৮৫৮", "৮৫৪", "৮৫৬", "৮৫৫"],
            en: ["858", "854", "856", "855"],
            hi: ["858", "854", "856", "855"]
        },
        correct: 0,
        imageUrl: ""
    },
    {
        question: {
            bn: "একটি নির্দিষ্ট কোড ভাষায়, A + B মানে 'A হলো B-এর বোন', A@B মানে 'A হলো B-এর ভাই', A-B মানে 'A হলো B-এর স্ত্রী' এবং A # B মানে 'A হলো B-এর পিতা'।\nউপরের তথ্যের ভিত্তিতে, 'O + P @ T - G # V' সমীকরণটিতে O কীভাবে V-এর সাথে সম্পর্কিত?",
            en: "In a certain code language, A + B means 'A is the sister of B', A@B means 'A is the brother of B', A-B means 'A is the wife of B' and A# B means 'A is the father of B'. Based on the above, how is O related to V if 'O+P@T-G #V'?",
            hi: "एक निश्चित कूट भाषा में, A + B का अर्थ है 'A, B की बहन है', A@B का अर्थ है 'A, B का भाई है', A-B का अर्थ है 'A, B की पत्नी है' और A# B का अर्थ है 'A, B का पिता है'। इसके आधार पर, यदि 'O+P@T-G #V' है, तो O, V से किस प्रकार संबंधित है?"
        },
        options: {
            bn: ["মায়ের বোন (মাসি/মামি)", "মা", "বোন", "মায়ের মা (দিদিমা)"],
            en: ["Mother's sister", "Mother", "Sister", "Mother's mother"],
            hi: ["मां की बहन (मौसी)", "मां", "बहन", "नानी (मां की मां)"]
        },
        correct: 0,
        imageUrl: ""
    },
    {
        question: {
            bn: "সাতটি বাক্স B, C, D, I, J, K এবং L একটির ওপর আরেকটি রাখা আছে। কেবল I বাক্সটি C-এর উপরে আছে। কেবল L বাক্সটি C এবং J-এর মধ্যে আছে। কেবল K বাক্সটি D-এর নিচে আছে। B এবং I-এর মধ্যে কয়টি বাক্স রাখা আছে? (প্রয়োজনে নিচে দেওয়া ইমেজ লিংকের ডায়াগ্রাম ব্যবহার করতে পারেন)",
            en: "Seven boxes B, C, D, I, J, K and L are kept one over the other but not necessarily in the same order. Only I is kept above C. Only L is kept between C and J. Only K is kept below D. How many boxes are kept between B and I? (You can map using the image link blueprint if needed)",
            hi: "सात बक्से B, C, D, I, J, K और L एक के ऊपर एक रखे गए हैं। केवल I को C के ऊपर रखा गया है। केवल L को C और J के बीच रखा गया है। केवल K को D के नीचे रखा गया है। B और I के बीच कितने बक्से रखे गए हैं?"
        },
        options: {
            bn: ["দুটি", "চারটি", "একটি", "তিনটি"],
            en: ["Two", "Four", "One", "Three"],
            hi: ["दो", "चार", "एक", "तीन"]
        },
        correct: 1,
        imageUrl: "" // সিটিং/বক্স অ্যারেঞ্জমেন্ট এর ডায়াগ্রাম ইমেজ লিংকের জায়গা
    },
    {
        question: {
            bn: "হেমন্ত বিন্দু A থেকে যাত্রা শুরু করে পূর্ব দিকে ৩ কিমি গাড়ি চালায়। তারপর সে ডানদিকে মোড় নিয়ে ৫ কিমি যায়, আবার ডানদিকে মোড় নিয়ে ৬ কিমি গাড়ি চালায়। এরপর সে পুনরায় ডানদিকে মোড় নিয়ে ৫ কিমি যায়। সবশেষে সে বামদিকে মোড় নিয়ে ৮ কিমি গিয়ে বিন্দু P-তে থামে। বিন্দু A-তে পুনরায় পৌঁছানোর জন্য তাকে কোন দিকে এবং কতটা সংক্ষিপ্ততম দূরত্ব গাড়ি চালাতে হবে? (দিক নির্ণয়ের জন্য নিচের খালি ইমেজ লিংকে ম্যাপ আঁকতে পারেন)",
            en: "Hemant starts from Point A and drives 3 km towards the east. He then takes a right turn, drives 5 km, turns right and drives 6 km. He then takes a right turn and drives 5 km. He takes a final left turn, drives 8 km and stops at Point P. How far (shortest distance) and towards which direction should he drive in order to reach Point A again?",
            hi: "हेमंत बिंदु A से शुरू करता है और पूर्व की ओर 3 किमी ड्राइव करता है। फिर वह दाएं मुड़ता है, 5 किमी ड्राइव करता है, दाएं मुड़ता है और 6 किमी ड्राइव करता है। फिर वह दाएं मुड़ता है और 5 किमी ड्राइव करता है। वह अंतिम बार बाएं मुड़ता है, 8 किमी ड्राइव करता है और बिंदु P पर रुकता है। फिर से बिंदु A पर पहुंचने के लिए उसे कितनी दूर (न्यूनतम दूरी) और किस दिशा में ड्राइव करना चाहिए?"
        },
        options: {
            bn: ["১১ কিমি পূর্ব দিকে", "১১ কিমি পশ্চিম দিকে", "৭ কিমি উত্তর দিকে", "৫ কিমি দক্ষিণ দিকে"],
            en: ["11 km towards the east", "11 km towards the west", "7 km towards the north", "5 km towards the south"],
            hi: ["11 किमी पूर्व की ओर", "11 किमी पश्चिम की ओर", "7 किमी उत्तर की ओर", "5 किमी दक्षिण की ओर"]
        },
        correct: 0,
        imageUrl: "" // ডিরেকশন টেস্ট গ্রাফ বা ইমেজ ম্যাপের লিংক বসানোর জায়গা
    },
    {
        question: {
            bn: "সাতজন ব্যক্তি B, C, D, I, J, K এবং L একটি বৃত্তাকার টেবিল ঘিরে কেন্দ্রের দিকে মুখ করে বসে আছেন। I বসেছে D-এর ঠিক বাম দিকে। J হলো B এবং K উভয়েরই নিকটবর্তী প্রতিবেশী। K বসেছে D-এর বাম দিকে তৃতীয় স্থানে। L, K-এর নিকটবর্তী প্রতিবেশী নয়। C-এর ডানদিকে দ্বিতীয় স্থানে কে বসেছে? (বৃত্তাকার বসার ব্যবস্থার ছবি বা ডায়াগ্রামের লিংক নিচে যুক্ত করার খালি জায়গা রয়েছে)",
            en: "Seven people, B, C, D, I, J, K and L, are sitting around a circular table, facing the centre of the table. I sits to the immediate left of D. J is the immediate neighbour of both B and K. K sits third to the left of D. L is not an immediate neighbour of K. Who sits second to the right of C?",
            hi: "सात लोग, B, C, D, I, J, K और L एक वृत्ताकार मेज के चारों ओर केंद्र की ओर मुख करके बैठे हैं। I, D के ठीक बाईं ओर बैठा है। J, B और K दोनों का निकटतम पड़ोसी है। K, D के बाईं ओर तीसरे स्थान पर बैठा है। L, K का निकटतम पड़ोसी नहीं है। C के दाईं ओर दूसरे स्थान पर कौन बैठा है?"
        },
        options: {
            bn: ["I", "K", "J", "D"],
            en: ["I", "K", "J", "D"],
            hi: ["I", "K", "J", "D"]
        },
        correct: 3,
        imageUrl: "" // সার্কুলার সিটিং অ্যারেঞ্জমেন্ট লেআউট ইমেজ লিংক এর জায়গা
    }
];

const generalAwarenessQuestions = [
    {
        question: {
            bn: "কোন অ্যাপটি জুন ২০২৫-এ ভিডিওর মাধ্যমে ক্রীড়া প্রতিভা বা স্পোর্টিং ট্যালেন্ট সনাক্ত করার জন্য ঘোষণা করা হয়েছিল?",
            en: "Which app was announced in June 2025 to identify sporting talent via videos?",
            hi: "जून 2025 में वीडियो के माध्यम से खेल प्रतिभाओं की पहचान करने के लिए किस ऐप की घोषणा की गई थी?"
        },
        options: {
            bn: ["SAI কানেক্ট অ্যাপ (SAI Connect App)", "স্পোর্টস ট্যালেন্ট সার্চ অ্যাপ (Sports Talent Search App)", "TOPS ট্যালেন্ট অ্যাপ (TOPS Talent App)", "খেলো ইন্ডিয়া অ্যাপ (Khelo India App)"],
            en: ["SAI Connect App", "Sports Talent Search App", "TOPS Talent App", "Khelo India App"],
            hi: ["SAI कनेक्ट ऐप (SAI Connect App)", "स्पोर्ट्स टैलेंट सर्च ऐप", "TOPS टैलेंट ऐप", "खेलो इंडिया ऐप"]
        },
        correct: 3,
        imageUrl: ""
    },
    {
        question: {
            bn: "২০২৫ সালে কোন দল 'লরিয়াস ওয়ার্ল্ড টিম অফ দ্য ইয়ার' (Laureus World Team of the Year) জিতেছে?",
            en: "Which team won the Laureus World Team of the Year in 2025?",
            hi: "किस टीम ने 2025 में लॉरियस वर्ल्ड टीम ऑफ द ईयर (Laureus World Team of the Year) जीता?"
        },
        options: {
            bn: ["লস অ্যাঞ্জেলেস লেকার্স", "স্পেন অলিম্পিক ফুটবল দল", "বার্সেলোনা", "রিয়াল মাদ্রিদ"],
            en: ["Los Angeles Lakers", "Spain Olympic Football Team", "Barcelona", "Real Madrid"],
            hi: ["लॉस एंजिल्स लेकर्स", "स्पेन ओलंपिक फुटबॉल टीम", "बार्सिलोना", "रियल मैड्रिड"]
        },
        correct: 1,
        imageUrl: ""
    },
    {
        question: {
            bn: "জাতিসংঘের ঘোষণা অনুযায়ী, ১২ এপ্রিল ২০২৫-এ প্রথমবার কোন আন্তর্জাতিক দিবসটি পালন করা হয়েছিল?",
            en: "Which international day was observed for the first time on 12 April 2025, as declared by the United Nations?",
            hi: "संयुक्त राष्ट्र द्वारा घोषित 12 अप्रैल 2025 को पहली बार कौन सा अंतर्राष्ट्रीय दिवस मनाया गया था?"
        },
        options: {
            bn: ["আন্তর্জাতিক পরিচ্ছন্ন শক্তি দিবস", "আন্তর্জাতিক মানব মহাকাশ উড্ডয়ন দিবস", "আন্তর্জাতিক উদ্ভিদ স্বাস্থ্য দিবস", "সভ্যতার মধ্যে সংলাপের জন্য আন্তর্জাতিক দিবস"],
            en: ["International Day of Clean Energy", "International Day of Human Space Flight", "International Day of Plant Health", "International Day for Dialogue Between Civilizations"],
            hi: ["अंतर्राष्ट्रीय स्वच्छ ऊर्जा दिवस", "अंतर्राष्ट्रीय मानव अंतरिक्ष उड़ान दिवस", "अंतर्राष्ट्रीय पादप स्वास्थ्य दिवस", "सभ्यताओं के बीच संवाद के लिए अंतर्राष्ट्रीय दिवस"]
        },
        correct: 3,
        imageUrl: ""
    },
    {
        question: {
            bn: "জাতীয় নার্স দিবস ২০২৫-এর থিম ছিল 'Our Nurses. Our Future. Caring for nurses strengthens economies'। ভারতে এই দিনটি কবে উদযাপিত হয়?",
            en: "The theme of National Nurses Day 2025 was 'Our Nurses. Our Future. Caring for nurses strengthens economies'. When was this day celebrated in India?",
            hi: "राष्ट्रीय नर्स दिवस 2025 का विषय 'Our Nurses. Our Future. Caring for nurses strengthens economies' था। भारत में यह दिवस कब मनाया गया?"
        },
        options: {
            bn: ["৭ জুন", "১২ মে", "৬ জুলাই", "৭ আগস্ট"],
            en: ["7 June", "12 May", "6 July", "7 August"],
            hi: ["7 जून", "12 मई", "6 जुलाई", "7 अगस्त"]
        },
        correct: 1,
        imageUrl: ""
    },
    {
        question: {
            bn: "ন্যাশন্যাল ফ্লোরেন্স নাইটিনগেল পুরস্কার (National Florence Nightingale Awards), যা মে ২০২৫-এ ভারতের রাষ্ট্রপতি কর্তৃক প্রদান করা হয়েছে, তা নিচের কোন পেশাদারদের দেওয়া হয়?",
            en: "The National Florence Nightingale Awards, conferred by the President of India in May 2025, are given to which of the following?",
            hi: "मई 2025 में भारत के राष्ट्रपति द्वारा प्रदान किया गया राष्ट्रीय फ्लोरेंस नाइटिंगेल पुरस्कार (National Florence Nightingale Awards) निम्नलिखित में से किसे दिया जाता है?"
        },
        options: {
            bn: ["শিক্ষক শিক্ষিকা", "শিক্ষা প্রতিষ্ঠান", "নার্সিং পেশাদার (Nursing professionals)", "চিকিৎসক"],
            en: ["Teaching professionals", "Educational institutions", "Nursing professionals", "Doctors"],
            hi: ["शिक्षण पेशेवर", "शैक्षणिक संस्थान", "नर्सिंग पेशेवर (Nursing professionals)", "डॉक्टर"]
        },
        correct: 2,
        imageUrl: ""
    }
];


// ========================================================
// ২. ম্যাজিক কোড: এটি অটোমেটিক সব সাবজেক্ট জুড়ে দিয়ে 'rawQuestions' বানাবে
// ========================================================

const rawQuestions = [
    ...scienceQuestions.map(q => ({ ...q, subject: "General Science" })),
    ...mathQuestions.map(q => ({ ...q, subject: "Mathematics" })),
    ...reasoningQuestions.map(q => ({ ...q, subject: "General Intelligence and Reasoning" })),
    ...generalAwarenessQuestions.map(q => ({ ...q, subject: "General Awareness and Current Affairs" }))
];

console.log(`টোটাল ${rawQuestions.length} টি প্রশ্ন সফলভাবে মক টেস্ট সেটে লোড হয়েছে।`);
