const megaData = {
    "wb_police": {
        mock: {
            "Full Tests": [
                { 
                    name: "WB Police Constable Mock 1", 
                    link: "Mocktestformat.html?testfile=WBP_mock_test/WBP_constable/WBP_constable_mock1",
                    totalQ: 85,    
                    time: "30 Min" 
                },
                { 
                    name: "WB Police SI Premium Mock", 
                    link: "Mocktestformat.html?testfile=WBP_mock_test/WBP_SI/WBP_SI_mock1",
                    totalQ: 100,
                    time: "90 Min"
                }
            ],
            "Weekly Tests": [
                { name: "KP Constable Weekly Test 1", link: "Mocktestformat.html?testfile=KP_mock_test/KP_weekly/KP_weekly_test1", totalQ: 50, time: "45 Min" },
                // নিচের টেস্টটিতে লিঙ্ক "Coming Soon" দেওয়ায় এটি লক হয়ে দেখাবে:
                { name: "KP Constable Weekly Test 2", link: "Coming Soon", totalQ: 50, time: "45 Min" }
            ]
        },
        current: {
            "সাম্প্রতিক ঘটনা": {
                "জাতীয় খবর": [
                    { name: "কারেন্ট অ্যাফেয়ার্স মক ১", link: "Coming Soon" } // লিঙ্ক নেই, তাই কামিং সুন দেখাবে
                ]
            }
        },
        pyp: {
            "Maths": {
                "Number system": {
                    "Percentage": [
                        { name: "WBP PYP Percentage 2021", link: "Mocktestformat.html" }
                    ]
                }
            }
        },
        subject: {
            "GK": {
                "History": {
                    "Mughal Empire": [
                        { name: "Mughal History Test", link: "" } // খালি স্ট্রিং রাখলেও কামিং সুন হবে
                    ]
                }
            }
        }
    },
    "wbpsc": {
        mock: {
            "Clerkship Mock": [
                { name: "PSC Clerkship Free Mock 1", link: "Mocktestformat.html" }
            ]
        },
        current: {
            "Current Affairs 2026": {
                "Awards": [
                    { name: "National Awards Mock", link: "Mocktestformat.html" }
                ]
            }
        },
        pyp: {
            "English": {
                "Grammar": {
                    "Synonyms": [
                        { name: "PSC English Synonyms Mock", link: "Mocktestformat.html" }
                    ]
                }
            }
        }
    },
    "railway": {
        mock: {
            "RRB NTPC": [
                { name: "NTPC CBT-1 Mock 1", link: "Mocktestformat.html" },
                { name: "NTPC CBT-1 Premium Mock 2", link: "Mocktestformat.html" }
            ],
            "Group D": [
                { name: "Railway Group D Mock 1", link: "Mocktestformat.html" }
            ]
        },
        current: {
            "Railway CA 2026": {
                "Budget & Sports": [
                    { name: "Railway Special CA Mock", link: "Mocktestformat.html" }
                ]
            }
        },
        pyp: {
            "General Science": {
                "Physics": {
                    "Light & Optics": [
                        { name: "RRB Group D PYP Physics", link: "Mocktestformat.html" }
                    ]
                }
            }
        },
        subject: {
            "Reasoning": {
                "Verbal": {
                    "Blood Relation": [
                        { name: "Reasoning Blood Relation Mock", link: "Mocktestformat.html" }
                    ]
                }
            }
        }
    },
    "free_test": {
        mock: {
            "free_test": [
                { name: "NTPC CBT-1 Mock 1", link: "Mocktestformat.html" }
            ]
        }
    }
};
