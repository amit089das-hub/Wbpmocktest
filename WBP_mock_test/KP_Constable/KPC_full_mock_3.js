// KOLKATA POLICE CONSTABLE MOCK TEST - SET 03
// Total Marks: 85 | Time: 60 Minutes
// Standard: Moderate to High (Based on Recent WBP Pattern)

const TEST_TIME_IN_SECONDS = 3600; 

// [GENERAL KNOWLEDGE & CURRENT AFFAIRS - 25 Questions]
const gkQuestions = [
    { 
        question: {
            bn: "পচা ডিমের গন্ধযুক্ত হাইড্রোজেন সালফাইড (H2S) গ্যাস প্রস্তুত করতে পরীক্ষাগারে কোন অ্যাসিড ব্যবহার করা হয়?",
            en: "Which acid is used in the laboratory to prepare Hydrogen Sulfide (H2S) gas, which has the smell of rotten eggs?"
        },
        options: {
            bn: ["গাঢ় নাইট্রিক অ্যাসিড", "লঘু সালফিউরিক অ্যাসিড", "গাঢ় হাইড্রোক্লোরিক অ্যাসিড", "অ্যাসিটিক অ্যাসিড"],
            en: ["Concentrated nitric acid", "Dilute sulfuric acid", "Concentrated hydrochloric acid", "Acetic acid"]
        }, 
        correct: 1 
    },
    { 
        question: {
            bn: "গাড়ি থেকে নির্গত ধোঁয়ায় উপস্থিত কোন বিষাক্ত গ্যাসটি রক্তের হিমোগ্লোবিনের সাথে যুক্ত হয়ে অক্সিজেন পরিবহনে বাধা দেয়?",
            en: "Which toxic gas present in car exhaust binds with blood hemoglobin and hinders oxygen transport?"
        },
        options: {
            bn: ["কার্বন ডাইঅক্সাইড", "কার্বন মনোক্সাইড", "নাইট্রাস অক্সাইড", "সালফার ডাইঅক্সাইড"],
            en: ["Carbon dioxide", "Carbon monoxide", "Nitrous oxide", "Sulfur dioxide"]
        }, 
        correct: 1 
    },
    { 
        question: {
            bn: "আঁচারের বোতলে বা খাদ্যবস্তু সংরক্ষণে প্রিজারভেটিভ হিসেবে নিচের কোন অ্যাসিডটি বহুল ব্যবহৃত হয়?",
            en: "Which of the following acids is widely used as a preservative in pickle jars or for food preservation?"
        },
        options: {
            bn: ["অক্সালিক অ্যাসিড", "সাইট্রিক অ্যাসিড", "অ্যাসিটিক অ্যাসিড (ভিনেগার)", "টারটারিক অ্যাসিড"],
            en: ["Oxalic acid", "Citric acid", "Acetic acid (Vinegar)", "Tartaric acid"]
        }, 
        correct: 2 
    },
    { 
        question: {
            bn: "সাধারণত সোডা ওয়াটার বা কোল্ড ড্রিঙ্কসের বোতল খুললে যে গ্যাসটি বুদবুদ আকারে বেরিয়ে আসে, সেটি কী?",
            en: "Which gas typically bubbles out when a bottle of soda water or cold drink is opened?"
        },
        options: {
            bn: ["অক্সিজেন", "নাইট্রোজেন", "কার্বন ডাইঅক্সাইড", "হাইড্রোজেন"],
            en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"]
        }, 
        correct: 2 
    },
    { 
        question: {
            bn: "কঠিন কার্বন ডাইঅক্সাইড (Solid CO2)-কে বাণিজ্যিক ভাষায় কী বলা হয়?",
            en: "What is solid carbon dioxide (Solid CO2) commercially called?"
        },
        options: {
            bn: ["কুইক লাইম", "ড্রাই আইস (শুষ্ক বরফ)", "ব্লিচিং পাউডার", "প্লাস্টার অফ প্যারিস"],
            en: ["Quick lime", "Dry ice", "Bleaching powder", "Plaster of Paris"]
        }, 
        correct: 1 
    },
    { 
        question: {
            bn: "অ্যাসিড বৃষ্টির (Acid Rain) জন্য প্রধানত দায়ী নিচের কোন গ্যাস দুটি?",
            en: "Which two gases are mainly responsible for Acid Rain?"
        },
        options: {
            bn: ["CO2 এবং O3", "SO2 এবং NO2", "CH4 এবং CO", "N2O এবং CFC"],
            en: ["CO2 and O3", "SO2 and NO2", "CH4 and CO", "N2O and CFC"]
        }, 
        correct: 1 
    },
    { 
        question: {
            bn: "মানুষের পাকস্থলীতে খাদ্য হজম করার জন্য কোন অ্যাসিডটি প্রাকৃতিক উপায়ে নিঃসৃত হয়?",
            en: "Which acid is naturally secreted in the human stomach to digest food?"
        },
        options: {
            bn: ["HNO3", "H2SO4", "HCl", "CH3COOH"],
            en: ["HNO3", "H2SO4", "HCl", "CH3COOH"]
        }, 
        correct: 2 
    },
    { 
        question: {
            bn: "ফায়ার এক্সটিংগুইশার বা অগ্নি নির্বাপক যন্ত্রে কোন রাসায়নিক যৌগটি ব্যবহার করা হয়?",
            en: "Which chemical compound is used in fire extinguishers?"
        },
        options: {
            bn: ["সোডিয়াম কার্বনেট", "সোডিয়াম বাইকার্বনেট", "ক্যালসিয়াম কার্বনেট", "পটাশিয়াম নাইট্রেট"],
            en: ["Sodium carbonate", "Sodium bicarbonate", "Calcium carbonate", "Potassium nitrate"]
        }, 
        correct: 1 
    },
    { 
        question: {
            bn: "দাঁতের মাজন বা টুথপেস্টের প্রকৃতি সাধারণত কীরূপ হয়ে থাকে?",
            en: "What is the general nature of toothpaste?"
        },
        options: {
            bn: ["আম্লিক (Acidic)", "ক্ষারীয় (Alkaline)", "প্রশমিত (Neutral)", "লবণাক্ত"],
            en: ["Acidic", "Alkaline", "Neutral", "Salty"]
        }, 
        correct: 1 
    },
    { 
        question: {
            bn: "কাঁচ কাটার জন্য নিচের কোনটি ব্যবহার করা হয়?",
            en: "Which of the following is used for cutting glass?"
        },
        options: {
            bn: ["গ্রাফাইট", "সিলিকন কার্বাইড", "হীরে (Diamond)", "টংস্টেন"],
            en: ["Graphite", "Silicon carbide", "Diamond", "Tungsten"]
        }, 
        correct: 2 
    },
    { 
        question: {
            bn: "গান পাউডার (Gunpowder) তৈরিতে চারকোল ও সালফারের সাথে নিচের কোন উপাদানটি মেশানো হয়?",
            en: "Which of the following components is mixed with charcoal and sulfur to make gunpowder?"
        },
        options: {
            bn: ["পটাশিয়াম নাইট্রেট (Shorer)", "সোডিয়াম ক্লোরাইড", "ক্যালসিয়াম拍攝", "ম্যাগনেসিয়াম কার্বনেট"],
            en: ["Potassium nitrate (Saltpetre)", "Sodium chloride", "Calcium sulfate", "Magnesium carbonate"]
        }, 
        correct: 0 
    },
    { 
        question: {
            bn: "ইন্টারন্যাশনাল সোলার অ্যালায়েন্স (ISA)-এর সদর দপ্তর ভারতের কোথায় অবস্থিত?",
            en: "Where is the headquarters of the International Solar Alliance (ISA) located in India?"
        },
        options: {
            bn: ["নয়াদিল্লি", "গুরুগ্রাম", "বেঙ্গালুরু", "হায়দ্রাবাদ"],
            en: ["New Delhi", "Gurugram", "Bengaluru", "Hyderabad"]
        }, 
        correct: 1 
    },
    { 
        question: {
            bn: "১৮৫৭ সালের মহাবিদ্রোহের সময় ভারতের গভর্নর জেনারেল কে ছিলেন?",
            en: "Who was the Governor-General of India during the Great Revolt of 1857?"
        },
        options: {
            bn: ["লোর্ড ডালহৌসি", "লর্ড ক্যানিং", "লর্ড কার্জন", "লর্ড বেন্টিঙ্ক"],
            en: ["Lord Dalhousie", "Lord Canning", "Lord Curzon", "Lord Bentinck"]
        }, 
        correct: 1 
    },
    { 
        question: {
            bn: "কোন গুপ্ত সম্রাটকে ভারতের নেপোলিয়ন বলা হয়?",
            en: "Which Gupta emperor is known as the Napoleon of India?"
        },
        options: {
            bn: ["প্রথম চন্দ্রগুপ্ত", "সমুদ্রগুপ্ত", "দ্বিতীয় চন্দ্রগুপ্ত", "স্কন্দগুপ্ত"],
            en: ["Chandragupta I", "Samudragupta", "Chandragupta II", "Skandagupta"]
        }, 
        correct: 1 
    },
    { 
        question: {
            bn: "ভারতীয় সংবিধানের কোন তপশিল বা শিডিউলে (Schedule) দলত্যাগ विरोधी আইন (Anti-Defection Law) আলোচনা করা হয়েছে?",
            en: "Which schedule of the Indian Constitution discusses the Anti-Defection Law?"
        },
        options: {
            bn: ["৮ম তপশিল", "৯ম তপশিল", "১০ম তপশিল", "১১শ তপশিল"],
            en: ["8th Schedule", "9th Schedule", "10th Schedule", "11th Schedule"]
        }, 
        correct: 2 
    },
    { 
        question: {
            bn: "লোকসভার অধিবেশনে সভাপতিত্ব কে করেন?",
            en: "Who presides over the sessions of the Lok Sabha?"
        },
        options: {
            bn: ["রাষ্ট্রপতি", "প্রধানমন্ত্রী", "স্পিকার (অধ্যক্ষ)", "উপাধ্যক্ষ"],
            en: ["President", "Prime Minister", "Speaker", "Deputy Speaker"]
        }, 
        correct: 2 
    },
    { 
        question: {
            bn: "নিলিখিলিত কোন নদীটি পশ্চিমবাহিনী নদী এবং আরব সাগরে পতিত হয়েছে?",
            en: "Which of the following rivers is a west-flowing river and falls into the Arabian Sea?"
        },
        options: {
            bn: ["গোদাবরী", "কৃষ্ণা", "তাপ্তী", "মহানন্দা"],
            en: ["Godavari", "Krishna", "Tapi", "Mahananda"]
        }, 
        correct: 2 
    },
    { 
        question: {
            bn: "কাজিরাঙা জাতীয় উদ্যান ভারতের কোন রাজ্যে অবস্থিত এবং এটি কীসের জন্য বিখ্যাত?",
            en: "In which state of India is Kaziranga National Park located and what is it famous for?"
        },
        options: {
            bn: ["অসম, একশৃঙ্গ গণ্ডার", "পশ্চিমবঙ্গ, রয়্যাল বেঙ্গল টাইগার", "গুজরাট, এশিয়াটিক সিংহ", "मध्यপ্রদেশ, চিতাবাঘ"],
            en: ["Assam, One-horned Rhinoceros", "West Bengal, Royal Bengal Tiger", "Gujarat, Asiatic Lion", "Madhya Pradesh, Leopard"]
        }, 
        correct: 0 
    },
    { 
        question: {
            bn: "অর্থনীতির পরিভাষায় 'Stagflation' বলতে কী বোঝায়?",
            en: "In economic terms, what does 'Stagflation' mean?"
        },
        options: {
            bn: ["উচ্চ মুদ্রাস্ফীতি এবং উচ্চ অর্থনৈতিক বৃদ্ধি", "নিম্ন মুদ্রাস্ফীতি এবং উচ্চ বেকারত্ব", "উচ্চ মুদ্রাস্ফীতি এবং উচ্চ বেকারত্ব ও মন্দা", "শূন্য মুদ্রাস্ফীতি"],
            en: ["High inflation and high economic growth", "Low inflation and high unemployment", "High inflation with high unemployment and recession", "Zero inflation"]
        }, 
        correct: 2 
    },
    { 
        question: {
            bn: "২০২৪ সালের লোকসভা নির্বাচন ভারতের কততম সাধারণ নির্বাচন ছিল?",
            en: "The 2024 Lok Sabha election was which general election of India?"
        },
        options: {
            bn: ["১৬তম", "১৭তম", "১৮তম", "১৯তম"],
            en: ["16th", "17th", "18th", "19th"]
        }, 
        correct: 2 
    },
    { 
        question: {
            bn: "২০২৬ সালে পুরুষদের হকি বিশ্বকাপ (FIH Hockey World Cup) যৌথভাবে কোন দুটি দেশে অনুষ্ঠিত হবে?",
            en: "In 2026, which two countries will jointly host the Men's FIH Hockey World Cup?"
        },
        options: {
            bn: ["ভারত ও বাংলাদেশ", "বেলজিয়াম ও নেদারল্যান্ডস", "অস্ট্রেলিয়া ও নিউজিল্যান্ড", "জার্মানি ও ফ্রান্স"],
            en: ["India and Bangladesh", "Belgium and Netherlands", "Australia and New Zealand", "Germany and France"]
        }, 
        correct: 1 
    },
    { 
        question: {
            bn: "২০২৪ সালের সাহিত্য অ্যাকাডেমি পুরস্কারে বাংলা ভাষার জন্য কে সম্মানিত হয়েছেন?",
            en: "Who has been honored with the Sahitya Akademi Award 2024 for the Bengali language?"
        },
        options: {
            bn: ["শীর্ষেন্দু মুখোপাধ্যায়", "সঞ্জীব চট্টোপাধ্যায়", "প্রচেত গুপ্ত", "তিলক রঞ্জন বেরা"],
            en: ["Shirshendu Mukhopadhyay", "Sanjeev Chattopadhyay", "Pracheta Gupta", "Tilak Ranjan Bera"]
        }, 
        correct: 3 
    },
    { 
        question: {
            bn: "ভারতের প্রথম লোকপাল (Lokpal) হিসেবে কে নিযুক্ত হয়েছিলেন?",
            en: "Who was appointed as the first Lokpal of India?"
        },
        options: {
            bn: ["জাস্টিস পিনাকী চন্দ্র ঘোষ", "জাস্টিস এ এম খানউইলকর", "জাস্টিস রঞ্জন গগৈ", "জাস্টিস ডি ওয়াই চন্দ্রচূড়"],
            en: ["Justice Pinaki Chandra Ghose", "Justice A M Khanwilkar", "Justice Ranjan Gogoi", "Justice D Y Chandrachud"]
        }, 
        correct: 0 
    },
    { 
        question: {
            bn: "নিম্নলিখিত কোনটি একটি নিষ্ক্রিয় গ্যাস বা Noble Gas নয়?",
            en: "Which of the following is not an inert gas or Noble Gas?"
        },
        options: {
            bn: ["হিলিয়াম", "আর্গন", "ক্লোরিন", "নিয়ন"],
            en: ["Helium", "Argon", "Chlorine", "Neon"]
        }, 
        correct: 2 
    },
    { 
        question: {
            bn: "কোন হরমোনকে মানুষের 'আপদকালীন হরমোন' বা 'ফাইট অর ফ্লাইট' হরমোন বলা হয়?",
            en: "Which hormone is called the human 'emergency hormone' or 'fight-or-flight' hormone?"
        },
        options: {
            bn: ["থাইরক্সিন", "ইনসুলিন", "অ্যাড্রেনালিন", "ইস্ট্রোজেন"],
            en: ["Thyroxine", "Insulin", "Adrenaline", "Estrogen"]
        }, 
        correct: 2 
    }
];

