import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ activeSection, setActiveSection, lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleLanguage = () => {
    const rootElement = document.getElementById('root') || document.body;
    rootElement.style.transition = 'opacity 0.2s ease-in-out';
    rootElement.style.opacity = '0';

    setTimeout(() => {
      const newLang = lang === 'en' ? 'ar' : 'en';
      setLang(newLang);
      setIsOpen(false);
      
      // تحديث الاتجاه واللغة في الـ HTML
      const dir = newLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('dir', dir);
      document.documentElement.setAttribute('lang', newLang);

      setTimeout(() => {
        rootElement.style.opacity = '1';
      }, 50);

    }, 200);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  // إغلاق القائمة عند الضغط خارجها
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

      {/* روابط التنقل وقائمة الموبايل الجانبية */}
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

      {/* مجموعة اللوجو وزر اللغة (للديسكتوب) */}
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