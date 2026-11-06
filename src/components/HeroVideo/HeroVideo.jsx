import React, { useRef, useEffect } from 'react';
import styles from './HeroVideo.module.css';

export default function HeroVideo({ lang }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          document.addEventListener('click', () => {
            video.play();
          }, { once: true });
        });
      }
    }
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className={styles.heroContainerWrapper}>
      <div className={styles.videoHeroContainer}>
        <div className={styles.videoFrame}>
          <video 
            ref={videoRef}
            className={styles.heroVideo} 
            autoPlay 
            muted 
            playsInline 
            preload="auto" 
            poster="/img/photo1.jpg"
            onEnded={handleVideoEnd}
            controlsList="nodownload nofullscreen noremoteplayback"
          >
            <source src="/img/logo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className={styles.heroText}>
        <h1>{lang === 'en' ? 'ELEGANCE IN EVERY DETAIL' : 'الفخامة في كل تفصيلة'}</h1>
        <p>{lang === 'en' ? 'LUXURY WOODWORKS & CUSTOM FURNITURE' : 'أرقى الأعمال الخشبية والأثاث المخصص'}</p>
      </div>
    </div>
  );
}