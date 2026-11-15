import React, { useState, useEffect } from 'react';
import styles from './GallerySlider.module.css';

const images = [
  '/img/photo1.jpg',
  '/img/photo2.jpg',
  '/img/photo3.jpg'
];

export default function GallerySlider({ lang }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.sliderWrapper}>
        {images.map((img, index) => (
          <div
            key={index}
            role="img"
            aria-label={lang === 'en' ? `Slide ${index + 1}` : `الشريحة ${index + 1}`}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* زر السابق مع الـ aria-label وتغليف السهم بـ span لتطبيق الـ RTL scaleX */}
        <button 
          aria-label={lang === 'en' ? 'Previous Slide' : 'الشريحة السابقة'}
          className={`${styles.navBtn} ${styles.prevBtn}`} 
          onClick={prevSlide}
        >
          <span className={styles.arrowIcon}>&#10094;</span>
        </button>

        {/* زر التالي */}
        <button 
          aria-label={lang === 'en' ? 'Next Slide' : 'الشريحة التالية'}
          className={`${styles.navBtn} ${styles.nextBtn}`} 
          onClick={nextSlide}
        >
          <span className={styles.arrowIcon}>&#10095;</span>
        </button>
      </div>

      {/* نقاط التنقل (Dots) المحولة إلى عناصر button مع aria-label */}
      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={lang === 'en' ? `Go to slide ${index + 1}` : `الانتقال للشريحة ${index + 1}`}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}