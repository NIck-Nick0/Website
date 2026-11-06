import React from 'react';
import styles from './ContactSection.module.css';

export default function ContactSection({ lang }) {
  return (
    <section id="contact" className="page-section active-section">
      <div className="section-title">
        <h2>{lang === 'en' ? 'CONTACT US' : 'تواصل معنا'}</h2>
        <span className="gold-line"></span>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>
              {lang === 'en' ? 'PHONE' : 'الهاتف'}
            </span>
            <a href="tel:01557114086" className={styles.contactValue}>0155 711 4086</a>
            <a href="tel:01557114038" className={styles.contactValue}>0155 711 4038</a>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>
              {lang === 'en' ? 'EMAIL' : 'البريد الإلكتروني'}
            </span>
            <a href="mailto:m.yehia@ed-arrow.com" className={`${styles.contactValue} ${styles.emailLink}`}>
              m.yehia@ed-arrow.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}