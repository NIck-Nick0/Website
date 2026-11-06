import React from 'react';
import styles from './ShowcaseGrid.module.css';

export default function ShowcaseGrid({ lang, setActiveSection }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        
        <h1 className={styles.title}>
          {lang === 'en' ? 'Arrow Woodworks' : 'أرو للأعمال الخشبية'}
        </h1>
        
        <p className={styles.subtitle}>
          {lang === 'en' 
            ? 'Custom woodworks and luxury furniture crafted to bring thoughtful spaces to life.' 
            : 'أعمال خشبية وأثاث فاخر ومخصص لإحياء مساحاتك بأرقى التصاميم.'}
        </p>
        
        <p className={styles.description}>
          {lang === 'en'
            ? 'Through innovative finishing techniques, expert craftsmanship, and a deeply collaborative process, we turn interiors into a defining element of design.'
            : 'من خلال تقنيات التشطيب المبتكرة، الحرفية العالية، والتعاون المستمر، نحول المساحات الداخلية إلى تحفة فنية بارزة.'}
        </p>

        <div className={styles.actions}>
          {/* زر ينتقل لصفحة التواصل مباشرة */}
          <button 
            className={styles.consultBtn}
            onClick={() => setActiveSection('contact')}
          >
            {lang === 'en' ? 'Book a Consultation' : 'احجز استشارة'}
          </button>

          {/* زر عرض الأعمال */}
          <button 
            className={styles.workBtn}
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }}
          >
            {lang === 'en' ? 'View our Work' : 'شاهد أعمالنا'}
          </button>
        </div>

      </div>
    </section>
  );
}