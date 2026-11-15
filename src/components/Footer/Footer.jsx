import React from 'react';
import styles from './Footer.module.css';

export default function Footer({ lang }) {
  return (
    <footer className={styles.footer}>
      <p>
        {lang === 'en' 
          ? '© 2026 Ed Arrow. All rights reserved.' 
          : '© 2026 أرو للأعمال الخشبية. جميع الحقوق محفوظة.'}
      </p>
    </footer>
  );
}