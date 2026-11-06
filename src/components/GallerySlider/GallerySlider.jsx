import React, { useState, useEffect } from 'react';
import styles from './GallerySlider.module.css';

const images = [
  '/img/photo1.jpg',
  '/img/photo2.jpg',
  '/img/photo3.jpg'
];

export default function GallerySlider() {
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
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSlide}>&#10094;</button>
        <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSlide}>&#10095;</button>
      </div>

      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}