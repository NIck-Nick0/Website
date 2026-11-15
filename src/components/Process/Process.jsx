import React from 'react';
import styles from './Process.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const steps = [
  {
    title: { en: 'Consultation', ar: 'الاستشارة' },
    text: {
      en: 'We listen to your needs, take measurements and agree on the vision.',
      ar: 'نستمع لاحتياجاتك، ونأخذ المقاسات، ونتفق على الفكرة.',
    },
  },
  {
    title: { en: '3D Design', ar: 'التصميم ثلاثي الأبعاد' },
    text: {
      en: 'We turn the engineering drawings into realistic renders you can review.',
      ar: 'نحوّل المخططات الهندسية إلى رندرات واقعية تراجعها بنفسك.',
    },
  },
  {
    title: { en: 'Manufacturing', ar: 'التصنيع' },
    text: {
      en: 'Every piece is crafted with precision, exactly as approved.',
      ar: 'كل قطعة تُصنع بدقة، تماماً كما تم اعتمادها.',
    },
  },
  {
    title: { en: 'Installation', ar: 'التركيب' },
    text: {
      en: 'We install and finish the work so the space is ready to live in.',
      ar: 'نركّب ونُنهي التشطيبات ليصبح المكان جاهزاً للاستخدام.',
    },
  },
];

export default function Process({ lang }) {
  const isEn = lang === 'en';

  return (
    <section className={styles.section}>
      <SectionTitle title={isEn ? 'How We Work' : 'طريقة العمل'} />
      <ol className={styles.steps}>
        {steps.map((s, i) => (
          <li key={s.title.en} className={styles.step}>
            <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
            <h3>{s.title[lang]}</h3>
            <p>{s.text[lang]}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
