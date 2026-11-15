import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ShowcaseGrid from './components/ShowcaseGrid/ShowcaseGrid';
import HeroVideo from './components/HeroVideo/HeroVideo';
import GallerySlider from './components/GallerySlider/GallerySlider';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
// أقسام الصفحة الرئيسية
import SectionTitle from './components/SectionTitle/SectionTitle';
import Services from './components/Services/Services';
import OfferBanner from './components/OfferBanner/OfferBanner';
import FeaturedProject from './components/FeaturedProject/FeaturedProject';
import Process from './components/Process/Process';
import CtaSection from './components/CtaSection/CtaSection';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';
import { routes, SITE, sectionFromPath } from './seo.mjs';

const PATHS = { home: routes.home.path, about: routes.about.path, contact: routes.contact.path };

export default function App() {
  const [lang, setLang] = useState('en');
  const location = useLocation();
  const navigate = useNavigate();

  const activeSection = sectionFromPath(location.pathname);

  // 1. روابط قديمة زي ed-arrow.com/#about بتتحول لـ /about
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && PATHS[hash]) {
      navigate(PATHS[hash], { replace: true });
    }
  }, [location.hash, navigate]);

  // 2. اللغة، الاتجاه، العنوان، الوصف، والـ canonical حسب الصفحة
  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);

    const page = routes[activeSection][lang];
    document.title = page.title;

    const descElement = document.getElementById('meta-desc');
    if (descElement) descElement.setAttribute('content', page.desc);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', SITE + routes[activeSection].path);
  }, [lang, activeSection]);

  // 3. الصعود لأعلى الصفحة عند تغيير الصفحة
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // دالة التنقل الموحدة (بتستخدمها الـ Navbar والأزرار)
  const handleNavClick = (section) => {
    navigate(PATHS[section] || '/');
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
        <Routes>
          <Route
            path="/"
            element={
              <section id="home" className="page-section active-section">
                <ShowcaseGrid lang={lang} setActiveSection={handleNavClick} />
                <HeroVideo lang={lang} />

                <Services lang={lang} />

                <section id="work" style={{ marginBottom: 90, scrollMarginTop: 100 }}>
                  <SectionTitle title={lang === 'en' ? 'Our Kitchens' : 'مطابخنا'} />
                  <GallerySlider lang={lang} />
                </section>

                <OfferBanner lang={lang} setActiveSection={handleNavClick} />
                <FeaturedProject lang={lang} />
                <Process lang={lang} />
                <CtaSection lang={lang} setActiveSection={handleNavClick} />
              </section>
            }
          />
          <Route
            path="/about"
            element={<AboutSection lang={lang} setActiveSection={handleNavClick} />}
          />
          <Route path="/contact" element={<ContactSection lang={lang} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer lang={lang} />

      {/* زرار واتساب عايم (مخفي في صفحة التواصل لأن فيها واتساب أصلاً) */}
      {activeSection !== 'contact' && <WhatsAppFloat lang={lang} />}
    </div>
  );
}
