import React from 'react';
import styles from './SectionTitle.module.css';

// بيستخدم الكلاسات العامة .section-title و .gold-line الموجودة في index.css
export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <span className="gold-line"></span>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
