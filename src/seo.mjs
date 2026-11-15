// src/seo.mjs
// عناوين ووصف كل صفحة. بيتقرأ من App.jsx وقت التشغيل،
// ومن scripts/postbuild.mjs وقت الـ build عشان يتكتب جوه HTML كل صفحة.

export const SITE = 'https://ed-arrow.com';

export const routes = {
  home: {
    path: '/',
    en: {
      title: 'Ed Arrow | Interior Design & Modern Furniture in Egypt',
      desc: 'Ed Arrow specializes in interior design, modern kitchens manufacturing, and custom furniture with the highest quality in Egypt.',
    },
    ar: {
      title: 'Ed Arrow | تصميم داخلي وأثاث مودرن في مصر',
      desc: 'Ed Arrow متفوقون في التصميم الداخلي، تنفيذ المطابخ المودرن، والأثاث المخصص بأعلى جودة في مصر. تواصل معنا لتنفيذ ديكور منزلك.',
    },
  },
  about: {
    path: '/about',
    en: {
      title: 'About Us | Ed Arrow - Custom Woodwork & Furniture in Egypt',
      desc: 'Learn how Ed Arrow designs and manufactures custom kitchens, bedrooms and furniture in Egypt, from measurements and 3D renders to installation.',
    },
    ar: {
      title: 'من نحن | Ed Arrow - أعمال خشبية وأثاث مخصص في مصر',
      desc: 'تعرّف على طريقة Ed Arrow في تصميم وتصنيع المطابخ وغرف النوم والأثاث المخصص في مصر، من أخذ المقاسات والرندر ثلاثي الأبعاد حتى التركيب.',
    },
  },
  contact: {
    path: '/contact',
    en: {
      title: 'Contact Us | Ed Arrow - Book an Engineering Consultation',
      desc: 'Call, WhatsApp or email Ed Arrow to book an engineering consultation for your kitchen, bedroom or custom furniture project in Egypt.',
    },
    ar: {
      title: 'تواصل معنا | Ed Arrow - احجز استشارتك الهندسية',
      desc: 'اتصل أو راسل Ed Arrow على واتساب أو الإيميل لحجز استشارة هندسية لمطبخك أو غرفة نومك أو أثاثك المخصص في مصر.',
    },
  },
};

export function sectionFromPath(pathname) {
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/contact')) return 'contact';
  return 'home';
}
