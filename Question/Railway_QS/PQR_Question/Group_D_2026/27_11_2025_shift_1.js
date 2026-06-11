// RRB GROUP D CBT-1 EXAM PAPER (27/11/2025 - S1)
// Format: Multi-lingual (English, Bengali, Hindi)
// Subjects: General Science, Current Affairs (CA), General Knowledge (GK), Mathematics, Reasoning (English Excluded)

const TEST_TIME_IN_SECONDS = 5400; // ৯০ মিনিট (১ ঘণ্টা ৩০ মিনিট)

// ========================================================
// ১. বহুভাষিক প্রশ্ন ব্লক (বাংলা, ইংরেজি ও হিন্দি)
// ========================================================

// ----------------- GENERAL SCIENCE -----------------
const scienceQuestions = [
    {
        question: {
            en: "Which of the following statements is correct?",
            bn: "নিচের কোন বিবৃতিটি সঠিক?",
            hi: "निम्नलिखित में से कौन सा कथन सही है?"
        },
        options: {
            en: [
                "Work done can only be negative",
                "Work done can be positive or negative depending on the direction of force.",
                "Work done does not depend on force or displacement.",
                "Work done can only be positive."
            ],
            bn: [
                "কৃতকার্য কেবল মাত্র ঋণাত্মক হতে পারে",
                "বলের অভিমুখের ওপর নির্ভর করে কৃতকার্য ধনাত্মক বা ঋণাত্মক হতে পারে।",
                "কৃতকার্য বল বা স্মরণের ওপর নির্ভর করে না।",
                "কৃতকার্য কেবল মাত্র ধনাত্মক হতে পারে।"
            ],
            hi: [
                "किया गया कार्य केवल ऋणात्मक हो सकता है",
                "बल की दिशा के आधार पर किया गया कार्य धनात्मक या ऋणात्मक हो सकता है।",
                "किया गया कार्य बल या विस्थापन पर निर्भर नहीं करता है।",
                "किया गया कार्य केवल धनात्मक हो सकता है।"
            ]
        },
        correct: 1
    },
    {
        question: {
            en: "Through which method of cell division are the diploid chromosomes divided into haploid gametes?",
            bn: "কোন কোষ বিভাজন পদ্ধতির মাধ্যমে ডিপ্লয়েড ক্রোমোজোমগুলি হ্যাপ্লয়েড গ্যামেটে বিভক্ত হয়?",
            hi: "कोशिका विभाजन की किस विधि द्वारा द्विगुणित (diploid) गुणसूत्र अगुणित (haploid) युग्मकों में विभाजित होते हैं?"
        },
        options: {
            en: ["Mitosis", "Binary Fission", "Amitosis", "Meiosis"],
            bn: ["মাইটোসিস", "দ্বি-বিভাজন (বাইনারি ফিশন)", "অ্যামাইটোসিস", "মিয়োসিস"],
            hi: ["समसूत्री विभाजन (Mitosis)", "द्विआधारी विखंडन (Binary Fission)", "असूत्री विभाजन (Amitosis)", "अर्धसूत्रीविभाजन (Meiosis)"]
        },
        correct: 3
    },
    {
        question: {
            en: "The power of a lens is defined as:",
            bn: "লেন্সের ক্ষমতাকে কীভাবে সংজ্ঞায়িত করা হয়?",
            hi: "लेंस की क्षमता (Power of a lens) को इस रूप में परिभाषित किया गया है:"
        },
        options: {
            en: [
                "The reciprocal of its focal length in meters",
                "The ratio of image distance to object distance",
                "The product of its focal length and refractive index",
                "The square of its focal length"
            ],
            bn: [
                "মিটারে প্রকাশ করা এর ফোকাস দৈর্ঘ্যের অনন্যক বা রেসিপ্রোকাল",
                "প্রতিবিম্বের দূরত্ব এবং বস্তুর দূরত্বের অনুপাত",
                "এর ফোকাস দৈর্ঘ্য এবং প্রতিসরাঙ্কের গুণফল",
                "এর ফোকাস দৈর্ঘ্যের বর্গ"
            ],
            hi: [
                "मीटर में इसकी फोकस दूरी का व्युत्क्रम (reciprocal)",
                "प्रतिबिंब दूरी और वस्तु दूरी का अनुपात",
                "इसकी फोकस दूरी और अपवर्तनांक का गुणनफल",
                "इसकी फोकस दूरी का वर्ग"
            ]
        },
        correct: 0
    },
    {
        question: {
            en: "When a thick glass slab is placed over printed matter, the letters appear raised. This is due to",
            bn: "যখন একটি মোটা কাঁচের স্ল্যাব ছাপা অক্ষরের ওপর রাখা হয়, তখন অক্ষরগুলো উপরে উঠে এসেছে বলে মনে হয়। এর কারণ—",
            hi: "जब किसी छपी हुई सामग्री पर कांच की मोटी पटिया (slab) रखी जाती है, तो अक्षर उठे हुए प्रतीत होते हैं। यह किसके कारण होता है?"
        },
        options: {
            en: ["Scattering of light", "Refraction of light", "Total internal reflection", "Polarization of light"],
            bn: ["আলোর বিচ্ছুরণ", "আলোর প্রতিসরণ", "অভ্যন্তরীণ পূর্ণ প্রতিফলন", "আলোর সমবর্তন"],
            hi: ["प्रकाश का प्रकीर्णन", "प्रकाश का अपवर्तन", "पूर्ण आंतरिक परावर्तन", "प्रकाश का ध्रुवण"]
        },
        correct: 1
    },
    {
        question: {
            en: "The motion of a satellite orbiting the Earth in a circular path at constant speed is a classic example of uniform circular motion. What property of this motion prevents its acceleration from being zero?",
            bn: "স্থির গতিতে পৃথিবীর চারপাশে বৃত্তাকার পথে প্রদক্ষিণকারী একটি উপগ্রহের গতি হলো সুষম বৃত্তাকার গতির একটি আদর্শ উদাহরণ। এই গতির কোন বৈশিষ্ট্য এর ত্বরণকে শূন্য হতে বাধা দেয়?",
            hi: "स्थिर गति से पृथ्वी की परिक्रमा करने वाले एक उपग्रह की गति एकसमान वृत्तीय गति का एक उत्कृष्ट उदाहरण है। इस गति का कौन सा गुण इसके त्वरण को शून्य होने से रोकता है?"
        },
        options: {
            en: [
                "The total mechanical energy is conserved, necessitating acceleration.",
                "The direction of motion changes continuously at every point, meaning the velocity is changing.",
                "The object's mass continually changes due to orbital dynamics.",
                "The speed is too high for the gravitational force to sustain a constant velocity."
            ],
            bn: [
                "মোট যান্ত্রিক শক্তি সংরক্ষিত থাকে, যার ফলে ত্বরণের প্রয়োজন হয়।",
                "গতির অভিমুখ প্রতিটি বিন্দুতে ক্রমাগত পরিবর্তিত হয়, অর্থাৎ বেগ পরিবর্তিত হচ্ছে।",
                "কক্ষপথের গতিবিদ্যার কারণে বস্তুর ভর ক্রমাগত পরিবর্তিত হয়।",
                "মহাকর্ষীয় বল দ্বারা স্থির বেগ বজায় রাখার জন্য গতিবেগ অত্যন্ত বেশি।"
            ],
            hi: [
                "कुल यांत्रिक ऊर्जा संरक्षित रहती है, जिससे त्वरण की आवश्यकता होती है।",
                "गति की दिशा हर बिंदु पर निरंतर बदलती रहती है, जिसका अर्थ है कि वेग बदल रहा है।",
                "कक्षीय गतिशीलता के कारण वस्तु का द्रव्यमान निरंतर बदलता रहता है।",
                "गुरुत्वाकर्षण बल द्वारा निरंतर वेग बनाए रखने के लिए गति बहुत अधिक है।"
            ]
        },
        correct: 1
    },
    {
        question: {
            en: "Asthma primarily affects which part of the respiratory system?",
            bn: "অ্যাজমা বা হাঁপানি প্রাথমিকভাবে শ্বসনতন্ত্রের কোন অংশকে প্রভাবিত করে?",
            hi: "अस्थमा मुख्य रूप से श्वसन प्रणाली के किस हिस्से को प्रभावित करता है?"
        },
        options: {
            en: ["Diaphragm", "Bronchi and bronchioles", "Trachea", "Alveoli"],
            bn: ["মধ্যচ্ছদা (ডায়াফ্রাম)", "ব্রঙ্কাই এবং ব্রঙ্কিওলস", "শ্বাসনালী (ট্রাকিয়া)", "অ্যালভিওলাই"],
            hi: ["डायफ्राम", "ब्रोंकाई और ब्रोंचीओल्स", "श्वास नली (Trachea)", "एल्वियोली"]
        },
        correct: 1
    },
    {
        question: {
            en: "Which of the following describes an example of uniform circular motion?",
            bn: "নিচের কোনটি সুষম বৃত্তাকার গতির একটি উদাহরণ নির্দেশ করে?",
            hi: "निम्नलिखित में से कौन सा एकसमान वृत्तीय गति के उदाहरण का वर्णन करता है?"
        },
        options: {
            en: ["A train moving on its track", "A car accelerating on its way", "A ball thrown vertically upwards", "A fan blade rotating at constant speed"],
            bn: ["ট্র্যাকে চলমান একটি ট্রেন", "রাস্তায় গতিশীল বা ত্বরান্বিত একটি গাড়ি", "উল্লম্বভাবে উপরের দিকে ছুড়ে দেওয়া একটি বল", "স্থির গতিতে ঘূর্ণায়মান একটি ফ্যানের ব্লেড"],
            hi: ["अपनी पटरी पर चलती एक ट्रेन", "रास्ते में तेज होती (त्वरित) एक कार", "ऊपर की ओर लंबवत फेंकी गई एक गेंद", "नियत गति से घूमता हुआ एक पंखे का ब्लेड"]
        },
        correct: 3
    },
    {
        question: {
            en: "During reproduction, why is it important to create DNA copies?",
            bn: "জননের সময় ডিএনএ (DNA) প্রতিলিপি বা কপি তৈরি করা কেন গুরুত্বপূর্ণ?",
            hi: "प्रजनन के दौरान डीएनए (DNA) की प्रतियां बनाना क्यों महत्वपूर्ण है?"
        },
        options: {
            en: ["For blood circulation", "For digestion", "For inheritance of traits", "For respiration"],
            bn: ["রক্ত সঞ্চালনের জন্য", "হজমের জন্য", "বংশগত বৈশিষ্ট্য স্থানান্তরের জন্য", "শ্বসনের জন্য"],
            hi: ["रक्त परिसंचरण के लिए", "पाचन के लिए", "लक्षणों (traits) की वंशागति के लिए", "श्वसन के लिए"]
        },
        correct: 2
    },
    {
        question: {
            en: "What happens when a naphthalene ball is burnt in a metal plate in open space?",
            bn: "উন্মুক্ত স্থানে একটি ধাতব প্লেটে ন্যাপথলিন বল পোড়ালে কী ঘটে?",
            hi: "खुले स्थान में धातु की प्लेट पर नेफ़थलीन की गोली जलाने पर क्या होता है?"
        },
        options: {
            en: [
                "It burns with a blue flame.",
                "It burns with yellow flame with no deposit on the metal plate.",
                "It burns with a yellow flame with black soot deposited on the metal plate.",
                "It burns with a blue flame with black soot deposited on the metal plate."
            ],
            bn: [
                "এটি একটি নীল শিখা সহ পুড়ে যায়।",
                "এটি ধাতব প্লেটে কোনো অবশিষ্টাংশ ছাড়াই হলুদ শিখায় পুড়ে যায়।",
                "এটি একটি হলুদ শিখা সহ পুড়ে যায় এবং ধাতব প্লেটে কালো ঝুল (soot) জমা হয়।",
                "এটি একটি নীল শিখা সহ পুড়ে যায় এবং ধাতব প্লেটে কালো ঝুল জমা হয়।"
            ],
            hi: [
                "यह नीली लौ के साथ जलता है।",
                "यह धातु की प्लेट पर बिना किसी जमाव के पीली लौ के साथ जलता है।",
                "यह पीली लौ के साथ जलता है और धातु की प्लेट पर काली कालिख जमा हो जाती है।",
                "यह नीली लौ के साथ जलता है और धातु की प्लेट पर काली कालिख जमा हो जाती है।"
            ]
        },
        correct: 2
    },
    {
        question: {
            en: "When water and nutrients are available, algae grow and multiply rapidly by the process of",
            bn: "যখন জল এবং পুষ্টি উপাদান সহজলভ্য হয়, তখন শৈবাল দ্রুত বৃদ্ধি পায় এবং কোন প্রক্রিয়ার মাধ্যমে বংশবৃদ্ধি করে?",
            hi: "जब पानी और पोषक तत्व उपलब्ध होते हैं, तो शैवाल तेजी से बढ़ते हैं और किस प्रक्रिया द्वारा तेजी से गुणा करते हैं?"
        },
        options: {
            en: ["spore formation", "pollination", "fragmentation", "budding"],
            bn: ["রেণু উৎপাদন (স্পোর ফরমেশন)", "পরাগায়ন", "খণ্ডিতকরণ (ফ্র্যাগমেন্টেশন)", "কোরকোদ্গম (বাডিং)"],
            hi: ["बीजाणु निर्माण (spore formation)", "परागण", "विखंडन (fragmentation)", "मुकुलन (budding)"]
        },
        correct: 2
    },
    {
        question: {
            en: "A coil has a resistance of 44 Ω. If it is connected across a 220 V supply, what is the power consumed by the coil?",
            bn: "একটি কুণ্ডলীর রোধ 44 Ω। যদি এটিকে ২২০ V সরবরাহের সাথে সংযুক্ত করা হয়, তবে কুণ্ডলীটি দ্বারা ব্যবহৃত ক্ষমতা কত?",
            hi: "एक कुंडली का प्रतिरोध 44 Ω है। यदि इसे 220 V की आपूर्ति से जोड़ा जाता है, तो कुंडली द्वारा खपत की गई शक्ति क्या है?"
        },
        options: {
            en: ["5 W", "1100 W", "110 W", "0.2 W"],
            bn: ["5 W", "1100 W", "110 W", "0.2 W"],
            hi: ["5 W", "1100 W", "110 W", "0.2 W"]
        },
        correct: 1
    },
    {
        question: {
            en: "Which of the following options best describes the term Culture Fishery?",
            bn: "নিচের কোন বিকল্পটি 'কালচার ফিশারি' (Culture Fishery) শব্দটিকে সবচেয়ে ভালো বর্ণনা করে?",
            hi: "निम्नलिखित में से कौन सा विकल्प 'कल्चर फिशरी' (Culture Fishery) शब्द का सबसे अच्छा वर्णन करता है?"
        },
        options: {
            en: ["Catching fishes from marine water", "Capturing fishes from artificial resources", "Farming of the fishes", "Capturing fishes from natural resources"],
            bn: ["সামুদ্রিক জল থেকে মাছ ধরা", "কৃত্রিম উৎস থেকে মাছ ধরা বা সংগ্রহ করা", "মাছের নিয়ন্ত্রিত চাষ (মৎস্য চাষ)", "প্রাকৃতিক উৎস থেকে মাছ ধরা"],
            hi: ["समुद्री पानी से मछलियाँ पकड़ना", "कृत्रिम संसाधनों से मछलियाँ पकड़ना", "मछली पालन (खेती)", "प्राकृतिक संसाधनों से मछलियाँ पकड़ना"]
        },
        correct: 2
    },
    {
        question: {
            en: "A body is dropped from a height. If it falls for 3.0 s and g = 10 m/s², its final velocity (v) is",
            bn: "একটি বস্তুকে নির্দিষ্ট উচ্চতা থেকে ফেলে দেওয়া হলো। যদি এটি ৩.০ সেকেন্ড ধরে পড়ে এবং g = ১০ m/s² হয়, তবে এর শেষ বেগ (v) কত?",
            hi: "एक पिंड को ऊंचाई से गिराया जाता है। यदि यह 3.0 सेकंड के लिए गिरता है और g = 10 m/s² है, तो इसका अंतिम वेग (v) है:"
        },
        options: {
            en: ["10 m/s", "30 m/s", "40 m/s", "20 m/s"],
            bn: ["১০ m/s", ["৩০ m/s"], "৪০ m/s", "২০ m/s"],
            hi: ["10 m/s", "30 m/s", "40 m/s", "20 m/s"]
        },
        correct: 1
    },
    {
        question: {
            en: "What happens when a zinc rod is placed in aqueous copper sulphate solution?",
            bn: "জলীয় কপার সালফেট দ্রবণে জিঙ্ক রড রাখলে কী ঘটে?",
            hi: "जलीय कॉपर सल्फेट विलयन में जस्ते (zinc) की छड़ रखने पर क्या होता है?"
        },
        options: {
            en: ["The blue colour of the copper sulphate solution fades.", "The temperature of the solution falls.", "Heat is required to start the reaction.", "No chemical change observed."],
            bn: ["কপার সালফেট দ্রবণের নীল রঙ ফ্যাকাশে হয়ে যায়।", "দ্রবণের তাপমাত্রা হ্রাস পায়।", "বিক্রিয়া শুরু করার জন্য তাপের প্রয়োজন হয়।", "কোনো রাসায়নিক পরিবর্তন লক্ষ্য করা যায় না।"],
            hi: ["कॉपर सल्फेट विलयन का नीला रंग फीका पड़ जाता है।", "विलयन का तापमान गिर जाता है।", "अभिक्रिया शुरू करने के लिए ऊष्मा की आवश्यकता होती है।", "कोई रासायनिक परिवर्तन नहीं देखा गया।"]
        },
        correct: 0
    },
    {
        question: {
            en: "The fractional atomic mass of chlorine is due to which of the following?",
            bn: "ক্লোরিনের ভগ্নাংশ পারমাণবিক ভরের কারণ নিচের কোনটি?",
            hi: "क्लोरीन का भिन्नात्मक परमाणु द्रव्यमान निम्नलिखित में से किसके कारण है?"
        },
        options: {
            en: ["Presence of ions", "Presence of isotopes", "Its compound nature", "Experimental error"],
            bn: ["আয়নের উপস্থিতি", "আইসোটোপের উপস্থিতি", "এর যৌগিক প্রকৃতি", "পরীক্ষামূলক ত্রুটি"],
            hi: ["आयनों की उपस्थिति", "समस्थानिकों (isotopes) की उपस्थिति", "इसकी यौगिक प्रकृति", "प्रायोगिक त्रुटि"]
        },
        correct: 1
    },
    {
        question: {
            en: "The functional group which does NOT contain oxygen hetero atom is:",
            bn: "যে কার্যকরী মূলকটিতে (functional group) অক্সিজেন হেটেরো পরমাণু থাকে না, সেটি হলো:",
            hi: "वह कार्यात्मक समूह (functional group) जिसमें ऑक्सीजन हेटेरो परमाणु नहीं होता है, वह है:"
        },
        options: {
            en: ["A halo alkane", "ketone", "carboxylic acid", "alcohol"],
            bn: ["হ্যালো অ্যালকেন", "কিটোন", "কার্বক্সিলিক অ্যাসিড", "অ্যালকোহল"],
            hi: ["एक हैलो एल्केन", "कीटोन", "कार्बोक्जिलिक अम्ल", "अल्कोहल"]
        },
        correct: 0
    },
    {
        question: {
            en: "What is the main role of micelles in the cleansing action of soap?",
            bn: "সাবানের পরিষ্কার করার প্রক্রিয়ায় মাইসেল (micelles)-এর প্রধান ভূমিকা কী?",
            hi: "साबुन की सफाई क्रिया में मिसेल (micelles) की मुख्य भूमिका क्या है?"
        },
        options: {
            en: ["To trap and remove oil and dirt from clothes", "To reduce the hardness of water", "To produce lather with water", "To increase the surface tension of water"],
            bn: ["জামাকাপড় থেকে তেল এবং ময়লা আটকে বের করে আনা", "জলের খরতা হ্রাস করা", "জলের সাথে ফেনা তৈরি করা", "জলের পৃষ্ঠটান বৃদ্ধি করা"],
            hi: ["कपड़ों से तेल और गंदगी को फंसाना और निकालना", "पानी की कठोरता को कम करना", "पानी के साथ झाग बनाना", "पानी के पृष्ठ तनाव को बढ़ाना"]
        },
        correct: 0
    },
    {
        question: {
            en: "Which poultry are birds farmed to produce eggs?",
            bn: "ডিম উৎপাদনের জন্য কোন পোল্ট্রি পাখি প্রতিপালন বা চাষ করা হয়?",
            hi: "अंडे उत्पादन के लिए किन पोल्ट्री पक्षियों का पालन किया जाता है?"
        },
        options: {
            en: ["Milch", "Common carp", "Layers", "Broilers"],
            bn: ["মিলচ বা দুগ্ধবতী", "কমন কার্প", "লেয়ার্স (Layers)", "ব্রয়লার্স"],
            hi: ["दुधारू (Milch)", "कॉमन कार्प", "लेयर्स (Layers)", "ब्रॉयलर"]
        },
        correct: 2
    },
    {
        question: {
            en: "Statement 1: The potential difference is measured in volts.\nStatement 2: One volt is equal to one newton per coulomb.\nWhich of the following is true?",
            bn: "বিবৃতি ১: বিভব প্রভেদ ভোল্ট এককে মাপা হয়।\nবিবৃতি ২: এক ভোল্ট সমান এক নিউটন প্রতি কুলম্ব।\nনিচের কোনটি সত্য?",
            hi: "कथन 1: विभवांतर को वोल्ट में मापा जाता है।\nकथन 2: एक वोल्ट एक न्यूटन प्रति कूलम्ब के बराबर होता है।\nनिम्नलिखित में से कौन सा सही है?"
        },
        options: {
            en: ["Both Statements 1 and 2 are correct.", "Only Statement 2 is correct.", "Both Statements 1 and 2 are incorrect.", "Only Statement 1 is correct"],
            bn: ["বিবৃতি ১ এবং ২ উভয়ই সঠিক।", "কেবলমাত্র বিবৃতি ২ সঠিক।", "বিবৃতি ১ এবং ২ উভয়ই ভুল।", "কেবলমাত্র বিবৃতি ১ সঠিক।"],
            hi: ["कथन 1 और 2 दोनों सही हैं।", "केवल कथन 2 सही है।", "कथन 1 और 2 दोनों गलत हैं।", "केवल कथन 1 सही है।"]
        },
        correct: 3
    },
    {
        question: {
            en: "The frequency of a sound wave is 50 Hz. How much time will it take to complete one wave?",
            bn: "একটি শব্দ তরঙ্গের কম্পাঙ্ক ৫০ Hz। একটি পূর্ণ তরঙ্গ সম্পন্ন করতে এর কত সময় লাগবে?",
            hi: "एक ध्वनि तरंग की आवृत्ति 50 Hz है। एक तरंग को पूरा करने में कितना समय लगेगा?"
        },
        options: {
            en: ["50 s", "0.02 s", "0.2 s", "5 s"],
            bn: ["৫০ সেকেন্ড", "০.০২ সেকেন্ড", "০.২ সেকেন্ড", "৫ সেকেন্ড"],
            hi: ["50 s", "0.02 s", "0.2 s", "5 s"]
        },
        correct: 1
    },
    {
        question: {
            en: "Which of the following statements best explains the Law of Constant Proportions?",
            bn: "নিচের কোন বিবৃতিটি স্থিরানুপাত সূত্রকে (Law of Constant Proportions) সবচেয়ে ভালো ব্যাখ্যা করে?",
            hi: "निम्नलिखित में से कौन सा कथन स्थिर अनुपात के नियम की सबसे अच्छी व्याख्या करता है?"
        },
        options: {
            en: [
                "Elements are always found in random ratios in a compound.",
                "Atoms can be divided into smaller particles during a reaction.",
                "Mass can neither be created nor destroyed in a chemical reaction.",
                "A chemical compound always contains the same elements in the same proportion by mass."
            ],
            bn: [
                "একটি যৌগে উপাদানগুলি সর্বদা এলোমেলো অনুপাতে পাওয়া যায়।",
                "একটি বিক্রিয়ার সময় পরমাণুকে ছোট কণিকায় বিভক্ত করা যেতে পারে।",
                "রাসায়নিক বিক্রিয়ায় ভর তৈরি বা ধ্বংস করা যায় না।",
                "একটি রাসায়নিক যৌগে সর্বদা একই উপাদানগুলি ভরের নির্দিষ্ট অনুপাতে উপস্থিত থাকে।"
            ],
            hi: [
                "एक यौगिक में तत्व हमेशा यादृच्छिक (random) अनुपात में पाए जाते हैं।",
                "एक अभिक्रिया के दौरान परमाणुओं को छोटे कणों में विभाजित किया जा सकता है।",
                "रासायनिक अभिक्रिया में द्रव्यमान को न तो बनाया जा सकता है और न ही नष्ट किया जा सकता है।",
                "एक रासायनिक यौगिक में हमेशा द्रव्यमान के समान अनुपात में समान तत्व होते हैं।"
            ]
        },
        correct: 3
    },
    {
        question: {
            en: "Which of the following is NOT used for expressing the concentration of a solution?",
            bn: "দ্রবণের গাঢ়ত্ব বা ঘনত্ব প্রকাশের জন্য নিচের কোনটি ব্যবহৃত হয় না?",
            hi: "निम्नलिखित में से किसका उपयोग किसी विलयन की सांद्रता व्यक्त करने के लिए नहीं किया जाता है?"
        },
        options: {
            en: [
                "Volume by Volume percentage of a solution",
                "Volume by Mass percentage of a solution",
                "Mass by volume percentage of a solution",
                "Mass by mass percentage of a solution"
            ],
            bn: [
                "দ্রবণের আয়তন ভিত্তিক আয়তন শতাংশ (V/V %)",
                "দ্রবণের ভর ভিত্তিক আয়তন শতাংশ (V/M %)",
                "দ্রবণের আয়তন ভিত্তিক ভর শতাংশ (M/V %)",
                "দ্রবণের ভর ভিত্তিক ভর শতাংশ (M/M %)"
            ],
            hi: [
                "एक विलयन का आयतन अनुसार आयतन प्रतिशत",
                "एक विलयन का द्रव्यमान अनुसार आयतन प्रतिशत",
                "एक विलयन का आयतन अनुसार द्रव्यमान प्रतिशत",
                "एक विलयन का द्रव्यमान अनुसार द्रव्यमान प्रतिशत"
            ]
        },
        correct: 1
    },
    {
        question: {
            en: "Which of the following plant tissue performs photosynthesis?",
            bn: "নিচের কোন উদ্ভিদ কলা সালোকসংশ্লেষ প্রক্রিয়া সম্পন্ন করে?",
            hi: "निम्नलिखित में से कौन सा पादप ऊतक प्रकाश संश्लेषण करता है?"
        },
        options: {
            en: ["Chlorenchyma", "Sclerenchyma", "Xylem", "Phloem"],
            bn: ["ক্লোরেনকাইমা", "স্কেলেরেনকাইমা", "জাইলেম", "ফ্লোয়েম"],
            hi: ["क्लोरेनकाइमा (Chlorenchyma)", "स्क्लेरेनकाइमा (Sclerenchyma)", "जाइलम (Xylem)", "फ्लोएम (Phloem)"]
        },
        correct: 0
    },
    {
        question: {
            en: "Which of the following life processes is important to bring variation in species?",
            bn: "প্রজাতির মধ্যে বৈচিত্র্য বা ভেদ আনার জন্য নিচের কোন জীবন প্রক্রিয়াটি গুরুত্বপূর্ণ?",
            hi: "प्रजातियों में भिन्नता (variation) लाने के लिए निम्नलिखित में से कौन सी जीवन प्रक्रिया महत्वपूर्ण है?"
        },
        options: {
            en: ["Heterotrophic nutrition", "Transportation", "Autotrophic nutrition", "Sexual reproduction"],
            bn: ["পরভোজী পুষ্টি", "পরিবহন", "স্বভোজী পুষ্টি", "যৌন জনন"],
            hi: ["विषमपोषी पोषण", "परिवहन", "स्वपोषी पोषण", "लैंगिक प्रजनन"]
        },
        correct: 3
    },
    {
        question: {
            en: "Which of the following metals is extracted in the middle of the activity series?",
            bn: "সক্রিয়তা শ্রেণীর (activity series) মাঝখানে থাকা নিচের কোন ধাতুটিকে নিষ্কাশন করা হয়?",
            hi: "सक्रियता श्रेणी (activity series) के मध्य में निम्नलिखित में से किस धातु का निष्कर्षण किया जाता है?"
        },
        options: {
            en: ["Gold", "Potassium", "Iron", "Sodium"],
            bn: ["সোনা (গোল্ড)", "পটাশিয়াম", "লোহা (আয়রন)", "সোডিয়াম"],
            hi: ["सोना", "पोटेशियम", "लोहा (Iron)", "सोडियम"]
        },
        correct: 2
    }
];

