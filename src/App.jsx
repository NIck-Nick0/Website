import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import ShowcaseGrid from './components/ShowcaseGrid/ShowcaseGrid';
import HeroVideo from './components/HeroVideo/HeroVideo';
import GallerySlider from './components/GallerySlider/GallerySlider';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState('en');

  // 1. مزامنة اللغة، الاتجاه (RTL/LTR)، والـ Meta Tags أوتوماتيكياً
  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);

    const titleElement = document.getElementById('meta-title');
    const descElement = document.getElementById('meta-desc');

    if (titleElement && descElement) {
      if (lang === 'en') {
        titleElement.innerText = "Ed Arrow | Interior Design & Modern Furniture in Egypt";
        descElement.setAttribute("content", "Ed Arrow specializes in interior design, modern kitchens manufacturing, and custom furniture with the highest quality in Egypt.");
      } else {
        titleElement.innerText = "Ed Arrow | تصميم داخلي وأثاث مودرن في مصر";
        descElement.setAttribute("content", "Ed Arrow متفوقون في التصميم الداخلي، تنفيذ المطابخ المودرن، والأثاث المخصص بأعلى جودة في مصر. تواصل معنا لتنفيذ ديكور منزلك.");
      }
    }
  }, [lang]);

  // 2. مزامنة الـ Hash وزر الـ Back في المتصفح والصعود للأعلى
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'about', 'contact'].includes(hash)) {
        setActiveSection(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!hash) {
        setActiveSection('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // قراءة الهاش عند فتح الموقع أول مرة

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // دالة التنقل الموحدة لتحديث الـ Hash والصعود لأعلى الصفحة
  const handleNavClick = (section) => {
    setActiveSection(section);
    window.location.hash = section;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={handleNavClick} 
        lang={lang} 
        setLang={setLang} 
      />

      <main>
        {activeSection === 'home' && (
          <section id="home" className="page-section active-section">
            <ShowcaseGrid lang={lang} setActiveSection={handleNavClick} />
            <HeroVideo lang={lang} />
            <GallerySlider lang={lang} />
          </section>
        )}

        {activeSection === 'about' && (
          <AboutSection lang={lang} />
        )}

        {activeSection === 'contact' && (
          <ContactSection lang={lang} />
        )}
      </main>

      <Footer lang={lang} />
    </div>
  );
}