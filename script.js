document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('hero-video');

  if (video) {
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Autoplay was blocked by browser.");
      });
    }
  }

  // --- التبديل بين اللغتين (EN / AR) ---
  const langToggleBtn = document.getElementById('langToggleBtn');
  let currentLang = 'en';

  const translations = {
    en: {
      btn: 'عربي',
      dir: 'ltr',
      heroTitle: 'SPACES WITH PURPOSE',
      heroSubtitle: 'Crafting & Exporting Luxury Wooden Furniture',
      aboutTitle: 'ABOUT US',
      aboutDesc: 'At <strong>ARROW Woodworks</strong>, we blend heritage with modern aesthetics in luxury wooden furniture manufacturing. We bring innovative concepts into modern spaces with exquisite craftsmanship and supreme quality.',
      contactTitle: 'CONTACT US',
      namePlh: 'Full Name',
      emailPlh: 'Email Address',
      msgPlh: 'Your Message...',
      submitBtn: 'Send Message'
    },
    ar: {
      btn: 'English',
      dir: 'rtl',
      heroTitle: 'مساحات ذات هدف',
      heroSubtitle: 'تصميم وتصنيع أرقى أنواع الأثاث والديكور الخشبي',
      aboutTitle: 'من نحن',
      aboutDesc: 'نحن في <strong>ARROW Woodworks</strong> نجمع بين الأصالة والحداثة في صناعة الأثاث الخشبي الفاخر. ننفّذ تصاميم مبتكرة تناسب المساحات الحديثة بعناية فائقة للتفاصيل وجودة لا تضاهى.',
      contactTitle: 'تواصل معنا',
      namePlh: 'الاسم الكامل',
      emailPlh: 'البريد الإلكتروني',
      msgPlh: 'رسالتك...',
      submitBtn: 'إرسال الرسالة'
    }
  };

  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    const t = translations[currentLang];

    document.documentElement.lang = currentLang;
    document.documentElement.dir = t.dir;
    langToggleBtn.textContent = t.btn;

    document.querySelectorAll('.nav-link').forEach(link => {
      link.textContent = link.getAttribute(`data-${currentLang}`);
    });

    document.getElementById('heroTitle').textContent = t.heroTitle;
    document.getElementById('heroSubtitle').textContent = t.heroSubtitle;
    document.getElementById('aboutTitle').textContent = t.aboutTitle;
    document.getElementById('aboutDesc').innerHTML = t.aboutDesc;
    document.getElementById('contactTitle').textContent = t.contactTitle;
    document.getElementById('inputName').placeholder = t.namePlh;
    document.getElementById('inputEmail').placeholder = t.emailPlh;
    document.getElementById('inputMsg').placeholder = t.msgPlh;
    document.getElementById('submitBtn').textContent = t.submitBtn;
  });

  // --- التنقل بين الصفحات ---
  const navLinks = document.querySelectorAll('.nav-link');
  const pageSections = document.querySelectorAll('.page-section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      pageSections.forEach(section => section.classList.remove('active-section'));

      link.classList.add('active');
      const targetId = link.getAttribute('href').substring(1);
      document.getElementById(targetId).classList.add('active-section');
    });
  });

  // --- معرض الصور (Slider) ---
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('dotsContainer');
  let currentIndex = 0;

  if (slides.length > 0) {
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
      });
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      updateSlider();
    }

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    });
  }
});