// ----------------- CURRENT AFFAIRS (CA) -----------------
const caQuestions = [
    {
        question: {
            en: "On 24 May 2025, the order of which High Court was overturned by the Supreme Court and ruled that denying maternity leave for a third child violates a woman's constitutional right, reinforcing her dignity and reproductive freedom?",
            bn: "২০২৫ সালের ২৪ মে সুপ্রিম কোর্ট কোন হাইকোর্টের আদেশ বাতিল করে রায় দেয় যে তৃতীয় সন্তানের জন্য মাতৃত্বকালীন ছুটি অস্বীকার করা নারীর সাংবিধানিক অধিকার লঙ্ঘন করে, যা তাঁর মর্যাদা ও প্রজনন স্বাধীনতাকে সুদৃঢ় করে?",
            hi: "24 मई 2025 को सुप्रीम कोर्ट ने किस उच्च न्यायालय के आदेश को पलट दिया और फैसला सुनाया कि तीसरे बच्चे के लिए मातृत्व अवकाश से इनकार करना महिला के संवैधानिक अधिकार का उल्लंघन है, जो उसकी गरिमा और प्रजनन स्वतंत्रता को मजबूत करता है?"
        },
        options: {
            en: ["Allahabad High Court", "Hyderabad High Court", "Bombay High Court", "Madras High Court"],
            bn: ["এলাহাবাদ হাইকোর্ট", "হায়দরাবাদ হাইকোর্ট", "বোম্বে হাইকোর্ট", "মাদ্রাজ হাইকোর্ট"],
            hi: ["इलाहाबाद उच्च न्यायालय", "हैदराबाद उच्च न्यायालय", "बॉम्बे उच्च न्यायालय", "मद्रास उच्च न्यायालय"]
        },
        correct: 3
    },
    {
        question: {
            en: "Which of the following new digital facilities was launched in May 2025 by the Union Ministry of Social Justice and Empowerment during the ‘Ageing with Dignity’ event?",
            bn: "২০২৫ সালের মে মাসে 'এজিং উইথ ডিগনিটি' অনুষ্ঠান চলাকালীন কেন্দ্রীয় সামাজিক ন্যায়বিচার ও ক্ষমতায়ন মন্ত্রক নিচের কোন নতুন ডিজিটাল সুবিধাটি চালু করেছে?",
            hi: "केंद्रीय सामाजिक न्याय और अधिकारिता मंत्रालय द्वारा मई 2025 में 'एजिंग विद डिग्निटी' कार्यक्रम के दौरान निम्नलिखित में से कौन सी नई डिजिटल सुविधा शुरू की गई थी?"
        },
        options: {
            en: ["Senior Citizens Welfare Portal", "Digital Life Certificate Platform", "Employment Exchange Portal for Senior Citizens", "One-Stop Senior Citizens Services Portal"],
            bn: ["সিনিয়র সিটিজেন ওয়েলফেয়ার পোর্টাল", "ডিজিটাল লাইফ সার্টিফিকেট প্ল্যাটফর্ম", "সিনিয়র সিটিজেনদের জন্য এমপ্লয়মেন্ট এক্সচেঞ্জ পোর্টাল", "ওয়ান-স্টপ সিনিয়র সিটিজেন সার্ভিসেস পোর্টাল"],
            hi: ["वरिष्ठ नागरिक कल्याण पोर्टल", "डिजिटल जीवन प्रमाण पत्र प्लेटफॉर्म", "वरिष्ठ नागरिकों के लिए रोजगार एक्सचेंज पोर्टल", "वन-स्टॉप वरिष्ठ नागरिक सेवा पोर्टल"]
        },
        correct: 3
    },
    {
        question: {
            en: "In 2025, which city in Maharashtra has achieved 100% segregation, collection and processing of sanitary and biomedical waste, handling an average of 300 to 350 kg of sanitary waste daily?",
            bn: "২০২৫ সালে মহারাষ্ট্রের কোন শহর স্যানিটারি এবং বায়োমেডিকেল বর্জ্যের ১০০% পৃথকীকরণ, সংগ্রহ এবং প্রক্রিয়াকরণ অর্জন করেছে, যা প্রতিদিন গড়ে ৩০০ থেকে ৩৫০ কেজি স্যানিটারি বর্জ্য পরিচালনা করে?",
            hi: "2025 में, महाराष्ट्र के किस शहर ने सेनेटरी और बायोमेडिकल कचरे का 100% पृथक्करण, संग्रह और प्रसंस्करण हासिल किया है, जो दैनिक औसतन 300 से 350 किलोग्राम सेनेटरी कचरे का प्रबंधन करता है?"
        },
        options: {
            en: ["Nagpur", "Karad", "Nasik", "Pune"],
            bn: ["নাগপুর", "কারাদ", "নাসিক", "পুনে"],
            hi: ["नागपुर", "कराड", "नासिक", "पुणे"]
        },
        correct: 1
    },
    {
        question: {
            en: "Who authored the book 'Test Cricket: A History', released in 2025?",
            bn: "২০২৫ সালে প্রকাশিত 'Test Cricket: A History' বইটি কে লিখেছেন?",
            hi: "2025 में रिलीज हुई पुस्तक 'टेस्ट क्रिकेट: ए हिस्ट्री' (Test Cricket: A History) के लेखक कौन हैं?"
        },
        options: {
            en: ["Tim Wigmore", "Ramachandra Guha", "Michael Atherton", "Gideon Haigh"],
            bn: ["টিম উইগমোর", "রামচন্দ্র গুহ", "মাইকেল আথারটন", "গিডিওন হেইগ"],
            hi: ["टिम विगमोर", "रामचंद्र गुहा", "माइकल आथर्टन", "गिदोन हेघ"]
        },
        correct: 3
    },
    {
        question: {
            en: "Which chess player, besides Gukesh, received the Arjuna Award in 2025?",
            bn: "গুকেশ ছাড়াও ২০২৫ সালে কোন দাবাড়ু অর্জুন পুরস্কার পেয়েছেন?",
            hi: "गुकेश के अलावा किस शतरंज खिलाड़ी को 2025 में अर्जुन पुरस्कार मिला?"
        },
        options: {
            en: ["Harika Dronavalli", "Vantika Agrawal", "Koneru Humpy", "Pentala Harikrishna"],
            bn: ["হারিকা দ্রোণাভল্লী", "বন্তিকা আগরওয়াল", "কোনেরু হাম্পি", "পেন্টালা হরিকৃষ্ণ"],
            hi: ["हारिका द्रोणावल्ली", "वंतिका अग्रवाल", "कोनेरू हम्पी", "पेंटाला हरिकृष्णा"]
        },
        correct: 1
    },
    {
        question: {
            en: "Which of the following documentaries did the Reserve Bank of India (RBI) launch to explain its functions to the public in June 2025?",
            bn: "২০২৫ সালের জুন মাসে রিজার্ভ ব্যাঙ্ক অফ ইন্ডিয়া (RBI) জনসাধারণের কাছে তার কার্যাবলী ব্যাখ্যা করার জন্য নিচের কোন তথ্যচিত্রটি চালু করেছে?",
            hi: "जून 2025 में भारतीय रिजर्व बैंक (RBI) ने जनता को अपने कार्यों को समझाने के लिए निम्नलिखित में से कौन सा वृत्तचित्र (documentary) लॉन्च किया?"
        },
        options: {
            en: ["RBI Unlocked: Beyond the Rupee", "Financial Literacy A2Z", "My RBI Story", "RBI: Money Simplified"],
            bn: ["আরবিআই আনলকড: বিয়ন্ড দ্য রুপি", "ফাইন্যান্সিয়াল লিটারেসি A2Z", "মাই আরবিআই স্টোরি", "আরবিআই: মানি সিম্প্লিফায়েড"],
            hi: ["आरबीआई अनलॉक्ड: बियॉन्ड द रुपी", "फिनांशियल लिटरेसी A2Z", "माई आरबीआई स्टोरी", "आरबीआई: मनी सिम्प्लीफाइड"]
        },
        correct: 2
    },
    {
        question: {
            en: "Which Indian Ministry launched the Bharat Forecasting System (BFS) on 26 May 2025 to provide weather predictions with a 6-km resolution?",
            bn: "৬ কিমি রেজোলিউশন সহ আবহাওয়ার পূর্বাভাস দেওয়ার জন্য কোন ভারতীয় মন্ত্রক ২৬ মে ২০২৫ তারিখে 'ভারত ফোরকাস্টিং সিস্টেম' (BFS) চালু করেছে?",
            hi: "6 किमी रिज़ॉल्यूशन के साथ मौसम का पूर्वानुमान प्रदान करने के लिए किस भारतीय मंत्रालय ने 26 मई 2025 को भारत फोरकास्टिंग सिस्टम (BFS) लॉन्च किया?"
        },
        options: {
            en: ["Ministry of Environment, Forest and Climate Change", "Ministry of Agriculture and Farmers Welfare", "Ministry of Earth Sciences", "Ministry of Defence"],
            bn: ["পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রক", "কৃষি ও কৃষক কল্যাণ মন্ত্রক", "ভূবিজ্ঞান মন্ত্রক (Ministry of Earth Sciences)", "প্রতিরক্ষা মন্ত্রক"],
            hi: ["पर्यावरण, वन और जलवायु परिवर्तन मंत्रालय", "कृषि एवं किसान कल्याण मंत्रालय", "पृथ्वी विज्ञान मंत्रालय", "रक्षा मंत्रालय"]
        },
        correct: 2
    },
    {
        question: {
            en: "Which startup was selected in April 2025 to build India’s first sovereign Indic LLM under the IndiaAI Mission?",
            bn: "ইন্ডিয়াএআই (IndiaAI) মিশনের অধীনে ভারতের প্রথম সার্বভৌম ইনডিক লার্জ ল্যাঙ্গুয়েজ মডেল (Indic LLM) তৈরির জন্য ২০ctx সালের এপ্রিলে কোন স্টার্টআপটিকে নির্বাচিত করা হয়েছে?",
            hi: "इंडियाएआई (IndiaAI) मिशन के तहत भारत का पहला संप्रभु इंडिक एलएलएम (Indic LLM) बनाने के लिए अप्रैल 2025 में किस स्टार्टअप को चुना गया था?"
        },
        options: {
            en: ["Wadhwani AI", "People+AI", "Sarvam AI", "AI4 Bharat"],
            bn: ["অদ্বানি এআই", "পিপল+এআই", "সর্বম এআই", "এআই৪ ভারত"],
            hi: ["वाधवानी एआई", "पीपल+एआई", "सर्वम एआई", "एआई4 भारत"]
        },
        correct: 2
    },
    {
        question: {
            en: "As reported in May 2025, the study by Climate Trends, a Delhi-based research consultancy, examined NASA satellite data of the Himalayan glaciers from 2000-2023 to evaluate the impact of which of the following on Himalayan snow?",
            bn: "২০২৫ সালের মে মাসের রিপোর্ট অনুযায়ী, দিল্লি-ভিত্তিক গবেষণা সংস্থা ক্লাইমেট ট্রেন্ডস হিমাচল ও হিমালয়ের বরফের ওপর নিচের কোনটির প্রভাব মূল্যায়ন করতে ২০০০-২০২৩ সাল পর্যন্ত নাসার স্যাটেলাইট ডেটা পরীক্ষা করেছে?",
            hi: "मई 2025 की रिपोर्ट के अनुसार, दिल्ली स्थित रिसर्च कंसलटेंसी 'क्लाइमेट ट्रेंड्स' के अध्ययन ने हिमालय की बर्फ पर निम्नलिखित में से किसके प्रभाव का मूल्यांकन करने के लिए 2000-2023 तक के हिमालयी ग्लेशियरों के नासा के उपग्रह डेटा की जांच की?"
        },
        options: {
            en: ["Ozone", "Sulfate Aerosols", "Black Carbon", "Mineral Dust Particles"],
            bn: ["ওজোন", "সালফেট অ্যারোসল", "ব্ল্যাক কার্বন", "খনিজ ধূলিকণা"],
            hi: ["ओजोन", "सल्फेट एरोसोल", "ब्लैक कार्बन", "खनिज धूल कण"]
        },
        correct: 2
    },
    {
        question: {
            en: "The National Conference on Good Governance, organised by the Department of Administrative Reforms and Public Grievances (DARPG) was held in which of the following places in January 2025?",
            bn: "প্রশাসনিক সংস্কার ও জনঅভিযোগ বিভাগ (DARPG) দ্বারা আয়োজিত সুশাসন সংক্রান্ত জাতীয় সম্মেলন ২০২৫ সালের জানুয়ারিতে নিচের কোন স্থানে অনুষ্ঠিত হয়েছিল?",
            hi: "प्रशासनिक सुधार और लोक शिकायत विभाग (DARPG) द्वारा आयोजित सुशासन पर राष्ट्रीय सम्मेलन जनवरी 2025 में निम्नलिखित में से किस स्थान पर आयोजित किया गया था?"
        },
        options: {
            en: ["Gandhinagar", "Varanasi", "Bhopal", "Jaipur"],
            bn: ["গান্ধীনগর", "বারাণসী", "ভোপাল", "জয়পুর"],
            hi: ["गांधीनगर", "वाराणसी", "भोपाल", "जयपुर"]
        },
        correct: 2
    },
    {
        question: {
            en: "What was the theme of the 78th World Health Assembly, 2025, held in Geneva in May 2025?",
            bn: "২০২৫ সালের মে মাসে জেনেভায় অনুষ্ঠিত ৭৮তম বিশ্ব স্বাস্থ্য সমাবেশ (World Health Assembly), ২০২৫-এর মূল থিম কী ছিল?",
            hi: "मई 2025 में जेनेवा में आयोजित 78वीं विश्व स्वास्थ्य सभा (World Health Assembly), 2025 का विषय (theme) क्या था?"
        },
        options: {
            en: ["Health for All: Building Resilient Systems", "Advancing Equity in Global Health", "One World for Health", "Universal Health Coverage: A Global Need"],
            bn: ["সকলের জন্য স্বাস্থ্য: স্থিতিস্থাপক ব্যবস্থা গড়ে তোলা", "গ্লোবাল হেলথ-এ ইক্যুইটি বা সমতার অগ্রগতি", "স্বাস্থ্যের জন্য এক বিশ্ব", "সর্বজনীন স্বাস্থ্য কভারেজ: একটি বৈশ্বিক প্রয়োজন"],
            hi: ["सभी के लिए स्वास्थ्य: लचीली प्रणालियों का निर्माण", "वैश्विक स्वास्थ्य में समानता को बढ़ावा देना", "स्वास्थ्य के लिए एक विश्व", "सार्वभौमिक स्वास्थ्य कवरेज: एक वैश्विक आवश्यकता"]
        },
        correct: 0
    },
    {
        question: {
            en: "As announced by the Government of India, as on 7 July 2025, how many biotech startups does India have, compared to just 50 a decade ago?",
            bn: "ভারত সরকারের ঘোষণা অনুযায়ী, ৭ জুলাই ২০২৫ পর্যন্ত ভারতে বায়োটেক স্টার্টআপের সংখ্যা কত, যা এক দশক আগে ছিল মাত্র ৫০টি?",
            hi: "भारत सरकार द्वारा की गई घोषणा के अनुसार, 7 जुलाई 2025 तक भारत में कितने बायोटेक स्टार्टअप हैं, जबकि एक दशक पहले केवल 50 थे?"
        },
        options: {
            en: ["Nearly 9000", "8050", "Nearly 11,000", "7000"],
            bn: ["প্রায় ৯০০০", "৮০৫০", "প্রায় ১১,০০০", "৭০০০"],
            hi: ["लगभग 9000", "8050", "लगभग 11,000", "7000"]
        },
        correct: 0
    },
    {
        question: {
            en: "On 16 May 2025, the Supreme Court invalidated the Indian Government's orders passed in which years, allowing ex-post facto environmental clearances?",
            bn: "২০২৫ সালের ১৬ মে সুপ্রিম কোর্ট ভারত সরকারের কোন কোন বছরে পাস করা আদেশগুলিকে অবৈধ ঘোষণা করেছে, যা পূর্ববর্তী প্রভাবযুক্ত (ex-post facto) পরিবেশগত ছাড়ের অনুমতি দিয়েছিল?",
            hi: "16 मई 2025 को, सुप्रीम कोर्ट ने भारत सरकार द्वारा किन वर्षों में पारित आदेशों को अमान्य कर दिया, जो कार्योत्तर (ex-post facto) पर्यावरणीय मंजूरी की अनुमति देते थे?"
        },
        options: {
            en: ["2009 and 2015", "2012 and 2014", "2017 and 2021", "2006 and 2011"],
            bn: ["২০০৯ এবং ২০১৫", "২০১২ এবং ২০১৪", "২০১৭ এবং ২০২১", "২০০৬ এবং ২০১১"],
            hi: ["2009 और 2015", "2012 और 2014", "2017 और 2021", "2006 और 2011"]
        },
        correct: 2
    },
    {
        question: {
            en: "Where did the chemical factory blast occur on 30 June 2025?",
            bn: "২০ctx সালের ৩০শে জুন কোন রাসায়নিক কারখানায় বিস্ফোরণটি ঘটেছিল?",
            hi: "30 जून 2025 को रासायनिक कारखाने में विस्फोट कहाँ हुआ था?"
        },
        options: {
            en: ["Nizamabad", "Vijayawada", "Warangal", "Sangareddy"],
            bn: ["নিজামাবাদ", "বিজয়ওয়াড়া", "ওয়ারাঙ্গাল", "সাঙ্গারেড্ডি"],
            hi: ["निज़ामाबाद", "विजयवाड़ा", "वरंगल", "संगारेड्डी"]
        },
        correct: 3
    },
    {
        question: {
            en: "Which state became the third Indian state to be recognised as fully functionally literate, under the ULLAS – New India Literacy Programme, in June 2025?",
            bn: "২০২৫ সালের জুন মাসে ULLAS – নিউ ইন্ডিয়া লিটারেসি প্রোগ্রামের অধীনে সম্পূর্ণ কার্যকরীভাবে স্বাক্ষর হিসেবে স্বীকৃতি পাওয়া তৃতীয় ভারতীয় রাজ্য হয়ে উঠেছে কোন রাজ্যটি?",
            hi: "जून 2025 में उल्लास (ULLAS) – न्यू India लिटरेसी प्रोग्राम के तहत कौन सा राज्य पूर्ण रूप से कार्यात्मक रूप से साक्षर माना जाने वाला तीसरा भारतीय राज्य बना?"
        },
        options: {
            en: ["Karnataka", "Tripura", "Assam", "Telangana"],
            bn: ["কর্ণাটক", "ত্রিপুরা", "অসম", "তেলেঙ্গানা"],
            hi: ["कर्नाटक", "त्रिपुरा", "असम", "तेलंगाना"]
        },
        correct: 1
    },
    {
        question: {
            en: "Which of the following shifted its Andhra Pradesh regional office to Vijayawada, inaugurating the new premises on 16 June 2025?",
            bn: "নিচের কে ১৬ জুন ২০২৫ তারিখে নতুন প্রাঙ্গণ উদ্বোধনের মাধ্যমে অন্ধ্রপ্রদেশের আঞ্চলিক কার্যালয় বিজয়ওয়াড়াতে স্থানান্তরিত করেছে?",
            hi: "निम्नलिखित में से किसने 16 जून 2025 को नए परिसर का उद्घाटन करते हुए अपने आंध्र प्रदेश क्षेत्रीय कार्यालय को विजयवाड़ा में स्थानांतरित कर दिया?"
        },
        options: {
            en: ["Bank of Baroda", "Securities and Exchange Board of India", "Reserve Bank of India", "Life Insurance Corporation of India"],
            bn: ["ব্যাঙ্ক অফ বরোদা", "সেবি (SEBI)", "ভারতীয় রিজার্ভ ব্যাঙ্ক (RBI)", "এলআইসি (LIC)"],
            hi: ["बैंक ऑफ बड़ौदा", "भारतीय प्रतिभूति और विनिमय बोर्ड (SEBI)", "भारतीय रिजर्व बैंक (RBI)", "भारतीय जीवन बीमा निगम (LIC)"]
        },
        correct: 1
    },
    {
        question: {
            en: "India set a new Guinness World Record in 2025 for the largest human formation of which of the following symbols?",
            bn: "ভারত ২০২৫ সালে নিচের কোন প্রতীকের বৃহত্তম মানব শৃঙ্খল বা অবয়ব তৈরির জন্য একটি নতুন গিনেস ওয়ার্ল্ড রেকর্ড গড়েছে?",
            hi: "भारत ने 2025 में निम्नलिखित में से किस प्रतीक की सबसे बड़ी मानव आकृति बनाने के लिए एक नया गिनीज वर्ल्ड रिकॉर्ड बनाया?"
        },
        options: {
            en: ["Ashoka Chakra", "Olympic rings", "Heart shape", "Peace symbol"],
            bn: ["অশোক চক্র", "অলিম্পিক রিংস", "হার্ট শেপ (হৃদয় আকৃতি)", "শান্তির প্রতীক"],
            hi: ["अशोक चक्र", "ओलंपिक छल्ले (rings)", "हार्ट शेप (दिल का आकार)", "शांति का प्रतीक"]
        },
        correct: 1
    },
    {
        question: {
            en: "India won the ICC Women’s U19 T20 World Cup 2025 by defeating which country in the final?",
            bn: "ফাইনালে কোন দেশকে হারিয়ে ভারত আইসিসি অনূর্ধ্ব-১৯ নারী টি-টোয়েন্টি বিশ্বকাপ ২০২৫ জিতেছে?",
            hi: "भारत ने फाइनल में किस देश को हराकर आईसीसी महिला अंडर-19 टी20 विश्व कप 2025 जीता?"
        },
        options: {
            en: ["Sri Lanka", "Australia", "South Africa", "England"],
            bn: ["শ্রীলঙ্কা", "অস্ট্রেলিয়া", "দক্ষিণ আফ্রিকা", "ইংল্যান্ড"],
            hi: ["श्रीलंका", "ऑस्ट्रेलिया", "दक्षिण अफ्रीका", "इंग्लैंड"]
        },
        correct: 3
    },
    {
        question: {
            en: "Which sport had the most Arjuna Award recipients in January 2025?",
            bn: "২০২৫ সালের জানুয়ারিতে কোন খেলায় সবচেয়ে বেশি অর্জুন পুরস্কার প্রাপক ছিলেন?",
            hi: "जनवरी 2025 में किस खेल में सबसे अधिक अर्जुन पुरस्कार प्राप्तकर्ता थे?"
        },
        options: {
            en: ["Para-Athletics", "Shooting", "Hockey", "Athletics"],
            bn: ["প্যারা-অ্যাথলেটিক্স", "শুটিং", "হকি", "অ্যাথলেটিক্স"],
            hi: ["पैरा-एथलेटिक्स", "शूटिंग", "हॉकी", "एथलेटिक्स"]
        },
        correct: 1
    }
];

