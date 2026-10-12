import {existsSync, readFileSync} from 'node:fs';

const expected = [
  ['Homepage', 'build/index.html'],
  ['Articles index', 'build/articles/index.html'],
  ['Introduction article', 'build/articles/what-is-sails-protocol/index.html'],
  ['Sitemap', 'build/sitemap.xml'],
  ['Robots', 'build/robots.txt'],
  ['AI-readable index', 'build/llms.txt'],
];
let failed = false;
for (const [name, file] of expected) {
  if (!existsSync(file)) {
    console.error('MISSING:', name, file);
    failed = true;
  } else {
    console.log('OK:', name, file);
  }
}
if (existsSync('build/index.html')) {
  const html = readFileSync('build/index.html', 'utf8');
  if (!html.includes('Building open P2P infrastructure') && !html.includes('Construyendo infraestructura P2P abierta') && !html.includes('Construindo infraestrutura P2P aberta')) {
    console.error('Homepage content missing');
    failed = true;
  }
}
// A normal npm run build must produce every configured locale; a targeted\n// Docusaurus --locale build may intentionally omit the others.\nconst fullBuildExpected = !process.argv.includes('--single-locale');\n// Verify localized custom-page copy, not just locale routes. This catches
// regressions where PT-BR/ES pages render untranslated English literals.
const localeChecks = [
  {prefix: 'pt-BR/', home: 'Construindo infraestrutura P2P aberta.', seasons: 'Coleções de leitura'},
  {prefix: 'es/', home: 'Construyendo infraestructura P2P abierta.', seasons: 'Colecciones de lectura'},
];
for (const {prefix, home, seasons} of localeChecks) {
  const homepage = 'build/' + prefix + 'index.html';
  const seasonPage = 'build/' + prefix + 'seasons/index.html';
  // The CI invokes this script after the full multi-locale build.
  if (!existsSync(homepage) && !existsSync(seasonPage) && !fullBuildExpected) continue;
  for (const [file, phrase] of [[homepage, home], [seasonPage, seasons]]) {
    if (!existsSync(file) || !readFileSync(file, 'utf8').includes(phrase)) {
      console.error('Localized custom-page copy missing:', file, phrase);
      failed = true;
    }
  }
}
// Locale-specific article metadata must render in both the featured list and
// Season 02 outline, not only in article pages.
for (const [locale, title] of [
  ['pt-BR', 'Por que o Sails Protocol chega no momento certo'],
  ['es', 'Por qué Sails Protocol llega en el momento adecuado'],
]) {
  const home = 'build/' + locale + '/index.html';
  const seasons = 'build/' + locale + '/seasons/index.html';
  if (!existsSync(home) && !existsSync(seasons) && !fullBuildExpected) continue;
  for (const file of [home, seasons]) {
    if (!existsSync(file) || !readFileSync(file, 'utf8').includes(title)) {
      console.error('Localized article metadata missing:', file, title);
      failed = true;
    }
  }
}
if (existsSync('build/sitemap.xml')) {
  const sitemap = readFileSync('build/sitemap.xml', 'utf8');
  for (const route of ['/articles/', '/articles/what-is-sails-protocol/']) {
    if (!sitemap.includes(route)) {
      console.error('Missing sitemap route:', route);
      failed = true;
    }
  }
}
if (existsSync('build/articles/what-is-sails-protocol/index.html')) {
  const article = readFileSync('build/articles/what-is-sails-protocol/index.html', 'utf8');
  if (!article.includes('What is Sails Protocol?')) {
    console.error('Article title missing');
    failed = true;
  }
}
// Every published article must exist in all three locales (EN, PT-BR, ES),
// be indexed in that locale's sitemap and carry a canonical URL.
// Only meaningful after a full multi-locale build; a single-locale build
// (npm run build -- --locale xx) emits just that locale into build/.
const fullMultiLocaleBuild = existsSync('build/pt-BR/sitemap.xml') && existsSync('build/es/sitemap.xml');
if (!fullMultiLocaleBuild) {\n  if (fullBuildExpected) { console.error('MISSING full multi-locale build output'); failed = true; }\n  else console.log('Skipping cross-locale article checks: single-locale build output.');\n}
if (fullMultiLocaleBuild && existsSync('src/generated/articles.json')) {
  const catalogue = JSON.parse(readFileSync('src/generated/articles.json', 'utf8'));
  for (const [prefix, sitemapFile] of [['', 'build/sitemap.xml'], ['pt-BR/', 'build/pt-BR/sitemap.xml'], ['es/', 'build/es/sitemap.xml']]) {
    const sitemap = existsSync(sitemapFile) ? readFileSync(sitemapFile, 'utf8') : '';
    if (!sitemap) { console.error('MISSING sitemap:', sitemapFile); failed = true; }
    for (const article of catalogue.filter(a => a.slug.startsWith('season-2-'))) {
      const file = 'build/' + prefix + 'articles/' + article.slug + '/index.html';
      if (!existsSync(file)) { console.error('MISSING article route:', file); failed = true; continue; }
      const html = readFileSync(file, 'utf8');
      if (!html.includes('rel="canonical" href="https://sails-protocol-blog.netlify.app/' + prefix + 'articles/' + article.slug + '/"')) {
        console.error('Canonical mismatch:', file); failed = true;
      }
      if (sitemap && !sitemap.includes('/' + prefix + 'articles/' + article.slug + '/')) {
        console.error('Not in sitemap:', file); failed = true;
      }
    }
  }
}
// RSS and Atom must carry the explicit editorial description, not the
// Docusaurus fallback \"Sails Protocol Blog Blog\".
const feedDescription = 'Engineering notes on open P2P infrastructure';
for (const [label, file] of [['RSS', 'build/articles/rss.xml'], ['Atom', 'build/articles/atom.xml']]) {
  if (!existsSync(file)) {
    console.error('MISSING:', label, file);
    failed = true;
    continue;
  }
  const feed = readFileSync(file, 'utf8');
  if (!feed.includes(feedDescription) || feed.includes('Sails Protocol Blog Blog')) {
    console.error(label + ': missing editorial description or stale default');
    failed = true;
  }
}
if (failed) process.exit(1);
console.log('Build smoke checks passed.');

 
// Fail closed if a draft slug leaks into any generated public HTML, XML,
// JSON, or text index. Recursively scan source files in every locale.
import {readdirSync, statSync} from 'node:fs';
import {join} from 'node:path';
const draftRoots = ['articles', 'i18n/pt-BR/docusaurus-plugin-content-blog', 'i18n/es/docusaurus-plugin-content-blog'];
const draftSlugs = new Set();
function scanDrafts(directory) {
  if (!existsSync(directory)) return;
  for (const name of readdirSync(directory)) {
    const file = join(directory, name);
    if (statSync(file).isDirectory()) { scanDrafts(file); continue; }
    if (!/\.mdx?$/.test(name)) continue;
    const source = readFileSync(file, 'utf8');
    const fm = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fm || !/^draft:[ \t]*true(?:[ \t]+#.*)?[ \t]*$/im.test(fm[1])) continue;
    const slug = fm[1].match(/^slug:[ \t]*['"]?([a-z0-9-]+)['"]?[ \t]*$/m)?.[1];
    if (!slug) {
      console.error('Draft missing valid slug:', file);
      failed = true;
    } else draftSlugs.add(slug);
  }
}
for (const root of draftRoots) scanDrafts(root);
const publicFiles = [];
function visit(directory) {
  if (!existsSync(directory)) return;
  for (const name of readdirSync(directory)) {
    const file = join(directory, name);
    if (statSync(file).isDirectory()) visit(file);
    else if (/\.(?:html|xml|json|txt)$/.test(name)) publicFiles.push(file);
  }
}
visit('build');
for (const file of publicFiles) {
  const contents = readFileSync(file, 'utf8');
  for (const slug of draftSlugs) {
    if (file.includes('/' + slug + '/') || contents.includes('/' + slug + '/') || contents.includes('/' + slug + '\"') || contents.includes('/' + slug + '?')) {
      console.error('DRAFT LEAK:', slug, file);
      failed = true;
    }
  }
}
if (failed) process.exit(1);
console.log('Draft exposure checks passed for', draftSlugs.size, 'draft slugs.');
