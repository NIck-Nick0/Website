import React from 'react';
import styles from './AboutSection.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const content = {
  en: {
    title: 'About ARROW',
    heading: 'Custom woodwork, built around the way you live.',
    paragraphs: [
      'At ARROW, we craft bespoke luxury woodworks and high-end architectural furniture tailored for sophisticated spaces. Combining timeless craftsmanship with contemporary minimalist design, every piece reflects elegance, precision, and durability.',
      'Every project starts with measurements and a conversation, moves through realistic 3D renders you approve, and ends with manufacturing and installation.',
    ],
    heroAlt: 'Custom U-shaped kitchen in oak veneer and white with a black stone backsplash',
    principlesTitle: 'How we build',
    principles: [
      {
        title: 'Built for your space',
        text: 'Each piece is designed and cut for your room, not picked from a catalogue.',
      },
      {
        title: 'See it before we build it',
        text: 'Realistic 3D renders show the materials, appliances and lighting before manufacturing starts.',
      },
      {
        title: 'Precision to the millimeter',
        text: 'Built-in storage, wardrobes and appliance housings are fitted exactly.',
      },
      {
        title: 'Finished and installed by us',
        text: 'We manufacture, install and finish the work so the space is ready to live in.',
      },
    ],
    materialsTitle: 'What we work with',
    materials: [
      'Natural wood veneers',
      'Marble and stone',
      'Fluted panels',
      'Glass-front cabinets',
      'Concealed LED lighting',
    ],
    galleryTitle: 'Beyond the kitchen',
    gallery: [
      { src: '/img/about-bedroom.jpg', caption: 'Bedrooms and wardrobes', alt: 'Bedroom with a built-in solid wood wardrobe' },
      { src: '/img/about-bathroom.jpg', caption: 'Bathroom vanities', alt: 'Bathroom with a floating vanity and backlit marble walls' },
      { src: '/img/about-laundry.jpg', caption: 'Laundry rooms', alt: 'Laundry room with stacked machines, hanging rail and open shelves' },
    ],
    ctaText: 'Have a space in mind?',
    ctaButton: 'Talk to us',
  },
  ar: {
    title: 'عن أرو',
    heading: 'أعمال خشبية مصنوعة على قياس طريقة حياتك.',
    paragraphs: [
      'في أرو (ARROW)، نقوم بصناعة أرقى الأعمال الخشبية والأثاث المخصص المصمم خصيصاً للمساحات الفاخرة. نمزج بين الحرفية الكلاسيكية والتصميم المودرن البسيط، لتعكس كل قطعة معنى الفخامة، الدقة، والأناقة المستمرة.',
      'كل مشروع يبدأ بأخذ المقاسات وجلسة نتفق فيها على الفكرة، ثم رندرات 3D واقعية تعتمدها بنفسك، وينتهي بالتصنيع والتركيب.',
    ],
    heroAlt: 'مطبخ مخصص على شكل حرف U بخشب سنديان وأبيض مع باك سبلاش حجر أسود',
    principlesTitle: 'طريقتنا في الشغل',
    principles: [
      {
        title: 'مصنوع لمساحتك',
        text: 'كل قطعة تتصمم وتتقص على غرفتك أنت، مش بتتختار من كتالوج.',
      },
      {
        title: 'شوفه قبل ما نصنعه',
        text: 'رندرات 3D واقعية توضح الخامات والأجهزة والإضاءة قبل بدء التصنيع.',
      },
      {
        title: 'دقة بالمللي',
        text: 'التخزين المدمج والدواليب ومكان الأجهزة كلها بتتركب بمقاس مظبوط.',
      },
      {
        title: 'نصنّع ونركّب وننهي',
        text: 'نصنّع ونركّب ونُنهي التشطيبات ليصبح المكان جاهزاً للاستخدام.',
      },
    ],
    materialsTitle: 'الخامات اللي نشتغل بيها',
    materials: [
      'قشرة خشب طبيعي',
      'رخام وحجر',
      'ألواح مخددة',
      'دواليب بواجهة زجاج',
      'إضاءة LED مخفية',
    ],
    galleryTitle: 'مش المطابخ بس',
    gallery: [
      { src: '/img/about-bedroom.jpg', caption: 'غرف نوم ودواليب', alt: 'غرفة نوم بدولاب خشب طبيعي مدمج' },
      { src: '/img/about-bathroom.jpg', caption: 'وحدات حمام', alt: 'حمام بوحدة معلقة وحوائط رخام بإضاءة خلفية' },
      { src: '/img/about-laundry.jpg', caption: 'غرف غسيل', alt: 'غرفة غسيل بغسالة ونشافة ومعلق ملابس ورفوف مفتوحة' },
    ],
    ctaText: 'عندك مساحة في بالك؟',
    ctaButton: 'تواصل معنا',
  },
};

export default function AboutSection({ lang, setActiveSection }) {
  const t = content[lang] || content.en;

  return (
    <section id="about" className="page-section active-section">
      <SectionTitle title={t.title} />

      <div className={styles.page}>
        {/* القصة */}
        <div className={styles.story}>
          <div className={styles.storyText}>
            <h3>{t.heading}</h3>
            {t.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <img
            className={styles.storyImg}
            src="/img/about-hero.jpg"
            alt={t.heroAlt}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* طريقتنا */}
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>{t.principlesTitle}</h3>
          <ul className={styles.principles}>
            {t.principles.map((p) => (
              <li key={p.title}>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* الخامات */}
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>{t.materialsTitle}</h3>
          <ul className={styles.tags}>
            {t.materials.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>

        {/* معرض صغير */}
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>{t.galleryTitle}</h3>
          <ul className={styles.gallery}>
            {t.gallery.map((g) => (
              <li key={g.src} className={styles.figure}>
                <img src={g.src} alt={g.alt} loading="lazy" decoding="async" />
                <span className={styles.caption}>{g.caption}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* دعوة للتواصل */}
        {setActiveSection && (
          <div className={styles.cta}>
            <p>{t.ctaText}</p>
            <button type="button" className={styles.ctaBtn} onClick={() => setActiveSection('contact')}>
              {t.ctaButton}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