// ----------------- GENERAL KNOWLEDGE (GK) -----------------
const gkQuestions = [
    {
        question: {
            en: "Which of the following awards recognises children’s book writers from 22 languages?",
            bn: "নিচের কোন পুরস্কারটি ২২টি ভাষার শিশুতোষ বইয়ের লেখকদের স্বীকৃতি দেয়?",
            hi: "निम्नलिखित में से कौन सा पुरस्कार 22 भाषाओं के बाल पुस्तक लेखकों को मान्यता देता है?"
        },
        options: {
            en: ["Sahitya Akademi Yuva Puraskar", "Sahitya Ratna", "Padma Shri", "Bal Sahitya Puraskar"],
            bn: ["সাহিত্য একাডেমি যুব পুরস্কার", "সাহিত্য রত্ন", "পদ্মশ্রী", "বাল সাহিত্য পুরস্কার"],
            hi: ["साहित्य अकादमी युवा पुरस्कार", "साहित्य रत्न", "पद्म श्री", "बाल साहित्य पुरस्कार"]
        },
        correct: 3
    }
];

// ----------------- MATHEMATICS -----------------
const mathQuestions = [
    {
        question: {
            en: "P is any point inside the rectangle ABCD. If PA = 98 cm, PB = 91 cm and PC = 21 cm, then the length of PD (in cm) is equal to:",
            bn: "ABCD আয়তক্ষেত্রের অভ্যন্তরে P যেকোনো একটি বিন্দু। যদি PA = ৯৮ সেমি, PB = ৯১ সেমি এবং PC = ২১ সেমি হয়, তবে PD এর দৈর্ঘ্য (সেমিতে) কত?",
            hi: "P, आयत ABCD के अंदर कोई बिंदु है। यदि PA = 98 सेमी, PB = 91 सेमी और PC = 21 सेमी है, तो PD की लंबाई (सेमी में) किसके बराबर है?"
        },
        options: {
            en: ["38", "41", "46", "42"],
            bn: ["৩৮", "৪১", "৪৬", "৪২"],
            hi: ["38", "41", "46", "42"]
        },
        correct: 3
    },
    {
        question: {
            en: "The vertices of a convex pentagon (in order) are P(0,0), Q(6,0), R(8,3), S(4,7), T(0,4). Find the area of the pentagon.",
            bn: "একটি উত্তল পঞ্চভুজের শীর্ষবিন্দুগুলি (ক্রমানুসারে) হলো P(0,0), Q(6,0), R(8,3), S(4,7), T(0,4)। পঞ্চভুজটির ক্ষেত্রফল নির্ণয় করো।",
            hi: "एक उत्तल पंचभुज के शीर्ष (क्रम में) P(0,0), Q(6,0), R(8,3), S(4,7), T(0,4) हैं। पंचभुज का क्षेत्रफल ज्ञात कीजिए।"
        },
        options: {
            en: ["42 sq. units", "36 sq. units", "39 sq. units", "45 sq. units"],
            bn: ["৪২ বর্গ একক", "৩৬ বর্গ একক", "৩৯ বর্গ একক", "৪৫ বর্গ একক"],
            hi: ["42 वर्ग इकाई", "36 वर्ग इकाई", "39 वर्ग इकाई", "45 वर्ग इकाई"]
        },
        correct: 2
    },
    {
        question: {
            en: "A metal rod is divided into three parts, A, B and C. The lengths of A and B are in the ratio 9:20, and the lengths of C and B are in the ratio 5:11. If the difference between the lengths of A and C is 10 cm, find the total length (in cm) of the metal rod.",
            bn: "একটি ধাতব দণ্ডকে তিনটি অংশ A, B এবং C তে ভাগ করা হয়েছে। A এবং B এর দৈর্ঘ্যের অনুপাত ৯:২০, এবং C এবং B এর দৈর্ঘ্যের অনুপাত ৫:১১। যদি A এবং C এর দৈর্ঘ্যের পার্থক্য ১০ সেমি হয়, তবে ধাতব দণ্ডটির মোট দৈর্ঘ্য (সেমিতে) কত?",
            hi: "एक धातु की छड़ को तीन भागों, A, B और C में विभाजित किया गया है। A और B की लंबाई का अनुपात 9:20 है, और C और B की लंबाई का अनुपात 5:11 है। यदि A और C की लंबाई के बीच का अंतर 10 सेमी है, तो धातु की छड़ की कुल लंबाई (सेमी में) ज्ञात कीजिए।"
        },
        options: {
            en: ["4202", "4199", "4190", "4180"],
            bn: ["৪২০২", "৪১৯৯", "৪১৯০", "৪১৮০"],
            hi: ["4202", "4199", "4190", "4180"]
        },
        correct: 2
    },
    {
        question: {
            en: "Soniya got married 15 years ago. Her present age is 8/5 times her age at the time of her marriage. Her sister was 8 years younger to her at the time of her marriage. Find the present age of her sister.",
            bn: "সোনিয়ার বিয়ে হয়েছিল ১৫ বছর আগে। তার বর্তমান বয়স বিয়ের সময়ের বয়সের ৮/৫ গুণ। তার বোন বিয়ের সময় তার থেকে ৮ বছরের ছোট ছিল। তার বোনের বর্তমান বয়স কত?",
            hi: "सोनिया की शादी 15 साल पहले हुई थी। उसकी वर्तमान आयु उसकी शादी के समय की आयु की 8/5 गुना है। उसकी बहन शादी के समय उससे 8 वर्ष छोटी थी। उसकी बहन की वर्तमान आयु ज्ञात कीजिए।"
        },
        options: {
            en: ["32 years", "24 years", "40 years", "28 years"],
            bn: ["৩২ বছর", "২৪ বছর", "৪০ বছর", "২৮ বছর"],
            hi: ["32 वर्ष", "24 वर्ष", "40 वर्ष", "28 वर्ष"]
        },
        correct: 0
    },
    {
        question: {
            en: "The average age of 26 students of a class is 26 years. If the age of the teacher is also included, the average age of the whole group becomes 27 years. The age (in years) of the teacher is:",
            bn: "একটি ক্লাসের ২৬ জন ছাত্রের গড় বয়স ২৬ বছর। শিক্ষকের বয়স অন্তর্ভুক্ত করা হলে, পুরো দলের গড় বয়স হয় ২৭ বছর। শিক্ষকের বয়স (বছরে) কত?",
            hi: "एक कक्षा के 26 छात्रों की औसत आयु 26 वर्ष है। यदि शिक्षक की आयु भी शामिल कर ली जाए, तो पूरे समूह की औसत आयु 27 वर्ष हो जाती है। शिक्षक की आयु (वर्षों में) है:"
        },
        options: {
            en: ["54", "50", "57", "53"],
            bn: ["৫৪", "৫০", "৫৭", "৫৩"],
            hi: ["54", "50", "57", "53"]
        },
        correct: 3
    },
    {
        question: {
            en: "If Δ × 2.2 + 0.33 × 3/4 - 1/20 × 0.55 = 0.99, then the value of Δ is:",
            bn: "যদি Δ × ২.২ + ০.৩৩ × ৩/৪ - ১/২০ × ০.৫৫ = ০.৯৯ হয়, তবে Δ এর মান কত?",
            hi: "यदि Δ × 2.2 + 0.33 × 3/4 - 1/20 × 0.55 = 0.99 है, तो Δ का मान है:"
        },
        options: {
            en: ["0.35", "1", "0.25", "0"],
            bn: ["০.৩৫", "১", "০.২৫", "০"],
            hi: ["0.35", "1", "0.25", "0"]
        },
        correct: 0
    },
    {
        question: {
            en: "If 20% of a number is added to 90, then the result is the same number. 80% of the same number is:",
            bn: "যদি কোনো সংখ্যার ২০% এর সাথে ৯০ যোগ করা হয়, তবে উত্তরটি সেই সংখ্যাটিই হয়। সংখ্যাটির ৮০% কত?",
            hi: "यदि किसी संख्या का 20% 90 में जोड़ा जाता है, तो परिणाम वही संख्या होती है। उसी संख्या का 80% है:"
        },
        options: {
            en: ["90", "120", "110", "100"],
            bn: ["৯০", "১২০", "১১০", "১০০"],
            hi: ["90", "120", "110", "100"]
        },
        correct: 0
    },
    {
        question: {
            en: "Smriti goes to a shopping mall at a speed of 21 km/hr and returns at a speed of 69 km/hr. Find her average speed (in km/hr) for the entire trip.",
            bn: "স্মৃতি ২১ কিমি/ঘণ্টা বেগে একটি শপিং মলে যায় এবং ৬৯ কিমি/ঘণ্টা বেগে ফিরে আসে। পুরো যাত্রায় তার গড় গতিবেগ (কিমি/ঘণ্টা) কত?",
            hi: "स्मृति 21 किमी/घंटा की गति से एक शॉपिंग मॉल जाती है और 69 किमी/घंटा की गति से वापस आती है। पूरी यात्रा के लिए उसकी औसत गति (किमी/घंटा में) ज्ञात कीजिए।"
        },
        options: {
            en: ["40.2", "30.3", "32.2", "23.4"],
            bn: ["৪০.২", "৩০.৩", "৩২.২", "২৩.৪"],
            hi: ["40.2", "30.3", "32.2", "23.4"]
        },
        correct: 2
    },
    {
        question: {
            en: "An article was bought for 8,900. Its price was marked up by 40%. Thereafter, it was sold at a discount of 5% on the marked price. What was the profit percentage on the transaction?",
            bn: "একটি বস্তু ৮,৯০০ টাকায় কেনা হয়েছিল। এর মূল্য ৪০% বাড়িয়ে ধার্য করা হয়। এরপর ধার্য মূল্যের ওপর ৫% ছাড়ে এটি বিক্রি করা হয়। এই লেনদেনে লাভের শতাংশ কত ছিল?",
            hi: "एक वस्तु को 8,900 में खरीदा गया था। इसकी कीमत में 40% की वृद्धि करके मूल्य अंकित किया गया। इसके बाद, इसे अंकित मूल्य पर 5% की छूट पर बेचा गया। इस लेनदेन पर लाभ प्रतिशत क्या था?"
        },
        options: {
            en: ["32%", "34%", "35%", "33%"],
            bn: ["৩২%", "৩৪%", "৩৫%", "৩৩%"],
            hi: ["32%", "34%", "35%", "33%"]
        },
        correct: 3
    },
    {
        question: {
            en: "If p = 6, q = -3 then the value of p³ - 3p² + 3p + 3q + 3q² + q³ is:",
            bn: "যদি p = ৬, q = -৩ হয়, তবে p³ - 3p² + 3p + 3q + 3q² + q³ এর মান কত?",
            hi: "यदि p = 6, q = -3 है, तो p³ - 3p² + 3p + 3q + 3q² + q³ का मान है:"
        },
        options: {
            en: ["-61", "61", "117", "-117"],
            bn: ["-৬১", "৬১", "১১৭", "-১১৭"],
            hi: ["-61", "61", "117", "-117"]
        },
        correct: 2
    },
    {
        question: {
            en: "Which of the following ratios is equivalent to 3:2?",
            bn: "নিচের কোন অনুপাতটি ৩:২ এর সমতুল্য?",
            hi: "निम्नलिखित में से कौन सा अनुपात 3:2 के समतुल्य है?"
        },
        options: {
            en: ["53:38", "51:37", "52:34", "54:36"],
            bn: ["৫৩:৩৮", "৫১:৩৭", "৫২:৩৪", "৫৪:৩৬"],
            hi: ["53:38", "51:37", "52:34", "54:36"]
        },
        correct: 3
    },
    {
        question: {
            en: "The cost of a washing machine is 40% less than the cost of a TV. If the cost of the washing machine increases by 52% and that of the TV decreases by 76%, then what is the percentage change in the total cost of 5 washing machines and 2 TVs?",
            bn: "একটি ওয়াশিং মেশিনের দাম একটি টিভির দামের থেকে ৪০% কম। ওয়াশিং মেশিনের দাম ৫২% বৃদ্ধি এবং টিভির দাম ৭৬% হ্রাস পেলে, ৫টি ওয়াশিং মেশিন এবং ২টি টিভির মোট দামের শতকরা কত পরিবর্তন হবে?",
            hi: "एक वाशिंग मशीन की कीमत एक टीवी की कीमत से 40% कम है। यदि वाशिंग मशीन की कीमत में 52% की वृद्धि होती है और टीवी की कीमत में 76% की कमी होती है, तो 5 वाशिंग मशीनों और 2 टीवी की कुल कीमत में प्रतिशत परिवर्तन क्या है?"
        },
        options: {
            en: ["Decrease by 3%", "Decrease by 2%", "Increase by 0.8%", "Increase by 5%"],
            bn: ["৩% হ্রাস", "২% হ্রাস", "০.৮% বৃদ্ধি", "৫% বৃদ্ধি"],
            hi: ["3% की कमी", "2% की कमी", "0.8% की वृद्धि", "5% की वृद्धि"]
        },
        correct: 1
    },
    {
        question: {
            en: "If tan θ = 12/5 what is the value of sec θ?",
            bn: "যদি tan θ = ১২/৫ হয়, তবে sec θ এর মান কত?",
            hi: "यदि tan θ = 12/5 है, तो sec θ का मान क्या है?"
        },
        options: {
            en: ["13/12", "5/13", "12/5", "13/5"],
            bn: ["১৩/১২", "৫/১৩", "১২/৫", "১৩/৫"],
            hi: ["13/12", "5/13", "12/5", "13/5"]
        },
        correct: 3
    },
    {
        question: {
            en: "The total surface area of a solid right circular cylinder is 542 cm². Its curved surface area is two-fifth of its total surface area. Find the curved surface area of the cylinder.",
            bn: "একটি নিরেট লম্ব বৃত্তাকার চোঙের সমগ্রতলের ক্ষেত্রফল ৫৪২ বর্গ সেমি। এর বক্রতলের ক্ষেত্রফল সমগ্রতলের ক্ষেত্রফলের দুই-পঞ্চমাংশ। চোঙটির বক্রতলের ক্ষেত্রফল কত?",
            hi: "एक ठोस लंब वृत्तीय बेलन का कुल पृष्ठीय क्षेत्रफल 542 सेमी² है। इसका वक्र पृष्ठीय क्षेत्रफल इसके कुल पृष्ठीय क्षेत्रफल का दो-पांचवां हिस्सा है। बेलन का वक्र पृष्ठीय क्षेत्रफल ज्ञात कीजिए।"
        },
        options: {
            en: ["315.4 cm²", "212.5 cm²", "513.2 cm²", "216.8 cm²"],
            bn: ["৩১৫.৪ বর্গ সেমি", "২১২.৫ বর্গ সেমি", "৫১৩.২ বর্গ সেমি", "২১৬.৮ বর্গ সেমি"],
            hi: ["315.4 सेमी²", "212.5 सेमी²", "513.2 सेमी²", "216.8 सेमी²"]
        },
        correct: 3
    },
    {
        question: {
            en: "Two numbers have an HCF of 18 and an LCM of 1512. If one of the numbers is 126, find the positive difference between these numbers.",
            bn: "দুটি সংখ্যার গসাগু (HCF) ১৮ এবং লসাগু (LCM) ১৫১২। যদি একটি সংখ্যা ১২৬ হয়, তবে সংখ্যা দুটির মধ্যে ধনাত্মক পার্থক্য কত?",
            hi: "दो संख्याओं का महत्तम समापवर्तक (HCF) 18 और लघुत्तम समापवर्त्य (LCM) 1512 है। यदि इनमें से एक संख्या 126 है, तो इन संख्याओं के बीच धनात्मक अंतर ज्ञात कीजिए।"
        },
        options: {
            en: ["126", "90", "216", "256"],
            bn: ["১২৬", "৯০", "২১৬", "২৫৬"],
            hi: ["126", "90", "216", "256"]
        },
        correct: 1
    },
    {
        question: {
            en: "1/20 is what percentage of 10/40?",
            bn: "১/২০ অংশ, ১০/৪০ অংশের শতকরা কত ভাগ?",
            hi: "1/20, 10/40 का कितना प्रतिशत है?"
        },
        options: {
            en: ["30%", "40%", "35%", "20%"],
            bn: ["৩০%", "৪০%", "৩৫%", "২০%"],
            hi: ["30%", "40%", "35%", "20%"]
        },
        correct: 3
    },
    {
        question: {
            en: "In statistics out of 100, the marks of 21 students in final exams are as 90, 95, 95, 94, 90, 85, 84, 83, 85, 81, 92, 93, 82, 78, 79, 81, 80, 82, 85, 76, 85, then the mode of data is:",
            bn: "১০০ এর মধ্যে ২১ জন ছাত্রের ফাইনাল পরীক্ষার প্রাপ্ত নম্বরগুলো হলো ৯০, ৯৫, ৯৫, ৯৪, ৯০, ৮৫, ৮৪, ৮৩, ৮৫, ৮১, ৯২, ৯৩, ৮২, ৭৮, ৭৯, ৮১, ৮০, ৮২, ৮৫, ৭৬, ৮৫; তথ্যটির সংখ্যাগুরু মান (Mode) কত?",
            hi: "सांख्यिकी में 100 में से, अंतिम परीक्षा में 21 छात्रों के अंक इस प्रकार हैं: 90, 95, 95, 94, 90, 85, 84, 83, 85, 81, 92, 93, 82, 78, 79, 81, 80, 82, 85, 76, 85, तो आंकड़ों का बहुलक (mode) है:"
        },
        options: {
            en: ["84", "83", "87", "85"],
            bn: ["৮৪", "৮৩", "৮৭", "৮৫"],
            hi: ["84", "83", "87", "85"]
        },
        correct: 3
    },
    {
        question: {
            en: "A fruit vendor bought 150 mangoes. He sold them at such a price that the selling price of 120 mangoes equals the cost price of 150 mangoes. Find his profit percentage.",
            bn: "এক ফল বিক্রেতা ১৫০টি আম কিনলেন। তিনি সেগুলো এমন মূল্যে বিক্রি করলেন যাতে ১২০টি আমের বিক্রয়মূল্য ১৫০টি আমের ক্রয়মূল্যের সমান হয়। তাঁর লাভের শতকরা হার কত?",
            hi: "एक फल विक्रेता ने 150 आम खरीदे। उसने उन्हें ऐसी कीमत पर बेचा कि 120 आमों का विक्रय मूल्य 150 आमों के क्रय मूल्य के बराबर है। उसका लाभ प्रतिशत ज्ञात कीजिए।"
        },
        options: {
            en: ["30%", "35%", "25%", "20%"],
            bn: ["৩০%", "৩৫%", "২৫%", "২০%"],
            hi: ["30%", "35%", "25%", "20%"]
        },
        correct: 2
    },
    {
        question: {
            en: "Three pipes, A, B and C, can fill a tank from empty to full in 40 minutes, 20 minutes and 30 minutes, respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P, Q and R, respectively. What is the proportion of solution Q in the liquid in the tank after 9 minutes?",
            bn: "তিনটি পাইপ A, B এবং C যথাক্রমে ৪০ মিনিট, ২০ মিনিট এবং ৩০ মিনিটে একটি খালি ট্যাঙ্ক পূর্ণ করতে পারে। যখন ট্যাঙ্কটি খালি থাকে, তখন তিনটি পাইপই একসাথে খুলে দেওয়া হয়। A, B এবং C যথাক্রমে রাসায়নিক দ্রবণ P, Q এবং R নির্গমন করে। ৯ মিনিট পর ট্যাঙ্কের তরলে দ্রবণ Q এর অনুপাত বা অংশ কত?",
            hi: "तीन पाइप, A, B और C, एक टैंक को खाली से पूरा भरने में क्रमशः 40 मिनट, 20 मिनट और 30 मिनट का समय ले सकते हैं। जब टैंक खाली होता है, तो तीनों पाइप खोल दिए जाते हैं। A, B और C क्रमशः रासायनिक घोल P, Q और R छोड़ते हैं। 9 मिनट के बाद टैंक में तरल में घोल Q का अनुपात क्या है?"
        },
        options: {
            en: ["3/4", "6/13", "7/13", "3/13"],
            bn: ["৩/৪", "৬/১৩", "৭/১৩", "৩/১৩"],
            hi: ["3/4", "6/13", "7/13", "3/13"]
        },
        correct: 1
    },
    {
        question: {
            en: "Two-fifth of a container is filled with blue liquid, one-third of the remaining container is filled with black liquid, five-sixth of the still remaining container is filled with yellow liquid and the remaining 4.2 litres is of white colour. Find the total capacity of the container.",
            bn: "একটি পাত্রের দুই-পঞ্চমাংশ নীল তরল দ্বারা পূর্ণ, অবশিষ্টাংশের এক-তৃতীয়াংশ কালো তরল দ্বারা পূর্ণ, এরপরও অবশিষ্টাংশের পাঁচ-ষষ্ঠাংশ হলুদ তরল দ্বারা পূর্ণ এবং বাকি ৪.২ লিটার সাদা রঙের তরল। পাত্রটির মোট ক্ষমতা (লিটারে) নির্ণয় করো।",
            hi: "एक कंटेनर का दो-पांचवां हिस्सा नीले तरल से भरा है, शेष कंटेनर का एक-तिहाई हिस्सा काले तरल से भरा है, फिर भी शेष कंटेनर का पांच-छठा हिस्सा पीले तरल से भरा है और शेष 4.2 लीटर सफेद रंग का है। कंटेनर की कुल क्षमता ज्ञात कीजिए।"
        },
        options: {
            en: ["72 litres", "63 litres", "60 litres", "78 litres"],
            bn: ["৭২ লিটার", "৬৩ লিটার", "৬০ লিটার", "৭৮ লিটার"],
            hi: ["72 लीटर", "63挂 लीटर", "60 लीटर", "78 लीटर"]
        },
        correct: 1
    },
    {
        question: {
            en: "A 325 m long train overtakes a man moving at a speed of 5 km/hr (in the same direction) in 45 seconds. How much time (in seconds) will it take this train to completely cross another 440 m long train, moving in the opposite direction at a speed of 20 km/hr?",
            bn: "একটি ৩২৫ মিটার লম্বা ট্রেন একই অভিমুখে ৫ কিমি/ঘণ্টা বেগে চলমান এক ব্যক্তিকে ৪৫ সেকেন্ডে অতিক্রম করে। বিপরীত অভিমুখে ২০ কিমি/ঘণ্টা বেগে চলমান অপর একটি ৪৪০ মিটার লম্বা ট্রেনকে সম্পূর্ণরূপে অতিক্রম করতে এই ট্রেনটির কত সময় (সেকেন্ডে) লাগবে?",
            hi: "325 मीटर लंबी एक ट्रेन 5 किमी/घंटा की गति से (उसी दिशा में) चल रहे एक व्यक्ति को 45 सेकंड में पार करती है। विपरीत दिशा में 20 किमी/घंटा की गति से चल रही दूसरी 440 मीटर लंबी ट्रेन को पूरी तरह से पार करने में इस ट्रेन को कितना समय (सेकंड में) लगेगा?"
        },
        options: {
            en: ["54", "40", "52", "51"],
            bn: ["৫৪", "৪০", "৫২", "৫১"],
            hi: ["54", "40", "52", "51"]
        },
        correct: 0
    },
    {
        question: {
            en: "Simplify: [3 1/4 ÷ {1 1/4 - 0.5(2 1/2 - 5 × 1/15 - 1/12)}]",
            bn: "সরল করো: [3 1/4 ÷ {1 1/4 - 0.5(2 1/2 - 5 × 1/15 - 1/12)}]",
            hi: "सरल कीजिए: [3 1/4 ÷ {1 1/4 - 0.5(2 1/2 - 5 × 1/15 - 1/12)}]"
        },
        options: {
            en: ["234", "134", "434", "334"],
            bn: ["২৩৪", "১৩৪", "৪৩৪", "৩৩৪"],
            hi: ["234", "134", "434", "334"]
        },
        correct: 0
    },
    {
        question: {
            en: "A and B working together can do a piece of work in 6 days. B alone can do the same work in 12 days. How long (in days) will A alone take to do double the work?",
            bn: "A এবং B একত্রে একটি কাজ ৬ দিনে করতে পারে। B একা সেই কাজটি ১২ দিনে করতে পারে। A একা ওই কাজের দ্বিগুণ কাজ করতে কতদিন (দিন সংখ্যায়) সময় নেবে?",
            hi: "A और B मिलकर किसी कार्य को 6 दिनों में कर सकते हैं। B अकेला उसी कार्य को 12 दिनों में कर सकते हैं। A अकेले उस कार्य का दोगुना कार्य पूरा करने में कितना समय (दिनों में) लेगा?"
        },
        options: {
            en: ["12", "25", "24", "27"],
            bn: ["১২", "২৫", "২৪", "২৭"],
            hi: ["12", "25", "24", "27"]
        },
        correct: 2
    },
    {
        question: {
            en: "A scheme like 'Buy 6, Get 4 Free' on the same kind of articles with the same MRP attracts a % discount.",
            bn: "একই প্রকারের এবং একই ধার্যমূল্য (MRP) যুক্ত বস্তুর ওপর '৬টি কিনলে ৪টি বিনামূল্যে পান' (Buy 6, Get 4 Free) অফারটি কত শতাংশ ছাড়ের সমান?",
            hi: "समान MRP वाली एक ही प्रकार की वस्तुओं पर '6 खरीदें, 4 मुफ्त पाएं' जैसी योजना कितने प्रतिशत छूट के बराबर है?"
        },
        options: {
            en: ["67.67", "40", "41", "66.67"],
            bn: ["৬৭.৬৭", "৪০", "৪১", "৬৬.৬৭"],
            hi: ["67.67", "40", "41", "66.67"]
        },
        correct: 1
    },
    {
        question: {
            en: "The amount on a sum of ₹6,800 at 15% per annum compound interest, compounded annually, in 2 years' time, will be:",
            bn: "১৫% বার্ষিক চক্রবৃদ্ধি সুদের হারে, বার্ষিক সুদ চক্রবৃদ্ধি হলে, ২ বছরে ৬,৮০০ টাকার সমূল চক্রবৃদ্ধি (Amount) কত হবে?",
            hi: "₹6,800 की राशि पर 15% प्रति वर्ष की दर से, वार्षिक रूप से संयोजित होने वाले चक्रवृद्दि ब्याज पर, 2 वर्ष का मिश्रधन (Amount) होगा:"
        },
        options: {
            en: ["7,996", "8,641", "₹9,393", "₹8,993"],
            bn: ["৭,৯৯৬", "৮,৬৪১", "৯,৩৯৩", "৮,৯৯৩"],
            hi: ["7,996", "8,641", "9,393", "8,993"]
        },
        correct: 2
    }
];

