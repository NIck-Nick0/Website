// scripts/postbuild.mjs
// بعد vite build: بيعمل نسخة من index.html لكل صفحة (dist/about/index.html وغيرها)
// وبيكتب فيها العنوان والوصف والـ canonical الخاصين بالصفحة.
// كده المعاينة في واتساب وجوجل بتشوف بيانات الصفحة الصح من غير ما تشغل JavaScript.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { routes, SITE } from '../src/seo.mjs';

const dist = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', dist), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function swap(source, pattern, value, label) {
  if (!pattern.test(source)) {
    console.warn(`postbuild: لقيتش ${label} في index.html`);
    return source;
  }
  return source.replace(pattern, (_, a, b) => a + value + (b ?? ''));
}

for (const key of ['about', 'contact']) {
  const { path, en } = routes[key];
  const url = SITE + path;
  let out = html;
  out = swap(out, /(<title id="meta-title">)[\s\S]*?(<\/title>)/, esc(en.title), 'title');
  out = swap(out, /(<meta id="meta-desc" name="description" content=")[^"]*(")/, esc(en.desc), 'description');
  out = swap(out, /(<meta property="og:title" content=")[^"]*(")/, esc(en.title), 'og:title');
  out = swap(out, /(<meta property="og:description" content=")[^"]*(")/, esc(en.desc), 'og:description');
  out = swap(out, /(<meta property="og:url" content=")[^"]*(")/, url, 'og:url');
  out = swap(out, /(<meta name="twitter:title" content=")[^"]*(")/, esc(en.title), 'twitter:title');
  out = swap(out, /(<meta name="twitter:description" content=")[^"]*(")/, esc(en.desc), 'twitter:description');
  out = swap(out, /(<link rel="canonical" href=")[^"]*(")/, url, 'canonical');

  const folder = new URL(`.${path}/`, dist);
  await mkdir(folder, { recursive: true });
  await writeFile(new URL('index.html', folder), out);
  console.log(`postbuild: dist${path}/index.html`);
}
