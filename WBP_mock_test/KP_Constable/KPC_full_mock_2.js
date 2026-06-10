// KOLKATA POLICE CONSTABLE MOCK TEST - SET 02
// Total Marks: 85 | Time: 60 Minutes

const TEST_TIME_IN_SECONDS = 3600; // ১ ঘণ্টা

// ========================================================
// ১. বহুভাষিক প্রশ্ন ব্লক (বাংলা, ইংরেজি ও হিন্দি)
// ========================================================

const gkQuestions = [
    {
        question: {
            bn: "কলকাতা পুলিশের বর্তমান পুলিশ commissioner (Police Commissioner) কে?",
            en: "Who is the current Police Commissioner of Kolkata Police?",
            hi: "कोलकाता पुलिस के वर्तमान पुलिस कमिश्नर कौन हैं?"
        },
        options: {
            bn: ["বিনীত গোয়েল", "মনোজ কুমার ভার্মা", "রাজীব কুমার", "সৌমেন মিত্র"],
            en: ["Vineet Goyal", "Manoj Kumar Verma", "Rajeev Kumar", "Soumen Mitra"],
            hi: ["विनीत गोयल", "मनोज कुमार वर्मा", "राजीव कुमार", "सौमेन मित्रा"]
        },
        correct: 1
    },
    {
        question: {
            bn: "বিশ্বের বৃহত্তম ম্যানগ্রোভ অরণ্য কোনটি?",
            en: "Which is the largest mangrove forest in the world?",
            hi: "विश्व का सबसे बड़ा मैंग्रोव वन कौन सा है?"
        },
        options: {
            bn: ["সুন্দরবন", "আমাজন", "ভিতরকণিকা", "পিচভরম"],
            en: ["Sundarbans", "Amazon", "Bhitarkanika", "Pichavaram"],
            hi: ["सुंदरबन", "अमेज़न", "भितरकनिका", "पिचवरम"]
        },
        correct: 0
    },
    {
        question: {
            bn: "'আইন-ই-আকবরি' গ্রন্থের রচয়িতা কে?",
            en: "Who is the author of the book 'Ain-i-Akbari'?",
            hi: "'आइन-ए-अकबरी' पुस्तक के लेखक कौन हैं?"
        },
        options: {
            bn: ["আকবর", "আবুল ফজল", "বদাউনি", "ফৈজি"],
            en: ["Akbar", "Abul Fazl", "Badauni", "Faizi"],
            hi: ["अकबर", "अबुल फजल", "बदायुनी", "फैजी"]
        },
        correct: 1
    },
    {
        question: {
            bn: "গৌতম বুদ্ধ তাঁর প্রথম ধর্মবাণী কোথায় প্রচার করেছিলেন?",
            en: "Where did Gautama Buddha preach his first sermon?",
            hi: "गौतम बुद्ध ने अपना पहला उपदेश कहाँ दिया था?"
        },
        options: {
            bn: ["লুম্বিনী", "সারনাথ", "গয়া", "কুশিনগর"],
            en: ["Lumbini", "Sarnath", "Gaya", "Kushinagar"],
            hi: ["लुम्बिनी", "सारनाथ", "गया", "कुशीनगर"]
        },
        correct: 1
    },
    {
        question: {
            bn: "নিচের কোন নদীটি 'নর্মদা' নদীর যমজ বা 'Twin of Narmada' নামে পরিচিত?",
            en: "Which of the following rivers is known as the 'Twin of Narmada'?",
            hi: "निम्नलिखित में से कौन सी नदी 'नर्मदा' की जुड़वां (Twin of Narmada) के रूप में जानी जाती है?"
        },
        options: {
            bn: ["তাপ্তী", "সবরমতী", "মাহী", "লুনী"],
            en: ["Tapti", "Sabarmati", "Mahi", "Luni"],
            hi: ["ताप्ती", "साबरमती", "माही", "लूनी"]
        },
        correct: 0
    },
    {
        question: {
            bn: "রক্তের গ্রুপ (Blood Group) কে আবিষ্কার করেন?",
            en: "Who discovered Blood Groups?",
            hi: "रक्त समूह (Blood Group) की खोज किसने की थी?"
        },
        options: {
            bn: ["উইলিয়াম হার্ভে", "কার্ল ল্যান্ডস্টেইনার", "রবার্ট কচ", "লুই পাস্তুর"],
            en: ["William Harvey", "Karl Landsteiner", "Robert Koch", "Louis Pasteur"],
            hi: ["विलियम हार्वे", "कार्ल लैंडस्टेनर", "रॉबर्ट कोच", "लुई पाश्चर"]
        },
        correct: 1
    },
    {
        question: {
            bn: "মানুষের চুলে ও নখে কোন প্রোটিন থাকে?",
            en: "Which protein is found in human hair and nails?",
            hi: "मानव बाल और नाखूनों में कौन सा प्रोटीन पाया जाता है?"
        },
        options: {
            bn: ["কোলাজেন", "কেরাটিন", "মায়োসিন", "হিমোগ্লোবিন"],
            en: ["Collagen", "Keratin", "Myosin", "Hemoglobin"],
            hi: ["कोलेजन", "केराटिन", "मायोसिन", "हीमोग्लोबिन"]
        },
        correct: 1
    },
    {
        question: {
            bn: "আলোকবর্ষ (Light Year) কিসের একক?",
            en: "Light-year is a unit of what?",
            hi: "प्रकाश वर्ष (Light Year) किसका मात्रक है?"
        },
        options: {
            bn: ["সময়", "দূরত্ব", "আলোর তীব্রতা", "গতিবেগ"],
            en: ["Time", "Distance", "Intensity of Light", "Velocity"],
            hi: ["समय", "दूरी", "प्रकाश की तीव्रता", "वेग"]
        },
        correct: 1
    },
    {
        question: {
            bn: "কোন ধাতুকে 'কুইক সিলভার' (Quick Silver) বলা হয়?",
            en: "Which metal is called 'Quick Silver'?",
            hi: "किस धातु को 'क्विक सिल्वर' (Quick Silver) कहा जाता है?"
        },
        options: {
            bn: ["রুপো", "পারদ", "সোডিয়াম", "প্ল্যাটিনাম"],
            en: ["Silver", "Mercury", "Sodium", "Platinum"],
            hi: ["चांदी", "पारा", "सोडियम", "प्लेटिनम"]
        },
        correct: 1
    },
    {
        question: {
            bn: "ভারতের সংবিধানের কত নম্বর ধারাকে ড. বি. আর. আম্বেদকর 'সংবিধানের হৃদয় ও আত্মা' বলেছেন?",
            en: "Which article of the Indian Constitution was called 'the heart and soul of the Constitution' by Dr. B. R. Ambedkar?",
            hi: "भारतीय संविधान के किस अनुच्छेद को डॉ. बी. आर. अम्बेडकर ने 'संविधान का हृदय और आत्मा' कहा था?"
        },
        options: {
            bn: ["১৯ নম্বর ধারা", "২১ নম্বর ধারা", "৩২ নম্বর ধারা", "২২৬ নম্বর ধারা"],
            en: ["Article 19", "Article 21", "Article 32", "Article 226"],
            hi: ["अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 32", "अनुच्छेद 226"]
        },
        correct: 2
    },
    {
        question: {
            bn: "ভারতের সর্বোচ্চ নাগরিক সম্মান কোনটি?",
            en: "Which is the highest civilian award in India?",
            hi: "भारत का सर्वोच्च नागरिक सम्मान कौन सा है?"
        },
        options: {
            bn: ["পদ্মবিভূষণ", "পরমবীর চক্র", "ভারতরত্ন", "জ্ঞানপীঠ পুরস্কার"],
            en: ["Padma Vibhushan", "Param Vir Chakra", "Bharat Ratna", "Jnanpith Award"],
            hi: ["पद्व विभूषण", "परमवीर चक्र", "भारत रत्न", "ज्ञानपीठ पुरस्कार"]
        },
        correct: 2
    },
    {
        question: {
            bn: "বিখ্যাত 'হরিপ্রসাদ চৌরাসিয়া' কোন বাদ্যযন্ত্র বাজানোর জন্য বিখ্যাত?",
            en: "The famous Hari Prasad Chaurasia is renowned for playing which musical instrument?",
            hi: "प्रसिद्ध 'हरिप्रसाद चौरसिया' कौन सा वाद्य यंत्र बजाने के लिए प्रसिद्ध हैं?"
        },
        options: {
            bn: ["সেতার", "বাঁশি", "সানাই", "তবলা"],
            en: ["Sitar", "Flute", "Shehnai", "Tabla"],
            hi: ["सितार", "बांसुरी", "शहनाई", "तबला"]
        },
        correct: 1
    },
    {
        question: {
            bn: "কত সালে ভারতীয় রিজার্ভ ব্যাঙ্ক (RBI) জাতীয়করণ করা হয়েছিল?",
            en: "In which year was the Reserve Bank of India (RBI) nationalized?",
            hi: "भारतीय रिजर्व बैंक (RBI) का राष्ट्रीयकरण किस वर्ष किया गया था?"
        },
        options: {
            bn: ["১৯ ৩৫ সালে", "১৯৪৭ সালে", "১৯৪৯ সালে", "১৯৫৬ সালে"],
            en: ["In 1935", "In 1947", "In 1949", "In 1956"],
            hi: ["वर्ष 1935 में", "वर्ष 1947 में", "वर्ष 1949 में", "वर्ष 1956 में"]
        },
        correct: 2
    },
    {
        question: {
            bn: "ওজোন স্তরের ঘনত্ব পরিমাপের একক কী?",
            en: "What is the unit of measurement for the density of the ozone layer?",
            hi: "ओजोन परत के घनत्व को मापने की इकाई क्या है?"
        },
        options: {
            bn: ["ডেসিবেল", "ডবসন", "পাসকাল", "হার্টজ"],
            en: ["Decibel", "Dobson", "Pascal", "Hertz"],
            hi: ["डेसिबल", "डॉबसन", "पास्कल", "हर्ट्ज़"]
        },
        correct: 1
    },
    {
        question: {
            bn: "বায়ুমণ্ডলের কোন স্তরে রেডিও তরঙ্গ প্রতিফলিত হয়ে পৃথিবীতে ফিরে আসে?",
            en: "In which layer of the atmosphere do radio waves reflect back to Earth?",
            hi: "वायुमंडल की किस परत से रेडियो तरंगें परावर्तित होकर पृथ्वी पर लौटती हैं?"
        },
        options: {
            bn: ["ট্রপোস্ফিয়ার", "স্ট্র্যাটোস্ফিয়ার", "আয়নোস্ফিয়ার", "এক্সোস্ফিয়ার"],
            en: ["Troposphere", "Stratosphere", "Ionosphere", "Exosphere"],
            hi: ["ट्रोपोस्फीयर", "स्ट्रेटोस्फीयर", "आयनोस्फीयर", "एक्सोस्फीयर"]
        },
        correct: 2
    },
    {
        question: {
            bn: "প্রথম এশিয়ান গেমস্ (First Asian Games) কোথায় অনুষ্ঠিত হয়েছিল?",
            en: "Where was the first Asian Games held?",
            hi: "प्रथम एशियाई खेल (First Asian Games) कहाँ आयोजित किए गए थे?"
        },
        options: {
            bn: ["টোকিও", "নয়াদিল্লি", "ব্যাঙ্কক", "বেইজিং"],
            en: ["Tokyo", "New Delhi", "Bangkok", "Beijing"],
            hi: ["टोक्यो", "नई दिल्ली", "बैंकॉक", "बीजिंग"]
        },
        correct: 1
    },
    {
        question: {
            bn: "‘সত্যशोधক সমাজ’ কে প্রতিষ্ঠা করেছিলেন?",
            en: "Who founded the 'Satyashodhak Samaj'?",
            hi: "'सत्यशोधक समाज' की स्थापना किसने की थी?"
        },
        options: {
            bn: ["রাজা রামমোহন রায়", "জ্যোতিরাও ফুলে", "স্বামী দয়ানন্দ সরস্বতী", "ঈশ্বরচন্দ্র বিদ্যাসাগর"],
            en: ["Raja Ram Mohan Roy", "Jyotirao Phule", "Swami Dayananda Saraswati", "Ishwar Chandra Vidyasagar"],
            hi: ["राजा राममोहन राय", "ज्योतिराव फुले", "स्वामी दयानंद सरस्वती", "ईश्वर चंद्र विद्यासागर"]
        },
        correct: 1
    },
    {
        question: {
            bn: "২০২৪ সালের অস্কার পুরস্কারে (Oscars 2024) সেরা চলচ্চিত্রের পুরস্কার জিতেছে কোনটি?",
            en: "Which movie won the Best Picture award at the Oscars 2024?",
            hi: "ऑस्कर 2024 (Oscars 2024) में किस फिल्म ने सर्वश्रेष्ठ फिल्म का पुरस्कार जीता है?"
        },
        options: {
            bn: ["ওপেনহাইমার", "বার্বি", "পুওর থিংস", "দ্য হোল্ডওভারস"],
            en: ["Oppenheimer", "Barbie", "Poor Things", "The Holdovers"],
            hi: ["ओपेनहाइमर", "बारबी", "पुअर थिंग्स", "द होल्डओवर्स"]
        },
        correct: 0
    },
    {
        question: {
            bn: "২০২৪ সালের ইউরো কাপ (UEFA Euro 2024) ফুটবল প্রতিযোগিতায় কোন দেশ চ্যাম্পিয়ন হয়েছে?",
            en: "Which country became the champion in the UEFA Euro 2024 football tournament?",
            hi: "2024 यूरो कप (UEFA Euro 2024) फुटबॉल प्रतियोगिता में कौन सा देश चैंपियन बना है?"
        },
        options: {
            bn: ["ইংল্যান্ড", "ফ্রান্স", "স্পেন", "জার্মানি"],
            en: ["England", "France", "Spain", "Germany"],
            hi: ["इंग्लैंड", "फ्रांस", "स्पेन", "जर्मनी"]
        },
        correct: 2
    },
    {
        question: {
            bn: "ভারতের বর্তমান সেনাপ্রধান (Chief of Army Staff) কে?",
            en: "Who is the current Chief of Army Staff of India?",
            hi: "भारत के वर्तमान सेना प्रमुख (Chief of Army Staff) कौन हैं?"
        },
        options: {
            bn: ["মনোজ পাণ্ডে", "উপেন্দ্র দ্বিবেদী", "অনিল চৌহান", "দিনেশ কুমার ত্রিপাঠী"],
            en: ["Manoj Pande", "Upendra Dwivedi", "Anil Chauhan", "Dinesh Kumar Tripathi"],
            hi: ["मनोज पांडे", "उपेंद्र द्विवेदी", "अनिल चौहान", "दिनेश कुमार त्रिपाठी"]
        },
        correct: 1
    },
    {
        question: {
            bn: "২০২৪ সালের বিশ্ব পরিবেশ দিবসের (World Environment Day) থিম কী ছিল?",
            en: "What was the theme of World Environment Day 2024?",
            hi: "विश्व पर्यावरण दिवस 2024 (World Environment Day) की थीम क्या थी?"
        },
        options: {
            bn: ["Land restoration, desertification and drought resilience", "Beat Plastic Pollution", "Only One Earth", "Ecosystem Restoration"],
            en: ["Land restoration, desertification and drought resilience", "Beat Plastic Pollution", "Only One Earth", "Ecosystem Restoration"],
            hi: ["Land restoration, desertification and drought resilience", "Beat Plastic Pollution", "Only One Earth", "Ecosystem Restoration"]
        },
        correct: 0
    },
    {
        question: {
            bn: "লতা মঙ্গেশকর কত সালে 'ভারতরত্ন' সম্মানে ভূষিত হন?",
            en: "In which year was Lata Mangeshkar awarded the 'Bharat Ratna'?",
            hi: "लता मंगेशकर को किस वर्ष 'भारत रत्न' से सम्मानित किया गया था?"
        },
        options: {
            bn: ["১৯৯৯ সালে", "২০০১ সালে", "২০০৫ সালে", "২০১০ সালে"],
            en: ["In 1999", "In 2001", "In 2005", "In 2010"],
            hi: ["वर्ष 1999 में", "वर्ष 2001 में", "वर्ष 2005 में", "वर्ष 2010 में"]
        },
        correct: 1
    },
    {
        question: {
            bn: "এলপিজি (LPG) গ্যাসের প্রধান উপাদান দুটি কী কী?",
            en: "What are the two main components of LPG gas?",
            hi: "एलपीजी (LPG) गैस के दो मुख्य घटक कौन से हैं?"
        },
        options: {
            bn: ["মিথেন ও ইথেন", "প্রোপেন ও বিউটেন", "হাইড্রোজেন ও অ্যাসিटिलিন", "ইথেন ও প্রোপেন"],
            en: ["Methane and Ethane", "Propane and Butane", "Hydrogen and Acetylene", "Ethane and Propane"],
            hi: ["मीथेन और इथेन", "प्रोपेन और ब्यूटेन", "हाइड्रोजन और एसिटिलीन", "इथेन और प्रोपेन"]
        },
        correct: 1
    },
    {
        question: {
            bn: "কেঁচোর রেচন অঙ্গের নাম কী?",
            en: "What is the excretory organ of an earthworm?",
            hi: "केंचुए के उत्सर्जी अंग का नाम क्या है?"
        },
        options: {
            bn: ["মালপিজিয়ান নালিকা", "নেফ্রিডিয়া", "ফ্লেম কোশ", "সবুজ গ্রন্থি"],
            en: ["Malpighian tubules", "Nephridia", "Flame cells", "Green glands"],
            hi: ["मालपीघियन नलिकाएं", "नेफ्रिडिया", "ज्वाला कोशिकाएं", "हरित ग्रंथियां"]
        },
        correct: 1
    },
    {
        question: {
            bn: "কম্পিউটারের আইসি চিপ (IC Chip) সাধারণত কী দিয়ে তৈরি হয়?",
            en: "What are computer IC chips usually made of?",
            hi: "कंप्यूटर की आईसी चिप (IC Chip) आमतौर पर किस चीज़ से बनी होती है?"
        },
        options: {
            bn: ["তামা", "সিলিকন", "গ্রাফাইট", "লোহা"],
            en: ["Copper", "Silicon", "Graphite", "Iron"],
            hi: ["तांबा", "सिलिकॉन", "ग्रेफाइट", "लोहा"]
        },
        correct: 1
    }
];

