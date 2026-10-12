import {existsSync, readFileSync} from 'node:fs';

const locale = process.argv[2];
const expected = {
  'pt-BR': {headline: 'Construindo infraestrutura P2P aberta.', season: 'Coleções de leitura', title: 'Por que o Sails Protocol chega no momento certo'},
  es: {headline: 'Construyendo infraestructura P2P abierta.', season: 'Colecciones de lectura', title: 'Por qué Sails Protocol llega en el momento adecuado'},
};
if (!Object.hasOwn(expected, locale)) {
  console.error('Unsupported locale:', locale);
  process.exit(1);
}
let failed = false;
for (const [path, snippets] of [
  [`build/index.html`, [expected[locale].headline, expected[locale].title]],
  [`build/seasons/index.html`, [expected[locale].season, expected[locale].title]],
  [`build/articles/what-is-sails-protocol/index.html`, []],
  [`build/sitemap.xml`, ['/articles/what-is-sails-protocol/']],
]) {
  if (!existsSync(path)) {
    console.error('Missing locale output:', path);
    failed = true;
    continue;
  }
  const contents = readFileSync(path, 'utf8');
  for (const snippet of snippets) {
    if (!contents.includes(snippet)) {
      console.error('Missing localized content:', path, snippet);
      failed = true;
    }
  }
}
// Verify every published article route, including the introduction.
// The catalogue is the authoritative list of published slugs.
const catalogue = JSON.parse(readFileSync('src/generated/articles.json', 'utf8'));
const sitemap = existsSync('build/sitemap.xml') ? readFileSync('build/sitemap.xml', 'utf8') : '';
for (const article of catalogue) {
  const route = '/articles/' + article.slug + '/';
  const path = 'build' + route + 'index.html';
  if (!existsSync(path)) {
    console.error('Missing published article:', locale, path);
    failed = true;
  } else {
    const html = readFileSync(path, 'utf8');
    if (!html.includes('rel="canonical"')) {
      console.error('Missing canonical link:', locale, path);
      failed = true;
    }
    if (!html.includes('hreflang=')) {
      console.error('Missing hreflang alternate:', locale, path);
      failed = true;
    }
  }
  for (const listing of article.slug.startsWith('season-2-') ? ['build/seasons/index.html'] : ['build/index.html']) {
    if (!existsSync(listing) || !readFileSync(listing, 'utf8').includes(route)) {
      console.error('Missing article link in localized listing:', locale, listing, route);
      failed = true;
    }
  }
  if (!sitemap.includes(route)) {
    console.error('Missing published sitemap route:', locale, route);
    failed = true;
  }
}
// Assert every published article's localized title is present in its reading listing.
// Translation keys are immutable slug-based identifiers, not catalogue indices.
const translations = JSON.parse(readFileSync('i18n/' + locale + '/code.json', 'utf8'));
for (const article of catalogue) {
  const descriptionKey = 'article.' + article.slug + '.description';
  const description = translations[descriptionKey]?.message;
  if (typeof description !== 'string' || !description.trim()) {
    console.error('Missing localized article description translation:', locale, descriptionKey);
    failed = true;
  }
  // The homepage renders descriptions for its first six featured articles.
  // The introduction has a separate curated card with journal.whatLead copy.
  if (catalogue.slice(0, 6).some(featured => featured.slug === article.slug) &&
      existsSync('build/index.html') &&
      !readFileSync('build/index.html', 'utf8').includes(description)) {
    console.error('Localized featured description not rendered:', locale, descriptionKey);
    failed = true;
  }
  const key = 'article.' + article.slug + '.title';
  const title = translations[key]?.message;
  if (typeof title !== 'string' || !title.trim()) {
    console.error('Missing localized article title translation:', locale, key);
    failed = true;
    continue;
  }
  const listing = article.slug.startsWith('season-2-') ? 'build/seasons/index.html' : 'build/index.html';
  if (existsSync(listing) && !readFileSync(listing, 'utf8').includes(title)) {
    console.error('Localized article title not rendered:', locale, listing, key);
    failed = true;
  }
}
// The published introduction is outside Season 02 and needs the same SEO protections.
const intro = 'build/articles/what-is-sails-protocol/index.html';
if (existsSync(intro)) {
  const html = readFileSync(intro, 'utf8');
  for (const marker of ['rel="canonical"', 'hreflang=']) {
    if (!html.includes(marker)) {
      console.error('Missing introduction SEO marker:', locale, marker);
      failed = true;
    }
  }
}
// Custom homepage and reading collections need SEO metadata as well.
for (const page of ['build/index.html', 'build/seasons/index.html']) {
  if (!existsSync(page)) continue; // Already reported by the required-page checks.
  const html = readFileSync(page, 'utf8');
  for (const marker of ['rel="canonical"', 'hreflang=']) {
    if (!html.includes(marker)) {
      console.error('Missing custom page SEO marker:', locale, page, marker);
      failed = true;
    }
  }
}
if (failed) process.exit(1);
console.log(`Locale ${locale} output checks passed.`);
