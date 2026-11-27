/**
 * ENGLISH CORNER — Spoken English Institute Official JavaScript
 * Full interactive features: Level Assessment, Booking Modal, Course Explorer, FAQ, WhatsApp dispatch
 */

document.addEventListener('DOMContentLoaded', () => {
  // Preloader dismiss
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 600);
      }, 350);
    });

    // Fallback safety timeout in case window.load takes too long or already triggered
    setTimeout(() => {
      if (!preloader.classList.contains('fade-out')) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 600);
      }
    }, 2500);
  }

  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });

    // Close menu on link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // Smooth Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      
      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          matchingLink.classList.add('active');
        }
      }
    });

    // Back to top button visibility
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  // Back to top action
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================
  // FAQ Accordion
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // ==========================================
  // Generic Modal Helpers
  // ==========================================
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Close modal when clicking close btn or overlay background
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        closeModal(modal.id);
      });
    }
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });

  // ESC key closes any open modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(modal => {
        closeModal(modal.id);
      });
    }
  });

  // Trigger elements for Booking Modal
  document.querySelectorAll('[data-open-modal="bookingModal"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const courseAttr = el.getAttribute('data-course-select');
      if (courseAttr) {
        const selectEl = document.getElementById('bookingCourseSelect');
        if (selectEl) selectEl.value = courseAttr;
      }
      openModal('bookingModal');
    });
  });

  // Trigger elements for Assessment Modal
  document.querySelectorAll('[data-open-modal="assessmentModal"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      resetQuiz();
      openModal('assessmentModal');
    });
  });

  // Trigger elements for Video Modal
  document.querySelectorAll('[data-open-modal="videoModal"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('videoModal');
    });
  });

  // ==========================================
  // Course Details Modal Logic
  // ==========================================
  const courseData = {
    'ielts': {
      title: 'IELTS Training',
      badge: 'Band 7.0+ Focus',
      iconClass: 'fa-solid fa-plane-departure',
      iconBg: '#dbeafe',
      iconColor: '#1d4ed8',
      desc: 'Comprehensive, structured preparation for the IELTS examination (Academic & General Training). We focus on all four core modules — Listening, Reading, Writing, and Speaking — equipped with scoring strategies and live mocks.',
      highlights: [
        'Dedicated 1-on-1 Speaking mock interviews with instant band score evaluation',
        'Task 1 & Task 2 Writing structure corrections & grammar enhancement',
        'Time management tricks for fast Reading comprehension',
        'Audio accent familiarisation (British, Australian, American)',
        'Exam date readiness strategy & official Cambridge material practice'
      ],
      duration: '30 or 60 Daily 30-min Sessions (Google Meet)',
      level: 'Suitable for learners targeting 6.5, 7.0, 7.5 or 8.0+ Band',
      whatsappText: 'Hello English Corner, I want to enrol in the IELTS Training course. Please share schedule options.'
    },
    'interview': {
      title: 'Interview Training',
      badge: 'High Conversion Job Prep',
      iconClass: 'fa-solid fa-chair',
      iconBg: '#ffedd5',
      iconColor: '#ea580c',
      desc: 'Practical preparation designed to turn interview anxiety into confident, articulate speaking. Practice self-introductions, technical/HR discussions, salary negotiation, and behavioural questions with personalised trainer feedback.',
      highlights: [
        'Master the "Tell Me About Yourself" pitch for maximum impact',
        'STAR method framework for behavioural and situational questions',
        'Eliminate Malayalam-to-English translation delay during pressure',
        'Body language, voice modulation, and professional tone',
        'Industry-specific mock interview simulations with feedback'
      ],
      duration: '30 Daily 30-min Sessions (Google Meet)',
      level: 'College graduates, job switchers, freshers & IT professionals',
      whatsappText: 'Hello English Corner, I am interested in Interview Training to prepare for upcoming job interviews.'
    },
    'career': {
      title: 'Career Skills Training',
      badge: 'Workplace Excellence',
      iconClass: 'fa-solid fa-chart-line',
      iconBg: '#f3e8ff',
      iconColor: '#9333ea',
      desc: 'Equip yourself with the corporate English and communication tools needed to command respect in meetings, client interactions, emails, and presentations.',
      highlights: [
        'Participating confidently in team standups and client calls',
        'Professional email etiquette and crisp business communication',
        'Delivering engaging slide presentations without reading notes',
        'Assertive communication, conflict resolution, and voicing opinions',
        'Cross-cultural communication for multinational company environments'
      ],
      duration: '30 or 60 Daily 30-min Sessions',
      level: 'Working professionals, managers, team leads & career aspirants',
      whatsappText: 'Hello English Corner, I want to know more about the Career Skills Training program.'
    },
    'spoken': {
      title: 'Personalised Spoken English',
      badge: '1-to-1 Foundation to Fluency',
      iconClass: 'fa-solid fa-comments',
      iconBg: '#d1fae5',
      iconColor: '#059669',
      desc: 'Our flagship one-to-one live training program tailored specifically to your current English level, personal life goals, and comfort pace. Free from crowd embarrassment.',
      highlights: [
        '100% individual attention — only you and your personal expert trainer',
        'Gentle transition for Malayalam-speaking learners with zero judgment',
        'Daily speaking habit formation through real-life scenarios',
        'Spontaneous sentence construction without mental translation',
        'Vocabulary expansion, correct prepositions & natural pronunciation'
      ],
      duration: 'Choose Standard (30 sessions) or Mastery (60 sessions)',
      level: 'Beginners, Malayalam speakers, homemakers, students & professionals',
      whatsappText: 'Hello English Corner, I want to enrol in the Personalised Spoken English 1-on-1 course.'
    }
  };

  document.querySelectorAll('[data-course-key]').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-course-key');
      const data = courseData[key];
      if (data) {
        document.getElementById('courseModalTitle').textContent = data.title;
        document.getElementById('courseModalBadge').textContent = data.badge;
        document.getElementById('courseModalDesc').textContent = data.desc;
        document.getElementById('courseModalDuration').textContent = data.duration;
        document.getElementById('courseModalLevel').textContent = data.level;

        const highlightsList = document.getElementById('courseModalHighlights');
        highlightsList.innerHTML = '';
        data.highlights.forEach(h => {
          const li = document.createElement('li');
          li.className = 'plan-feature-item';
          li.innerHTML = `<i class="fa-solid fa-circle-check text-lime"></i> <span>${h}</span>`;
          highlightsList.appendChild(li);
        });

        const ctaBtn = document.getElementById('courseModalWhatsappBtn');
        ctaBtn.href = `https://wa.me/919567484569?text=${encodeURIComponent(data.whatsappText)}`;

        openModal('courseDetailModal');
      }
    });
  });

  // ==========================================
  // Interactive English Level Assessment Quiz
  // ==========================================
  const quizQuestions = [
    {
      question: "1. When you need to speak English spontaneously (e.g., at work or in an interview), how do you usually feel?",
      options: [
        { text: "I struggle to find words and translate from Malayalam in my head.", score: 1 },
        { text: "I can manage short, simple sentences, but feel nervous and hesitant.", score: 2 },
        { text: "I speak fairly well, but make occasional grammatical mistakes and lack advanced vocabulary.", score: 3 },
        { text: "I am confident and fluent, but want to polish my accent and corporate presence.", score: 4 }
      ]
    },
    {
      question: "2. Choose the correct sentence for professional communication:",
      options: [
        { text: "I did not received the document yesterday.", score: 1 },
        { text: "I haven't received the document yesterday.", score: 2 },
        { text: "I didn't receive the document yesterday.", score: 4 },
        { text: "I am not receiving the document yesterday.", score: 1 }
      ]
    },
    {
      question: "3. If an interviewer asks: 'Could you elaborate on your previous experience?', what is your immediate reaction?",
      options: [
        { text: "I freeze or answer in 1 or 2 broken sentences.", score: 1 },
        { text: "I understand clearly, but my response feels unstructured and repetitive.", score: 2 },
        { text: "I explain the key points adequately, but lack confident storytelling.", score: 3 },
        { text: "I articulate my achievements smoothly using structured examples.", score: 4 }
      ]
    },
    {
      question: "4. How often do you practice speaking English in your daily life?",
      options: [
        { text: "Rarely or never. Almost everyone around me speaks Malayalam.", score: 1 },
        { text: "Only when required at work or college, mostly through text/chat.", score: 2 },
        { text: "A few times a week, but not in formal/professional contexts.", score: 3 },
        { text: "Daily, but I want dedicated 1-on-1 correction to eliminate subtle errors.", score: 4 }
      ]
    },
    {
      question: "5. What is your primary learning goal right now?",
      options: [
        { text: "Overcome fear of speaking and build a solid foundation.", score: 1 },
        { text: "Crack upcoming job interviews and campus placements.", score: 3 },
        { text: "Achieve band 7.0+ in IELTS Speaking & Writing.", score: 4 },
        { text: "Speak naturally, fluently, and confidently in all professional settings.", score: 3 }
      ]
    }
  ];

  let currentQuestionIndex = 0;
  let totalScore = 0;

  function resetQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    const container = document.getElementById('quizStepContainer');
    const resultBox = document.getElementById('quizResultContainer');
    if (container && resultBox) {
      container.style.display = 'block';
      resultBox.style.display = 'none';
      renderQuestion();
    }
  }

  function renderQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    const qTitle = document.getElementById('quizQuestionTitle');
    const qOptions = document.getElementById('quizOptionsContainer');
    const progressBar = document.getElementById('quizProgressBar');
    const stepLabel = document.getElementById('quizStepLabel');

    if (!qTitle || !qOptions) return;

    qTitle.textContent = q.question;
    stepLabel.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;

    qOptions.innerHTML = '';
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `<span>${opt.text}</span> <i class="fa-regular fa-circle-check"></i>`;
      btn.addEventListener('click', () => {
        totalScore += opt.score;
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
          renderQuestion();
        } else {
          showQuizResult();
        }
      });
      qOptions.appendChild(btn);
    });
  }

  function showQuizResult() {
    const container = document.getElementById('quizStepContainer');
    const resultBox = document.getElementById('quizResultContainer');
    if (container && resultBox) {
      container.style.display = 'none';
      resultBox.style.display = 'block';

      let levelTitle = '';
      let levelBadge = '';
      let recommendation = '';
      let planRecommended = '';

      if (totalScore <= 8) {
        levelTitle = 'Beginner / Foundation Level (A1 - A2)';
        levelBadge = 'Needs Guided Speaking Habit';
        recommendation = 'You have a good understanding of English but struggle with hesitation and Malayalam-to-English translation. Our 1-on-1 live training will give you a safe, judgment-free space to speak daily for 30 minutes.';
        planRecommended = 'Mastery Plan (60 Sessions) — Recommended for Foundation-to-Fluency';
      } else if (totalScore <= 14) {
        levelTitle = 'Intermediate Level (B1 - B2)';
        levelBadge = 'Ready for Fluency & Interview Mastery';
        recommendation = 'You can converse in familiar situations, but lack confidence during high-stakes interviews or spontaneous discussions. You need situational drills and instant sentence restructuring.';
        planRecommended = 'Standard Plan (30 Sessions) or Mastery Plan (60 Sessions)';
      } else {
        levelTitle = 'Advanced Communicator (B2+ / C1)';
        levelBadge = 'Polishing & High Impact Presence';
        recommendation = 'You have strong fundamentals. Your focus should be on sophisticated vocabulary, nuanced tone, IELTS band 7.5+ strategies, and executive workplace presentations.';
        planRecommended = 'Standard Plan (30 Sessions) — Focused Polish & Exam/Interview Prep';
      }

      document.getElementById('resultLevelTitle').textContent = levelTitle;
      document.getElementById('resultLevelBadge').textContent = levelBadge;
      document.getElementById('resultRecommendation').textContent = recommendation;
      document.getElementById('resultPlan').textContent = planRecommended;

      const waMsg = `Hello English Corner! I just completed your English Level Assessment on the website. My score was ${totalScore}/20 (${levelTitle}). I would like to book my free diagnostic session and discuss the ${planRecommended}.`;
      const waBtn = document.getElementById('quizWhatsappResultBtn');
      if (waBtn) {
        waBtn.href = `https://wa.me/919567484569?text=${encodeURIComponent(waMsg)}`;
      }
    }
  }

  // ==========================================
  // Booking / Free Assessment Form Submission
  // ==========================================
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('bookName').value.trim();
      const phone = document.getElementById('bookPhone').value.trim();
      const course = document.getElementById('bookingCourseSelect').value;
      const time = document.getElementById('bookTime').value;
      const note = document.getElementById('bookNote').value.trim();

      if (!name || !phone) {
        alert('Please fill in your name and phone number.');
        return;
      }

      const waText = `Hello English Corner! My name is ${name}. I want to book a Free Assessment Session.\n` +
                     `Course Interest: ${course}\n` +
                     `Phone / WhatsApp: ${phone}\n` +
                     `Preferred Time: ${time}\n` +
                     (note ? `Goal/Notes: ${note}` : '');

      window.open(`https://wa.me/919567484569?text=${encodeURIComponent(waText)}`, '_blank');
      closeModal('bookingModal');
      bookingForm.reset();
      alert('Thank you! Redirecting to WhatsApp to confirm your free assessment slot with our team.');
    });
  }

  // Quick Contact Form in Contact section
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMsg').value.trim();

      const waText = `Hello English Corner! Enquiry from ${name} (${phone}, ${email}):\n${message}`;
      window.open(`https://wa.me/919567484569?text=${encodeURIComponent(waText)}`, '_blank');
      contactForm.reset();
      alert('Thank you for your message! Opening WhatsApp to chat with our team in Trivandrum.');
    });
  }

  // Testimonials Slider Controls
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.getElementById('testimonialPrevBtn');
  const nextBtn = document.getElementById('testimonialNextBtn');

  if (prevBtn && nextBtn && testimonialCards.length > 0) {
    let activeIndex = 0;
    // For smaller screens or interactive highlighting
    nextBtn.addEventListener('click', () => {
      testimonialCards.forEach(c => c.style.borderColor = 'transparent');
      activeIndex = (activeIndex + 1) % testimonialCards.length;
      testimonialCards[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      testimonialCards[activeIndex].style.outline = '2px solid var(--accent-lime)';
    });

    prevBtn.addEventListener('click', () => {
      testimonialCards.forEach(c => c.style.borderColor = 'transparent');
      activeIndex = (activeIndex - 1 + testimonialCards.length) % testimonialCards.length;
      testimonialCards[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      testimonialCards[activeIndex].style.outline = '2px solid var(--accent-lime)';
    });
  }

  // ==========================================
  // Instagram Reels 9:16 Carousel Slider Controls
  // ==========================================
  const reelTrack = document.getElementById('reelCarouselTrack');
  const reelPrevBtn = document.getElementById('reelSliderPrevBtn');
  const reelNextBtn = document.getElementById('reelSliderNextBtn');

  if (reelTrack && reelPrevBtn && reelNextBtn) {
    reelNextBtn.addEventListener('click', () => {
      const cardWidth = reelTrack.querySelector('.reel-item')?.offsetWidth || 300;
      reelTrack.scrollBy({ left: cardWidth + 22, behavior: 'smooth' });
    });

    reelPrevBtn.addEventListener('click', () => {
      const cardWidth = reelTrack.querySelector('.reel-item')?.offsetWidth || 300;
      reelTrack.scrollBy({ left: -(cardWidth + 22), behavior: 'smooth' });
    });
  }

  // ==========================================
  // Language Switcher Logic (Malayalam / English)
  // Full Website Dynamic Translation Engine
  // ==========================================
  const langModal = document.getElementById('langPromptModal');
  const langChoices = document.querySelectorAll('.lang-btn-choice');
  const confirmLangBtn = document.getElementById('confirmLangBtn');
  const langNavToggle = document.getElementById('langNavToggle');
  const currentLangLabel = document.getElementById('currentLangLabel');

  let selectedLang = localStorage.getItem('ec_preferred_lang') || 'en';

  function applyLanguage(lang) {
    selectedLang = lang;
    localStorage.setItem('ec_preferred_lang', lang);
    if (currentLangLabel) {
      currentLangLabel.textContent = (lang === 'ml') ? 'മലയാളം' : 'EN';
    }

    // Active state on selection buttons
    langChoices.forEach(btn => {
      if (btn.dataset.selectLang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Verify translations data exists
    const t = (window.translationsData && window.translationsData[lang]) ? window.translationsData[lang] : null;
    if (!t) return;

    // 1. Navigation items
    const navLinks = document.querySelectorAll('#navMenu .nav-link');
    if (navLinks.length >= 8) {
      navLinks[0].textContent = t.nav_home;
      navLinks[1].textContent = t.nav_why;
      navLinks[2].innerHTML = `${t.nav_courses} <i class="fa-solid fa-chevron-down" style="font-size: 0.7rem; margin-left: 3px; opacity: 0.8;"></i>`;
      navLinks[3].textContent = t.nav_assessment;
      navLinks[4].textContent = t.nav_video_reviews;
      navLinks[5].textContent = t.nav_reviews;
      navLinks[6].textContent = t.nav_faq;
      navLinks[7].textContent = t.nav_contact;
    }

    const headerWaBtn = document.querySelector('.site-header .btn-whatsapp-pill span');
    if (headerWaBtn) headerWaBtn.textContent = t.btn_talk_whatsapp;

    // 2. Preloader & Hero Tagline / Intro
    const preloaderTagline = document.getElementById('preloaderTagline');
    if (preloaderTagline) preloaderTagline.textContent = t.preloader_tagline;

    const heroTagline = document.getElementById('heroTagline');
    if (heroTagline) {
      const span = heroTagline.querySelector('span');
      if (span) span.textContent = t.hero_tagline;
    }

    const heroIntroBox = document.getElementById('heroIntroBox');
    if (heroIntroBox) {
      const h3 = heroIntroBox.querySelector('.hero-intro-headline');
      const p = heroIntroBox.querySelector('.hero-intro-body');
      const punchline = heroIntroBox.querySelector('.hero-intro-punchline');
      if (h3) {
        h3.innerHTML = (lang === 'ml') 
          ? `<span>ഇംഗ്ലീഷ് തെറ്റുകൂടാതെ പെർഫെക്റ്റ് ആവേണ്ടതില്ല.</span> ആദ്യം സംസാരിച്ചു തുടങ്ങുകയാണ് വേണ്ടത്.`
          : `<span>English Doesn't Have to Be Perfect.</span> It Just Has to Begin.`;
      }
      if (p) p.textContent = t.hero_intro_body;
      if (punchline) punchline.textContent = t.hero_intro_punchline;
    }

    // Hero title & description
    const heroCategoryBar = document.querySelector('.hero-category-bar');
    if (heroCategoryBar) {
      heroCategoryBar.innerHTML = `
        <span>${t.hero_cat_spoken}</span>
        <span class="sep">|</span>
        <span>${t.hero_cat_ielts}</span>
        <span class="sep">|</span>
        <span>${t.hero_cat_interview}</span>
        <span class="sep">|</span>
        <span>${t.hero_cat_career}</span>
      `;
    }

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      heroTitle.innerHTML = `
        ${t.hero_title_1} <br>
        <span class="hero-lime-accent">
          ${t.hero_title_2}
          <svg class="lime-brush-svg" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8.5C48 3.5 110 3 157 9" stroke="#cbf438" stroke-width="3.5" stroke-linecap="round" />
          </svg>
        </span>
      `;
    }

    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) heroDesc.textContent = t.hero_desc;

    const heroCtaBtn = document.querySelector('.btn-hero-lime span');
    if (heroCtaBtn) heroCtaBtn.textContent = t.hero_btn_book;

    const proofLabel = document.querySelector('.proof-label');
    if (proofLabel) proofLabel.textContent = t.hero_stat_learners;

    const ratingLabel = document.querySelector('.rating-label');
    if (ratingLabel) ratingLabel.textContent = t.hero_stat_rating;

    // Ribbon Bar items
    const ribbonCols = document.querySelectorAll('.hero-ribbon-bar .ribbon-col');
    if (ribbonCols.length >= 4) {
      ribbonCols[0].querySelector('.ribbon-line1').textContent = t.ribbon_ielts_l1;
      ribbonCols[0].querySelector('.ribbon-line2').textContent = t.ribbon_ielts_l2;

      ribbonCols[1].querySelector('.ribbon-line1').textContent = t.ribbon_interview_l1;
      ribbonCols[1].querySelector('.ribbon-line2').textContent = t.ribbon_interview_l2;

      ribbonCols[2].querySelector('.ribbon-line1').textContent = t.ribbon_career_l1;
      ribbonCols[2].querySelector('.ribbon-line2').textContent = t.ribbon_career_l2;

      ribbonCols[3].querySelector('.ribbon-line1').textContent = t.ribbon_spoken_l1;
      ribbonCols[3].querySelector('.ribbon-line2').textContent = t.ribbon_spoken_l2;
    }

    // 3. Section 2: Why English Corner?
    const whySection = document.getElementById('why');
    if (whySection) {
      const whyTag = whySection.querySelector('.section-tag');
      const whyTitle = whySection.querySelector('.section-title');
      const whySub = whySection.querySelector('.section-subtitle');
      if (whyTag) whyTag.textContent = t.why_tag;
      if (whyTitle) whyTitle.innerHTML = `${t.why_title_1} <span class="text-lime">${t.why_title_2}</span>`;
      if (whySub) whySub.textContent = t.why_sub;

      const whyCards = whySection.querySelectorAll('.why-card');
      if (whyCards.length >= 4) {
        whyCards[0].querySelector('.why-card-title').textContent = t.why_card1_title;
        whyCards[0].querySelector('.why-card-desc').textContent = t.why_card1_desc;

        whyCards[1].querySelector('.why-card-title').textContent = t.why_card2_title;
        whyCards[1].querySelector('.why-card-desc').textContent = t.why_card2_desc;

        whyCards[2].querySelector('.why-card-title').textContent = t.why_card3_title;
        whyCards[2].querySelector('.why-card-desc').textContent = t.why_card3_desc;

        whyCards[3].querySelector('.why-card-title').textContent = t.why_card4_title;
        whyCards[3].querySelector('.why-card-desc').textContent = t.why_card4_desc;
      }
    }

    // 4. Section 3: Level Assessment Banner
    const assessSection = document.getElementById('assessment');
    if (assessSection) {
      const assessH3 = assessSection.querySelector('.assessment-text h3');
      const assessP = assessSection.querySelector('.assessment-text p');
      const assessBtn = assessSection.querySelector('.btn-lime span');
      if (assessH3) assessH3.textContent = t.assess_title;
      if (assessP) assessP.textContent = t.assess_desc;
      if (assessBtn) assessBtn.textContent = t.assess_btn;
    }

    // 5. Courses Section
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      const coursesTitle = coursesSection.querySelector('.section-title');
      const coursesSub = coursesSection.querySelector('.section-subtitle');
      const viewAllBtn = coursesSection.querySelector('.btn-outline-white span');
      if (coursesTitle) coursesTitle.innerHTML = `${t.courses_title_1} <span class="text-lime">${t.courses_title_2}</span>`;
      if (coursesSub) coursesSub.textContent = t.courses_sub;
      if (viewAllBtn) viewAllBtn.textContent = t.courses_btn_view_all;

      const courseCards = coursesSection.querySelectorAll('.course-card');
      if (courseCards.length >= 4) {
        courseCards[0].querySelector('.course-title').innerHTML = t.course1_title.replace(' ', '<br>');
        courseCards[0].querySelector('.course-desc').textContent = t.course1_desc;

        courseCards[1].querySelector('.course-title').innerHTML = t.course2_title.replace(' ', '<br>');
        courseCards[1].querySelector('.course-desc').textContent = t.course2_desc;

        courseCards[2].querySelector('.course-title').innerHTML = t.course3_title.replace(' ', '<br>');
        courseCards[2].querySelector('.course-desc').textContent = t.course3_desc;

        courseCards[3].querySelector('.course-title').innerHTML = t.course4_title.replace(' ', '<br>');
        courseCards[3].querySelector('.course-desc').textContent = t.course4_desc;
      }
    }

    // 6. About Section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const aboutTag = aboutSection.querySelector('.section-tag');
      const aboutTitle = aboutSection.querySelector('.section-title');
      const aboutP = aboutSection.querySelector('.about-content > p');
      const aboutBtn = aboutSection.querySelector('.about-content .btn span');
      if (aboutTag) aboutTag.textContent = t.about_tag;
      if (aboutTitle) aboutTitle.innerHTML = `${t.about_title_1}<br><span class="text-lime">${t.about_title_2}</span>`;
      if (aboutP) aboutP.textContent = t.about_desc;
      if (aboutBtn) aboutBtn.textContent = t.about_btn;

      const pillars = aboutSection.querySelectorAll('.pillar-item .pillar-text');
      if (pillars.length >= 4) {
        pillars[0].textContent = t.about_pillar1;
        pillars[1].textContent = t.about_pillar2;
        pillars[2].textContent = t.about_pillar3;
        pillars[3].textContent = t.about_pillar4;
      }
    }

    // 7. Video Reviews & Reels Section
    const videoSection = document.getElementById('video-reviews');
    if (videoSection) {
      const videoTag = videoSection.querySelector('.section-tag');
      const videoTitle = videoSection.querySelector('.section-title');
      const videoSub = videoSection.querySelector('.section-subtitle');
      if (videoTag) videoTag.textContent = t.video_tag;
      if (videoTitle) videoTitle.innerHTML = `${t.video_title_1} <span class="text-lime">${t.video_title_2}</span>`;
      if (videoSub) videoSub.textContent = t.video_sub;

      const videoCards = videoSection.querySelectorAll('.reel-item');
      if (videoCards.length >= 5) {
        // Reel 1
        videoCards[0].querySelector('.video-badge-tag').innerHTML = `<i class="fa-brands fa-instagram"></i> ${t.reel1_badge}`;
        videoCards[0].querySelector('.video-student-name').textContent = t.reel1_name;
        videoCards[0].querySelector('.video-student-role').textContent = t.reel1_role;
        videoCards[0].querySelector('.video-review-caption').textContent = t.reel1_caption;

        // Reel 2
        videoCards[1].querySelector('.video-badge-tag').innerHTML = `<i class="fa-brands fa-instagram"></i> ${t.reel2_badge}`;
        videoCards[1].querySelector('.video-student-name').textContent = t.reel2_name;
        videoCards[1].querySelector('.video-student-role').textContent = t.reel2_role;
        videoCards[1].querySelector('.video-review-caption').textContent = t.reel2_caption;

        // Reel 3
        videoCards[2].querySelector('.video-badge-tag').innerHTML = `<i class="fa-brands fa-instagram"></i> ${t.reel3_badge}`;
        videoCards[2].querySelector('.video-student-name').textContent = t.reel3_name;
        videoCards[2].querySelector('.video-student-role').textContent = t.reel3_role;
        videoCards[2].querySelector('.video-review-caption').textContent = t.reel3_caption;

        // Reel 4
        videoCards[3].querySelector('.video-badge-tag').innerHTML = `<i class="fa-brands fa-instagram"></i> ${t.reel4_badge}`;
        videoCards[3].querySelector('.video-student-name').textContent = t.reel4_name;
        videoCards[3].querySelector('.video-student-role').textContent = t.reel4_role;
        videoCards[3].querySelector('.video-review-caption').textContent = t.reel4_caption;

        // Reel 5
        videoCards[4].querySelector('.video-badge-tag').innerHTML = `<i class="fa-brands fa-instagram"></i> ${t.reel5_badge}`;
        videoCards[4].querySelector('.video-student-name').textContent = t.reel5_name;
        videoCards[4].querySelector('.video-student-role').textContent = t.reel5_role;
        videoCards[4].querySelector('.video-review-caption').textContent = t.reel5_caption;
      }
    }

    // 8. Testimonials & Google Reviews
    const testSection = document.getElementById('testimonials');
    if (testSection) {
      const testTag = testSection.querySelector('.section-tag');
      const testTitle = testSection.querySelector('.section-title');
      const testSub = testSection.querySelector('.section-subtitle');
      if (testTag) testTag.textContent = t.reviews_tag;
      if (testTitle) testTitle.innerHTML = `${t.reviews_title_1} <span class="text-lime">${t.reviews_title_2}</span>`;
      if (testSub) testSub.textContent = t.reviews_sub;

      const googleCount = testSection.querySelector('.google-badge-count');
      if (googleCount) googleCount.textContent = t.google_badge_text;
      const googleVer = testSection.querySelector('.google-verified-pill');
      if (googleVer) googleVer.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${t.google_verified}`;
    }

    // 9. FAQ Section
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      const faqH3 = faqSection.querySelector('.faq-banner-text h3');
      const faqP = faqSection.querySelector('.faq-banner-text p');
      const faqBtn = faqSection.querySelector('.btn-outline-white span');
      if (faqH3) faqH3.textContent = t.faq_title;
      if (faqP) faqP.textContent = t.faq_sub;
      if (faqBtn) faqBtn.textContent = t.faq_btn_view;

      const faqItems = faqSection.querySelectorAll('.faq-item');
      if (faqItems.length >= 6) {
        faqItems[0].querySelector('.faq-question span').textContent = t.faq_q1;
        faqItems[0].querySelector('.faq-answer').textContent = t.faq_a1;

        faqItems[1].querySelector('.faq-question span').textContent = t.faq_q2;
        faqItems[1].querySelector('.faq-answer').textContent = t.faq_a2;

        faqItems[2].querySelector('.faq-question span').textContent = t.faq_q3;
        faqItems[2].querySelector('.faq-answer').textContent = t.faq_a3;

        faqItems[3].querySelector('.faq-question span').textContent = t.faq_q4;
        faqItems[3].querySelector('.faq-answer').textContent = t.faq_a4;

        faqItems[4].querySelector('.faq-question span').textContent = t.faq_q5;
        faqItems[4].querySelector('.faq-answer').textContent = t.faq_a5;

        faqItems[5].querySelector('.faq-question span').textContent = t.faq_q6;
        faqItems[5].querySelector('.faq-answer').textContent = t.faq_a6;
      }
    }

    // 10. Enrol / CTA Section
    const ctaSection = document.getElementById('enrol');
    if (ctaSection) {
      const ctaH2 = ctaSection.querySelector('.final-cta-text h2');
      const ctaP = ctaSection.querySelector('.final-cta-text p');
      const ctaBtn = ctaSection.querySelector('.btn-lime span');
      if (ctaH2) ctaH2.innerHTML = `${t.cta_title_1} <span class="text-lime">${t.cta_title_2}</span>`;
      if (ctaP) ctaP.textContent = t.cta_sub;
      if (ctaBtn) ctaBtn.textContent = t.cta_btn;
    }

    // 11. Contact Section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const cTag = contactSection.querySelector('.section-tag');
      const cTitle = contactSection.querySelector('.section-title');
      const cSub = contactSection.querySelector('.about-grid > div > p');
      if (cTag) cTag.textContent = t.contact_tag;
      if (cTitle) cTitle.innerHTML = `${t.contact_title_1} <br><span class="text-lime">${t.contact_title_2}</span>`;
      if (cSub) cSub.textContent = t.contact_sub;

      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
        const title = contactSection.querySelector('.contact-form-title');
        if (title) title.textContent = t.contact_form_title;

        const labels = contactForm.querySelectorAll('.form-label');
        if (labels.length >= 4) {
          labels[0].textContent = t.contact_lbl_name;
          labels[1].textContent = t.contact_lbl_phone;
          labels[2].textContent = t.contact_lbl_email;
          labels[3].textContent = t.contact_lbl_msg;
        }

        const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
        if (inputs.length >= 4) {
          inputs[0].placeholder = t.contact_ph_name;
          inputs[1].placeholder = t.contact_ph_phone;
          inputs[2].placeholder = t.contact_ph_email;
          inputs[3].placeholder = t.contact_ph_msg;
        }

        const submitBtn = contactForm.querySelector('button[type="submit"] span');
        if (submitBtn) submitBtn.textContent = t.contact_btn_submit;
      }
    }

    // 12. Footer
    const footer = document.querySelector('.site-footer');
    if (footer) {
      const fLinks = footer.querySelectorAll('.footer-link');
      if (fLinks.length >= 7) {
        fLinks[0].textContent = t.nav_home;
        fLinks[1].textContent = t.about_pillar1;
        fLinks[2].textContent = t.nav_courses;
        fLinks[3].textContent = t.nav_assessment;
        fLinks[4].textContent = t.nav_reviews;
        fLinks[5].textContent = t.nav_faq;
        fLinks[6].textContent = t.nav_contact;
      }

      const socialTitle = footer.querySelector('.footer-social-title');
      if (socialTitle) socialTitle.textContent = t.footer_follow;

      const rightsSpan = footer.querySelector('.footer-bottom-row > span');
      if (rightsSpan) rightsSpan.textContent = t.footer_rights;

      const legalLinks = footer.querySelectorAll('.footer-legal-links a');
      if (legalLinks.length >= 2) {
        legalLinks[0].textContent = t.footer_privacy;
        legalLinks[1].textContent = t.footer_terms;
      }
    }

    // 13. Floating elements
    const waTooltip = document.querySelector('.whatsapp-tooltip');
    if (waTooltip) waTooltip.textContent = t.floating_wa_tip;

    // 14. Booking modal
    const bookModal = document.getElementById('bookingModal');
    if (bookModal) {
      const bTag = bookModal.querySelector('.section-tag');
      const bH2 = bookModal.querySelector('h2');
      const bP = bookModal.querySelector('p');
      if (bTag) bTag.textContent = t.modal_book_tag;
      if (bH2) bH2.innerHTML = `${t.modal_book_title_1} <span class="text-lime">${t.modal_book_title_2}</span>`;
      if (bP) bP.textContent = t.modal_book_desc;

      const bLabels = bookModal.querySelectorAll('.form-label');
      if (bLabels.length >= 5) {
        bLabels[0].textContent = t.modal_book_name;
        bLabels[1].textContent = t.modal_book_phone;
        bLabels[2].textContent = t.modal_book_course;
        bLabels[3].textContent = t.modal_book_time;
        bLabels[4].textContent = t.modal_book_notes;
      }

      const bNote = document.getElementById('bookNote');
      if (bNote) bNote.placeholder = t.modal_book_notes_ph;

      const bSubmit = bookModal.querySelector('button[type="submit"] span');
      if (bSubmit) bSubmit.textContent = t.modal_book_submit;
    }
  }

  // Check if first-time visitor
  const hasChosenLang = localStorage.getItem('ec_lang_chosen');
  if (!hasChosenLang && langModal) {
    setTimeout(() => {
      langModal.classList.add('show');
    }, 800);
  }

  // Lang option click
  langChoices.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.selectLang;
      applyLanguage(lang);
    });
  });

  if (confirmLangBtn && langModal) {
    confirmLangBtn.addEventListener('click', () => {
      localStorage.setItem('ec_lang_chosen', 'true');
      langModal.classList.remove('show');
    });
  }

  // Toggle button in header
  if (langNavToggle) {
    langNavToggle.addEventListener('click', () => {
      const nextLang = (selectedLang === 'en') ? 'ml' : 'en';
      applyLanguage(nextLang);
    });
  }

  // Initial apply
  applyLanguage(selectedLang);
});