const mathQuestions = [
    {
        question: {
            bn: "বার্ষিক ৮% সরল সুদে কত বছরে কোনো আসল সুদে-আসলে ৩ গুণ হবে?",
            en: "In how many years will a principal triple itself at 8% per annum simple interest?",
            hi: "वार्षिक 8% साधारण ब्याज की दर से कितने वर्षों में कोई मूलधन अपने आप का 3 गुना हो जाएगा?"
        },
        options: {
            bn: ["২০ বছর", "২২ বছর", "২৫ বছর", "৩০ বছর"],
            en: ["20 years", "22 years", "25 years", "30 years"],
            hi: ["20 वर्ष", "22 वर्ष", "25 वर्ष", "30 वर्ष"]
        },
        correct: 2
    },
    {
        question: {
            bn: "দুটি সংখ্যার গসাগু (HCF) ১২ এবং লসাগু (LCM) ২৪০। একটি সংখ্যা ৬০ হলে, অপর সংখ্যাটি কত?",
            en: "The HCF of two numbers is 12 and their LCM is 240. If one number is 60, what is the other number?",
            hi: "दो संख्याओं का म.स.प. (HCF) 12 और ल.स.प. (LCM) 240 है। यदि एक संख्या 60 है, तो दूसरी संख्या क्या है?"
        },
        options: {
            bn: ["৩৬", "৪৮", "৭২", "৯৬"],
            en: ["36", "48", "72", "96"],
            hi: ["36", "48", "72", "96"]
        },
        correct: 1
    },
    {
        question: {
            bn: "একটি বর্গক্ষেত্রের বাহুর দৈর্ঘ্য ১০% হ্রাস পেলে, তার ক্ষেত্রফল শতকরা কত হ্রাস পাবে?",
            en: "If the side of a square is decreased by 10%, by what percentage will its area decrease?",
            hi: "यदि किसी वर्ग की भुजा की लंबाई 10% कम कर दी जाए, तो उसके क्षेत्रफल में कितने प्रतिशत की कमी होगी?"
        },
        options: {
            bn: ["১০%", "১৯%", "২০%", "২১%"],
            en: ["10%", "19%", "20%", "21%"],
            hi: ["10%", "19%", "20%", "21%"]
        },
        correct: 1
    },
    {
        question: {
            bn: "একটি দ্রব্যের ক্রয়মূল্য ও বিক্রয়মূল্যের অনুপাত ২০:২১ হলে, শতকরা লাভের হার কত?",
            en: "If the ratio of cost price and selling price of an item is 20:21, what is the profit percentage?",
            hi: "यदि किसी वस्तु के क्रय मूल्य और विक्रय मूल्य का अनुपात 20:21 है, तो लाभ प्रतिशत कितना है?"
        },
        options: {
            bn: ["৪%", "৫%", "৬%", "১০%"],
            en: ["4%", "5%", "6%", "10%"],
            hi: ["4%", "5%", "6%", "10%"]
        },
        correct: 1
    },
    {
        question: {
            bn: "A একটি কাজ ১০ দিনে এবং B সেই কাজ ১৫ দিনে করতে পারে। তারা একত্রে কাজটি শুরু করার কত দিনে কাজটি শেষ করবে?",
            en: "A can do a piece of work in 10 days and B can do it in 15 days. If they work together, in how many days will they finish the work?",
            hi: "A किसी काम को 10 दिनों में और B उसी काम को 15 दिनों में कर सकता है। यदि वे एक साथ मिलकर काम शुरू करते हैं, तो काम कितने दिनों में पूरा होगा?"
        },
        options: {
            bn: ["৫ দিনে", "৬ দিনে", "৭ দিনে", "৮ দিনে"],
            en: ["5 days", "6 days", "7 days", "8 days"],
            hi: ["5 दिनों में", "6 दिनों में", "7 दिनों में", "8 दिनों में"]
        },
        correct: 1
    },
    {
        question: {
            bn: "১০% এবং ২০% পরপর দুটি ছাড়ের সমতুল্য একক ছাড় (Equivalent Discount) কত?",
            en: "What is the single equivalent discount for successive discounts of 10% and 20%?",
            hi: "10% और 20% की दो क्रमिक छूटों के समतुल्य एकल छूट (Equivalent Discount) कितनी होगी?"
        },
        options: {
            bn: ["২৮%", "৩০%", "২৫%", "৩২%"],
            en: ["28%", "30%", "25%", "32%"],
            hi: ["28%", "30%", "25%", "32%"]
        },
        correct: 0
    },
    {
        question: {
            bn: "এক ব্যক্তি ১২ কিমি/ঘণ্টা বেগে স্কুলে যান এবং ১৫ কিমি/ঘণ্টা বেগে ফিরে আসেন। সমগ্র যাত্রাপথে তাঁর গড় গতিবেগ কত?",
            en: "A person goes to school at a speed of 12 km/h and returns at a speed of 15 km/h. What is his average speed for the whole journey?",
            hi: "एक व्यक्ति 12 किमी/घंटा की गति से स्कूल जाता है और 15 किमी/घंटा की गति से वापस आता है। पूरी यात्रा के दौरान उसकी औसत गति क्या है?"
        },
        options: {
            bn: ["১৩.৩ কিমি/ঘণ্টা", "১৩.৫ কিমি/ঘণ্টা", "১৩.৭ কিমি/ঘণ্টা", "১৩.৮ কিমি/ঘণ্টা"],
            en: ["13.3 km/h", "13.5 km/h", "13.7 km/h", "13.8 km/h"],
            hi: ["13.3 किमी/घंटा", "13.5 किमी/घंटा", "13.7 किमी/घंटा", "13.8 किमी/घंटा"]
        },
        correct: 0
    },
    {
        question: {
            bn: "১ থেকে ৩০ পর্যন্ত সমস্ত বিজোড় সংখ্যাগুলির গড় কত?",
            en: "What is the average of all odd numbers from 1 to 30?",
            hi: "1 से 30 तक की सभी विषम संख्याओं का औसत कितना है?"
        },
        options: {
            bn: ["১৪", "১৫", "১৬", "১৭"],
            en: ["14", "15", "16", "17"],
            hi: ["14", "15", "16", "17"]
        },
        correct: 1
    },
    {
        question: {
            bn: "কোনো টাকার ৫% যদি ২০ টাকা হয়, তবে ওই টাকার ৬০% কত হবে?",
            en: "If 5% of an amount is Rs. 20, then what will be 60% of that amount?",
            hi: "यदि किसी राशि का 5% यदि 20 रुपये है, तो उस राशि का 60% कितना होगा?"
        },
        options: {
            bn: ["১৮০ টাকা", "২০০ টাকা", "২৪০ টাকা", "৩০০ টাকা"],
            en: ["Rs. 180", "Rs. 200", "Rs. 240", "Rs. 300"],
            hi: ["180 रुपये", "200 रुपये", "240 रुपये", "300 रुपये"]
        },
        correct: 2
    },
    {
        question: {
            bn: "A, B এবং C যৌথভাবে একটি ব্যবসায় যথাক্রমে ৩০০০ টাকা, ৪০০০ টাকা এবং ৫০০০ টাকা বিনিয়োগ করল। বছরের শেষে মোট ২৪০০ টাকা লাভ হলে B এর লভ্যাংশ কত?",
            en: "A, B, and C jointly invested Rs. 3000, Rs. 4000, and Rs. 5000 respectively in a business. If the total profit at the end of the year is Rs. 2400, what is B's share?",
            hi: "A, B और C ने संयुक्त रूप से एक व्यवसाय में क्रमशः 3000 रुपये, 4000 रुपये और 5000 रुपये का निवेश किया। यदि वर्ष के अंत में कुल 2400 रुपये का लाभ हुआ, तो B का लाभांश कितना है?"
        },
        options: {
            bn: ["৬০০ টাকা", "৮০০ টাকা", "১০০০ টাকা", "১২০০ টাকা"],
            en: ["Rs. 600", "Rs. 800", "Rs. 1000", "Rs. 1200"],
            hi: ["600 रुपये", "800 रुपये", "1000 रुपये", "1200 रुपये"]
        },
        correct: 1
    },
    {
        question: {
            bn: "একটি খুঁটির ১/৩ অংশ কাদায়, ১/২ অংশ জলে এবং বাকি ২ মিটার জলের ওপরে আছে। খুঁটিটির মোট দৈর্ঘ্য কত মিটার?",
            en: "1/3 of a pole is in the mud, 1/2 is in the water and the remaining 2 meters is above the water. What is the total length of the pole in meters?",
            hi: "एक खंभे का 1/3 भाग कीचड़ में, 1/2 भाग पानी में है और शेष 2 मीटर पानी के ऊपर है। खंभे की कुल लंबाई कितने मीटर है?"
        },
        options: {
            bn: ["১০ মিটার", "১২ মিটার", "১৪ মিটার", "১৬ মিটার"],
            en: ["10 meters", "12 meters", "14 meters", "16 meters"],
            hi: ["10 मीटर", "12 मीटर", "14 मीटर", "16 मीटर"]
        },
        correct: 1
    },
    {
        question: {
            bn: "৬টি ক্রমি সংখ্যার প্রথম ৩টি সংখ্যার যোগফল ৩৬ হলে, বৃহত্তম সংখ্যাটি কত?",
            en: "If the sum of the first 3 of 6 consecutive numbers is 36, what is the largest number?",
            hi: "यदि 6 क्रमिक संख्याओं में से पहली 3 संख्याओं का योग 36 है, तो सबसे बड़ी संख्या कौन सी है?"
        },
        options: {
            bn: ["১৪", "১৫", "১৬", "১৭"],
            en: ["14", "15", "16", "17"],
            hi: ["14", "15", "16", "17"]
        },
        correct: 1
    },
    {
        question: {
            bn: "একটি আয়তক্ষেত্রের ক্ষেত্রফল ২৫০ বর্গসেমি এবং দৈর্ঘ্য ও প্রস্থের অনুপাত ৫:২। আয়তক্ষেত্রটির পরিসীমা কত সেমি?",
            en: "The area of a rectangle is 250 sq cm and the ratio of its length and breadth is 5:2. What is the perimeter of the rectangle in cm?",
            hi: "एक आयत का क्षेत्रफल 250 वर्ग सेमी है और उसकी लंबाई और चौड़ाई का अनुपात 5:2 है। आयत का परिमाप कितने सेमी है?"
        },
        options: {
            bn: ["৬০ সেমি", "৭০ সেমি", "৮০ সেমি", "৯০ সেমি"],
            en: ["60 cm", "70 cm", "80 cm", "90 cm"],
            hi: ["60 सेमी", "70 सेमी", "80 सेमी", "90 सेमी"]
        },
        correct: 1
    },
    {
        question: {
            bn: "স্থির জলে একটি নৌকার বেগ ১০ কিমি/ঘণ্টা এবং স্রোতের বেগ ৩ কিমি/ঘণ্টা। স্রোতের অনুকূলে ৪৫ কিমি যেতে নৌকাটির কত সময় লাগবে?",
            en: "The speed of a boat in still water is 10 km/h and the speed of the stream is 3 km/h. How much time will the boat take to cover 45 km downstream?",
            hi: "शांत जल में एक नाव की गति 10 किमी/घंटा है और धारा की गति 3 किमी/घंटा है। धारा के अनुकूल 45 किमी जाने में नाव को कितना समय लगेगा?"
        },
        options: {
            bn: ["৩ ঘণ্টা", "৩.৪৬ ঘণ্টা", "৪ ঘণ্টা", "৪.৫ ঘণ্টা"],
            en: ["3 hours", "3.46 hours", "4 hours", "4.5 hours"],
            hi: ["3 घंटे", "3.46 घंटे", "4 घंटे", "4.5 घंटे"]
        },
        correct: 1
    },
    {
        question: {
            bn: "√(০.০০১৬) এর মান কত হবে?",
            en: "What is the value of √(0.0016)?",
            hi: "√(0.0016) का मान क्या होगा?"
        },
        options: {
            bn: ["০.৪", "০.০৪", "০.০০৪", "৪"],
            en: ["0.4", "0.04", "0.004", "4"],
            hi: ["0.4", "0.04", "0.004", "4"]
        },
        correct: 1
    },
    {
        question: {
            bn: "দুটি সংখ্যার যোগফল ৪৫ এবং তাদের বিয়োগফল ৫ হলে, সংখ্যা দুটির অনুপাত কত?",
            en: "The sum of two numbers is 45 and their difference is 5. What is the ratio of the two numbers?",
            hi: "दो संख्याओं का योग 45 है और उनका अंतर 5 है। दोनों संख्याओं का अनुपात क्या है?"
        },
        options: {
            bn: ["৫:৪", "৯:১", "৩:২", "৭:৬"],
            en: ["5:4", "9:1", "3:2", "7:6"],
            hi: ["5:4", "9:1", "3:2", "7:6"]
        },
        correct: 0
    },
    {
        question: {
            bn: "কোনো ক্ষুদ্রতম পূর্ণবর্গ সংখ্যা ১৬, ২০ এবং ২৪ দ্বারা সম্পূর্ণ বিভাজ্য?",
            en: "Which smallest perfect square number is completely divisible by 16, 20, and 24?",
            hi: "वह कौन सी सबसे छोटी पूर्ण वर्ग संख्या है जो 16, 20 और 24 से पूर्णतः विभाज्य है?"
        },
        options: {
            bn: ["১৪৪০", "৩৬০০", "১৬০০", "২৪০০"],
            en: ["1440", "3600", "1600", "2400"],
            hi: ["1440", "3600", "1600", "2400"]
        },
        correct: 1
    },
    {
        question: {
            bn: "একটি রেডিওর ধার্যমূল্য ১২০০ টাকা। এক দোকানদার ১০% ছাড় দিয়েও ৮% লাভ করেন। রেডিওটির ক্রয়মূল্য কত ছিল?",
            en: "The marked price of a radio is Rs. 1200. A shopkeeper gives a 10% discount and still makes an 8% profit. What was the cost price of the radio?",
            hi: "एक रेडियो का अंकित मूल्य 1200 रुपये है। एक दुकानदार 10% की छूट देने के बाद भी 8% का लाभ कमाता है। रेडियो का क्रय मूल्य कितना था?"
        },
        options: {
            bn: ["১০০০ টাকা", "৯৫০ টাকা", "৯০০ টাকা", "৮৫০ টাকা"],
            en: ["Rs. 1000", "Rs. 950", "Rs. 900", "Rs. 850"],
            hi: ["1000 रुपये", "950 रुपये", "900 रुपये", "850 रुपये"]
        },
        correct: 0
    },
    {
        question: {
            bn: "একটি গোলকের ব্যাসার্ধ দ্বিগুণ করা হলে, তার আয়তন পূর্বের আয়তনের কত গুণ হবে?",
            en: "If the radius of a sphere is doubled, how many times its original volume will the new volume be?",
            hi: "यदि किसी गोले की त्रिज्या दोगुनी कर दी जाए, तो उसका आयतन पिछले आयतन का कितना गुना हो जाएगा?"
        },
        options: {
            bn: ["২ গুণ", "৪ গুণ", "৬ গুণ", "৮ গুণ"],
            en: ["2 times", "4 times", "6 times", "8 times"],
            hi: ["2 गुना", "4 गुना", "6 गुना", "8 गुना"]
        },
        correct: 3
    },
    {
        question: {
            bn: "পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৫০ বছর। ৫ বছর পূর্বে পিতার বয়স পুত্রের বয়সের ৪ গুণ ছিল। পিতার বর্তমান বয়স কত?",
            en: "The sum of the current ages of a father and his son is 50 years. 5 years ago, the father's age was 4 times the age of the son. What is the father's current age?",
            hi: "पिता और पुत्र की वर्तमान आयु का योग 50 वर्ष है। 5 वर्ष पूर्व, पिता की आयु पुत्र की आयु की 4 गुनी थी। पिता की वर्तमान आयु कितनी है?"
        },
        options: {
            bn: ["৩৫ বছর", "৩৭ বছর", "৪০ বছর", "৪৫ বছর"],
            en: ["35 years", "37 years", "40 years", "45 years"],
            hi: ["35 वर्ष", "37 वर्ष", "40 वर्ष", "45 वर्ष"]
        },
        correct: 1
    },
    {
        question: {
            bn: "১৮০ মিটার দীর্ঘ একটি ট্রেন একটি লাইটপোস্টকে ৯ সেকেন্ডে অতিক্রম করে। ট্রেনটির গতিবেগ কত কিমি/ঘণ্টা?",
            en: "A 180-meter long train crosses a light post in 9 seconds. What is the speed of the train in km/h?",
            hi: "180 मीटर लंबी एक ट्रेन एक लाइट पोस्ट को 9 सेकंड में पार करती है। ट्रेन की गति किमी/घंटा में कितनी है?"
        },
        options: {
            bn: ["৬০ কিমি/ঘণ্টা", "৭২ কিমি/ঘণ্টা", "৮০ কিমি/ঘণ্টা", "৯০ কিমি/ঘণ্টা"],
            en: ["60 km/h", "72 km/h", "80 km/h", "90 km/h"],
            hi: ["60 किमी/घंटा", "72 किमी/घंटा", "80 किमी/घंटा", "90 किमी/घंटा"]
        },
        correct: 1
    },
    {
        question: {
            bn: "যদি ৩টি খাতার দাম ১৫ টাকা হয়, তবে ১২টি খাতার দাম কত হবে?",
            en: "If 3 notebooks cost Rs. 15, then what will be the cost of 12 notebooks?",
            hi: "यदि 3 कॉपियों की कीमत 15 रुपये है, तो 12 कॉपियों की कीमत कितनी होगी?"
        },
        options: {
            bn: ["৪৫ টাকা", "৫০ টাকা", "৫৫ টাকা", "৬০ টাকা"],
            en: ["Rs. 45", "Rs. 50", "Rs. 55", "Rs. 60"],
            hi: ["45 रुपये", "50 रुपये", "55 रुपये", "60 रुपये"]
        },
        correct: 3
    },
    {
        question: {
            bn: "কোনো ভগ্নাংশের লব ২০% বৃদ্ধি এবং হর ১০% হ্রাস করলে ভগ্নাংশটি হয় ১৬/২১। মূল ভগ্নাংশটি কত?",
            en: "If the numerator of a fraction is increased by 20% and the denominator is decreased by 10%, the fraction becomes 16/21. What is the original fraction?",
            hi: "यदि किसी भिन्न के अंश में 20% की वृद्धि और हर में 10% की कमी की जाए, तो भिन्न 16/21 हो जाती है। मूल भिन्न क्या है?"
        },
        options: {
            bn: ["৪/৭", "৫/৭", "৩/৫", "২/৩"],
            en: ["4/7", "5/7", "3/5", "2/3"],
            hi: ["4/7", "5/7", "3/5", "2/3"]
        },
        correct: 0
    },
    {
        question: {
            bn: "একটি পরীক্ষায় পাস নম্বর ৩৬%। এক ছাত্র ১৯০ নম্বর পেয়ে ৩৫ নম্বরের জন্য ফেল করল। পরীক্ষার মোট নম্বর কত ছিল?",
            en: "The passing marks in an exam are 36%. A student scored 190 marks and failed by 35 marks. What were the total marks of the exam?",
            hi: "एक परीक्षा में पासिंग मार्क्स 36% हैं। एक छात्र ने 190 अंक प्राप्त किए और वह 35 अंकों से फेल हो गया। परीक्षा के कुल अंक कितने थे?"
        },
        options: {
            bn: ["৫০০", "৬০০", "৬২৫", "৬৫০"],
            en: ["500", "600", "625", "650"],
            hi: ["500", "600", "625", "650"]
        },
        correct: 2
    },
    {
        question: {
            bn: "A এবং B এর আয়ের অনুপাত ৩:২ এবং ব্যয়ের অনুপাত ৫:৩। যদি প্রত্যেকে ১০০০ টাকা সঞ্চয় করে, তবে B এর আয় কত?",
            en: "The income ratio of A and B is 3:2 and their expenditure ratio is 5:3. If each saves Rs. 1000, what is the income of B?",
            hi: "A और B की आय का अनुपात 3:2 है और उनके खर्च का अनुपात 5:3 है। यदि प्रत्येक 1000 रुपये बचाता है, तो B की आय कितनी है?"
        },
        options: {
            bn: ["৩০০০ টাকা", "৪০০০ টাকা", "৫০০০ টাকা", "৬০০০ টাকা"],
            en: ["Rs. 3000", "Rs. 4000", "Rs. 5000", "Rs. 6000"],
            hi: ["3000 रुपये", "4000 रुपये", "5000 रुपये", "6000 रुपये"]
        },
        correct: 1
    }
];

