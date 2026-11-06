import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ activeSection, setActiveSection, lang, setLang }) {
  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    
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
  };

  const headerStyle = activeSection === 'home' ? styles.fixedHeader : styles.staticHeader;

  return (
    <header className={`${styles.header} ${headerStyle}`}>
      {/* الروابط في الجهة الأولى */}
      <nav className={styles.navbarLinks}>
        <ul>
          <li>
            <a href="#home" className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('home'); }}>
              {lang === 'en' ? 'Home' : 'الرئيسية'}
            </a>
          </li>
          <li>
            <a href="#about" className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('about'); }}>
              {lang === 'en' ? 'About Us' : 'من نحن'}
            </a>
          </li>
          <li>
            <a href="#contact" className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('contact'); }}>
              {lang === 'en' ? 'Contact' : 'تواصل معنا'}
            </a>
          </li>
        </ul>
      </nav>

      {/* مجموعة اللوجو وزر اللغة في الجهة المقابلة */}
      <div className={styles.brandContainer}>
        <button className={styles.langBtn} onClick={toggleLanguage}>
          {lang === 'en' ? 'عربي' : 'English'}
        </button>
        <div className={styles.logoContainer}>
          <a href="#home" onClick={(e) => { e.preventDefault(); setActiveSection('home'); }}>
            <img src="/img/logo.png" alt="ARROW Logo" className={styles.logoImg} />
          </a>
        </div>
      </div>
    </header>
  );
}