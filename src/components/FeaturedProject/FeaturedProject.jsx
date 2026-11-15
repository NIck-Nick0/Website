import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './FeaturedProject.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const COUNT = 5;
const photos = Array.from({ length: COUNT }, (_, i) => ({
  full: `/img/bedroom-${i + 1}.jpg`,
  thumb: `/img/bedroom-${i + 1}-thumb.jpg`,
}));

const tags = {
  en: ['Sleeping area', 'Built-in gaming desk', 'Glass wardrobe', 'Hidden storage', 'Linear lighting'],
  ar: ['ركن نوم', 'مكتب جيمينج مدمج', 'دولاب زجاجي', 'تخزين مخفي', 'إضاءة خطية'],
};

export default function FeaturedProject({ lang }) {
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);
  const isEn = lang === 'en';
  const isOpen = active !== null;

  const go = useCallback((step) => {
    setActive((prev) => (prev === null ? prev : (prev + step + COUNT) % COUNT));
  }, []);

  // كيبورد + قفل الـ scroll وقت فتح الصورة الكبيرة
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKey = (e) => {
      const rtl = document.documentElement.dir === 'rtl';
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') go(rtl ? -1 : 1);
      if (e.key === 'ArrowLeft') go(rtl ? 1 : -1);
    };

    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, go]);

  const altFor = (i) =>
    isEn ? `Black bedroom project, photo ${i + 1}` : `مشروع غرفة النوم السوداء، صورة ${i + 1}`;

  return (
    <section className={styles.section}>
      <SectionTitle title={isEn ? 'Featured Project' : 'مشروع مميز'} />

      <div className={styles.intro}>
        <h3>{isEn ? 'The Black Bedroom' : 'غرفة النوم السوداء'}</h3>
        <p>
          {isEn
            ? 'Modern architectural design meets everyday needs. A fully custom bedroom in refined black with calm linear lighting, combining a sleeping area with a work and gaming desk built into the wall, a glass wardrobe and hidden storage, all executed to the millimeter.'
            : 'عندما يجتمع التصميم المعماري الحديث مع احتياجاتك اليومية. غرفة نوم مفصّلة بالكامل بلون أسود راقٍ وإضاءة خطية هادئة، تدمج بين ركن النوم ومكتب عمل وجيمينج مدمج في الحائط، مع دولاب زجاجي ومساحات تخزين مخفية منفذة بدقة بالمللي.'}
        </p>
        <ul className={styles.tags}>
          {tags[lang].map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      <div className={styles.gallery}>
        {photos.map((p, i) => (
          <button
            key={p.full}
            type="button"
            className={`${styles.item} ${i === 0 ? styles.main : ''}`}
            onClick={() => setActive(i)}
          >
            <img
              src={i === 0 ? p.full : p.thumb}
              alt={altFor(i)}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={isEn ? 'Project photos' : 'صور المشروع'}
          onClick={() => setActive(null)}
        >
          <button
            ref={closeRef}
            type="button"
            className={styles.closeBtn}
            aria-label={isEn ? 'Close' : 'إغلاق'}
            onClick={() => setActive(null)}
          >
            &times;
          </button>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.prev}`}
            aria-label={isEn ? 'Previous photo' : 'الصورة السابقة'}
            onClick={(e) => { e.stopPropagation(); go(-1); }}
          >
            <span className={styles.arrowIcon}>&#10094;</span>
          </button>

          <img
            className={styles.lightboxImg}
            src={photos[active].full}
            alt={altFor(active)}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className={`${styles.navBtn} ${styles.next}`}
            aria-label={isEn ? 'Next photo' : 'الصورة التالية'}
            onClick={(e) => { e.stopPropagation(); go(1); }}
          >
            <span className={styles.arrowIcon}>&#10095;</span>
          </button>

          <span className={styles.counter}>{active + 1} / {COUNT}</span>
        </div>
      )}
    </section>
  );
}