const reasoningQuestions = [
    {
        question: {
            bn: "নিচের সিরিজে শূন্যস্থানে কী বসবে? 5, 11, 23, 47, 95, ?",
            en: "What will come in place of the question mark in the following series? 5, 11, 23, 47, 95, ?",
            hi: "निम्नलिखित श्रृंखला में प्रश्नवाचक चिन्ह के स्थान पर क्या आएगा? 5, 11, 23, 47, 95, ?"
        },
        options: {
            bn: ["185", "191", "193", "195"],
            en: ["185", "191", "193", "195"],
            hi: ["185", "191", "193", "195"]
        },
        correct: 1
    },
    {
        question: {
            bn: "যদি 'BOOK' কে কোড ভাষায় '43' লেখা হয়, তবে 'PEN' কে কী লেখা হবে?",
            en: "If 'BOOK' is written as '43' in a code language, how will 'PEN' be written?",
            hi: "यदि किसी कोड भाषा में 'BOOK' को '43' लिखा जाता है, तो 'PEN' को क्या लिखा जाएगा?"
        },
        options: {
            bn: ["35", "36", "37", "38"],
            en: ["35", "36", "37", "38"],
            hi: ["35", "36", "37", "38"]
        },
        correct: 0
    },
    {
        question: {
            bn: "বেমানান (Odd) শব্দটি বাছুন:",
            en: "Find the odd word out:",
            hi: "विषम (Odd) शब्द चुनें:"
        },
        options: {
            bn: ["ভারত", "জাপান", "চীন", "মিশর"],
            en: ["India", "Japan", "China", "Egypt"],
            hi: ["भारत", "जापान", "चीन", "मिस्र"]
        },
        correct: 3
    },
    {
        question: {
            bn: "যদি '×' মানে '+', '÷' মানে '-', '+' মানে '×' এবং '-' মানে '÷' হয়, তবে 24 - 4 × 6 ÷ 3 + 2 = কত?",
            en: "If '×' means '+', '÷' means '-', '+' means '×' and '-' means '÷', then 24 - 4 × 6 ÷ 3 + 2 = ?",
            hi: "यदि '×' का अर्थ '+', '÷' का अर्थ '-', '+' का अर्थ '×' और '-' का अर्थ '÷' है, तो 24 - 4 × 6 ÷ 3 + 2 = ?"
        },
        options: {
            bn: ["6", "10", "12", "8"],
            en: ["6", "10", "12", "8"],
            hi: ["6", "10", "12", "8"]
        },
        correct: 0
    },
    {
        question: {
            bn: "A হলো B এর কন্যা, B হলো C এর মা, D হলো C এর ভাই। D এর সাথে A এর সম্পর্ক কী?",
            en: "A is B's daughter, B is C's mother, D is C's brother. What is the relation of D to A?",
            hi: "A, B की पुत्री है, B, C की माता है, D, C का भाई है। D का A से क्या संबंध है?"
        },
        options: {
            bn: ["ভাই", "বোন", "কাকা", "মামা"],
            en: ["Brother", "Sister", "Uncle", "Maternal Uncle"],
            hi: ["भाई", "बहन", "चाचा", "मामा"]
        },
        correct: 0
    },
    {
        question: {
            bn: "১ জানুয়ারি ২০০৬ যদি রবিবার হয়, তবে ১ জানুয়ারি ২০০৭ কী বার হবে?",
            en: "If 1st January 2006 was a Sunday, what day of the week will 1st January 2007 be?",
            hi: "यदि 1 जनवरी 2006 को रविवार था, तो 1 जनवरी 2007 को कौन सा दिन होगा?"
        },
        options: {
            bn: ["সোমবার", "মঙ্গলবার", "বুধবার", "শনিবার"],
            en: ["Monday", "Tuesday", "Wednesday", "Saturday"],
            hi: ["सोमवार", "मंगलवार", "बुधवार", "शनिवार"]
        },
        correct: 0
    },
    {
        question: {
            bn: "এক ব্যক্তি উত্তর দিকে ৫ কিমি হাঁটার পর ডানদিকে ঘুরে ৩ কিমি হাঁটলেন। তারপর আবার ডানদিকে ঘুরে ৫ কিমি হাঁটলেন। শুরুর স্থান থেকে তিনি এখন কত দূরত্বে আছেন?",
            en: "A person walks 5 km towards North, then turns right and walks 3 km. Then he turns right again and walks 5 km. How far is he now from the starting point?",
            hi: "एक व्यक्ति उत्तर की ओर 5 किमी चलता है, फिर दाईं ओर मुड़कर 3 किमी चलता है। फिर वह फिर से दाईं ओर मुड़ता है और 5 किमी चलता है। वह अपने शुरुआती बिंदु से अब कितनी दूरी पर है?"
        },
        options: {
            bn: ["৩ কিমি", "৫ কিমি", "৮ কিমি", "১০ কিমি"],
            en: ["3 km", "5 km", "8 km", "10 km"],
            hi: ["3 किमी", "5 किमी", "8 किमी", "10 किमी"]
        },
        correct: 0
    },
    {
        question: {
            bn: "যেমন 'ফুসফুস : বায়ু', তেমনই 'হৃদপিণ্ড : ?'",
            en: "Just as 'Lungs : Air', similarly 'Heart : ?'",
            hi: "जैसे 'फेफड़े : वायु', वैसे ही 'हृदय : ?'"
        },
        options: {
            bn: ["অক্সিজেন", "রক্ত", "পাম্প", "বুক"],
            en: ["Oxygen", "Blood", "Pump", "Chest"],
            hi: ["ऑक्सीजन", "रक्त", "पंप", "छाती"]
        },
        correct: 1
    },
    {
        question: {
            bn: "নিচের কোন ভেন চিত্রটি 'পাখি, টিয়া, বাঘ' এর সম্পর্ক সঠিকভাবে দেখায়?",
            en: "Which of the following Venn diagrams correctly shows the relationship between 'Bird, Parrot, Tiger'?",
            hi: "निम्नलिखित में से कौन सा वेन आरेख 'पक्षी, तोता, बाघ' के बीच के संबंध को सही ढंग से दर्शाता है?"
        },
        options: {
            bn: ["তিনটি পরস্পরচ্ছেদী বৃত্ত", "একটি বড় বৃত্তের ভেতর দুটি আলাদা বৃত্ত", "একটি বড় বৃত্তের ভেতর একটি ছোট বৃত্ত এবং অন্যটি সম্পূর্ণ আলাদা", "সবগুলো আলাদা বৃত্ত"],
            en: ["Three intersecting circles", "Two separate circles inside a large circle", "One small circle inside a large circle and another completely separate", "All separate circles"],
            hi: ["तीन प्रतिच्छेदी वृत्त", "एक बड़े वृत्त के अंदर दो अलग वृत्त", "एक बड़े वृत्त के अंदर एक छोटा वृत्त और दूसरा पूरी तरह से अलग", "सभी अलग वृत्त"]
        },
        correct: 2
    },
    {
        question: {
            bn: "ইংরেজি বর্ণমালায় বামদিক থেকে ৭ম অক্ষরের ডানদিকের ৮ম অক্ষর কোনটি?",
            en: "Which letter is 8th to the right of the 7th letter from the left in the English alphabet?",
            hi: "अंग्रेजी वर्णमाला में बाईं ओर से 7वें अक्षर के दाईं ओर का 8वां अक्षर कौन सा है?"
        },
        options: {
            bn: ["N", "O", "P", "Q"],
            en: ["N", "O", "P", "Q"],
            hi: ["N", "O", "P", "Q"]
        },
        correct: 1
    },
    {
        question: {
            bn: "শূন্যস্থান পূরণ করুন: _bc_bb_a_bbc",
            en: "Fill in the blank: _bc_bb_a_bbc",
            hi: "रिक्त स्थान भरें: _bc_bb_a_bbc"
        },
        options: {
            bn: ["abcb", "aabc", "bbac", "baba"],
            en: ["abcb", "aabc", "bbac", "baba"],
            hi: ["abcb", "aabc", "bbac", "baba"]
        },
        correct: 1
    },
    {
        question: {
            bn: "একটি ঘড়িতে ৪টা ৩০ মিনিট বাজলে ঘণ্টা ও মিনিটের কাঁটার মধ্যবর্তী কোণ কত হবে?",
            en: "What will be the angle between the hour and minute hands of a clock at 4:30?",
            hi: "4 बजकर 30 मिनट पर घड़ी की घंटे और मिनट की सुइयों के बीच का कोण कितना होगा?"
        },
        options: {
            bn: ["৪০°", "৪৫°", "৫০°", "৬০°"],
            en: ["40°", "45°", "50°", "60°"],
            hi: ["40°", "45°", "50°", "60°"]
        },
        correct: 1
    },
    {
        question: {
            bn: "নিচের সংখ্যা সিরিজে ভুল সংখ্যাটি কোনটি? 2, 3, 5, 8, 12, 18, 23",
            en: "Which is the wrong number in the following number series? 2, 3, 5, 8, 12, 18, 23",
            hi: "निम्नलिखित संख्या श्रृंखला में गलत संख्या कौन सी है? 2, 3, 5, 8, 12, 18, 23"
        },
        options: {
            bn: ["8", "12", "18", "23"],
            en: ["8", "12", "18", "23"],
            hi: ["8", "12", "18", "23"]
        },
        correct: 2
    },
    {
        question: {
            bn: "যদি 'PALE' কে লেখা হয় '2134', 'EARTH' কে '41590', তবে 'PEARL' কে কী লেখা হবে?",
            en: "If 'PALE' is written as '2134', 'EARTH' as '41590', then how will 'PEARL' be written?",
            hi: "यदि 'PALE' को '2134', 'EARTH' को '41590' लिखा जाता है, तो 'PEARL' को क्या लिखा जाएगा?"
        },
        options: {
            bn: ["24153", "25413", "25134", "24135"],
            en: ["24153", "25413", "25134", "24135"],
            hi: ["24153", "25413", "25134", "24135"]
        },
        correct: 0
    },
    {
        question: {
            bn: "৬ জন বন্ধু A, B, C, D, E, F একটি সারিতে উত্তর দিকে মুখ করে বসে আছে। C বসেছে A এবং E এর মাঝে। D কোনো প্রান্তে নেই। B বসেছে E এর ঠিক ডানদিকে। F ডানপ্রান্তে নেই। বামপ্রান্তে কে বসেছে?",
            en: "6 friends A, B, C, D, E, F are sitting in a row facing North. C is sitting between A and E. D is not at any end. B is sitting to the immediate right of E. F is not at the right end. Who is sitting at the left end?",
            hi: "6 मित्र A, B, C, D, E, F एक पंक्ति में उत्तर की ओर मुख करके बैठे हैं। C, A और E के बीच बैठा है। D किसी भी छोर पर नहीं है। B, E के ठीक दाईं ओर बैठा है। F दाएं छोर पर नहीं है। बाएं छोर पर कौन बैठा है?"
        },
        options: {
            bn: ["A", "F", "D", "B"],
            en: ["A", "F", "D", "B"],
            hi: ["A", "F", "D", "B"]
        },
        correct: 1
    },
    {
        question: {
            bn: "যদি কোনো সংকেতে 'KOLKATA' কে 'LPMKBUB' লেখা হয়, তবে 'DELHI' কে কী লেখা হবে?",
            en: "If in a certain code 'KOLKATA' is written as 'LPMKBUB', how will 'DELHI' be written?",
            hi: "यदि किसी कूट भाषा में 'KOLKATA' को 'LPMKBUB' लिखा जाता है, तो 'DELHI' को क्या लिखा जाएगा?"
        },
        options: {
            bn: ["EFMIJ", "EEMIJ", "EFMIK", "EFLHI"],
            en: ["EFMIJ", "EEMIJ", "EFMIK", "EFLHI"],
            hi: ["EFMIJ", "EEMIJ", "EFMIK", "EFLHI"]
        },
        correct: 0
    },
    {
        question: {
            bn: "নিচের শব্দগুলিকে অর্থপূর্ণভাবে সাজান: ১. টেবিল, ২. গাছ, ৩. কাঠ, ৪. বীজ",
            en: "Arrange the following words in a meaningful order: 1. Table, 2. Tree, 3. Wood, 4. Seed",
            hi: "निम्नलिखित शब्दों को एक सार्थक क्रम में व्यवस्थित करें: 1. मेज, 2. पेड़, 3. लकड़ी, 4. बीज"
        },
        options: {
            bn: ["৪, ২, ৩, ১", "৪, ৩, ২, ১", "২, ৪, ৩, ১", "১, ৩, ২, ৪"],
            en: ["4, 2, 3, 1", "4, 3, 2, 1", "2, 4, 3, 1", "1, 3, 2, 4"],
            hi: ["4, 2, 3, 1", "4, 3, 2, 1", "2, 4, 3, 1", "1, 3, 2, 4"]
        },
        correct: 0
    },
    {
        question: {
            bn: "রোহিত বলল, 'এই মেয়েটি আমার ঠাকুমার একমাত্র সন্তানের মেয়ে'। মেয়েটি রোহিতের কে হয়?",
            en: "Rohit said, 'This girl is the daughter of my grandmother's only child'. How is the girl related to Rohit?",
            hi: "रोहित ने कहा, 'यह लड़की मेरी दादी की इकलौती संतान की बेटी है'। लड़की रोहित से किस प्रकार संबंधित है?"
        },
        options: {
            bn: ["মা", "বোন", "মাসি", "পিসি"],
            en: ["Mother", "Sister", "Maternal Aunt", "Paternal Aunt"],
            hi: ["माता", "बहन", "मौसी", "बुआ"]
        },
        correct: 1
    },
    {
        question: {
            bn: "নিচের কোন জোড়াটি বাকিদের থেকে আলাদা?",
            en: "Which of the following pairs is different from the rest?",
            hi: "निम्नलिखित में से कौन सा जोड़ा बाकी सबसे अलग है?"
        },
        options: {
            bn: ["৩ - ৯", "৪ - ১৬", "৫ - ২৫", "৬ - ৩০"],
            en: ["3 - 9", "4 - 16", "5 - 25", "6 - 30"],
            hi: ["3 - 9", "4 - 16", "5 - 25", "6 - 30"]
        },
        correct: 3
    },
    {
        question: {
            bn: "১০ এবং ১১ টার মধ্যে কখন ঘড়ির কাঁটা দুটি একে অপরের বিপরীত দিকে (১৮০° কোণে) থাকবে?",
            en: "At what time between 10 and 11 o'clock will the hands of a clock be in opposite directions (at a 180° angle)?",
            hi: "10 और 11 बजे के बीच किस समय घड़ी की सुइयां एक-दूसरे के विपरीत दिशा में (180° के कोण पर) होंगी?"
        },
        options: {
            bn: ["১০ বেজে ২১ ৯/১১ মিনিট", "১০ বেজে ২০ মিনিট", "১০ বেজে ২২ মিনিট", "১০ বেজে ১৫ ৫/১১ মিনিট"],
            en: ["21 9/11 minutes past 10", "20 minutes past 10", "22 minutes past 10", "15 5/11 minutes past 10"],
            hi: ["10 बजकर 21 9/11 मिनट", "10 बजकर 20 मिनट", "10 बजकर 22 मिनट", "10 बजकर 15 5/11 मिनट"]
        },
        correct: 0
    },
    {
        question: {
            bn: "যদি 'RED' = 27 হয়, তবে 'GREEN' = কত হবে?",
            en: "If 'RED' = 27, then 'GREEN' = ?",
            hi: "यदि 'RED' = 27 है, तो 'GREEN' = ?"
        },
        options: {
            bn: ["৪৪", "৪৯", "৫১", "৫২"],
            en: ["44", "49", "51", "52"],
            hi: ["44", "49", "51", "52"]
        },
        correct: 1
    },
    {
        question: {
            bn: "যদি আজ মঙ্গলবার হয়, তবে আজ থেকে ৬২ দিন পর কী বার হবে?",
            en: "If today is Tuesday, what day of the week will it be after 62 days?",
            hi: "यदि आज मंगलवार है, तो आज से 62 दिन बाद कौन सा दिन होगा?"
        },
        options: {
            bn: ["সোমবার", "মঙ্গলবার", "বুধবার", "রবিবার"],
            en: ["Monday", "Tuesday", "Wednesday", "Sunday"],
            hi: ["सोमवार", "मंगलवार", "बुधवार", "रविवार"]
        },
        correct: 0
    },
    {
        question: {
            bn: "A, B, C, D এবং E পাঁচজন বন্ধু। A, B এর থেকে খাটো কিন্তু E এর থেকে লম্বা। C সবথেকে লম্বা। D, B এর থেকে সামান্য খাটো কিন্তু A এর থেকে সামান্য লম্বা। উচ্চতার দিক থেকে মাঝখানে কে আছে?",
            en: "A, B, C, D and E are five friends. A is shorter than B but taller than E. C is the tallest. D is slightly shorter than B but slightly taller than A. Who is in the middle in terms of height?",
            hi: "A, B, C, D और E पांच मित्र हैं। A, B से छोटा है लेकिन E से लंबा है। C सबसे लंबा है। D, B से थोड़ा छोटा है लेकिन A से थोड़ा लंबा है। ऊंचाई के मामले में बीच में कौन है?"
        },
        options: {
            bn: ["A", "B", "D", "E"],
            en: ["A", "B", "D", "E"],
            hi: ["A", "B", "D", "E"]
        },
        correct: 2
    },
    {
        question: {
            bn: "একটি ডাইসের (Dice) দুটি অবস্থান নিচে দেওয়া হলো। যদি ৩ উপরে থাকে, তবে নিচে কোন সংখ্যা থাকবে? [অবস্থান ১: ১, ৩, ৫] [অবস্থান ২: ১, ৪, ৬]",
            en: "Two positions of a dice are given below. If 3 is at the top, which number will be at the bottom? [Position 1: 1, 3, 5] [Position 2: 1, 4, 6]",
            hi: "एक पासे (Dice) की दो स्थितियां नीचे दी गई हैं। यदि 3 ऊपर है, तो नीचे कौन सी संख्या होगी? [स्थिति 1: 1, 3, 5] [स्थिति 2: 1, 4, 6]"
        },
        options: {
            bn: ["২", "৪", "৫", "৬"],
            en: ["2", "4", "5", "6"],
            hi: ["2", "4", "5", "6"]
        },
        correct: 1
    },
    {
        question: {
            bn: "যদি 'SUN' = 54 হয়, তবে 'MOON' = কত?",
            en: "If 'SUN' = 54, then 'MOON' = ?",
            hi: "यदि 'SUN' = 54 है, तो 'MOON' = ?"
        },
        options: {
            bn: ["৫১", "৫৩", "৫৭", "৬১"],
            en: ["51", "53", "57", "61"],
            hi: ["51", "53", "57", "61"]
        },
        correct: 2
    }
];

