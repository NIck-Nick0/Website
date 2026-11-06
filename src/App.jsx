import React, { useState } from 'react';
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

  return (
    <div className="app-container">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        lang={lang} 
        setLang={setLang} 
      />

      <main>
        {activeSection === 'home' && (
          <section id="home" className="page-section active-section">
            <ShowcaseGrid lang={lang} setActiveSection={setActiveSection} />
            <HeroVideo lang={lang} />
            <GallerySlider />
          </section>
        )}

        {activeSection === 'about' && (
          <AboutSection lang={lang} />
        )}

        {activeSection === 'contact' && (
          <ContactSection lang={lang} />
        )}
      </main>

      <Footer />
    </div>
  );
}