// [ELEMENTARY MATHEMATICS - 25 Questions]
const mathQuestions = [
    {
        question: {
            bn: "A, B এবং C একটি যৌথ ব্যবসায় ১:২:৪ অনুপাতে টাকা বিনিয়োগ করে। ৬ মাস পর A তার মূলধনের অর্ধেক তুলে নেয় এবং B তার মূলধন দ্বিগুণ করে। বছরের শেষে যদি মোট লাভ ৪২,০০০ টাকা হয়, তবে C কত টাকা পাবে?",
            en: "A, B, and C invest in a joint business in the ratio 1:2:4. After 6 months, A withdraws half of his capital and B doubles his capital. If the total profit at the end of the year is ₹42,000, how much money will C get?"
        },
        options: {
            bn: ["২৪,০০০ টাকা", "১৬,০০০ টাকা", "২০,০০০ টাকা", "১৮,০০০ টাকা"],
            en: ["₹24,000", "₹16,000", "₹20,000", "₹18,000"]
        },
        correct: 0
    },
    {
        question: {
            bn: "কোনো আসল বার্ষিক চক্রবৃদ্ধি সুদের হারে ২ বছরে ৪,২০০ টাকা এবং ৩ বছরে ৪,৪১০ টাকা হয়। সুদের বার্ষিক হার কত?",
            en: "A certain principal amounts to ₹4,200 in 2 years and ₹4,410 in 3 years at a certain rate of compound interest annually. What is the annual rate of interest?"
        },
        options: {
            bn: ["৪%", "৫%", "৬%", "৭.৫%"],
            en: ["4%", "5%", "6%", "7.5%"]
        },
        correct: 1
    },
    {
        question: {
            bn: "একটি আয়তাকার মাঠের দৈর্ঘ্য ও প্রস্থের অনুপাত ৩:২। মাঠটির চারধারে ৪ বার বৃত্তাকারে দৌড়ালে এক ব্যক্তি ৪ কিমি পথ অতিক্রম করেন। মাঠটির ক্ষেত্রফল কত বর্গমিটার?",
            en: "The ratio of the length and breadth of a rectangular field is 3:2. Running around the boundary of the field 4 times, a person covers a distance of 4 km. What is the area of the field in square meters?"
        },
        options: {
            bn: ["৩,১২৫ বঃমিঃ", "৩৭,৫০০ বঃমিঃ", "৪৫,০০০ বঃমিঃ", "৫০,০০০ বঃমিঃ"],
            en: ["3,125 sq.m.", "37,500 sq.m.", "45,000 sq.m.", "50,000 sq.m."]
        },
        correct: 1
    },
    {
        question: {
            bn: "A এবং B দুটি নল একটি চৌবাচ্চা যথাক্রমে ২০ মিনিট ও ৩০ মিনিটে পূর্ণ করতে পারে। দুটি নল একসাথে খোলার কিছু সময় পর A নলটি বন্ধ করা হলো এবং বাকি অংশ B নল ৫ মিনিটে পূর্ণ করল। A নলটি কত সময় খোলা ছিল?",
            en: "Two pipes A and B can fill a cistern in 20 minutes and 30 minutes respectively. After opening both pipes together for some time, pipe A was closed and the remaining part was filled by pipe B in 5 minutes. For how long was pipe A open?"
        },
        options: {
            bn: ["৮ মিনিট", "১০ মিনিট", "১২ মিনিট", "৯ মিনিট"],
            en: ["8 minutes", "10 minutes", "12 minutes", "9 minutes"]
        },
        correct: 1
    },
    {
        question: {
            bn: "এক অসৎ ব্যবসায়ী ক্রয়মূল্যেই দ্রব্য বিক্রি করার দাবি করে, কিন্তু ১ কেজির পরিবর্তে সে ৯০০ গ্রাম ওজনের বাটখারা ব্যবহার করে। তার শতকরা লাভের হার কত?",
            en: "A dishonest trader claims to sell goods at cost price, but uses a weight of 900 grams instead of 1 kg. What is his profit percentage?"
        },
        options: {
            bn: ["১০%", "১১ ১/৯ %", "৯ ১/১১ %", "১২.৫%"],
            en: ["10%", "11 1/9 %", "9 1/11 %", "12.5%"]
        },
        correct: 1
    },
    {
        question: {
            bn: "১০টি সংখ্যার গড় ২০। যদি প্রথম ৬টি সংখ্যার গড় ১৫ হয় এবং শেষ ৫টি সংখ্যার গড় ২৪ হয়, তবে ষষ্ঠ সংখ্যাটি কত?",
            en: "The average of 10 numbers is 20. If the average of the first 6 numbers is 15 and the average of the last 5 numbers is 24, what is the 6th number?"
        },
        options: {
            bn: ["২০", "২২", "২৪", "২৬"],
            en: ["20", "22", "24", "26"]
        },
        correct: 1
    },
    {
        question: {
            bn: "কোনো ক্ষুদ্রতম সংখ্যাকে ১৬, ২৪, ৩০ এবং ৩৬ দ্বারা ভাগ করলে যথাক্রমে ৬, ১৪, ২০ এবং ২৬ ভাগশেষ থাকে?",
            en: "What is the least number which when divided by 16, 24, 30, and 36 leaves remainders of 6, 14, 20, and 26 respectively?"
        },
        options: {
            bn: ["৭১০", "৭০৮", "৭১২", "৬৯০"],
            en: ["710", "708", "712", "690"]
        },
        correct: 0
    },
    {
        question: {
            bn: "তিনটি ধনাত্মক সংখ্যার মধ্যে প্রথম ও দ্বিতীয় সংখ্যার অনুপাত ৮:৯, দ্বিতীয় ও তৃতীয় সংখ্যার অনুপাত ৩:৪। প্রথম ও তৃতীয় সংখ্যার গুণফল ২৪০০ হলে, দ্বিতীয় সংখ্যাটি কত?",
            en: "Among three positive numbers, the ratio of the first and second number is 8:9, and the ratio of the second and third number is 3:4. If the product of the first and third number is 2400, what is the second number?"
        },
        options: {
            bn: ["৩০", "৪০", "৪৫", "৬০"],
            en: ["30", "40", "45", "60"]
        },
        correct: 2
    },
    {
        question: {
            bn: "একটি মোটর গাড়ি ৫ ঘণ্টায় একটি নির্দিষ্ট দূরত্ব অতিক্রম করে। সে মোট দূরত্বের প্রথম অর্ধেক অংশ ৪০ কিমি/ঘণ্টা এবং বাকি অর্ধেক অংশ ৬০ কিমি/ঘণ্টা বেগে অতিক্রম করলে, মোট দূরত্ব কত ছিল?",
            en: "A motor car covers a certain distance in 5 hours. If it covers the first half of the total distance at 40 km/h and the remaining half at 60 km/h, what was the total distance?"
        },
        options: {
            bn: ["২০০০ কিমি", "২৪০ কিমি", "২৫০ কিমি", "৩০০ কিমি"],
            en: ["200 km", "240 km", "250 km", "300 km"]
        },
        correct: 1
    },
    {
        question: {
            bn: "যদি একটি গোলকের ব্যাসার্ধ ৫০% হ্রাস করা হয়, তবে তার বক্রতলের ক্ষেত্রফল শতকরা কত হ্রাস পাবে?",
            en: "If the radius of a sphere is decreased by 50%, by what percentage will its curved surface area decrease?"
        },
        options: {
            bn: ["৫০%", "৭৫%", "৬০%", "২৫%"],
            en: ["50%", "75%", "60%", "25%"]
        },
        correct: 1
    },
    {
        question: {
            bn: "দুধ ও জলের মিশ্রণে ৬০% দুধ আছে। এই প্রকার ২০ কেজি মিশ্রণে আর কত কেজি জল মেশালে দুধে পরিমাণ ৪০% হবে?",
            en: "A mixture of milk and water contains 60% milk. How many kg of water should be added to 20 kg of this mixture so that the milk content becomes 40%?"
        },
        options: {
            bn: ["৮ কেজি", "১০ কেজি", "১২ কেজি", "১৫ কেজি"],
            en: ["8 kg", "10 kg", "12 kg", "15 kg"]
        },
        correct: 1
    },
    {
        question: {
            bn: "স্থির জলে এক ব্যক্তির নৌকার বেগ ৮ কিমি/ঘণ্টা। যদি স্রোতের প্রতিকূলে যেতে স্রোতের অনুকূলে যাওয়ার চেয়ে দ্বিগুণ সময় লাগে, তবে স্রোতের বেগ কত কিমি/ঘণ্টা?",
            en: "The speed of a person's boat in still water is 8 km/h. If it takes twice as much time to go upstream as to go downstream, what is the speed of the stream in km/h?"
        },
        options: {
            bn: ["২ কিমি/ঘণ্টা", "২.৬৬ কিমি/ঘণ্টা", "৩ কিমি/ঘণ্টা", "৪ কিমি/ঘণ্টা"],
            en: ["2 km/h", "2.66 km/h", "3 km/h", "4 km/h"]
        },
        correct: 1
    },
    {
        question: {
            bn: "এক ব্যক্তি একটি টিভি ১০% লাভে বিক্রি করলেন। যদি তিনি সেটি ২০% কম মূল্যে কিনতেন এবং ১০০ টাকা কম মূল্যে বিক্রি করতেন, তবে তাঁর ৪০% লাভ হতো। টিভিটির ক্রয়মূল্য কত ছিল?",
            en: "A person sold a TV at a profit of 10%. If he had bought it at 20% less cost and sold it for ₹100 less, he would have gained 40%. What was the cost price of the TV?"
        },
        options: {
            bn: ["২,০০০ টাকা", "২,৫০০ টাকা", "৩,০০০ টাকা", "৩,৫০০ টাকা"],
            en: ["₹2,000", "₹2,500", "₹3,000", "₹3,500"]
        },
        correct: 1
    },
    {
        question: {
            bn: "৩ বছর আগে পিতা ও পুত্রের বয়সের অনুপাত ছিল ৮:৩। ৪ বছর পর তাদের বয়সের অনুপাত হবে ১১:৫। পিতার বর্তমান বয়স কত বছর?",
            en: "3 years ago, the ratio of the ages of father and son was 8:3. After 4 years, the ratio of their ages will be 11:5. What is the present age of the father?"
        },
        options: {
            bn: ["৪৫ বছর", "৫১ বছর", "৫৯ বছর", "৫৬ বছর"],
            en: ["45 years", "51 years", "59 years", "56 years"]
        },
        correct: 2
    },
    {
        question: {
            bn: "যদি ১০টি লেবুর বিক্রয়মূল্য ১৩টি লেবুর ক্রয়মূল্যের সমান হয়, তবে শতকরা লাভের হার কত?",
            en: "If the selling price of 10 lemons is equal to the cost price of 13 lemons, what is the profit percentage?"
        },
        options: {
            bn: ["২০%", "২৫%", "৩০%", "৩৩.৩%"],
            en: ["20%", "25%", "30%", "33.3%"]
        },
        correct: 2
    },
    {
        question: {
            bn: "A একটি কাজ শুরু করার ৪ দিন পর কাজ ছেড়ে চলে যায়। বাকি কাজ B একাকী ১৮ দিনে শেষ করে। যদি A ৬ দিন পর কাজ ছাড়ত, তবে B বাকি কাজ ১২ দিনে শেষ করত। A একাকী কত দিনে কাজটি করতে পারবে?",
            en: "A leaves a job 4 days after starting it. The remaining work is completed by B alone in 18 days. If A had left the work after 6 days, B would have finished the remaining work in 12 days. In how many days can A alone do the entire work?"
        },
        options: {
            bn: ["১০ দিনে", "১২ দিনে", "১৫ দিনে", "১৬ দিনে"],
            en: ["10 days", "12 days", "15 days", "16 days"]
        },
        correct: 0
    },
    {
        question: {
            bn: "এক ব্যক্তি বার্ষিক ৫% সরল সুদে কিছু টাকা ধার দেন। ৪ বছর পর সুদের পরিমাণ আসল অপেক্ষা ৮০০ টাকা কম হলে, আসলের পরিমাণ কত ছিল?",
            en: "A person lends some money at 5% simple interest per annum. If after 4 years, the amount of interest is ₹800 less than the principal, what was the principal amount?"
        },
        options: {
            bn: ["৮০০ টাকা", "১,০০০ টাকা", "১,২০০ টাকা", "১,৫০০ টাকা"],
            en: ["₹800", "₹1,000", "₹1,200", "₹1,500"]
        },
        correct: 1
    },
    {
        question: {
            bn: "২টি সংখ্যার যোগফল ২০ এবং তাদের মধ্য-সমানুপাতী (Mean Proportional) ৮ হলে, সংখ্যা দুটির বর্গের পার্থক্য কত?",
            en: "The sum of 2 numbers is 20 and their mean proportional is 8. What is the difference between the squares of the two numbers?"
        },
        options: {
            bn: ["১১২", "১২০", "১৩৫", "১৪৪"],
            en: ["112", "120", "135", "144"]
        },
        correct: 1
    },
    {
        question: {
            bn: "একটি বর্গক্ষেত্রের ক্ষেত্রফল এবং তার কর্ণের ওপর অঙ্কিত বর্গক্ষেত্রের ক্ষেত্রফল অনুপাত কত হবে?",
            en: "What will be the ratio of the area of a square to the area of the square drawn on its diagonal?"
        },
        options: {
            bn: ["১:২", "২:১", "১:৪", "√২:১"],
            en: ["1:2", "2:1", "1:4", "√2:1"]
        },
        correct: 0
    },
    {
        question: {
            bn: "যদি ৪^x = ৮^y হয়, তবে (x/y) - ১ এর মান কত হবে?",
            en: "If 4^x = 8^y, then what will be the value of (x/y) - 1?"
        },
        options: {
            bn: ["১/২", "২/৩", "১/৩", "১"],
            en: ["1/2", "2/3", "1/3", "1"]
        },
        correct: 0
    },
    {
        question: {
            bn: "কোনো একটি ধাতব চাদর গলিয়ে ৫ সেমি ব্যাসার্ধ ও ১২ সেমি উচ্চতাবিশিষ্ট একটি নিরেট শঙ্কু তৈরি করা হলো। শঙ্কুটির আয়তন কত ঘনসেমি?",
            en: "A metal sheet was melted to make a solid cone with a radius of 5 cm and a height of 12 cm. What is the volume of the cone in cubic cm?"
        },
        options: {
            bn: ["১০০π", "৩০০π", "১২০π", "৮০π"],
            en: ["100π", "300π", "120π", "80π"]
        },
        correct: 0
    },
    {
        question: {
            bn: "০.৩৬৩৬৩৬... কে সামান্য ভগ্নাংশে রূপান্তর করলে কত হবে?",
            en: "What will 0.363636... be when converted into a vulgar fraction?"
        },
        options: {
            bn: ["৩৬/১০০", "৪/১১", "৯/২৫", "৩/১১"],
            en: ["36/100", "4/11", "9/25", "3/11"]
        },
        correct: 1
    },
    {
        question: {
            bn: "একটি নির্বাচনে জয়ী প্রার্থী মোট ভোটের ৫৪% পেয়ে ১৬০০ ভোটে জয়লাভ করেন। নির্বাচনে মোট কত vote পড়েছিল (যদি কোনো ভোট বাতিল না হয়ে থাকে)?",
            en: "In an election, the winning candidate got 54% of the total votes and won by 1600 votes. How many total votes were cast in the election (if no votes were cancelled)?"
        },
        options: {
            bn: ["১৬,০০০", "২০,০০০", "২৪,০০০", "২৮,০০০"],
            en: ["16,000", "20,000", "24,000", "28,000"]
        },
        correct: 1
    },
    {
        question: {
            bn: "৩টি ঘন্টা একসাথে বাজার পর যথাক্রমে ৯, ১২ এবং ১৫ সেকেন্ড অন্তর বাজতে লাগল। পরবর্তী ৩৬ মিনিটে তারা কতবার একসাথে বাজবে (শুরুর বারটি বাদ দিয়ে)?",
            en: "After tolling together, 3 bells start tolling at intervals of 9, 12, and 15 seconds respectively. How many times will they toll together in the next 36 minutes (excluding the first time)?"
        },
        options: {
            bn: ["১০ বার", "১২ বার", "১৫ বার", "১৮ বার"],
            en: ["10 times", "12 times", "15 times", "18 times"]
        },
        correct: 1
    },
    {
        question: {
            bn: "সরল করুন: ৯৯৯ ১/৭ + ৯৯৯ ২/৭ + ৯৯৯ ৩/৭ + ৯৯৯ ৪/৭ + ৯৯৯ ৫/৭ + ৯৯৯ ৬/৭ = ?",
            en: "Simplify: 999 1/7 + 999 2/7 + 999 3/7 + 999 4/7 + 999 5/7 + 999 6/7 = ?"
        },
        options: {
            bn: ["৫৯৯৪", "৫৯৯৭", "৫৯৯১", "২৯৯৭"],
            en: ["5994", "5997", "5991", "2997"]
        },
        correct: 1
    }
];

