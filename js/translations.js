/**
 * ENGLISH CORNER — Comprehensive Multilingual Translations File (English & Malayalam)
 * Maps i18n keys to English and authentic Malayalam equivalents for the entire website.
 */

const translationsData = {
  en: {
    // Top Bar & Navigation
    nav_home: "Home",
    nav_why: "Why Us",
    nav_courses: "Courses",
    nav_assessment: "Level Assessment",
    nav_video_reviews: "Video Reviews",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    btn_talk_whatsapp: "Talk on WhatsApp",

    // Language modal
    lang_modal_welcome: "Welcome to English Corner",
    lang_modal_sub: "Choose your preferred language / നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കൂ:",
    lang_modal_continue: "Continue / മുന്നോട്ട് പോവുക",

    // Preloader & Hero
    preloader_tagline: "“Speak First, Correct Later.”",
    hero_cat_spoken: "SPOKEN ENGLISH",
    hero_cat_ielts: "IELTS",
    hero_cat_interview: "INTERVIEW",
    hero_cat_career: "CAREER SKILLS",
    hero_tagline: "Speak First, Correct Later.",
    hero_intro_head: "English Doesn't Have to Be Perfect. It Just Has to Begin.",
    hero_intro_body: "English Corner is a friendly space where you can practise English without the fear of making mistakes. Learn grammar, build vocabulary, and turn what you learn into real conversations.",
    hero_intro_punchline: "Because confidence doesn't come before speaking. It comes through speaking.",
    hero_title_1: "Speak English",
    hero_title_2: "with Confidence",
    hero_desc: "Personalised, live, one-to-one training to help you speak better, crack interviews, and grow your career.",
    hero_btn_book: "Book a Free Assessment",
    hero_stat_learners: "Happy Learners",
    hero_stat_rating: "Google Learner Rating",

    // Ribbon Bar
    ribbon_ielts_l1: "IELTS",
    ribbon_ielts_l2: "Training",
    ribbon_interview_l1: "Interview",
    ribbon_interview_l2: "Training",
    ribbon_career_l1: "Career Skills",
    ribbon_career_l2: "Training",
    ribbon_spoken_l1: "Personalised",
    ribbon_spoken_l2: "Spoken English",

    // Section 2: Why English Corner?
    why_tag: "OUR APPROACH",
    why_title_1: "Why",
    why_title_2: "English Corner?",
    why_sub: "A supportive, real-world learning space built to take you from hesitation to natural speaking fluency.",
    why_card1_title: "Speak More",
    why_card1_desc: "Practise English through everyday conversations.",
    why_card2_title: "Learn Naturally",
    why_card2_desc: "Understand grammar and vocabulary through practical examples.",
    why_card3_title: "Personalised Learning",
    why_card3_desc: "Learn according to your level and learning needs.",
    why_card4_title: "Improve Gradually",
    why_card4_desc: "Make mistakes, receive feedback, and keep improving.",

    // Section 3: Level Assessment Banner
    assess_title: "How Good Is Your Spoken English? Find Out Free",
    assess_desc: "Take a quick, free assessment and get a personalised learning plan based on your current level and goals.",
    assess_btn: "Check Your English Level",

    // Courses Section
    courses_title_1: "Find the Right",
    courses_title_2: "Course for You",
    courses_sub: "Focused programs for real-life goals — from exams to career growth.",
    courses_btn_view_all: "View All Courses",

    course1_title: "IELTS Training",
    course1_desc: "Complete preparation for a higher band score with listening, reading, writing & speaking practice.",
    course2_title: "Interview Training",
    course2_desc: "Get interview-ready with real practice, self-introductions, and expert guidance to crack HR & tech rounds.",
    course3_title: "Career Skills Training",
    course3_desc: "Build the communication and professional skills you need at work: meetings, presentations & emails.",
    course4_title: "Personalised Spoken English",
    course4_desc: "One-to-one live training, tailored to your level, goals and pace. Overcome Malayalam-to-English translation fear.",

    // About Section
    about_tag: "ABOUT ENGLISH CORNER",
    about_title_1: "More Than a Course,",
    about_title_2: "A Confidence Journey.",
    about_desc: "English Corner is a Trivandrum-based English training institute that helps learners speak English fluently, confidently, and naturally — through personalised, practical, and result-oriented training.",
    about_pillar1: "Personalised Learning",
    about_pillar2: "Live Training",
    about_pillar3: "Flexible Scheduling",
    about_pillar4: "Result-Focused",
    about_btn: "Know More About Us",

    // Video Reviews Section
    video_tag: "REAL STUDENT STORIES & REELS",
    video_title_1: "Student",
    video_title_2: "Video Reviews & Reels",
    video_sub: "Watch our latest speaking tips, real conversation exercises, and learner transformations on Instagram.",
    video_reel_badge: "9:16 REEL",
    reel1_badge: "Speaking Practice",
    reel1_name: "Daily English Expressions",
    reel1_role: "@englishcorner.in • Instagram",
    reel1_caption: "“You look familiar / I can't quite place you — 4 smart ways to say you know someone's face!”",
    reel2_badge: "Corporate English",
    reel2_name: "Corporate Vocabulary",
    reel2_role: "Workplace Fluency • English Corner",
    reel2_caption: "“Layoff, Severance Pay, Restructuring — essential corporate English words you must know.”",
    reel3_badge: "Fluency Drills",
    reel3_name: "Pronunciation & Confidence",
    reel3_role: "Live 1-on-1 Practice • Trivandrum",
    reel3_caption: "“Break hesitation and master conversational English through natural real-time examples.”",
    reel4_badge: "Malayalam to English",
    reel4_name: "Stop Word-by-Word Translation",
    reel4_role: "Speak First, Correct Later",
    reel4_caption: "“Don't translate words — express the meaning! How to overcome mental translation.”",
    reel5_badge: "Trending Slang",
    reel5_name: "Smart Comebacks & Slang",
    reel5_role: "Modern Vocabulary • English Corner",
    reel5_caption: "“What SAVAGE actually means and how to use modern English expressions naturally.”",

    // Reviews & Google Section
    reviews_tag: "VERIFIED TESTIMONIALS",
    reviews_title_1: "What Our",
    reviews_title_2: "Learners Say",
    reviews_sub: "Real experiences. Real progress. From learners who transformed their speaking at English Corner.",
    google_badge_text: "Based on 120+ Google Reviews",
    google_verified: "Google Verified",
    google_review_tag: "Google Review",

    // FAQ Section
    faq_title: "Have Questions?",
    faq_sub: "Find answers to common questions about our courses, learning process, and enrolment.",
    faq_btn_view: "View FAQ",

    faq_q1: "How are the training sessions conducted?",
    faq_a1: "All training sessions are conducted live, one-to-one via Google Meet. Each session is 30 minutes per day, ensuring 100% focused attention on you without the hesitation or distractions of group batches.",
    faq_q2: "I mostly speak Malayalam and translate in my head. Can I join?",
    faq_a2: "Yes, absolutely! Most of our learners in Kerala share this exact concern. Our trainers in Trivandrum provide a supportive, judgment-free atmosphere where you can ease into English comfortably and gradually eliminate mental translation.",
    faq_q3: "Can I choose my own class timings?",
    faq_a3: "Yes. We offer flexible scheduling from early morning to late evening, tailored to college students, working professionals, and homemakers (subject to trainer slot availability).",
    faq_q4: "What is the difference between the Standard Plan and Mastery Plan?",
    faq_a4: "The Standard Plan (30+ sessions) is ideal for learners who already know basic English and want to sharpen their fluency and boost speaking confidence. The Mastery Plan (60 sessions) is an intensive foundation-to-fluency program with mock interviews, presentation drills, and advanced conversation practice.",
    faq_q5: "What happens if I miss a scheduled class?",
    faq_a5: "We understand unexpected work or college commitments. If you inform us in advance, your session can be easily rescheduled without losing your session credit.",
    faq_q6: "Is there a free assessment before I join?",
    faq_a6: "Yes! You can take our online level quiz or book a free 1-on-1 diagnostic call with our academic coordinator. We will assess your current English speaking level and recommend the exact roadmap for you.",

    // Final CTA
    cta_title_1: "Start Your",
    cta_title_2: "English Journey Today",
    cta_sub: "Book a free assessment, talk to our team, and get a learning plan that fits you.",
    cta_btn: "Enquire Now",

    // Contact Section
    contact_tag: "GET IN TOUCH",
    contact_title_1: "Visit or Contact",
    contact_title_2: "English Corner",
    contact_sub: "Have specific questions regarding our courses, timing, or trainer matching? Connect directly with our Trivandrum institute team.",
    contact_location_title: "Institute Location",
    contact_location_val: "Trivandrum, Kerala, India",
    contact_phone_title: "WhatsApp / Phone",
    contact_email_title: "Official Email",

    contact_form_title: "Quick Enquiry",
    contact_lbl_name: "Your Name",
    contact_ph_name: "e.g. Rahul Sharma",
    contact_lbl_phone: "WhatsApp Number",
    contact_ph_phone: "+91 98765 43210",
    contact_lbl_email: "Email Address",
    contact_ph_email: "you@email.com",
    contact_lbl_msg: "Message / Questions",
    contact_ph_msg: "Tell us about your goals (e.g. IELTS, Job Interview, Daily Fluency)",
    contact_btn_submit: "Submit & Chat on WhatsApp",

    // Footer
    footer_quick_links: "Quick Links",
    footer_follow: "Follow Us",
    footer_rights: "© 2025 English Corner. All Rights Reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms & Conditions",
    floating_wa_tip: "Chat with Trainer on WhatsApp",

    // Booking Modal
    modal_book_tag: "GET STARTED",
    modal_book_title_1: "Book a Free",
    modal_book_title_2: "Assessment",
    modal_book_desc: "Speak 1-on-1 with an expert trainer. We will evaluate your current speaking level and design a custom roadmap.",
    modal_book_name: "Full Name *",
    modal_book_phone: "WhatsApp Number *",
    modal_book_course: "Interested Course / Plan *",
    modal_book_time: "Preferred Slot Timing",
    modal_book_notes: "Current English Level or Specific Goal (Optional)",
    modal_book_notes_ph: "e.g. Hesitant speaking English, preparing for IT interview next month",
    modal_book_submit: "Confirm & Open WhatsApp"
  },

  ml: {
    // Top Bar & Navigation
    nav_home: "ഹോം",
    nav_why: "എന്തുകൊണ്ട് ഞങ്ങളെ?",
    nav_courses: "കോഴ്സുകൾ",
    nav_assessment: "ലെവൽ ടെസ്റ്റ്",
    nav_video_reviews: "വീഡിയോ റിവ്യൂസ്",
    nav_reviews: "അഭിപ്രായങ്ങൾ",
    nav_faq: "ചോദ്യങ്ങൾ",
    nav_contact: "ബന്ധപ്പെടുക",
    btn_talk_whatsapp: "വാട്സാപ്പിൽ സംസാരിക്കൂ",

    // Language modal
    lang_modal_welcome: "ഇംഗ്ലീഷ് കോർണറിലേക്ക് സ്വാഗതം",
    lang_modal_sub: "നിങ്ങൾക്ക് അനുയോജ്യമായ ഭാഷ തിരഞ്ഞെടുക്കൂ:",
    lang_modal_continue: "തുടങ്ങാം / മുന്നോട്ട് പോവുക",

    // Preloader & Hero
    preloader_tagline: "“ആദ്യം സംസാരിക്കൂ, തിരുത്തലുകൾ പിന്നാലെ.”",
    hero_cat_spoken: "സ്പോക്കൺ ഇംഗ്ലീഷ്",
    hero_cat_ielts: "ഐ.ഇ.എൽ.ടി.എസ്",
    hero_cat_interview: "ഇന്റർവ്യൂ ട്രെയിനിംഗ്",
    hero_cat_career: "കരിയർ സ്കിൽസ്",
    hero_tagline: "Speak First, Correct Later. (ആദ്യം സംസാരിക്കൂ, തിരുത്തലുകൾ പിന്നാലെ)",
    hero_intro_head: "ഇംഗ്ലീഷ് തെറ്റുകൂടാതെ പെർഫെക്റ്റ് ആവേണ്ടതില്ല. ആദ്യം സംസാരിച്ചു തുടങ്ങുകയാണ് വേണ്ടത്.",
    hero_intro_body: "തെറ്റുകൾ വരുമോയെന്ന ഭയമില്ലാതെ ഇംഗ്ലീഷ് സംസാരിച്ചു പരിശീലിക്കാൻ സൗഹൃദപരമായ ഒരിടമാണ് ഇംഗ്ലീഷ് കോർണർ. വ്യാകരണവും പദസമ്പത്തും പഠിച്ച്, പഠിച്ച കാര്യങ്ങൾ യഥാർത്ഥ സംഭാഷണങ്ങളാക്കി മാറ്റൂ.",
    hero_intro_punchline: "കാരണം ആത്മവിശ്വാസം വന്നിട്ടല്ല സംസാരിക്കേണ്ടത്, സംസാരിച്ചു തുടങ്ങുമ്പോഴാണ് ആത്മവിശ്വാസം ഉണ്ടാവുന്നത്.",
    hero_title_1: "ആത്മവിശ്വാസത്തോടെ",
    hero_title_2: "ഇംഗ്ലീഷ് സംസാരിക്കാം",
    hero_desc: "ഗൂഗിൾ മീറ്റിലൂടെ ലൈവ് വൺ-ടു-വൺ ട്രെയിനിംഗ്. ഇന്റർവ്യൂകൾ ജയിക്കാനും മികച്ച കരിയറിനും ഞങ്ങളോടൊപ്പം സംസാരിച്ചു തുടങ്ങൂ.",
    hero_btn_book: "സൗജന്യ ലെവൽ ടെസ്റ്റ് ബുക്ക് ചെയ്യൂ",
    hero_stat_learners: "വിജയകരമായി പൂർത്തിയാക്കിയവർ",
    hero_stat_rating: "ഗൂഗിൾ റേറ്റിംഗ്",

    // Ribbon Bar
    ribbon_ielts_l1: "IELTS",
    ribbon_ielts_l2: "ട്രെയിനിംഗ്",
    ribbon_interview_l1: "ഇന്റർവ്യൂ",
    ribbon_interview_l2: "ട്രെയിനിംഗ്",
    ribbon_career_l1: "കരിയർ സ്കിൽസ്",
    ribbon_career_l2: "ട്രെയിനിംഗ്",
    ribbon_spoken_l1: "പേഴ്സണലൈസ്ഡ്",
    ribbon_spoken_l2: "സ്പോക്കൺ ഇംഗ്ലീഷ്",

    // Section 2: Why English Corner?
    why_tag: "ഞങ്ങളുടെ പ്രത്യേകതകൾ",
    why_title_1: "എന്തുകൊണ്ട്",
    why_title_2: "ഇംഗ്ലീഷ് കോർണർ?",
    why_sub: "നിങ്ങളുടെ ഉള്ളിലെ സംശയങ്ങളും ഭയവും മാറ്റി ആത്മവിശ്വാസത്തോടെ ഇംഗ്ലീഷ് സംസാരിക്കാൻ സഹായിക്കുന്ന സൗഹൃദ ഇടം.",
    why_card1_title: "കൂടുതൽ സംസാരിക്കാം",
    why_card1_desc: "ദൈനംദിന ജീവിതത്തിലെ സംഭാഷണങ്ങളിലൂടെ ഇംഗ്ലീഷ് സംസാരിച്ചു ശീലിക്കുക.",
    why_card2_title: "ലളിതമായി പഠിക്കാം",
    why_card2_desc: "പ്രാക്ടിക്കൽ ഉദാഹരണങ്ങളിലൂടെ ഗ്രാമറും പുതിയ വാക്കുകളും സ്വായത്തമാക്കുക.",
    why_card3_title: "വ്യക്തിഗത ശ്രദ്ധ (Personalised)",
    why_card3_desc: "നിങ്ങളുടെ ഇപ്പോഴത്തെ കഴിവിനും ആവശ്യങ്ങൾക്കും അനുസരിച്ചുള്ള പ്രത്യേക പരിശീലനം.",
    why_card4_title: "പടിപടിയായുള്ള പുരോഗതി",
    why_card4_desc: "തെറ്റുകൾ തിരുത്തി കൃത്യമായ ഫീഡ്‌ബാക്കിലൂടെ ദിവസംതോറും മുന്നേറുക.",

    // Section 3: Level Assessment Banner
    assess_title: "നിങ്ങളുടെ ഇംഗ്ലീഷ് സംസാരിക്കാനുള്ള കഴിവ് എത്രത്തോളമുണ്ട്? സൗജന്യമായി അറിയൂ",
    assess_desc: "ലളിതമായ സൗജന്യ ടെസ്റ്റിലൂടെ നിങ്ങളുടെ ലെവൽ കൃത്യമായി മനസ്സിലാക്കി അനുയോജ്യമായ പഠനപദ്ധതി കണ്ടെത്തൂ.",
    assess_btn: "ഇംഗ്ലീഷ് ലെവൽ പരിശോധിക്കൂ",

    // Courses Section
    courses_title_1: "നിങ്ങൾക്ക് ഏറ്റവും അനുയോജ്യമായ",
    courses_title_2: "കോഴ്സ് തിരഞ്ഞെടുക്കൂ",
    courses_sub: "പരീക്ഷകൾക്കും അഭിമുഖങ്ങൾക്കും ജോലിസ്ഥലത്തെ ആശയവിനിമയത്തിനും പ്രത്യേക കോഴ്സുകൾ.",
    courses_btn_view_all: "എല്ലാ കോഴ്സുകളും കാണുക",

    course1_title: "IELTS ട്രെയിനിംഗ്",
    course1_desc: "ലിസണിംഗ്, റീഡിംഗ്, റൈറ്റിംഗ്, സ്പീക്കിംഗ് എന്നിവയിൽ ഉയർന്ന ബാൻഡ് സ്കോർ ഉറപ്പാക്കാനുള്ള സമ്പൂർണ്ണ പരിശീലനം.",
    course2_title: "ഇന്റർവ്യൂ ട്രെയിനിംഗ്",
    course2_desc: "HR & ടെക്നിക്കൽ റൗണ്ടുകൾ ആത്മവിശ്വാസത്തോടെ നേരിടാൻ മോക്ക് ഇന്റർവ്യൂകളും വിദഗ്ധ പരിശീലനവും.",
    course3_title: "കരിയർ സ്കിൽസ് ട്രെയിനിംഗ്",
    course3_desc: "ജോലിസ്ഥലത്തെ മീറ്റിംഗുകൾ, പ്രസന്റേഷനുകൾ, പ്രൊഫഷണൽ ഇമെയിലുകൾ എന്നിവയ്ക്കായുള്ള ഇംഗ്ലീഷ് സംഭാഷണ പരിശീലനം.",
    course4_title: "പേഴ്സണലൈസ്ഡ് സ്പോക്കൺ ഇംഗ്ലീഷ്",
    course4_desc: "ട്രെയിനറുമായി നേരിട്ട് വൺ-ടു-വൺ ലൈവ് ക്ലാസുകൾ. മലയാളത്തിൽ നിന്ന് ഇംഗ്ലീഷിലേക്ക് ചിന്തിച്ച് സംസാരിക്കുന്ന ശീലം മാറ്റിയെടുക്കാം.",

    // About Section
    about_tag: "ഇംഗ്ലീഷ് കോർണറിനെക്കുറിച്ച്",
    about_title_1: "വെറുമൊരു ക്ലാസ് മാത്രമല്ല,",
    about_title_2: "ആത്മവിശ്വാസത്തിലേക്കുള്ള വഴി.",
    about_desc: "തിരുവനന്തപുരത്തെ മുൻനിര ഇംഗ്ലീഷ് ട്രെയിനിംഗ് ഇൻസ്റ്റിറ്റ്യൂട്ടാണ് ഇംഗ്ലീഷ് കോർണർ. വ്യക്തിഗത ശ്രദ്ധയും പ്രാക്ടിക്കൽ പരിശീലനവും വഴി നിങ്ങളെ സ്വാഭാവികമായി ഇംഗ്ലീഷ് സംസാരിക്കാൻ പ്രാപ്തരാക്കുന്നു.",
    about_pillar1: "വ്യക്തിഗത പരിശീലനം",
    about_pillar2: "ലൈവ് വൺ-ടു-വൺ ക്ലാസുകൾ",
    about_pillar3: "സൗകര്യപ്രദമായ സമയക്രമം",
    about_pillar4: "100% റിസൾട്ട് ഓറിയന്റഡ്",
    about_btn: "ഞങ്ങളെക്കുറിച്ച് കൂടുതൽ അറിയാം",

    // Video Reviews Section
    video_tag: "വിദ്യാർത്ഥികളുടെ അനുഭവങ്ങളും റീൽസും",
    video_title_1: "വിദ്യാർത്ഥികളുടെ",
    video_title_2: "വീഡിയോ റിവ്യൂസും റീൽസും",
    video_sub: "സ്പോക്കൺ ഇംഗ്ലീഷ് ടിപ്പുകളും യഥാർത്ഥ സംഭാഷണ വ്യായാമങ്ങളും ഞങ്ങളുടെ ഇൻസ്റ്റാഗ്രാം റീൽസിലൂടെ കാണാം.",
    video_reel_badge: "9:16 റീൽ",
    reel1_badge: "സംസാര പരിശീലനം",
    reel1_name: "ദൈനംദിന ഇംഗ്ലീഷ് പ്രയോഗങ്ങൾ",
    reel1_role: "@englishcorner.in • ഇൻസ്റ്റാഗ്രാം",
    reel1_caption: "“You look familiar / I can't quite place you — പരിചയമുള്ള മുഖം കാണുമ്പോൾ ഇംഗ്ലീഷിൽ പറയാൻ 4 വഴികൾ!”",
    reel2_badge: "കോർപ്പറേറ്റ് ഇംഗ്ലീഷ്",
    reel2_name: "കോർപ്പറേറ്റ് പദാവലി",
    reel2_role: "ഓഫീസ് സംസാര ശൈലി • ഇംഗ്ലീഷ് കോർണർ",
    reel2_caption: "“Layoff, Severance Pay, Restructuring — ജോലിസ്ഥലത്ത് അറിഞ്ഞിരിക്കേണ്ട സുപ്രധാന ഇംഗ്ലീഷ് വാക്കുകൾ.”",
    reel3_badge: "ഫ്ലുവെൻസി ഡ്രിൽസ്",
    reel3_name: "ഉച്ചാരണവും ആത്മവിശ്വാസവും",
    reel3_role: "ലൈവ് 1-on-1 പരിശീലനം • തിരുവനന്തപുരം",
    reel3_caption: "“മടി മാറ്റി സ്വാഭാവിക ഉദാഹരണങ്ങളിലൂടെ ലളിതമായി ഇംഗ്ലീഷ് സംസാരിക്കാൻ പഠിക്കാം.”",
    reel4_badge: "മലയാളത്തിൽ നിന്ന് ഇംഗ്ലീഷിലേക്ക്",
    reel4_name: "നേർക്കുനേർ തർജ്ജമ അവസാനിപ്പിക്കാം",
    reel4_role: "Speak First, Correct Later",
    reel4_caption: "“വാക്കുകളല്ല, ആശയമാണ് പ്രകടിപ്പിക്കേണ്ടത്! മനസ്സിലെ തർജ്ജമ മാറ്റാൻ എളുപ്പവഴികൾ.”",
    reel5_badge: "ട്രെൻഡിംഗ് സ്ലാങ്",
    reel5_name: "സ്മാർട്ട് മറുപടികളും സ്ലാങ്ങും",
    reel5_role: "ആധുനിക പദാവലി • ഇംഗ്ലീഷ് കോർണർ",
    reel5_caption: "“SAVAGE എന്ന വാക്കിന്റെ യഥാർത്ഥ അർത്ഥവും അത് ആധുനിക ഇംഗ്ലീഷിൽ ഉപയോഗിക്കേണ്ട രീതിയും.”",

    // Reviews & Google Section
    reviews_tag: "യഥാർത്ഥ അഭിപ്രായങ്ങൾ",
    reviews_title_1: "പഠിതാക്കൾ",
    reviews_title_2: "പറയുന്നത്",
    reviews_sub: "ഇംഗ്ലീഷ് കോർണറിലൂടെ സംസാരത്തിൽ വിപ്ലവകരമായ മാറ്റം കൊണ്ടുവന്ന പഠിതാക്കളുടെ വാക്കുകൾ.",
    google_badge_text: "120+ ഗൂഗിൾ റിവ്യൂകളുടെ അടിസ്ഥാനത്തിൽ",
    google_verified: "ഗൂഗിൾ വെരിഫൈഡ്",
    google_review_tag: "ഗൂഗിൾ റിവ്യൂ",

    // FAQ Section
    faq_title: "സംശയങ്ങളുണ്ടോ?",
    faq_sub: "ഞങ്ങളുടെ കോഴ്സുകളെക്കുറിച്ചും പഠനരീതികളെക്കുറിച്ചുമുള്ള പ്രധാന ചോദ്യങ്ങൾക്കുള്ള ഉത്തരങ്ങൾ.",
    faq_btn_view: "ചോദ്യങ്ങൾ കാണുക",

    faq_q1: "ക്ലാസുകൾ എങ്ങനെയാണ് നടക്കുന്നത്?",
    faq_a1: "എല്ലാ ക്ലാസുകളും ഗൂഗിൾ മീറ്റിലൂടെ നേരിട്ട് (1-on-1) ലൈവായാണ് നടക്കുന്നത്. ദിവസേന 30 മിനിറ്റ് സമയം പൂർണ്ണമായും നിങ്ങൾക്ക് മാത്രമായി ലഭിക്കുന്നതിനാൽ മടിയോ മറ്റ് ശ്രദ്ധതിരിയലുകളോ ഇല്ലാതെ സംസാരിച്ചു പഠിക്കാം.",
    faq_q2: "ഞാൻ കൂടുതൽ മലയാളമാണ് സംസാരിക്കുന്നത്, മനസ്സിൽ ട്രാൻസ്ലേറ്റ് ചെയ്യുന്ന ശീലമുണ്ട്. എനിക്ക് പഠിക്കാനാകുമോ?",
    faq_a2: "തീർച്ചയായും! കേരളത്തിലെ മിക്ക ആളുകളും നേരിടുന്ന പ്രധാന പ്രശ്നമാണിത്. തിരുവനന്തപുരത്തെ ഞങ്ങളുടെ ട്രെയിനർമാർ സൗഹൃദപരമായ അന്തരീക്ഷത്തിൽ നിങ്ങൾക്ക് പ്രത്യേക പിന്തുണ നൽകി മനസ്സിൽ ട്രാൻസ്ലേറ്റ് ചെയ്യുന്ന ശീലം പൂർണ്ണമായും മാറ്റിയെടുക്കുന്നു.",
    faq_q3: "എനിക്ക് അനുയോജ്യമായ സമയം തിരഞ്ഞെടുക്കാമോ?",
    faq_a3: "അതെ, രാവിലെ മുതൽ രാത്രി വൈകുന്നത് വരെ നിങ്ങളുടെ സൗകര്യത്തിനനുസരിച്ച് സമയം തിരഞ്ഞെടുക്കാവുന്നതാണ്. ജോലി ചെയ്യുന്നവർക്കും വിദ്യാർത്ഥികൾക്കും വീട്ടമ്മമാർക്കും ഇത് വളരെ അനുയോജ്യമാണ്.",
    faq_q4: "സ്റ്റാൻഡേർഡ് പ്ലാനും മാസ്റ്ററി പ്ലാനും തമ്മിലുള്ള വ്യത്യാസം എന്താണ്?",
    faq_a4: "സ്റ്റാൻഡേർഡ് പ്ലാൻ (30+ സെഷനുകൾ) അടിസ്ഥാന ഇംഗ്ലീഷ് അറിവുള്ളവർക്ക് ഒഴുക്കോടെ സംസാരിക്കാനും ആത്മവിശ്വാസം നേടാനും സഹായിക്കുന്നു. മാസ്റ്ററി പ്ലാൻ (60 സെഷനുകൾ) തുടക്കം മുതൽ ഒഴുക്കോടെ സംസാരിക്കുന്നതുവരെയുള്ള സമഗ്രമായ ഇന്റൻസീവ് പരിശീലനവും മോക്ക് ഇന്റർവ്യൂകളും നൽകുന്നു.",
    faq_q5: "ഒരു ക്ലാസ്സിൽ പങ്കെടുക്കാൻ പറ്റിയില്ലെങ്കിൽ എന്ത് സംഭവിക്കും?",
    faq_a5: "മുൻകൂട്ടി അറിയിക്കുകയാണെങ്കിൽ നിങ്ങളുടെ സെഷൻ നഷ്ടപ്പെടാതെ മറ്റൊരു സൗകര്യപ്രദമായ സമയത്തേക്ക് മാറ്റിവെച്ച് തരുന്നതാണ്.",
    faq_q6: "ചേരുന്നതിന് മുൻപ് സൗജന്യ ഡെമോ അല്ലെങ്കിൽ ലെവൽ ടെസ്റ്റ് ഉണ്ടോ?",
    faq_a6: "അതെ! നിങ്ങൾക്ക് വെബ്സൈറ്റിൽ തന്നെയുള്ള സൗജന്യ ക്വിസ് വഴിയോ ഞങ്ങളുടെ അക്കാദമിക് കോർഡിനേറ്ററുമായുള്ള നേരിട്ടുള്ള ഡയഗ്നോസ്റ്റിക് കോളിലൂടെയോ നിങ്ങളുടെ നിലവിലെ ലെവൽ മനസ്സിലാക്കാം.",

    // Final CTA
    cta_title_1: "നിങ്ങളുടെ ഇംഗ്ലീഷ് സംസാരിക്കാനുള്ള",
    cta_title_2: "യാത്ര ഇന്ന് തന്നെ തുടങ്ങൂ",
    cta_sub: "സൗജന്യ ലെവൽ ടെസ്റ്റ് എടുക്കൂ, ഞങ്ങളുടെ ടീമുമായി സംസാരിച്ച് അനുയോജ്യമായ പഠനപദ്ധതി തിരഞ്ഞെടുക്കൂ.",
    cta_btn: "വിവരങ്ങൾ അറിയാൻ ബന്ധപ്പെടൂ",

    // Contact Section
    contact_tag: "ബന്ധപ്പെടാം",
    contact_title_1: "ഇംഗ്ലീഷ് കോർണറുമായി",
    contact_title_2: "ബന്ധപ്പെടൂ",
    contact_sub: "കോഴ്സ് വിവരങ്ങൾ, ഫീസ്, സമയക്രമം എന്നിവയെക്കുറിച്ചുള്ള ഏത് സംശയങ്ങൾക്കും ഞങ്ങളുമായി ബന്ധപ്പെടാം.",
    contact_location_title: "ഇൻസ്റ്റിറ്റ്യൂട്ട് ലൊക്കേഷൻ",
    contact_location_val: "തിരുവനന്തപുരം, കേരളം, ഇന്ത്യ",
    contact_phone_title: "വാട്സാപ്പ് / ഫോൺ",
    contact_email_title: "ഔദ്യോഗിക ഇമെയിൽ",

    contact_form_title: "വേഗത്തിൽ അന്വേഷിക്കാം",
    contact_lbl_name: "നിങ്ങളുടെ പേര്",
    contact_ph_name: "ഉദാ: രാഹുൽ ശർമ്മ",
    contact_lbl_phone: "വാട്സാപ്പ് നമ്പർ",
    contact_ph_phone: "+91 98765 43210",
    contact_lbl_email: "ഇമെയിൽ വിലാസം",
    contact_ph_email: "you@email.com",
    contact_lbl_msg: "നിങ്ങളുടെ ലക്ഷ്യം / ചോദ്യങ്ങൾ",
    contact_ph_msg: "നിങ്ങളുടെ പഠനലക്ഷ്യം എഴുതൂ (ഉദാ: IELTS, ജോബ് ഇന്റർവ്യൂ, ദൈനംദിന സംസാരം)",
    contact_btn_submit: "വാട്സാപ്പിൽ സന്ദേശം അയക്കൂ",

    // Footer
    footer_quick_links: "ലിങ്കുകൾ",
    footer_follow: "ഞങ്ങളെ ഫോളോ ചെയ്യൂ",
    footer_rights: "© 2025 ഇംഗ്ലീഷ് കോർണർ. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
    footer_privacy: "പ്രൈവസി പോളിസി",
    footer_terms: "നിബന്ധനകളും വ്യവസ്ഥകളും",
    floating_wa_tip: "വാട്സാപ്പിൽ ട്രെയിനറോട് സംസാരിക്കൂ",

    // Booking Modal
    modal_book_tag: "തുടങ്ങാം",
    modal_book_title_1: "സൗജന്യ ലെവൽ ടെസ്റ്റ്",
    modal_book_title_2: "ബുക്ക് ചെയ്യൂ",
    modal_book_desc: "ഞങ്ങളുടെ വിദഗ്ധ ട്രെയിനറോട് നേരിട്ട് സംസാരിച്ച് നിങ്ങളുടെ ലെവൽ മനസ്സിലാക്കി ഒരു പഠനപദ്ധതി തയ്യാറാക്കൂ.",
    modal_book_name: "പൂർണ്ണമായ പേര് *",
    modal_book_phone: "വാട്സാപ്പ് നമ്പർ *",
    modal_book_course: "താൽപ്പര്യമുള്ള കോഴ്സ് / പ്ലാൻ *",
    modal_book_time: "സൗകര്യപ്രദമായ സമയം",
    modal_book_notes: "നിങ്ങളുടെ ഇപ്പോഴത്തെ ലക്ഷ്യം (ഓപ്ഷണൽ)",
    modal_book_notes_ph: "ഉദാ: ഇംഗ്ലീഷ് സംസാരിക്കാൻ മടിയാണ്, അടുത്ത മാസം ഐ.ടി ഇന്റർവ്യൂ ഉണ്ട്",
    modal_book_submit: "സ്ഥിരീകരിച്ച് വാട്സാപ്പ് തുറക്കൂ"
  }
};

// Export or make globally available in window
if (typeof window !== 'undefined') {
  window.translationsData = translationsData;
}