const englishQuestions = [
    {
        question: {
            bn: "সঠিক সমার্থক শব্দটি চয়ন করুন: 'BRIEF'",
            en: "Choose the correct synonym of the word: 'BRIEF'",
            hi: "सही पर्यायवाची शब्द चुनें: 'BRIEF'"
        },
        options: {
            bn: ["Short", "Long", "Detailed", "Large"],
            en: ["Short", "Long", "Detailed", "Large"],
            hi: ["Short", "Long", "Detailed", "Large"]
        },
        correct: 0
    },
    {
        question: {
            bn: "সঠিক বিপরীত শব্দ চয়ন করুন: 'ANCIENT'",
            en: "Choose the correct antonym of the word: 'ANCIENT'",
            hi: "सही विलोम शब्द चुनें: 'ANCIENT'"
        },
        options: {
            bn: ["Old", "Modern", "Historic", "Past"],
            en: ["Old", "Modern", "Historic", "Past"],
            hi: ["Old", "Modern", "Historic", "Past"]
        },
        correct: 1
    },
    {
        question: {
            bn: "উপযুক্ত Preposition দিয়ে শূন্যস্থান পূরণ করুন: The teacher was angry ______ my behavior.",
            en: "Fill in the blank with appropriate preposition: The teacher was angry ______ my behavior.",
            hi: "उपयुक्त Preposition से रिक्त स्थान भरें: The teacher was angry ______ my behavior."
        },
        options: {
            bn: ["with", "at", "to", "for"],
            en: ["with", "at", "to", "for"],
            hi: ["with", "at", "to", "for"]
        },
        correct: 1
    },
    {
        question: {
            bn: "সঠিক বানানযুক্ত শব্দটি খুঁজুন:",
            en: "Find the correctly spelt word:",
            hi: "सही वर्तनी (Spelling) वाला शब्द चुनें:"
        },
        options: {
            bn: ["Lieutenant", "Leutenant", "Lutenant", "Lieutnant"],
            en: ["Lieutenant", "Leutenant", "Lutenant", "Lieutnant"],
            hi: ["Lieutenant", "Leutenant", "Lutenant", "Lieutnant"]
        },
        correct: 0
    },
    {
        question: {
            bn: "Voice পরিবর্তন করুন: 'Who wrote this book?'",
            en: "Change the voice: 'Who wrote this book?'",
            hi: "Voice बदलें: 'Who wrote this book?'"
        },
        options: {
            bn: ["By whom this book written?", "By whom was this book written?", "Who was written this book?", "By whom had this book written?"],
            en: ["By whom this book written?", "By whom was this book written?", "Who was written this book?", "By whom had this book written?"],
            hi: ["By whom this book written?", "By whom was this book written?", "Who was written this book?", "By whom had this book written?"]
        },
        correct: 1
    },
    {
        question: {
            bn: "প্রদত্ত Idiom/Phrase-টির সঠিক অর্থ চয়ন করুন: 'A bolt from the blue'",
            en: "Choose the alternative which best expresses the meaning of the Idiom/Phrase: 'A bolt from the blue'",
            hi: "दिए गए Idiom/Phrase का सही अर्थ चुनें: 'A bolt from the blue'"
        },
        options: {
            bn: ["A sudden unexpected event", "A clear sky", "A thunder storm", "A pleasant surprise"],
            en: ["A sudden unexpected event", "A clear sky", "A thunder storm", "A pleasant surprise"],
            hi: ["A sudden unexpected event", "A clear sky", "A thunder storm", "A pleasant surprise"]
        },
        correct: 0
    },
    {
        question: {
            bn: "শূন্যস্থান পূরণ করুন: The Prime Minister, as well as his ministers, ______ arrived.",
            en: "Fill in the blank: The Prime Minister, as well as his ministers, ______ arrived.",
            hi: "रिक्त स्थान भरें: The Prime Minister, as well as his ministers, ______ arrived."
        },
        options: {
            bn: ["have", "has", "were", "are"],
            en: ["have", "has", "were", "are"],
            hi: ["have", "has", "were", "are"]
        },
        correct: 1
    },
    {
        question: {
            bn: "এক কথায় প্রকাশ (One word substitution) করুন: 'A life history of a person written by himself'",
            en: "One word substitution: 'A life history of a person written by himself'",
            hi: "एक शब्द प्रतिस्थापन (One word substitution) करें: 'A life history of a person written by himself'"
        },
        options: {
            bn: ["Biography", "Autobiography", "Preface", "Bibliography"],
            en: ["Biography", "Autobiography", "Preface", "Bibliography"],
            hi: ["Biography", "Autobiography", "Preface", "Bibliography"]
        },
        correct: 1
    },
    {
        question: {
            bn: "শূন্যস্থান পূরণ করুন: He is ______ honorable man.",
            en: "Fill in the blank: He is ______ honorable man.",
            hi: "रिक्त स्थान भरें: He is ______ honorable man."
        },
        options: {
            bn: ["a", "an", "the", "no article"],
            en: ["a", "an", "the", "no article"],
            hi: ["a", "an", "the", "no article"]
        },
        correct: 1
    },
    {
        question: {
            bn: "বাক্যটির ভুল অংশটি চিহ্নিত করুন: 'One of my friends / are / a doctor.'",
            en: "Identify the error in the sentence: 'One of my friends / are / a doctor.'",
            hi: "वाक्य में त्रुटि (Error) पहचानें: 'One of my friends / are / a doctor.'"
        },
        options: {
            bn: ["One of my friends", "are", "a doctor", "No error"],
            en: ["One of my friends", "are", "a doctor", "No error"],
            hi: ["One of my friends", "are", "a doctor", "No error"]
        },
        correct: 1
    }
];

// ========================================================
// ২. ম্যাজিক কোড: এটি অটোমেটিক সব সাবজেক্ট জুড়ে দিয়ে 'rawQuestions' বানাবে
// ========================================================

const rawQuestions = [
    ...gkQuestions.map(q => ({ ...q, subject: "General Knowledge" })),
    ...mathQuestions.map(q => ({ ...q, subject: "Mathematics" })),
    ...reasoningQuestions.map(q => ({ ...q, subject: "Reasoning" })),
    ...englishQuestions.map(q => ({ ...q, subject: "English" }))
];
