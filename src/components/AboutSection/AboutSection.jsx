import React from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection({ lang }) {
  return (
    <section id="about" className="page-section active-section">
      <div className="section-title">
        <h2>{lang === 'en' ? 'ABOUT ARROW' : 'عن أرو'}</h2>
        <span className="gold-line"></span>
      </div>
      <div className={styles.aboutContent}>
        <p>
          {lang === 'en'
            ? 'At ARROW, we craft bespoke luxury woodworks and high-end architectural furniture tailored for sophisticated spaces. Combining timeless craftsmanship with contemporary minimalist design, every piece reflects elegance, precision, and durability.'
            : 'في أرو (ARROW)، نقوم بصناعة أرقى الأعمال الخشبية والأثاث المخصص المصمم خصيصاً للمساحات الفاخرة. نمزج بين الحرفية الكلاسيكية والتصميم المودرن البسيط، لتعكس كل قطعة معنى الفخامة، الدقة، والأناقة المستمرة.'}
        </p>
      </div>
    </section>
  );
}