// ----------------- REASONING -----------------
const reasoningQuestions = [
    {
        question: {
            en: "In a certain code language, A + B means 'A is the sister of B', A @ B means 'A is the brother of B', A - B means 'A is the wife of B', and A # B means 'A is the father of B'. How is O related to V if 'O + P # T @ G - V'?",
            bn: "একটি নির্দিষ্ট সাংকেতিক ভাষায়, A + B মানে 'A হলো B এর বোন', A @ B মানে 'A হলো B এর ভাই', A - B মানে 'A হলো B এর স্ত্রী' এবং A # B মানে 'A হলো B এর পিতা'। তাহলে 'O + P # T @ G - V' সমীকরণ অনুযায়ী O, V এর কে হন?",
            hi: "एक निश्चित कूट भाषा में, A + B का अर्थ 'A, B की बहन है', A @ B का अर्थ 'A, B का भाई है', A - B का अर्थ 'A, B की पत्नी है', और A # B का अर्थ 'A, B का पिता है' है। यदि 'O + P # T @ G - V' है, तो O, V से किस प्रकार संबंधित है?"
        },
        options: {
            en: ["Wife's father's mother", "Wife's mother", "Wife's father's sister", "Wife's sister"],
            bn: ["স্ত্রীর বাবার মা", "স্ত্রীর মা", "স্ত্রীর বাবার বোন", "স্ত্রীর বোন"],
            hi: ["पत्नी के पिता की माँ", "पत्नी की माँ", "पत्नी के पिता की बहन", "पत्नी की बहन"]
        },
        correct: 2
    },
    {
        question: {
            en: "If - means ÷, ÷ means ×, × means + and + means -, then what will come in place of the question mark (?) in the following equation?\n84 - 6 ÷ 37 × 1 + 648 ÷ 8 = ?",
            bn: "যদি - মানে ÷, ÷ মানে ×, × মানে + এবং + মানে - হয়, তবে নিচের সমীকরণে প্রশ্ন চিহ্নের (?) স্থানে কী আসবে?\n84 - 6 ÷ 37 × 1 + 648 ÷ 8 = ?",
            hi: "यदि - का अर्थ ÷, ÷ का अर्थ ×, × का अर्थ + और + का अर्थ - है, तो निम्नलिखित समीकरण में प्रश्नवाचक चिह्न (?) के स्थान पर क्या आएगा?\n84 - 6 ÷ 37 × 1 + 648 ÷ 8 = ?"
        },
        options: {
            en: ["797", "794", "799", "795"],
            bn: ["৭৯৭", "৭৯৪", "৭৯৯", "৭৯৫"],
            hi: ["797", "794", "799", "795"]
        },
        correct: 1
    },
    {
        question: {
            en: "In a certain code language, 'OVAL' is coded as '5294' and 'LOVE' is coded as '8549'. What is the code for 'E' in the given code language?",
            bn: "একটি নির্দিষ্ট সাংকেতিক ভাষায়, 'OVAL'-কে '5294' এবং 'LOVE'-কে '8549' লেখা হয়। প্রদত্ত সাংকেতিক ভাষায় 'E'-এর সংকেত কী?",
            hi: "एक निश्चित कूट भाषा में, 'OVAL' को '5294' और 'LOVE' को '8549' के रूप में कूटबद्ध किया जाता है। दी गई कूट भाषा में 'E' का कूट क्या है?"
        },
        options: {
            en: ["8", "5", "9", "4"],
            bn: ["৮", "৫", "৯", "৪"],
            hi: ["8", "5", "9", "4"]
        },
        correct: 0
    },
    {
        question: {
            en: "Refer to the following number series and answer the question that follows. All numbers are single-digit numbers only. Counting to be done from left to right only.\n(Left) 4 6 5 8 2 2 1 8 2 9 8 4 7 4 8 2 4 3 1 4 1 2 7 2 6 (Right)\nHow many such numbers are there, each of which is immediately preceded by a perfect square and also immediately followed by a perfect square? (Note: 1 is also a perfect square.)",
            bn: "নিচের সংখ্যা শ্রেণীটি লক্ষ্য করো এবং প্রশ্নটির উত্তর দাও। সব সংখ্যাই এক অঙ্কের সংখ্যা। গণনা কেবল বাম থেকে ডানে করতে হবে।\n(বাম) 4 6 5 8 2 2 1 8 2 9 8 4 7 4 8 2 4 3 1 4 1 2 7 2 6 (ডান)\nএমন কতগুলো সংখ্যা আছে, যার ঠিক আগের সংখ্যাটি একটি পূর্ণবর্গ সংখ্যা এবং ঠিক পরের সংখ্যাটিও একটি পূর্ণবর্গ সংখ্যা? (দ্রষ্টব্য: ১ একটি পূর্ণবর্গ সংখ্যা।)",
            hi: "निम्नलिखित संख्या श्रृंखला को देखें और उसके बाद आने वाले प्रश्न का उत्तर दें। सभी संख्याएँ केवल एकल-अंक की संख्याएँ हैं। गिनती केवल बाएँ से दाएँ की जानी है।\n(बाएँ) 4 6 5 8 2 2 1 8 2 9 8 4 7 4 8 2 4 3 1 4 1 2 7 2 6 (दाएँ)\nऐसी कितनी संख्याएँ हैं, जिनमें से प्रत्येक के ठीक पहले एक पूर्ण वर्ग है और ठीक बाद में भी एक पूर्ण वर्ग है? (नोट: 1 भी एक पूर्ण वर्ग है।)"
        },
        options: {
            en: ["Two", "Four", "Three", "One"],
            bn: ["দুটি", "চারটি", "তিনটি", "একটি"],
            hi: ["दो", "चार", "तीन", "एक"]
        },
        correct: 1
    },
    {
        question: {
            en: "What should come in place of the question mark (?) in the given series?\n61 85 109 133 157 ?",
            bn: "প্রদত্ত শ্রেণীতে প্রশ্ন চিহ্নের (?) স্থানে কী আসবে?\n61 85 109 133 157 ?",
            hi: "दी गई श्रृंखला में प्रश्नवाचक चिह्न (?) के स्थान पर क्या आना चाहिए?\n61 85 109 133 157 ?"
        },
        options: {
            en: ["179", "183", "181", "185"],
            bn: ["১৭৯", "১৮৩", "১৮১", "১৮৫"],
            hi: ["179", "183", "181", "185"]
        },
        correct: 2
    },
    {
        question: {
            en: "Based on the English alphabetical order, three of the following four letter-clusters are alike in a certain way and thus form a group. Which letter-cluster DOES NOT belong to that group?",
            bn: "ইংরেজি বর্ণমালার ক্রম অনুসারে, নিচের চারটি অক্ষর-গুচ্ছের মধ্যে তিনটি একটি নির্দিষ্ট উপায়ে সদৃশ এবং একটি দল গঠন করে। কোন অক্ষর-গুচ্ছটি সেই দলের অন্তর্ভুক্ত নয়?",
            hi: "अंग्रेजी वर्णानुक्रम के आधार पर, निम्नलिखित चार अक्षर-समूहों में से तीन एक निश्चित तरीके से समान हैं और इस प्रकार एक समूह बनाते हैं। कौन सा अक्षर-समूह उस समूह से संबंधित नहीं है?"
        },
        options: {
            en: ["OSN", "GKE", "NRL", "LPJ"],
            bn: ["OSN", "GKE", "NRL", "LPJ"],
            hi: ["OSN", "GKE", "NRL", "LPJ"]
        },
        correct: 0
    },
    {
        question: {
            en: "Alex starts from Point A and drives 8 km towards the east. He then takes a left turn, drives 6 km, turns left and drives 17 km. He then takes a left turn and drives 13 km. He takes a final left turn, drives 9 km and stops at Point P. How far (shortest distance) and towards which direction should he drive in order to reach Point A again?",
            bn: "অ্যালেক্স বিন্দু A থেকে শুরু করে পূর্ব দিকে ৮ কিমি গাড়ি চালায়। তারপর সে বাম দিকে মোড় নিয়ে ৬ কিমি যায়, আবার বাম দিকে মোড় নিয়ে ১৭ কিমি যায়। এরপর সে পুনরায় বাম দিকে মোড় নিয়ে ১৩ কিমি যায়। সবশেষে সে আবার বাম দিকে মোড় নিয়ে ৯ কিমি গাড়ি চালিয়ে P বিন্দুতে থামে। বিন্দু A তে পুনরায় পৌঁছানোর জন্য তাকে কোন অভিমুখে এবং কত দূরে (সর্বনিম্ন দূরত্ব) গাড়ি চালাতে হবে?",
            hi: "एलेक्स बिंदु A से शुरू करता है और पूर्व की ओर 8 किमी ड्राइव करता है। फिर वह बाएं मुड़ता है, 6 किमी ड्राइव करता है, बाएं मुड़ता है और 17 किमी ड्राइव करता है। फिर वह बाएं मुड़ता है और 13 किमी ड्राइव करता है। वह अंतिम बार बाएं मुड़ता है, 9 किमी ड्राइव करता है और बिंदु P पर रुकता है। बिंदु A पर फिर से पहुंचने के लिए उसे कितनी दूर (न्यूनतम दूरी) और किस दिशा में ड्राइव करना चाहिए?"
        },
        options: {
            en: ["8 km to the north", "7 km to the north", "8 km to the south", "7 km to the south"],
            bn: ["৮ কিমি উত্তর দিকে", "৭ কিমি উত্তর দিকে", "৮ কিমি দক্ষিণ দিকে", "৭ কিমি দক্ষিণ দিকে"],
            hi: ["8 किमी उत्तर की ओर", "7 किमी उत्तर की ओर", "8 किमी दक्षिण की ओर", "7 किमी दक्षिण की ओर"]
        },
        correct: 1
    },
    {
        question: {
            en: "What should come in place of the question mark (?) in the given series?\n991 989 985 979 971 ?",
            bn: "প্রদত্ত শ্রেণীতে প্রশ্ন চিহ্নের (?) স্থানে কী বসবে?\n991 989 985 979 971 ?",
            hi: "दी गई श्रृंखला में प्रश्नवाचक चिह्न (?) के स्थान पर क्या आना चाहिए?\n991 989 985 979 971 ?"
        },
        options: {
            en: ["967", "963", "961", "969"],
            bn: ["৯৬৭", "৯৬৩", "৯৬১", "৯৬৯"],
            hi: ["967", "963", "961", "969"]
        },
        correct: 2
    },
    {
        question: {
            en: "If - means ÷, ÷ means ×, × means + and + means -, then what will come in place of the question mark (?) in the following equation?\n204 - 3 ÷ 28 + 164 × 4 = ?",
            bn: "যদি - মানে ÷, ÷ মানে ×, × মানে + এবং + মানে - হয়, তবে নিচের সমীকরণে প্রশ্ন চিহ্নের (?) স্থানে কী আসবে?\n204 - 3 ÷ 28 + 164 × 4 = ?",
            hi: "यदि - का अर्थ ÷, ÷ का अर्थ ×, × का अर्थ + और + का अर्थ - है, तो निम्नलिखित समीकरण में प्रश्नवाचक चिह्न (?) के स्थान पर क्या आएगा?\n204 - 3 ÷ 28 + 164 × 4 = ?"
        },
        options: {
            en: ["769", "761", "760", "766"],
            bn: ["৭৬৯", "৭৬১", "৭৬০", "৭৬৬"],
            hi: ["769", "761", "760", "766"]
        },
        correct: 2
    },
    {
        question: {
            en: "UI 12 is related to YK -2 in a certain way. In the same way, OL 9 is related to SN -5. To which of the following is PQ 15 related, following the same logic?",
            bn: "UI 12 একটি নির্দিষ্ট উপায়ে YK -2 এর সাথে সম্পর্কিত। একইভাবে, OL 9 সম্পর্কিত SN -5 এর সাথে। একই যুক্তি অনুসরণ করে PQ 15 নিচের কোনটির সাথে সম্পর্কিত হবে?",
            hi: "UI 12 एक निश्चित तरीके से YK -2 से संबंधित है। उसी तरह, OL 9, SN -5 से संबंधित है। उसी तर्क का पालन करते हुए, PQ 15 निम्नलिखित में से किससे संबंधित है?"
        },
        options: {
            en: ["ST 3", "TT 3", "SS 1", "TS 1"],
            bn: ["ST 3", "TT 3", "SS 1", "TS 1"],
            hi: ["ST 3", "TT 3", "SS 1", "TS 1"]
        },
        correct: 3
    },
    {
        question: {
            en: "Refer to the given number, symbol series and answer the question that follows. Counting to be done from left to right only. All numbers are single-digit numbers.\n(Left) 8 $ 3 Ω 9 % 4 6 7 1 * £ 5 # 2 + @ & (Right)\nHow many such symbols are there, each of which is immediately preceded by a number and also immediately followed by another symbol?",
            bn: "প্রদত্ত সংখ্যা এবং প্রতীকের শ্রেণীটি লক্ষ্য করো এবং প্রশ্নটির উত্তর দাও। গণনা বাম থেকে ডানে করতে হবে। সব সংখ্যাই এক অঙ্কের।\n(বাম) 8 $ 3 Ω 9 % 4 6 7 1 * £ 5 # 2 + @ & (ডান)\nএমন কতগুলো প্রতীক (symbol) আছে, যার ঠিক আগে একটি সংখ্যা এবং ঠিক পরে আরেকটি প্রতীক রয়েছে?",
            hi: "दी गई संख्या, प्रतीक श्रृंखला को देखें और उसके बाद आने वाले प्रश्न का उत्तर दें। गिनती केवल बाएँ से दाएँ की जानी है। सभी संख्याएँ एकल-अंक की संख्याएँ हैं।\n(बाएँ) 8 $ 3 Ω 9 % 4 6 7 1 * £ 5 # 2 + @ & (दाएँ)\nऐसे कितने प्रतीक हैं, जिनमें से प्रत्येक के ठीक पहले एक संख्या है और ठीक बाद में एक और प्रतीक है?"
        },
        options: {
            en: ["4", "3", "1", "2"],
            bn: ["৪", "৩", "১", "২"],
            hi: ["4", "3", "1", "2"]
        },
        correct: 3
    },
    {
        question: {
            en: "In the following triads, each group of letters is related to the subsequent one following a certain logic. Select from the given options, the one which follows the same logic.\nURIC - CRUI - RIUC\nKIDS - SIKD - IDKS",
            bn: "নিচের ত্রয়ীগুলোতে অক্ষরের প্রতিটি দল একটি নির্দিষ্ট যুক্তি অনুযায়ী পরের দলের সাথে সম্পর্কিত। প্রদত্ত বিকল্পগুলো থেকে সঠিকটি বেছে নাও যা একই যুক্তি অনুসরণ করে।\nURIC - CRUI - RIUC\nKIDS - SIKD - IDKS",
            hi: "निम्नलिखित त्रिकों में, अक्षरों का प्रत्येक समूह एक निश्चित तर्क के बाद अगले से संबंधित है। दिए गए विकल्पों में से उसका चयन करें जो उसी तर्क का पालन करता है।\nURIC - CRUI - RIUC\nKIDS - SIKD - IDKS"
        },
        options: {
            en: ["NAVY - YANV - VANY", "OPEN - OEPN - NEPO", "FADE - EAFD - ADFE", "MALE - AMLE - EALM"],
            bn: ["NAVY - YANV - VANY", "OPEN - OEPN - NEPO", "FADE - EAFD - ADFE", "MALE - AMLE - EALM"],
            hi: ["NAVY - YANV - VANY", "OPEN - OEPN - NEPO", "FADE - EAFD - ADFE", "MALE - AMLE - EALM"]
        },
        correct: 0
    },
    {
        question: {
            en: "In a certain code language, ‘house sip head’ is coded as ‘bm ma px’ and ‘head wood robot’ is coded as ‘pz bm ey’. How is ‘head’ coded in the given language?",
            bn: "একটি নির্দিষ্ট সাংকেতিক ভাষায়, ‘house sip head’-কে ‘bm ma px’ এবং ‘head wood robot’-কে ‘pz bm ey’ লেখা হয়। প্রদত্ত ভাষায় ‘head’-এর সংকেত কী?",
            hi: "एक निश्चित कूट भाषा में, 'house sip head' को 'bm ma px' और 'head wood robot' को 'pz bm ey' के रूप में कूटबद्ध किया जाता है। दी गई भाषा में 'head' को कैसे कूटबद्ध किया गया है?"
        },
        options: {
            en: ["ma", "bm", "pz", "px"],
            bn: ["ma", "bm", "pz", "px"],
            hi: ["ma", "bm", "pz", "px"]
        },
        correct: 1
    },
    {
        question: {
            en: "Select the set in which the numbers are related in the same way as are the numbers of the following sets.\n(14 , 42, 3) \n(12, 60, 5)",
            bn: "নিচের সেটগুলোর সংখ্যাগুলোর মধ্যে যে সম্পর্ক রয়েছে, সেই একই সম্পর্কযুক্ত সেটটি বিকল্প থেকে নির্বাচন করো।\n(14 , 42, 3) \n(12, 60, 5)",
            hi: "उस सेट का चयन करें जिसमें संख्याएँ उसी तरह से संबंधित हैं जैसे निम्नलिखित सेटों की संख्याएँ हैं।\n(14 , 42, 3) \n(12, 60, 5)"
        },
        options: {
            en: ["(15, 45, 4)", "(11, 55, 6)", "(13 , 39 , 3)", "(16, 42, 2)"],
            bn: ["(15, 45, 4)", "(11, 55, 6)", "(13 , 39 , 3)", "(16, 42, 2)"],
            hi: ["(15, 45, 4)", "(11, 55, 6)", "(13 , 39 , 3)", "(16, 42, 2)"]
        },
        correct: 2
    },
    {
        question: {
            en: "Refer to the following number series and answer the question that follows (all numbers are single-digit numbers only). Counting to be done from left to right only.\n(Left) 6 5 8 8 5 4 7 7 4 2 7 9 2 2 5 7 4 8 8 2 1 8 9 (Right)\nHow many such odd digits are there, each of which is immediately preceded by an odd digit and also immediately followed by an odd digit?",
            bn: "নিচের সংখ্যা শ্রেণীটি লক্ষ্য করো এবং উত্তর দাও (সব সংখ্যাই এক অঙ্কের)। গণনা বাম থেকে ডানে করতে হবে।\n(বাম) 6 5 8 8 5 4 7 7 4 2 7 9 2 2 5 7 4 8 8 2 1 8 9 (ডান)\nএমন কতগুলো বিজোড় অঙ্ক আছে, যার ঠিক আগে একটি বিজোড় অঙ্ক এবং ঠিক পরেও একটি বিজোড় অঙ্ক রয়েছে?",
            hi: "निम्नलिखित संख्या श्रृंखला को देखें और आने वाले प्रश्न का उत्तर दें (सभी संख्याएँ केवल एकल-अंक की संख्याएँ हैं)। गिनती केवल बाएँ से दाएँ की जानी है।\n(बाएँ) 6 5 8 8 5 4 7 7 4 2 7 9 2 2 5 7 4 8 8 2 1 8 9 (दाएँ)\nऐसे कितने विषम अंक हैं, जिनमें से प्रत्येक के ठीक पहले एक विषम अंक है और ठीक बाद में भी एक विषम अंक है?"
        },
        options: {
            en: ["One", "Two", "None", "Three"],
            bn: ["একটি", "দুটি", "একটিও নয়", "তিনটি"],
            hi: ["एक", "दो", "कोई नहीं", "तीन"]
        },
        correct: 0
    },
    {
        question: {
            en: "What should come in place of the question mark (?) in the given series, based on the English alphabetical order?\nRJV QIU PHT OGS ?",
            bn: "ইংরেজি বর্ণমালার ক্রম অনুসারে প্রদত্ত শ্রেণীতে প্রশ্ন চিহ্নের (?) স্থানে কী আসবে?\nRJV QIU PHT OGS ?",
            hi: "अंग्रेजी वर्णानुक्रम के आधार पर दी गई श्रृंखला में प्रश्नवाचक चिह्न (?) के स्थान पर क्या आना चाहिए?\nRJV QIU PHT OGS ?"
        },
        options: {
            en: ["NHT", "NFR", "PFR", "PHT"],
            bn: ["NHT", "NFR", "PFR", "PHT"],
            hi: ["NHT", "NFR", "PFR", "PHT"]
        },
        correct: 1
    },
    {
        question: {
            en: "Read the given statement(s) and conclusions carefully. Decided which of the given conclusions logically follow(s) from the statement(s).\nStatements: Some hats are caps. No cap is a vest.\nConclusions: (I) Some hats are vests. (II) Some caps are hats.",
            bn: "প্রদত্ত বিবৃতি এবং সিদ্ধান্তগুলো মনোযোগ সহকারে পড়ো এবং কোন সিদ্ধান্তটি যৌক্তিকভাবে বিবৃতি অনুসরণ করে তা নির্বাচন করো।\nবিবৃতি: কিছু হ্যাট হলো ক্যাপ। কোনো ক্যাপ ভেস্ট নয়।\nসিদ্ধান্ত: (I) কিছু হ্যাট হলো ভেস্ট। (II) কিছু ক্যাপ হলো হ্যাট।",
            hi: "दिए गए कथनों और निष्कर्षों को ध्यान से पढ़ें। निर्णय लें कि कौन सा निष्कर्ष तार्किक रूप से कथनों का पालन करता है।\nकथन: कुछ हैट, कैप हैं। कोई कैप, वेस्ट नहीं है।\nनिष्कर्ष: (I) कुछ हैट, वेस्ट हैं। (II) कुछ कैप, हैट हैं।"
        },
        options: {
            en: ["Both conclusions (I) and (II) follow.", "Only conclusion (II) follows.", "Neither conclusion (I) nor (II) follows.", "Only conclusion (I) follows."],
            bn: ["সিদ্ধান্ত (I) এবং (II) উভয়ই অনুসরণ করে।", "কেবলমাত্র সিদ্ধান্ত (II) অনুসরণ করে।", "সিদ্ধান্ত (I) বা (II) কোনোটিই অনুসরণ করে না।", " can কেবলমাত্র সিদ্ধান্ত (I) অনুসরণ করে।"],
            hi: ["निष्कर्ष (I) और (II) दोनों पालन करते हैं।", "केवल निष्कर्ष (II) पालन करता है।", "न तो निष्कर्ष (I) और न ही (II) पालन करता है।", "केवल निष्कर्ष (I) पालन करता है।"]
        },
        correct: 1
    },
    {
        question: {
            en: "Seven people, A, B, C, D, E, F and G, are sitting in a row, facing north. Only five people sit to the right of A. Only five people sit to the left of B. F is the immediate neighbour of G and E. C sits second to the left of E. How many people sit to the left of G?",
            bn: "সাতজন ব্যক্তি A, B, C, D, E, F এবং G উত্তর দিকে মুখ করে একটি সারিতে বসে আছেন। A-এর ডানদিকে কেবল পাঁচজন বসে আছেন। B-এর বামদিকে কেবল পাঁচজন বসে আছেন। F হলো G এবং E-এর ঠিক প্রতিবেশী। C বসে আছে E-এর বামদিকে দ্বিতীয় স্থানে। G-এর বামদিকে কতজন বসে আছেন?",
            hi: "सात लोग, A, B, C, D, E, F और G, उत्तर की ओर उन्मुख होकर एक पंक्ति में बैठे हैं। A के दाईं ओर केवल पांच लोग बैठे हैं। B के बाईं ओर केवल pocket पांच लोग बैठे हैं। F, G और E का निकटतम पड़ोसी है। C, E के बाईं ओर दूसरे स्थान पर बैठा है। G के बाईं ओर कितने लोग बैठे हैं?"
        },
        options: {
            en: ["Three", "One", "Four", "Two"],
            bn: ["তিনজন", "একজন", "চারজন", "দুজন"],
            hi: ["तीन", "एक", "चार", "दो"]
        },
        correct: 2
    },
    {
        question: {
            en: "Based on the English alphabetical order, three of the following four letter-clusters are alike in a certain way and thus form a group. Which letter-cluster DOES NOT belong to that group?",
            bn: "ইংরেজি বর্ণমালার ক্রম অনুসারে, নিচের চারটি অক্ষর-গুচ্ছের মধ্যে তিনটি একটি নির্দিষ্ট উপায়ে সদৃশ এবং একটি দল গঠন করে। কোন অক্ষর-গুচ্ছটি সেই দলের অন্তর্ভুক্ত নয়?",
            hi: "अंग्रेजी वर्णानुक्रम के आधार पर, निम्नलिखित चार अक्षर-समूहों में से तीन एक निश्चित तरीके से समान हैं और इस प्रकार एक समूह बनाते हैं। कौन सा अक्षर-समूह उस समूह से संबंधित नहीं है?"
        },
        options: {
            en: ["UTR", "IHF", "ZZW", "NMK"],
            bn: ["UTR", "IHF", "ZZW", "NMK"],
            hi: ["UTR", "IHF", "ZZW", "NMK"]
        },
        correct: 2
    },
    {
        question: {
            en: "Madhur ranked 58th from the top and 6th from the bottom in his class. How many students are there in his class?",
            bn: "মধুর তার ক্লাসে ওপর থেকে ৫৮তম এবং নিচ থেকে ষষ্ঠ স্থান অধিকার করেছে। তার ক্লাসে মোট কতজন ছাত্র আছে?",
            hi: "मधुर अपनी कक्षा में ऊपर से 58वें और नीचे से छठे स्थान पर रहा। उसकी कक्षा में कुल कितने छात्र हैं?"
        },
        options: {
            en: ["61", "64", "63", "62"],
            bn: ["৬১", "৬৪", "৬৩", "৬২"],
            hi: ["61", "64", "63", "62"]
        },
        correct: 2
    },
    {
        question: {
            en: "If ‘A’ stands for ‘÷’ , ‘B’ stands for ‘×’, ‘C’ stands for ‘+’ and ‘D’ stands for ‘-‘ , what will be come in place of question mark ‘?’ in the following equation?\n15 A 3 B 10 C 8 D 12 = ?",
            bn: "যদি ‘A’ মানে ‘÷’ , ‘B’ মানে ‘×’, ‘C’ মানে ‘+’ এবং ‘D’ মানে ‘-‘ হয়, তবে নিচের সমীকরণে প্রশ্ন চিহ্নের (?) স্থানে কী আসবে?\n15 A 3 B 10 C 8 D 12 = ?",
            hi: "यदि 'A' का अर्थ '÷', 'B' का अर्थ '×', 'C' का अर्थ '+' और 'D' का अर्थ '-' है, तो निम्नलिखित समीकरण में प्रश्नवाचक चिह्न '?' के स्थान पर क्या आएगा?\n15 A 3 B 10 C 8 D 12 = ?"
        },
        options: {
            en: ["46", "47", "44", "45"],
            bn: ["৪৬", "৪৭", "৪৪", "৪৫"],
            hi: ["46", "47", "44", "45"]
        },
        correct: 0
    },
    {
        question: {
            en: "Seven people B, C, D, I, J, K and L are sitting in a straight line facing north. Only two people sit to the right of C. Only two people sit between C and B. Only two people sit between D and K. Only three people sits between C and D. J sits to the immediate right of I. How many people sit(s) to the right of L?",
            bn: "সাতজন ব্যক্তি B, C, D, I, J, K এবং L উত্তর দিকে মুখ করে একটি সোজা লাইনে বসে আছেন। C-এর ডানদিকে কেবল দুজন বসে আছেন। C এবং B-এর মধ্যে কেবল দুজন বসে আছেন। D এবং K-এর মধ্যে কেবল দুজন বসে আছেন। C এবং D-এর মধ্যে কেবল তিনজন বসে আছেন। J বসে আছে I-এর ঠিক ডানদিকে। L-এর ডানদিকে কতজন বসে আছেন?",
            hi: "सात लोग B, C, D, I, J, K और L उत्तर की ओर उन्मुख होकर एक सीधी रेखा में बैठे हैं। C के दाईं ओर केवल दो लोग बैठे हैं। C और B के बीच केवल दो लोग बैठे हैं। D और K के बीच केवल दो लोग बैठे हैं। C और D के बीच केवल तीन लोग बैठे हैं। J, I के ठीक दाईं ओर बैठा है। L के दाईं ओर कितने लोग बैठे हैं?"
        },
        options: {
            en: ["Three", "Four", "One", "Two"],
            bn: ["তিনজন", "চারজন", "একজন", "দুজন"],
            hi: ["तीन", "चार", "एक", "दो"]
        },
        correct: 1
    },
    {
        question: {
            en: "Ajay starts from Point A and drives 16 km towards the west. He then takes a right turn, drives 8 km, then turns left and drives 7 km. He then takes a left turn and drives 8 km. He takes a final right turn, drives 2 km, and stops at Point P. How far (shortest distance) and towards which direction should he drive in order to reach Point A again?",
            bn: "অজয় বিন্দু A থেকে শুরু করে পশ্চিম দিকে ১৬ কিমি গাড়ি চালায়। তারপর সে ডানদিকে মোড় নিয়ে ৮ কিমি যায়, তারপর বামদিকে মোড় নিয়ে ৭ কিমি গাড়ি চালায়। এরপর সে আবার বামদিকে মোড় নিয়ে ৮ কিমি যায়। সবশেষে সে ডানদিকে মোড় নিয়ে ২ কিমি গাড়ি চালিয়ে P বিন্দুতে থামে। পুনরায় বিন্দু A তে পৌঁছানোর জন্য তাকে কোন অভিমুখে এবং কত দূরে (সর্বনিম্ন দূরত্ব) গাড়ি চালাতে হবে?",
            hi: "अजय बिंदु A से शुरू करता है और पश्चिम की ओर 16 किमी ड्राइव करता है। फिर वह दाएं मुड़ता है, 8 किमी ड्राइव करता है, फिर बाएं मुड़ता है और 7 किमी ड्राइव करता है। फिर वह बाएं मुड़ता है और 8 किमी ड्राइव करता है। वह अंतिम बार दाएं मुड़ता है, 2 किमी ड्राइव करता है और बिंदु P पर रुकता है। बिंदु A पर फिर से पहुंचने के लिए उसे कितनी दूर (न्यूनतम दूरी) और किस दिशा में ड्राइव करना चाहिए?"
        },
        options: {
            en: ["7 km towards north", "11 km towards west", "25 km towards east", "16 km towards east"],
            bn: ["৭ কিমি উত্তর দিকে", "১১ কিমি পশ্চিম দিকে", "২৫ কিমি পূর্ব দিকে", "১৬ কিমি পূর্ব দিকে"],
            hi: ["7 किमी उत्तर की ओर", "11 किमी पश्चिम की ओर", "25 किमी पूर्व की ओर", "16 किमी पूर्व की ओर"]
        },
        correct: 2
    },
    {
        question: {
            en: "Radhika ranked 21st from the top and 7th from the bottom in her class. How many students are there in the class?",
            bn: "রাধিকা তার ক্লাসে ওপর থেকে ২১তম এবং নিচ থেকে সপ্তম স্থান অধিকার করেছে। ওই ক্লাসে মোট কতজন ছাত্র-ছাত্রী আছে?",
            hi: "राधिका अपनी कक्षा में ऊपर से 21वें और नीचे से सातवें स्थान पर रही। कक्षा में कुल कितने छात्र हैं?"
        },
        options: {
            en: ["19", "20", "27", "28"],
            bn: ["১৯", "২০", "২৭", "২৮"],
            hi: ["19", "20", "27", "28"]
        },
        correct: 2
    },
    {
        question: {
            en: "Which of the following letter-number clusters will replace the question mark (?) in the given series to make it logically complete?\nHBE22 ICF29 JDG36 KEH43 ?",
            bn: "প্রদত্ত শ্রেণীটিকে যৌক্তিকভাবে সম্পূর্ণ করার জন্য প্রশ্ন চিহ্নের (?) স্থানে নিচের কোন অক্ষর-সংখ্যা গুচ্ছটি বসবে?\nHBE22 ICF29 JDG36 KEH43 ?",
            hi: "दी गई श्रृंखला को तार्किक रूप से पूरा करने के लिए प्रश्नवाचक चिह्न (?) के स्थान पर निम्नलिखित में से कौन सा अक्षर-संख्या समूह आएगा?\nHBE22 ICF29 JDG36 KEH43 ?"
        },
        options: {
            en: ["LFI51", "LFJ50", "LFI50", "LFJ51"],
            bn: ["LFI51", "LFJ50", "LFI50", "LFJ51"],
            hi: ["LFI51", "LFJ50", "LFI50", "LFJ51"]
        },
        correct: 2
    },
    {
        question: {
            en: "What should come in place of the question mark (?) in the given series?\n616 610 612 606 608 ?",
            bn: "প্রদত্ত শ্রেণীটিতে প্রশ্ন চিহ্নের (?) স্থানে কী আসবে?\n616 610 612 606 608 ?",
            hi: "दी गई श्रृंखला में प्रश्नवाचक चिह्न (?) के स्थान पर क्या आना चाहिए?\n616 610 612 606 608 ?"
        },
        options: {
            en: ["602", "601", "603", "604"],
            bn: ["৬০২", "৬০১", "৬০৩", "৬০৪"],
            hi: ["602", "601", "603", "604"]
        },
        correct: 0
    },
    {
        question: {
            en: "O, P, Q, R, W, X and Y are sitting in a straight line, facing north. Only two people sit to the left of P. Only three people sit between P and W. Only one person sits between W and X. R sits to the immediate left of O. Y is not an immediate neighbour of W. How many people sit to the right of Q?",
            bn: "O, P, Q, R, W, X এবং Y উত্তর দিকে মুখ করে একটি সোজা লাইনে বসে আছেন। P-এর বামদিকে কেবল দুজন বসে আছেন। P এবং W-এর মধ্যে কেবল তিনজন বসে আছেন। W এবং X-এর মধ্যে কেবল একজন বসে আছেন। R বসে আছে O-এর ঠিক বামদিকে। Y, W-এর ঠিক প্রতিবেশী নয়। Q-এর ডানদিকে কতজন বসে আছেন?",
            hi: "O, P, Q, R, W, X और Y उत्तर की ओर उन्मुख होकर एक सीधी रेखा में बैठे हैं। P के बाईं ओर केवल दो लोग बैठे हैं। P और W के बीच केवल तीन लोग बैठे हैं। W और X के बीच केवल एक व्यक्ति बैठा है। R, O के ठीक बाईं ओर बैठा है। Y, W का निकटतम पड़ोसी नहीं है। Q के दाईं ओर कितने लोग बैठे हैं?"
        },
        options: {
            en: ["Three", "Four", "One", "Two"],
            bn: ["তিনজন", "চারজন", "একজন", "দুজন"],
            hi: ["तीन", "चार", "एक", "दो"]
        },
        correct: 0
    },
    {
        question: {
            en: "RR 4 is related to UQ -14 in a certain way. In the same way, II 8 is related to LH -10. To which of the given options is MO 12 related, following the same logic?",
            bn: "RR 4 একটি নির্দিষ্ট উপায়ে UQ -14 এর সাথে সম্পর্কিত। একইভাবে, II 8 সম্পর্কিত LH -10 এর সাথে। একই যুক্তি অনুসরণ করে MO 12 নিচের কোনটির সাথে সম্পর্কিত হবে?",
            hi: "RR 4 एक निश्चित तरीके से UQ -14 से संबंधित है। उसी तरह, II 8, LH -10 से संबंधित है। उसी तर्क का पालन करते हुए, MO 12 दिए गए विकल्पों में से किससे संबंधित है?"
        },
        options: {
            en: ["PN -6", "HY -5", "GT -2", "NH 9"],
            bn: ["PN -6", "HY -5", "GT -2", "NH 9"],
            hi: ["PN -6", "HY -5", "GT -2", "NH 9"]
        },
        correct: 0
    },
    {
        question: {
            en: "Read the given statement(s) and conclusions carefully. Decided which of the given conclusions logically follow(s) from the statement(s).\nStatements: Some pizzas are cupcakes. All buns are cupcakes.\nConclusions: (I) Some pizzas are buns. (II) All cupcakes are buns.",
            bn: "প্রদত্ত বিবৃতি এবং সিদ্ধান্তগুলো মনোযোগ সহকারে পড়ো এবং কোন সিদ্ধান্তটি যৌক্তিকভাবে বিবৃতি অনুসরণ করে তা নির্বাচন করো।\nবিবৃতি: কিছু পিৎজা হলো কাপকেক। সব বান হলো কাপকেক।\nসিদ্ধান্ত: (I) কিছু পিৎজা হলো বান। (II) সব কাপকেক হলো বান।",
            hi: "दिए गए कथनों और निष्कर्षों को ध्यान से पढ़ें। निर्णय लें कि कौन सा निष्कर्ष तार्किक रूप से कथनों का पालन करता है।\nकथन: कुछ पिज्जा, कपकेक हैं। सभी बन, कपकेक हैं।\nनिष्कर्ष: (I) कुछ पिज्जा, बन हैं। (II) सभी कपकेक, बन हैं।"
        },
        options: {
            en: ["Only conclusion (II) follows.", "Both conclusions (I) and (II) follow.", "Only conclusion (I) follows.", "Neither conclusion (I) nor (II) follows."],
            bn: ["কেবলমাত্র সিদ্ধান্ত (II) অনুসরণ করে।", "সিদ্ধান্ত (I) এবং (II) উভয়ই অনুসরণ করে।", "কেবলমাত্র সিদ্ধান্ত (I) অনুসরণ করে।", "সিদ্ধান্ত (I) বা (II) কোনোটিই অনুসরণ করে না।"],
            hi: ["केवल निष्कर्ष (II) पालन करता है।", "निष्कर्ष (I) और (II) दोनों पालन करते हैं।", "केवल निष्कर्ष (I) पालन करता है।", "न तो निष्कर्ष (I) और न ही (II) का पालन करता है।"]
        },
        correct: 3
    },
    {
        question: {
            en: "Refer to the following number series and answer the question that follows (all numbers are single-digit numbers only). Counting to be done from left to right only.\n(Left) 2 8 2 3 2 7 9 3 5 4 6 8 9 4 4 7 8 7 5 4 3 5 5 6 2 9 8 (Right)\nHow many such odd numbers are there, each of which is immediately preceded by an odd number and also immediately followed by an odd number?",
            bn: "নিচের সংখ্যা শ্রেণীটি লক্ষ্য করো এবং উত্তর দাও (সব সংখ্যাই এক অঙ্কের)। গণনা বাম থেকে ডানে করতে হবে।\n(বাম) 2 8 2 3 2 7 9 3 5 4 6 8 9 4 4 7 8 7 5 4 3 5 5 6 2 9 8 (ডান)\nএমন কতগুলো বিজোড় সংখ্যা আছে, যার ঠিক আগে একটি বিজোড় সংখ্যা এবং ঠিক পরেও একটি বিজোড় সংখ্যা রয়েছে?",
            hi: "निम्नलिखित संख्या श्रृंखला को देखें और आने वाले प्रश्न का उत्तर दें (सभी संख्याएँ केवल एकल-अंक की संख्याएँ हैं)। गिनती केवल बाएँ से दाएँ की जानी है।\n(बाएँ) 2 8 2 3 2 7 9 3 5 4 6 8 9 4 4 7 8 7 5 4 3 5 5 6 2 9 8 (दाएँ)\nऐसे कितने विषम अंक हैं, जिनमें से प्रत्येक के ठीक पहले एक विषम संख्या है और ठीक बाद में भी एक विषम संख्या है?"
        },
        options: {
            en: ["3", "5", "4", "6"],
            bn: ["৩", "৫", "৪", "৬"],
            hi: ["3", "5", "4", "6"]
        },
        correct: 1
    }
];

// ========================================================
// ২. ম্যাজিক কোড: এটি অটোমেটিক সব সাবজেক্ট জুড়ে দিয়ে 'rawQuestions' বানাবে
// ========================================================

const rawQuestions = [
    ...scienceQuestions.map(q => ({ ...q, subject: "General Science" })),
    ...caQuestions.map(q => ({ ...q, subject: "Current Affairs" })),
    ...gkQuestions.map(q => ({ ...q, subject: "General Knowledge" })),
    ...mathQuestions.map(q => ({ ...q, subject: "Mathematics" })),
    ...reasoningQuestions.map(q => ({ ...q, subject: "Reasoning" }))
];
