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
// Strict multi-locale mode is opt-in because CI also builds each locale separately.
// Use --require-all-locales only after a combined full-locale build.
const fullBuildExpected = process.argv.includes('--require-all-locales');
// Verify localized custom-page copy, not just locale routes. This catches
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
if (!fullMultiLocaleBuild) {
  if (fullBuildExpected) { console.error('MISSING full multi-locale build output'); failed = true; }
  else console.log('Skipping cross-locale article checks: single-locale build output.');
}
if (fullMultiLocaleBuild && !existsSync('src/generated/articles.json')) {
  console.error('MISSING generated article catalogue: src/generated/articles.json');
  failed = true;
}
// A present but empty catalogue must not make the strict article gates vacuous.
// Duplicate or malformed catalogue slugs can hide missing published articles.
if (fullMultiLocaleBuild && existsSync('src/generated/articles.json')) {
  const catalogue = JSON.parse(readFileSync('src/generated/articles.json', 'utf8'));
  if (Array.isArray(catalogue)) {
    const slugs = catalogue.map(article => article?.slug);
    if (slugs.some(slug => typeof slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) || new Set(slugs).size !== slugs.length) {
      console.error('INVALID generated article catalogue: malformed or duplicate slugs');
      failed = true;
    }
  }
}
if (fullMultiLocaleBuild && existsSync('src/generated/articles.json')) {
  const catalogue = JSON.parse(readFileSync('src/generated/articles.json', 'utf8'));
  if (!Array.isArray(catalogue) || catalogue.length === 0) {
    console.error('INVALID generated article catalogue: expected a nonempty array');
    failed = true;
  }
}
if (fullMultiLocaleBuild && existsSync('src/generated/articles.json')) {
  const catalogue = JSON.parse(readFileSync('src/generated/articles.json', 'utf8'));
  for (const [prefix, sitemapFile] of [['', 'build/sitemap.xml'], ['pt-BR/', 'build/pt-BR/sitemap.xml'], ['es/', 'build/es/sitemap.xml']]) {
    const sitemap = existsSync(sitemapFile) ? readFileSync(sitemapFile, 'utf8') : '';
    if (!sitemap) { console.error('MISSING sitemap:', sitemapFile); failed = true; }
    for (const article of catalogue) {
      const file = 'build/' + prefix + 'articles/' + article.slug + '/index.html';
      if (!existsSync(file)) { console.error('MISSING article route:', file); failed = true; continue; }
      const html = readFileSync(file, 'utf8');
      const expectedCanonical = 'https://sails-protocol-blog.netlify.app/' + prefix + 'articles/' + article.slug + '/';
      const canonicalTags = [...html.matchAll(/<link\b[^>]*>/g)]
        .map(([tag]) => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])))
        .filter(attrs => attrs.rel === 'canonical');
      if (canonicalTags.length !== 1 || canonicalTags[0].href !== expectedCanonical) {
        console.error('Article canonical mismatch or duplicate:', file, expectedCanonical, canonicalTags);
        failed = true;
      }
      const expectedSitemapUrl = 'https://sails-protocol-blog.netlify.app/' + prefix + 'articles/' + article.slug + '/';
      const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
      if (sitemap && sitemapLocations.filter(url => url === expectedSitemapUrl).length !== 1) {
        console.error('Sitemap URL missing, duplicated, or not exact:', file, expectedSitemapUrl);
        failed = true;
      }
    }
  }
}
// The generated catalogue's public path must agree with its slug.
// Otherwise a route can be validated under one URL while linked under another.
if (fullMultiLocaleBuild && existsSync('src/generated/articles.json')) {
  const catalogue = JSON.parse(readFileSync('src/generated/articles.json', 'utf8'));
  if (Array.isArray(catalogue)) {
    for (const article of catalogue) {
      if (typeof article?.slug === 'string' && article.path !== '/articles/' + article.slug + '/') {
        console.error('INVALID article catalogue path:', article.slug, article.path);
        failed = true;
      }
    }
  }
}
// Combined builds must also expose exact canonical URLs on localized custom pages.
// Article routes are checked above; homepage and Seasons are separate routes.
if (fullMultiLocaleBuild) {
  for (const prefix of ['', 'pt-BR/', 'es/']) {
    for (const route of ['', 'seasons/']) {
      const file = 'build/' + prefix + route + 'index.html';
      if (!existsSync(file)) { console.error('MISSING custom canonical route:', file); failed = true; continue; }
      const html = readFileSync(file, 'utf8');
      const canonical = 'https://sails-protocol-blog.netlify.app/' + prefix + route;
      const links = [...html.matchAll(/<link\b[^>]*>/g)];
      const canonicals = links.map(([tag]) => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]))).filter(attrs => attrs.rel === 'canonical');
      if (canonicals.length !== 1 || canonicals[0].href !== canonical) {
        console.error('Custom page canonical mismatch or duplicate:', file, canonical, canonicals);
        failed = true;
      }
    }
  }
}
// The article listing is a public entry point in every locale. Check exact,
// unique sitemap locations, not just substring presence in the EN sitemap.
if (fullMultiLocaleBuild) {
  for (const [prefix, sitemapFile] of [['', 'build/sitemap.xml'], ['pt-BR/', 'build/pt-BR/sitemap.xml'], ['es/', 'build/es/sitemap.xml']]) {
    const sitemap = existsSync(sitemapFile) ? readFileSync(sitemapFile, 'utf8') : '';
    const locations = [...sitemap.matchAll(/<loc>([^<]+)<\\/loc>/g)].map(([, url]) => url);
    const expected = 'https://sails-protocol-blog.netlify.app/' + prefix + 'articles/';
    if (locations.filter(url => url === expected).length !== 1) {
      console.error('Article index sitemap URL missing, duplicated, or incorrect:', sitemapFile, expected);
      failed = true;
    }
  }
}

