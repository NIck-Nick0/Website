document.addEventListener('DOMContentLoaded', () => {

  /* ----- 1. Hero Video Control (Play Once & Pause on Last Frame) ----- */
  const heroVideo = document.getElementById('hero-video');

  if (heroVideo) {
    // تأكيد كتم الصوت لضمان التشغيل التلقائي عبر المتصفحات
    heroVideo.muted = true;

    // محاولة تشغيل الفيديو
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // إذا منع المتصفح التشغيل التلقائي، يتم التشغيل مع أول تفاعل للمستخدم
        document.addEventListener('click', () => {
          heroVideo.play();
        }, { once: true });
      });
    }

    // إيقاف الفيديو تماماً وثباته على آخر ثانية عند الانتهاء
    heroVideo.addEventListener('ended', () => {
      heroVideo.pause();
    });
  }

  /* ----- 2. Navigation & Page Switching ----- */
  const navLinks = document.querySelectorAll('.nav-link');
  const pageSections = document.querySelectorAll('.page-section');
  const logoLink = document.getElementById('logo-link');

  function switchSection(sectionId) {
    pageSections.forEach(section => {
      if (section.id === sectionId) {
        section.classList.add('active-section');
      } else {
        section.classList.remove('active-section');
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('data-section') === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = link.getAttribute('data-section');
      if (targetSection) {
        switchSection(targetSection);
      }
    });
  });

  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      switchSection('home');
    });
  }

  /* ----- 3. Language Toggle (Bilingual EN/AR) ----- */
  const langToggleBtn = document.getElementById('lang-toggle');

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const isEnglish = currentDir === 'ltr';

      if (isEnglish) {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        langToggleBtn.textContent = 'English';
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        langToggleBtn.textContent = 'عربي';
      }

      document.querySelectorAll('[data-en][data-ar]').forEach(element => {
        element.textContent = isEnglish ? element.getAttribute('data-ar') : element.getAttribute('data-en');
      });

      document.querySelectorAll('[data-placeholder-en][data-placeholder-ar]').forEach(input => {
        input.placeholder = isEnglish ? input.getAttribute('data-placeholder-ar') : input.getAttribute('data-placeholder-en');
      });
    });
  }

  /* ----- 4. Gallery Dynamic Slider ----- */
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;
  let autoSlideInterval;

  function showSlide(index) {
    if (slides.length === 0) return;

    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoSlide();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      if (!isNaN(index)) {
        showSlide(index);
        startAutoSlide();
      }
    });
  });

  if (slides.length > 0) {
    startAutoSlide();
  }

  /* ----- 5. Contact Form Handler ----- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isArabic = document.documentElement.getAttribute('dir') === 'rtl';
      alert(isArabic ? 'شكرًا لتواصلك معنا! سنرد عليك في أقرب وقت.' : 'Thank you for contacting us! We will get back to you shortly.');
      contactForm.reset();
    });
  }

});