import React from 'react';
import styles from './OfferBanner.module.css';
import { SHOW_OFFER } from '../../config';

export default function OfferBanner({ lang, setActiveSection }) {
  if (!SHOW_OFFER) return null;

  const isEn = lang === 'en';

  return (
    <section className={styles.offer} aria-labelledby="offer-title">
      <div className={styles.imageWrap}>
        <img
          src="/img/offer-3d.jpg"
          alt={isEn ? 'Realistic 3D render of a kitchen' : 'رندر 3D واقعي لمطبخ'}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={styles.text}>
        <span className={styles.badge}>{isEn ? 'OPENING OFFER' : 'عرض الافتتاح'}</span>
        <h2 id="offer-title" className={styles.title}>
          {isEn ? 'Free 3D design for your kitchen' : 'تصميم 3D مجاني لمطبخك'}
        </h2>
        <p>
          {isEn
            ? 'Before manufacturing begins, see a realistic render of your kitchen: the materials, the appliances and the lighting in your own space.'
            : 'قبل بداية التصنيع، شاهد مطبخك في رندر واقعي: الخامات والأجهزة والإضاءة في مساحتك أنت.'}
        </p>
        <button className={styles.btn} onClick={() => setActiveSection('contact')}>
          {isEn ? 'Book your engineering consultation' : 'احجز استشارتك الهندسية'}
        </button>
      </div>
    </section>
  );
}