// [REASONING - 25 Questions]
const reasoningQuestions = [
    {
        question: {
            bn: "নিচের সিরিজে প্রশ্নবোধক চিহ্নে কী বসবে? 4, 9, 20, 43, 90, ?",
            en: "What will replace the question mark in the series below? 4, 9, 20, 43, 90, ?"
        },
        options: {
            bn: ["180", "183", "185", "187"],
            en: ["180", "183", "185", "187"]
        },
        correct: 2
    },
    {
        question: {
            bn: "যদি 'SNAKE' কে লেখা হয় 'VQDNH', তবে 'CRADLE' কে কী লেখা হবে?",
            en: "If 'SNAKE' is written as 'VQDNH', then how will 'CRADLE' be written?"
        },
        options: {
            bn: ["FUDGOH", "FUDGOH", "FUDGPH", "FUCHOH"],
            en: ["FUDGOH", "FUDGOH", "FUDGPH", "FUCHOH"]
        },
        correct: 0
    },
    {
        question: {
            bn: "একটি ক্লাসের পরীক্ষায় রাম ওপর থেকে ১৬তম এবং নিচ থেকে ২৯তম স্থান লাভ করেছে। পরীক্ষায় ৬ জন ছাত্র অনুপস্থিত ছিল এবং ৫ জন ফেল করেছে। ক্লাসে মোট কতজন ছাত্র আছে?",
            en: "In a class exam, Ram ranked 16th from the top and 29th from the bottom. 6 students were absent and 5 students failed the exam. How many total students are there in the class?"
        },
        options: {
            bn: ["৪৪ জন", "৫০ জন", "৫৫ জন", "৫৬ জন"],
            en: ["44", "50", "55", "56"]
        },
        correct: 2
    },
    {
        question: {
            bn: "ব্লাড রিলেশন পাজল: A + B মানে A হলো B এর কন্যা; A - B মানে A হলো B এর স্বামী; A × B মানে A হলো B এর ভাই। তাহলে P × Q - R + S সংকেতটি অনুযায়ী P এর সাথে S এর সম্পর্ক কী?",
            en: "Blood Relation Puzzle: A + B means A is the daughter of B; A - B means A is the husband of B; A × B means A is the brother of B. Then according to the expression P × Q - R + S, how is P related to S?"
        },
        options: {
            bn: ["জামাই", "শালা/শ্যালক", "নাতি", "মামাতো ভাই"],
            en: ["Son-in-law", "Brother-in-law", "Grandson", "Cousin"]
        },
        correct: 1
    },
    {
        question: {
            bn: "এক ব্যক্তি তাঁর বাড়ি থেকে বেরিয়ে পশ্চিম দিকে ১০ কিমি গেলেন, তারপর বামদিকে ঘুরে ২০ কিমি হাঁটলেন। পুনরায় তিনি পূর্ব দিকে ১০ কিমি গেলেন এবং শেষে উত্তর দিকে ৭ কিমি গিয়ে থামলেন। শুরুর স্থান থেকে তিনি এখন কত দূরে এবং কোন দিকে আছেন?",
            en: "A person leaves his house and goes 10 km towards the West, then turns left and walks 20 km. He then turns towards the East and walks 10 km and finally goes 7 km towards the North and stops. How far and in which direction is he now from his starting point?"
        },
        options: {
            bn: ["১৩ কিমি, দক্ষিণ", "১৩ কিমি, উত্তর", "২০ কিমি, দক্ষিণ", "১৭ কিমি, পূর্ব"],
            en: ["13 km, South", "13 km, North", "20 km, South", "17 km, East"]
        },
        correct: 0
    },
    {
        question: {
            bn: "ইংরেজি বর্ণমালার বামদিক থেকে ৮ম এবং ডানদিক থেকে ৭ম অক্ষরের ঠিক মাঝখানে কোন অক্ষরটি থাকবে?",
            en: "Which letter will be exactly in the middle of the 8th letter from the left and the 7th letter from the right in the English alphabet?"
        },
        options: {
            bn: ["M", "N", "O", "L"],
            en: ["M", "N", "O", "L"]
        },
        correct: 1
    },
    {
        question: {
            bn: "নিচের কোন জোড়াটি বাকি তিনটি জোড়া থেকে আলাদা (Odd One Out)?",
            en: "Which of the following pairs is different from the other three (Odd One Out)?"
        },
        options: {
            bn: ["৮ : ৬৪", "২৭ : ১২৫", "৬৪ : ২১৬", "১২৫ : ৩৪৩"],
            en: ["8 : 64", "27 : 125", "64 : 216", "125 : 343"]
        },
        correct: 0
    },
    {
        question: {
            bn: "একটি ঘড়িতে ২টো ২৫ মিনিট বাজলে ঘণ্টা ও মিনিটের কাঁটার মধ্যবর্তী ক্ষুদ্রতম কোণটি কত ডিগ্রি হবে?",
            en: "When a clock shows 2:25, what will be the value of the acute angle between the hour and minute hands in degrees?"
        },
        options: {
            bn: ["৭২.৫°", "৭৭.৫°", "৮২.৫°", "৮৫°"],
            en: ["72.5°", "77.5°", "82.5°", "85°"]
        },
        correct: 1
    },
    {
        question: {
            bn: "অর্থপূর্ণ ক্রমানুসারে সাজান: ১. পুলিশ, ২. শাস্তি, ৩. অপরাধ, ৪. জজ/বিচারক, ৫. আদালত",
            en: "Arrange in a meaningful logical order: 1. Police, 2. Punishment, 3. Crime, 4. Judge, 5. Court"
        },
        options: {
            bn: ["৩, ১, ৫, ৪, ২", "৩, ১, ৪, ৫, ২", "১, ৩, ৫, ৪, ২", "৩, ৫, ১, ৪, ২"],
            en: ["3, 1, 5, 4, 2", "3, 1, 4, 5, 2", "1, 3, 5, 4, 2", "3, 5, 1, 4, 2"]
        },
        correct: 0
    },
    {
        question: {
            bn: "যদি ৩ মার্চ ২০২০ মঙ্গলবার হয়, তবে ৩ আগস্ট ২০২০ কী বার হবে?",
            en: "If 3rd March 2020 is Tuesday, then what day of the week will 3rd August 2020 be?"
        },
        options: {
            bn: ["সোমবার", "মঙ্গলবার", "বুধবার", "শনিবার"],
            en: ["Monday", "Tuesday", "Wednesday", "Saturday"]
        },
        correct: 0
    },
    {
        question: {
            bn: "নিচের ডায়াগ্রামে লুপ্ত সংখ্যাটি নির্ণয় করুন: সারিতে [৫, ৪, ৯], [৬, ৩, ১০], [৭, ২, ?]",
            en: "Find the missing number in the diagram below: Rows are [5, 4, 9], [6, 3, 10], [7, 2, ?]"
        },
        options: {
            bn: ["১১", "১২", "১৩", "১০"],
            en: ["11", "12", "13", "10"]
        },
        correct: 0
    },
    {
        question: {
            bn: "যেমন 'বিহঙ্গ : পক্ষীবিজ্ঞানী', তেমনই 'জীবাশ্ম : ?'",
            en: "As 'Birds : Ornithologist', in the same way 'Fossils : ?'"
        },
        options: {
            bn: ["ভূবিজ্ঞানী", "প্রত্নতত্ত্ববিদ", "জীবাশ্মবিদ (Paleontologist)", "ইতিহাসবিদ"],
            en: ["Geologist", "Archaeologist", "Paleontologist", "Historian"]
        },
        correct: 2
    },
    {
        question: {
            bn: "একটি সুষম বহুভুজের প্রতিটি অন্তঃকোণ যদি ১৪৪° হয়, তবে বহুভুজটির বাহুর সংখ্যা কত?",
            en: "If each interior angle of a regular polygon is 144°, what is the number of sides of the polygon?"
        },
        options: {
            bn: ["৮টি", "১০টি", "১২টি", "১৫টি"],
            en: ["8", "10", "12", "15"]
        },
        correct: 1
    },
    {
        question: {
            bn: "যদি 'CLOCK' কে কোড ভাষায় '44' লেখা হয়, তবে 'WATCH' কে কী লেখা হবে?",
            en: "If 'CLOCK' is written as '44' in a code language, then how will 'WATCH' be written?"
        },
        options: {
            bn: ["৪৮", "৫০", "৫২", "৫৪"],
            en: ["48", "50", "52", "54"]
        },
        correct: 0
    },
    {
        question: {
            bn: "বিবৃতি ও সিদ্ধান্ত: বিবৃতি ১. সব কবিই অলস। বিবৃতি ২. কোনো অলস মানুষ ধনী নয়। সিদ্ধান্ত: I. কোনো কবি ধনী নয়। II. সব ধনী মানুষই অলস। কোন সিদ্ধান্তটি সঠিক?",
            en: "Statements & Conclusions: Statement 1. All poets are lazy. Statement 2. No lazy man is rich. Conclusions: I. No poet is rich. II. All rich men are lazy. Which conclusion is correct?"
        },
        options: {
            bn: ["শুধুমাত্র I সঠিক", "শুধুমাত্র II সঠিক", "I এবং II উভয়ই সঠিক", "কোনোটিই সঠিক নয়"],
            en: ["Only I follows", "Only II follows", "Both I and II follow", "Neither follows"]
        },
        correct: 0
    },
    {
        question: {
            bn: "ছয়জন ব্যক্তি P, Q, R, S, T, U একটি বৃত্তাকার টেবিলে কেন্দ্রের দিকে মুখ করে বসে আছে। S বসেছে T এর বামদিকে। R বসেছে P এবং T এর মাঝে। P এর বামদিকে U বসেছে। Q এর বিপরীতে কে বসেছে?",
            en: "Six persons P, Q, R, S, T, U are sitting around a circular table facing towards the center. S is sitting to the left of T. R is sitting between P and T. U is sitting to the left of P. Who is sitting opposite to Q?"
        },
        options: {
            bn: ["R", "S", "T", "P"],
            en: ["R", "S", "T", "P"]
        },
        correct: 2
    },
    {
        question: {
            bn: "যদি '÷' মানে '+', '-' মানে '×', '+' মানে '÷' এবং '×' মানে '-' হয়, তবে 15 - 3 + 5 ÷ 4 × 2 = কত?",
            en: "If '÷' means '+', '-' means '×', '+' means '÷' and '×' means '-', then what is 15 - 3 + 5 ÷ 4 × 2 = ?"
        },
        options: {
            bn: ["9", "11", "13", "15"],
            en: ["9", "11", "13", "15"]
        },
        correct: 1
    },
    {
        question: {
            bn: "নিচের আলফানিউমেরিক সিরিজে শূন্যস্থানে কী বসবে? C3, E5, G7, I9, ?",
            en: "What will fill the blank in the alphanumeric series below? C3, E5, G7, I9, ?"
        },
        options: {
            bn: ["K11", "J10", "K13", "L12"],
            en: ["K11", "J10", "K13", "L12"]
        },
        correct: 0
    },
    {
        question: {
            bn: "একটি পাশার (Dice) ৩টি অবস্থান দেওয়া হলো। ৪ এর বিপরীতে কোন সংখ্যাটি থাকবে? [অবস্থান ১: ১, ৪, ২] [অবস্থান ২: ২, ৩, ৫] [অবস্থান ৩: ১, ৫,６]",
            en: "Three positions of a dice are given. Which number will be opposite to 4? [Position 1: 1, 4, 2] [Position 2: 2, 3, 5] [Position 3: 1, 5, 6]"
        },
        options: {
            bn: ["৩", "৫", "৬", "২"],
            en: ["3", "5", "6", "2"]
        },
        correct: 1
    },
    {
        question: {
            bn: "যদি গতকালের আগের দিন শনিবার হয়, তবে আগামীকালের তিনদিন পর কী বার হবে?",
            en: "If the day before yesterday was Saturday, then what day will it be three days after tomorrow?"
        },
        options: {
            bn: ["শুক্রবার", "শনিবার", "রবিবার", "বৃহস্পতিবার"],
            en: ["Friday", "Saturday", "Sunday", "Thursday"]
        },
        correct: 0
    },
    {
        question: {
            bn: "বেমানান শব্দটি চিহ্নিত করুন: আদা, পেঁয়াজ, আলু, টমেটো",
            en: "Find the odd word out: Ginger, Onion, Potato, Tomato"
        },
        options: {
            bn: ["আদা", "পেঁয়াজ", "আলু", "টমেটো"],
            en: ["Ginger", "Onion", "Potato", "Tomato"]
        },
        correct: 3
    },
    {
        question: {
            bn: "একটি ছবির দিকে তাকিয়ে এক ভদ্রমহিলা বললেন, 'ওর মা হলেন আমার মায়ের একমাত্র কন্যা'। ছবির ব্যক্তিটি ভদ্রমহিলার কে হন?",
            en: "Looking at a picture, a lady said, 'His/Her mother is the only daughter of my mother'. How is the person in the picture related to the lady?"
        },
        options: {
            bn: ["বোন", "ভাগ্নি/কন্যা", "মা", "পিসি"],
            en: ["Sister", "Niece/Daughter", "Mother", "Paternal Aunt"]
        },
        correct: 1
    },
    {
        question: {
            bn: "শব্দ সংকেত: যদি 'SKY' = 55, 'BLUE' = 40 হয়, তবে 'ORANGE' = কত হবে?",
            en: "Word Code: If 'SKY' = 55, 'BLUE' = 40, then 'ORANGE' = ?"
        },
        options: {
            bn: ["৬০", "৬৫", "৭০", "৭৫"],
            en: ["60", "65", "70", "75"]
        },
        correct: 0
    },
    {
        question: {
            bn: "ইংরেজি বর্ণমালায় ডানদিক থেকে ২০তম অক্ষরের ডানদিকের ৫ম অক্ষর কোনটি?",
            en: "Which letter is 5th to the right of the 20th letter from the right in the English alphabet?"
        },
        options: {
            bn: ["L", "M", "N", "O"],
            en: ["L", "M", "N", "O"]
        },
        correct: 0
    },
    {
        question: {
            bn: "নিচের ভেন ডায়াগ্রামগুলির মধ্যে কোনটি 'পাখি, পায়রা, কুকুর' এর মধ্যে সম্পর্ক নির্দেশ করে?",
            en: "Which of the following Venn diagrams indicates the relationship between 'Bird, Pigeon, Dog'?"
        },
        options: {
            bn: ["একটি বড় বৃত্তের ভেতর দুটি আলাদা বৃত্ত", "একটি বড় বৃত্তের ভেতর একটি ছোট বৃত্ত এবং অন্যটি সম্পূর্ণ আলাদা", "তিনটি পরস্পরচ্ছেদী বৃত্ত", "সবগুলো আলাদা বৃত্ত"],
            en: ["Two separate circles inside a large circle", "One small circle inside a large circle and another completely separate", "Three intersecting circles", "All separate circles"]
        },
        correct: 1
    }
];

