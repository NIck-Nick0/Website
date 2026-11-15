import React from 'react';
import styles from './ContactSection.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import { PHONES, EMAIL, WHATSAPP_NUMBER, FACEBOOK_URL } from '../../config';

const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const ChatIcon = () => (
  <svg {...iconProps}>
    <path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8z" />
  </svg>
);

const FacebookIcon = () => (
  <svg {...iconProps}>
    <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v5h4v-5h3l1-4h-4V8.5A.5.5 0 0 1 14 8z" />
  </svg>
);

const text = {
  en: {
    title: 'Contact Us',
    subtitle: 'Tell us about your space and we’ll get back to you to arrange an engineering consultation.',
    phone: 'Call us',
    whatsapp: 'WhatsApp',
    whatsappValue: 'Message us directly',
    email: 'Email us',
    facebook: 'Facebook',
    facebookValue: 'Visit our page',
  },
  ar: {
    title: 'تواصل معنا',
    subtitle: 'احكيلنا عن مساحتك وهنرجع لك لتحديد موعد الاستشارة الهندسية.',
    phone: 'اتصل بنا',
    whatsapp: 'واتساب',
    whatsappValue: 'ابعتلنا رسالة مباشرة',
    email: 'راسلنا',
    facebook: 'فيسبوك',
    facebookValue: 'زور صفحتنا',
  },
};

export default function ContactSection({ lang }) {
  const t = text[lang] || text.en;

  return (
    <section id="contact" className="page-section active-section">
      <SectionTitle title={t.title} subtitle={t.subtitle} />

      <div className={styles.contactContainer}>
        <ul className={styles.card}>
          <li className={styles.method}>
            <span className={styles.icon}><PhoneIcon /></span>
            <div>
              <span className={styles.label}>{t.phone}</span>
              {PHONES.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className={styles.value}>
                  <bdi>{p.display}</bdi>
                </a>
              ))}
            </div>
          </li>

          {WHATSAPP_NUMBER && (
            <li className={styles.method}>
              <span className={styles.icon}><ChatIcon /></span>
              <div>
                <span className={styles.label}>{t.whatsapp}</span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.value}
                >
                  {t.whatsappValue}
                </a>
              </div>
            </li>
          )}

          <li className={styles.method}>
            <span className={styles.icon}><MailIcon /></span>
            <div>
              <span className={styles.label}>{t.email}</span>
              <a href={`mailto:${EMAIL}`} className={`${styles.value} ${styles.emailValue}`}>
                <bdi>{EMAIL}</bdi>
              </a>
            </div>
          </li>

          {FACEBOOK_URL && (
            <li className={styles.method}>
              <span className={styles.icon}><FacebookIcon /></span>
              <div>
                <span className={styles.label}>{t.facebook}</span>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.value}
                >
                  {t.facebookValue}
                </a>
              </div>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