// Each localized custom page must also have one exact absolute sitemap entry.
if (fullMultiLocaleBuild) {
  for (const [prefix, sitemapFile] of [['', 'build/sitemap.xml'], ['pt-BR/', 'build/pt-BR/sitemap.xml'], ['es/', 'build/es/sitemap.xml']]) {
    const sitemap = existsSync(sitemapFile) ? readFileSync(sitemapFile, 'utf8') : '';
    const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
    for (const route of ['', 'seasons/']) {
      const expected = 'https://sails-protocol-blog.netlify.app/' + prefix + route;
      if (locations.filter(url => url === expected).length !== 1) {
        console.error('Custom page sitemap URL missing, duplicated, or incorrect:', sitemapFile, expected);
        failed = true;
      }
    }
  }
}
// Locale sitemaps must not leak published article routes from another locale.
if (fullMultiLocaleBuild && existsSync('src/generated/articles.json')) {
  const catalogue = JSON.parse(readFileSync('src/generated/articles.json', 'utf8'));
  for (const [prefix, sitemapFile] of [['', 'build/sitemap.xml'], ['pt-BR/', 'build/pt-BR/sitemap.xml'], ['es/', 'build/es/sitemap.xml']]) {
    const sitemap = existsSync(sitemapFile) ? readFileSync(sitemapFile, 'utf8') : '';
    const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
    for (const article of catalogue) {
      for (const otherPrefix of ['', 'pt-BR/', 'es/']) {
        if (otherPrefix === prefix) continue;
        const foreignUrl = 'https://sails-protocol-blog.netlify.app/' + otherPrefix + 'articles/' + article.slug + '/';
        if (locations.includes(foreignUrl)) {
          console.error('Foreign-locale article URL leaked into sitemap:', sitemapFile, foreignUrl);
          failed = true;
        }
      }
    }
  }
}
// Custom page sitemap entries must remain scoped to their own locale.
if (fullMultiLocaleBuild) {
  for (const [prefix, sitemapFile] of [['', 'build/sitemap.xml'], ['pt-BR/', 'build/pt-BR/sitemap.xml'], ['es/', 'build/es/sitemap.xml']]) {
    const sitemap = existsSync(sitemapFile) ? readFileSync(sitemapFile, 'utf8') : '';
    const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
    for (const otherPrefix of ['', 'pt-BR/', 'es/']) {
      if (otherPrefix === prefix) continue;
      for (const route of ['', 'seasons/']) {
        const foreignUrl = 'https://sails-protocol-blog.netlify.app/' + otherPrefix + route;
        if (locations.includes(foreignUrl)) {
          console.error('Foreign-locale custom page URL leaked into sitemap:', sitemapFile, foreignUrl);
          failed = true;
        }
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
