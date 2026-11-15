import React, { useRef, useEffect } from 'react';
import styles from './HeroVideo.module.css';

export default function HeroVideo({ lang }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    video.muted = true;
    let waitingForClick = false;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // لو المتصفح منع التشغيل التلقائي: نستنى أول ضغطة (مرة واحدة بس)
          if (waitingForClick) return;
          waitingForClick = true;
          document.addEventListener(
            'click',
            () => {
              waitingForClick = false;
              video.play().catch(() => {});
            },
            { once: true }
          );
        });
      }
    };

    // الفيديو تحت الهيرو: مش بنحمّله ولا نشغّله إلا لما يقرّب من الشاشة،
    // عشان ما ينافسش صورة الهيرو على سرعة النت.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!video.ended) tryPlay();
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: '200px 0px', threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
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
            muted
            playsInline
            preload="none"
            poster="/img/video-poster.webp"
            onEnded={handleVideoEnd}
            controlsList="nodownload nofullscreen noremoteplayback"
            aria-hidden="true"
          >
            <source src="/img/logo-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className={styles.heroText}>
        <h2>{lang === 'en' ? 'ELEGANCE IN EVERY DETAIL' : 'الفخامة في كل تفصيلة'}</h2>
        <p>{lang === 'en' ? 'LUXURY WOODWORKS & CUSTOM FURNITURE' : 'أرقى الأعمال الخشبية والأثاث المخصص'}</p>
      </div>
    </div>
  );
}
