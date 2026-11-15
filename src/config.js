// src/config.js
// الإعدادات اللي بتتغير من وقت للتاني — عدّلها من هنا بس.

// عرض الـ 3D المجاني: خليها false لما العرض ينتهي، والقسم كله بيختفي من الصفحة الرئيسية.
// (ولو العرض استمر، بدّل صورة public/img/offer-3d.jpg بالصورة الجديدة بنفس الاسم.)
export const SHOW_OFFER = true;

export const PHONE = '+201557114038';
export const PHONE_DISPLAY = '+20 155 711 4038';

// كل أرقام التليفون اللي بتظهر في صفحة "تواصل معنا".
export const PHONES = [
  { tel: '+201557114086', display: '+20 155 711 4086' },
  { tel: '+201557114038', display: '+20 155 711 4038' },
];

export const EMAIL = 'm.yehia@ed-arrow.com';

// رقم الواتساب بصيغة دولية من غير + (مثال: '201557114038').
// سيبه فاضي لو مش متأكد إن الرقم عليه واتساب، وزرار الواتساب مش هيظهر.
export const WHATSAPP_NUMBER = '201557114038';

// صفحة الفيسبوك.
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61594325521898';
