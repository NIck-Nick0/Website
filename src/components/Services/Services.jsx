import React from 'react';
import styles from './Services.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const iconProps = {
  width: 40,
  height: 40,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const services = [
  {
    id: 'kitchens',
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="1.5" />
        <path d="M3 12h18M12 3v9M12 12v9" />
        <path d="M10 7.5v1M14 7.5v1M10 15.5v1M14 15.5v1" />
      </svg>
    ),
    title: { en: 'Modern Kitchens', ar: 'مطابخ مودرن' },
    text: {
      en: 'Custom-built kitchens designed around how you cook and live.',
      ar: 'مطابخ مصممة ومنفذة حسب احتياجك وطريقة استخدامك لها.',
    },
  },
  {
    id: 'bedrooms',
    icon: (
      <svg {...iconProps}>
        <path d="M3 19v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
        <path d="M3 15h18" />
        <path d="M7 9V7.5A1.5 1.5 0 0 1 8.5 6h2A1.5 1.5 0 0 1 12 7.5V9" />
      </svg>
    ),
    title: { en: 'Bedrooms & Wardrobes', ar: 'غرف نوم ودريسنج' },
    text: {
      en: 'Bedrooms and built-in wardrobes with hidden storage, finished to the millimeter.',
      ar: 'غرف نوم ودواليب مدمجة بمساحات تخزين مخفية، منفذة بدقة بالمللي.',
    },
  },
  {
    id: 'furniture',
    icon: (
      <svg {...iconProps}>
        <path d="M7 11V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v5" />
        <path d="M5 11h14v4H5z" />
        <path d="M7 15v5M17 15v5" />
      </svg>
    ),
    title: { en: 'Custom Furniture', ar: 'أثاث مخصص' },
    text: {
      en: 'Architectural furniture tailored to your space and your daily needs.',
      ar: 'قطع أثاث معمارية مفصّلة على مساحتك واحتياجاتك اليومية.',
    },
  },
  {
    id: '3d',
    icon: (
      <svg {...iconProps}>
        <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7z" />
        <path d="M3.5 7 12 11.5 20.5 7M12 11.5v10" />
      </svg>
    ),
    title: { en: '3D Design', ar: 'تصميم 3D' },
    text: {
      en: 'Photorealistic renders, so you see every detail before manufacturing starts.',
      ar: 'رندرات واقعية تشاهد من خلالها كل تفصيلة قبل بدء التصنيع.',
    },
  },
];

export default function Services({ lang }) {
  const isEn = lang === 'en';

  return (
    <section className={styles.section}>
      <SectionTitle
        title={isEn ? 'What We Do' : 'خدماتنا'}
        subtitle={isEn ? 'Spaces with Purpose' : 'مساحات بهدف.. وتفاصيل بدقة'}
      />
      <div className={styles.grid}>
        {services.map((s) => (
          <article key={s.id} className={styles.card}>
            <div className={styles.icon}>{s.icon}</div>
            <h3>{s.title[lang]}</h3>
            <p>{s.text[lang]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
