import React from 'react';
import styles from './CtaSection.module.css';
import { PHONE, PHONE_DISPLAY, WHATSAPP_NUMBER } from '../../config';

export default function CtaSection({ lang, setActiveSection }) {
  const isEn = lang === 'en';

  return (
    <section className={styles.cta}>
      <p className={styles.tagline}>Spaces with Purpose</p>
      <h2>{isEn ? 'Ready to start your project?' : 'جاهز تبدأ مشروعك؟'}</h2>
      <p className={styles.text}>
        {isEn
          ? 'Book an engineering consultation and let’s bring your space to life.'
          : 'احجز استشارتك الهندسية ودعنا نحوّل مساحتك إلى واقع.'}
      </p>

      <div className={styles.actions}>
        <button className={styles.primary} onClick={() => setActiveSection('contact')}>
          {isEn ? 'Book a Consultation' : 'احجز استشارة'}
        </button>

        <a href={`tel:${PHONE}`} className={styles.secondary}>
          {isEn ? 'Call' : 'اتصل'} <bdi>{PHONE_DISPLAY}</bdi>
        </a>

        {WHATSAPP_NUMBER && (
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            {isEn ? 'WhatsApp' : 'واتساب'}
          </a>
        )}
      </div>
    </section>
  );
}
