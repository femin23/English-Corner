/**
 * ENGLISH CORNER — Spoken English Institute Official JavaScript
 * Full interactive features: Level Assessment, Booking Modal, Course Explorer, FAQ, WhatsApp dispatch
 */

document.addEventListener('DOMContentLoaded', () => {
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
});