// [ENGLISH - 10 Questions]
const englishQuestions = [
    {
        question: {
            bn: "নিচের শব্দটির বিপরীতার্থক শব্দ চয়ন করুন: 'TRANSPARENT'",
            en: "Choose the word which is most nearly OPPOSITE in meaning to 'TRANSPARENT':"
        },
        options: {
            bn: ["Clear", "Opaque", "Translucent", "Bright"],
            en: ["Clear", "Opaque", "Translucent", "Bright"]
        },
        correct: 1
    },
    {
        question: {
            bn: "প্রদত্ত শব্দটির সঠিক সমার্থক শব্দ চিহ্নিত করুন: 'GENUINE'",
            en: "Identify the correct synonym of the given word: 'GENUINE'"
        },
        options: {
            bn: ["Fake", "Authentic", "False", "Artificial"],
            en: ["Fake", "Authentic", "False", "Artificial"]
        },
        correct: 1
    },
    {
        question: {
            bn: "উপযুক্ত Preposition দিয়ে শূন্যস্থান পূরণ করুন: The culprit was accompanied ______ the police.",
            en: "Fill in the blank with appropriate preposition: The culprit was accompanied ______ the police."
        },
        options: {
            bn: ["by", "with", "to", "for"],
            en: ["by", "with", "to", "for"]
        },
        correct: 0
    },
    {
        question: {
            bn: "নিচের বিকল্পগুলি থেকে সঠিক বানানটি খুঁজে বের করুন:",
            en: "Find the correctly spelt word from the options below:"
        },
        options: {
            bn: ["Maintanance", "Maintenance", "Maintenence", "Mentainance"],
            en: ["Maintanance", "Maintenance", "Maintenence", "Mentainance"]
        },
        correct: 1
    },
    {
        question: {
            bn: "Voice Change করুন: 'Shut the window.'",
            en: "Change the voice: 'Shut the window.'"
        },
        options: {
            bn: ["The window should shut.", "Let the window be shut.", "You are asked to shut window.", "Let window shut."],
            en: ["The window should shut.", "Let the window be shut.", "You are asked to shut window.", "Let window shut."]
        },
        correct: 1
    },
    {
        question: {
            bn: "Idioms & Phrases: 'To cry wolf' কথাটির অর্থ কী?",
            en: "Idioms & Phrases: What is the meaning of 'To cry wolf'?"
        },
        options: {
            bn: ["To give a false alarm", "To weep bitterly", "To listen carefully", "To overcome fear"],
            en: ["To give a false alarm", "To weep bitterly", "To listen carefully", "To overcome fear"]
        },
        correct: 0
    },
    {
        question: {
            bn: "One word substitution: 'A remedy for all diseases'",
            en: "One word substitution: 'A remedy for all diseases'"
        },
        options: {
            bn: ["Antidote", "Panacea", "Antibiotic", "Placebo"],
            en: ["Antidote", "Panacea", "Antibiotic", "Placebo"]
        },
        correct: 1
    },
    {
        question: {
            bn: "শূন্যস্থান পূরণ করুন: If I ______ a king, I would help the poor.",
            en: "Fill in the blank: If I ______ a king, I would help the poor."
        },
        options: {
            bn: ["was", "were", "am", "had"],
            en: ["was", "were", "am", "had"]
        },
        correct: 1
    },
    {
        question: {
            bn: "সঠিক Article দিয়ে শূন্যস্থান পূরণ করুন: Gold is ______ useful metal.",
            en: "Fill in the blank with correct article: Gold is ______ useful metal."
        },
        options: {
            bn: ["a", "an", "the", "no article"],
            en: ["a", "an", "the", "no article"]
        },
        correct: 0
    },
    {
        question: {
            bn: "বাক্যের যে অংশে ভুল আছে তা চিহ্নিত করুন: 'Neither of the two path / lead / to the station.'",
            en: "Identify the part of the sentence that contains an error: 'Neither of the two path / lead / to the station.'"
        },
        options: {
            bn: ["Neither of the two path", "lead", "to the station", "No error"],
            en: ["Neither of the two path", "lead", "to the station", "No error"]
        },
        correct: 1
    }
];

// Map and Combine all categories into rawQuestions
const rawQuestions = [
    ...gkQuestions.map(q => ({ ...q, subject: "General Knowledge" })),
    ...mathQuestions.map(q => ({ ...q, subject: "Mathematics" })),
    ...reasoningQuestions.map(q => ({ ...q, subject: "Reasoning" })),
    ...englishQuestions.map(q => ({ ...q, subject: "English" }))
];
