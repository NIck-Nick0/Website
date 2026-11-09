import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ activeSection, setActiveSection, lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleLanguage = () => {
    // 1. نجيب عنصر الـ Root أو حاوية التطبيق الرئيسية ونعملها Fade Out (تخفيف الشفافية)
    const rootElement = document.getElementById('root') || document.body;
    rootElement.style.transition = 'opacity 0.2s ease-in-out';
    rootElement.style.opacity = '0';

    // 2. نستنى جزء من الثانية لحد ما التلاشي يخلص، ونغير اللغة واتجاه الموقع
    setTimeout(() => {
      const newLang = lang === 'en' ? 'ar' : 'en';
      setLang(newLang);
      setIsOpen(false);
      
      document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', newLang);

      const titleElement = document.getElementById('meta-title');
      const descElement = document.getElementById('meta-desc');

      if (titleElement && descElement) {
        if (newLang === 'en') {
          titleElement.innerText = "Ed Arrow | Interior Design & Modern Furniture in Egypt";
          descElement.setAttribute("content", "Ed Arrow specializes in interior design, modern kitchens manufacturing, and custom furniture with the highest quality in Egypt.");
        } else {
          titleElement.innerText = "Ed Arrow | تصميم داخلي وأثاث مودرن في مصر";
          descElement.setAttribute("content", "Ed Arrow متفوقون في التصميم الداخلي، تنفيذ المطابخ المودرن، والأثاث المخصص بأعلى جودة في مصر. تواصل معنا لتنفيذ ديكور منزلك.");
        }
      }

      // 3. نرجع نظهر الموقع تاني بسلاسة (Fade In) بعد ما بيانات اللغة اتحدثت
      setTimeout(() => {
        rootElement.style.opacity = '1';
      }, 50);

    }, 200); // 200 ميلي ثانية مدة التلاشي السريع والراقي
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  // إغلاق القائمة عند الضغط براها مع السماح بالـ Scroll داخلها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const headerStyle = activeSection === 'home' ? styles.fixedHeader : styles.staticHeader;

  return (
    <header className={`${styles.header} ${headerStyle}`} ref={navRef}>
      {/* زر الثلاث شرط للموبايل */}
      <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
        <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
      </div>

      {/* الروابط وقائمة الموبايل الجانبية */}
      <nav className={`${styles.navbarLinks} ${isOpen ? styles.active : ''}`}>
        <ul>
          <li>
            <a 
              href="#home" 
              className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`} 
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            >
              {lang === 'en' ? 'Home' : 'الرئيسية'}
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`} 
              onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            >
              {lang === 'en' ? 'About Us' : 'من نحن'}
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`} 
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              {lang === 'en' ? 'Contact' : 'تواصل معنا'}
            </a>
          </li>

          {/* زر تغيير اللغة داخل القائمة الجانبية للموبايل */}
          <li className={styles.mobileLangItem}>
            <button className={styles.langBtn} onClick={toggleLanguage}>
              {lang === 'en' ? 'عربي' : 'English'}
            </button>
          </li>
        </ul>
      </nav>

      {/* مجموعة اللوجو وزر اللغة (للديسكتوب فقط) */}
      <div className={styles.brandContainer}>
        <div className={styles.desktopLang}>
          <button className={styles.langBtn} onClick={toggleLanguage}>
            {lang === 'en' ? 'عربي' : 'English'}
          </button>
        </div>
        <div className={styles.logoContainer}>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            <img src="/img/logo.png" alt="ARROW Logo" className={styles.logoImg} />
          </a>
        </div>
      </div>
    </header>
  );
}