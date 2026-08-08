/**
 * Luxury Wedding Invitation - Vanilla JavaScript Engine
 * Handles Localization, Theme Management, Countdown Timer, Scroll Reveals & Interactions.
 */

(function () {
  'use strict';

  // Config reference
  const config = window.weddingConfig;
  if (!config) {
    console.error('Wedding Config object missing!');
    return;
  }

  // Application State
  let currentLang = localStorage.getItem('wedding_lang') || 'ckb';
  let currentTheme = 'light';

  // DOM Elements
  const htmlEl = document.documentElement;
  const siteHeader = document.getElementById('site-header');
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  const langLabel = document.getElementById('lang-label');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');

  // Countdown Elements
  const daysEl = document.getElementById('days-count');
  const hoursEl = document.getElementById('hours-count');
  const minutesEl = document.getElementById('minutes-count');
  const secondsEl = document.getElementById('seconds-count');

  /* ==========================================================================
     1. INITIALIZATION & SETUP
     ========================================================================== */
  function init() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    setTheme(currentTheme);
    setLanguage(currentLang);
    startCountdown();
    setupScrollListeners();
    setupIntersectionObserver();
    setupEventListeners();
  }

  /* ==========================================================================
     2. THEME ENGINE (Dark / Light Mode)
     ========================================================================== */
  function setTheme(theme) {
    currentTheme = theme;
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('wedding_theme', theme);

    if (themeIcon) {
      if (theme === 'light') {
        // Moon icon for switching to dark
        themeIcon.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
          </svg>`;
      } else {
        // Sun icon for switching to light
        themeIcon.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
          </svg>`;
      }
    }
  }

  /* ==========================================================================
     3. LANGUAGE ENGINE (Kurdish Sorani, Arabic, English)
     ========================================================================== */
  function setLanguage(lang) {
    if (!config.translations[lang]) return;

    currentLang = lang;
    localStorage.setItem('wedding_lang', lang);

    const isRTL = lang === 'ckb' || lang === 'ar';
    htmlEl.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    htmlEl.setAttribute('lang', lang);

    // Update Language Dropdown Display Label
    if (langLabel) {
      const labels = { ckb: 'کوردی (سۆرانی)', ar: 'العربية', en: 'English' };
      langLabel.textContent = labels[lang] || 'Language';
    }

    // Update Active Option Styling
    document.querySelectorAll('.lang-option').forEach(opt => {
      if (opt.dataset.lang === lang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });

    // Populate all translatable DOM elements
    const t = config.translations[lang];

    // Page Title
    document.title = t.siteTitle;

    // Couple Names Header & Hero
    const groom = config.groomName[lang] || config.groomName.ckb;
    const bride = config.brideName[lang] || config.brideName.ckb;

    updateText('header-groom-name', groom);
    updateText('header-bride-name', bride);
    updateText('hero-groom-name', groom);
    updateText('hero-bride-name', bride);
    updateText('hero-subtitle', t.heroSubtitle);

    // Envelope Card Texts
    updateText('envelope-groom', groom);
    updateText('envelope-bride', bride);
    updateText('seal-text-btn', t.openInvitation || 'بیکەرەوە');
    updateText('envelope-badge', t.invitationTitle || 'بانگهێشتنامەی فەرمی هاوسەرگیری');
    const reopenBtn = document.getElementById('reopen-card-btn');
    if (reopenBtn) {
      reopenBtn.setAttribute('title', t.reopenCard || 'داپۆشینەوەی کارت');
      reopenBtn.setAttribute('aria-label', t.reopenCard || 'داپۆشینەوەی کارت');
    }

    // Navigation Links
    updateText('nav-home', t.navHome);
    updateText('nav-story', t.navStory);
    updateText('nav-details', t.navDetails);
    updateText('nav-location', t.navLocation);
    updateText('nav-contact', t.navContact);

    updateText('mobile-nav-home', t.navHome);
    updateText('mobile-nav-story', t.navStory);
    updateText('mobile-nav-details', t.navDetails);
    updateText('mobile-nav-location', t.navLocation);
    updateText('mobile-nav-contact', t.navContact);

    // Countdown Labels
    updateText('countdown-title', t.countdownTitle);
    updateText('lbl-days', t.days);
    updateText('lbl-hours', t.hours);
    updateText('lbl-minutes', t.minutes);
    updateText('lbl-seconds', t.seconds);

    // Section Titles & Tags
    updateText('story-tag', t.storyTag);
    updateText('story-title', t.storyTitle);
    updateText('details-tag', t.detailsTag);
    updateText('details-title', t.detailsTitle);
    updateText('location-tag', t.locationTag);
    updateText('location-title', t.locationTitle);

    // Details Cards Labels & Values
    updateText('lbl-card-date', t.cardDate);
    updateText('val-card-date', config.details.dateText[lang]);

    updateText('lbl-card-time', t.cardTime);
    updateText('val-card-time', config.details.timeText[lang]);

    updateText('lbl-card-venue', t.cardVenue);
    updateText('val-card-venue', config.venue.name[lang]);

    updateText('lbl-card-dress', t.cardDress);
    updateText('val-card-dress', config.details.dressCode[lang]);

    updateText('lbl-card-reception', t.cardReception);
    updateText('val-card-reception', config.details.reception[lang]);

    updateText('lbl-card-parking', t.cardParking);
    updateText('val-card-parking', config.details.parking[lang]);

    updateText('lbl-card-contact', t.cardContact);
    updateText('val-card-contact', config.details.contactPerson[lang]);

    // Location & Maps
    updateText('venue-name-text', config.venue.name[lang]);
    updateText('venue-address-text', config.venue.address[lang]);
    updateText('btn-open-maps-text', t.openMapsBtn);
    const mapsBtn = document.getElementById('btn-open-maps');
    if (mapsBtn) mapsBtn.href = config.venue.googleMapsUrl;

    // Contact Button
    const callBtn = document.getElementById('btn-call-contact');
    if (callBtn) {
      callBtn.href = 'tel:' + config.details.phone;
      callBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        ${t.callContact}`;
    }

    // Story Section Dynamic Re-render
    renderStorySection(lang);

    // Footer & ZnjiNode Ad
    updateText('footer-text', t.footerText);
    updateText('created-with-text', t.createdWith);

    updateText('ad-title', t.adTitle);
    updateText('ad-text', t.adText);
    updateText('ad-whatsapp-text', t.adWhatsappBtn);
    updateText('ad-instagram-text', t.adInstagramBtn);

    const waBtn = document.getElementById('ad-whatsapp-btn');
    if (waBtn) waBtn.href = config.social.whatsapp;

    const igBtn = document.getElementById('ad-instagram-btn');
    if (igBtn) igBtn.href = config.social.instagram;

    const footerWa = document.getElementById('footer-wa-link');
    if (footerWa) footerWa.href = config.social.whatsapp;

    const footerIg = document.getElementById('footer-ig-link');
    if (footerIg) footerIg.href = config.social.instagram;

    const footerFb = document.getElementById('footer-fb-link');
    if (footerFb) footerFb.href = config.social.facebook;

    const footerEmail = document.getElementById('footer-email-link');
    if (footerEmail) footerEmail.href = config.social.email;
  }

  function updateText(id, text) {
    const el = document.getElementById(id);
    if (el && text !== undefined) {
      el.textContent = text;
    }
  }

  /* ==========================================================================
     4. RENDER STORY SECTION (Cinematic Masonry Layout)
     ========================================================================== */
  function renderStorySection(lang) {
    const container = document.getElementById('story-grid-container');
    if (!container) return;

    container.innerHTML = '';

    const classMapping = [
      'story-card-half reveal-left',
      'story-card-half reveal-right',
      'story-card-lg reveal-left',
      'story-card-sm reveal-right',
      'story-card-full reveal-zoom'
    ];

    config.story.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = `story-card ${classMapping[index % classMapping.length]}`;

      const title = item.title[lang] || item.title.ckb;
      const subtitle = item.subtitle[lang] || item.subtitle.ckb;

      card.innerHTML = `
        <img class="story-img" src="${item.image}" alt="${title}" loading="eager" onerror="this.onerror=null; this.src='/images/hero.jpg';" />
        <div class="story-gradient"></div>
        <div class="story-content">
          <span class="story-number">0${index + 1}</span>
          <h3 class="story-title">${title}</h3>
          <p class="story-subtitle">${subtitle}</p>
        </div>
      `;

      container.appendChild(card);
    });

    // Re-trigger intersection observer for newly created elements
    setupIntersectionObserver();
  }

  /* ==========================================================================
     5. COUNTDOWN TIMER ENGINE
     ========================================================================== */
  function startCountdown() {
    const targetDate = new Date(config.weddingDate).getTime();

    function update() {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // Format numbers with padded zeroes or locale specific
      if (daysEl) daysEl.textContent = days < 10 ? `0${days}` : days;
      if (hoursEl) hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
      if (minutesEl) minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
      if (secondsEl) secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }

    update();
    setInterval(update, 1000);
  }

  /* ==========================================================================
     6. SCROLL & HEADER INTERACTIONS
     ========================================================================== */
  function setupScrollListeners() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }

      highlightActiveNav();
    });
  }

  function highlightActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  }

  /* ==========================================================================
     7. INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
     ========================================================================== */
  function setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.12
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');
    revealElements.forEach(el => observer.observe(el));
  }

  /* ==========================================================================
     8. EVENT LISTENERS & DROPDOWNS
     ========================================================================== */
  function setupEventListeners() {
    // Theme Switcher Toggle
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
      });
    }

    // Language Dropdown Toggle
    if (langBtn && langDropdown) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
      });

      document.addEventListener('click', () => {
        langDropdown.classList.remove('show');
      });

      document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetLang = btn.dataset.lang;
          setLanguage(targetLang);
          langDropdown.classList.remove('show');
        });
      });
    }

    // Mobile Hamburger Menu Toggle
    if (mobileMenuBtn && mobileOverlay) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileOverlay.classList.toggle('open');
      });

      document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileOverlay.classList.remove('open');
        });
      });
    }

    // Interactive Motion Envelope Card Handlers
    const envelopeOverlay = document.getElementById('envelope-overlay');
    const openEnvelopeBtn = document.getElementById('open-envelope-btn');
    const reopenCardBtn = document.getElementById('reopen-card-btn');

    if (openEnvelopeBtn && envelopeOverlay) {
      openEnvelopeBtn.addEventListener('click', () => {
        window.scrollTo(0, 0);
        envelopeOverlay.classList.add('opening');
        setTimeout(() => {
          envelopeOverlay.classList.add('is-opened');
          envelopeOverlay.classList.remove('opening');
          const heroEl = document.getElementById('hero');
          if (heroEl) {
            heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          // Trigger scroll reveal for hero content
          setupIntersectionObserver();
        }, 1100);
      });
    }

    if (reopenCardBtn && envelopeOverlay) {
      reopenCardBtn.addEventListener('click', () => {
        envelopeOverlay.classList.remove('is-opened', 'opening');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // DOM ready trigger
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
