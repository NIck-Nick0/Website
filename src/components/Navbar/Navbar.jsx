import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ activeSection, setActiveSection, lang, setLang }) {
  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', newLang);
  };

  // تحديد الكلاس بناءً على الصفحة الحالية (لو home يكون fixed، لو غير ذلك يكون static)
  const headerStyle = activeSection === 'home' ? styles.fixedHeader : styles.staticHeader;

  return (
    <header className={`${styles.header} ${headerStyle}`}>
      <div className={styles.logoContainer}>
        <a href="#home" onClick={(e) => { e.preventDefault(); setActiveSection('home'); }}>
          <img src="/img/logo.png" alt="ARROW Logo" className={styles.logoImg} />
        </a>
      </div>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <a 
              href="#home" 
              className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); setActiveSection('home'); }}
            >
              {lang === 'en' ? 'Home' : 'الرئيسية'}
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); setActiveSection('about'); }}
            >
              {lang === 'en' ? 'About Us' : 'من نحن'}
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
              onClick={(e) => { e.preventDefault(); setActiveSection('contact'); }}
            >
              {lang === 'en' ? 'Contact' : 'تواصل معنا'}
            </a>
          </li>
        </ul>
        <button className={styles.langBtn} onClick={toggleLanguage}>
          {lang === 'en' ? 'عربي' : 'English'}
        </button>
      </nav>
    </header>
  );
}