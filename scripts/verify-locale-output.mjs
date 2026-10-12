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
// Verify every published Season 02 route, not only the first one.
// The catalogue is the authoritative list of published slugs.
const catalogue = JSON.parse(readFileSync('src/generated/articles.json', 'utf8'));
const sitemap = existsSync('build/sitemap.xml') ? readFileSync('build/sitemap.xml', 'utf8') : '';
for (const article of catalogue.filter(item => item.slug.startsWith('season-2-'))) {
  const route = '/articles/' + article.slug + '/';
  const path = 'build' + route + 'index.html';
  if (!existsSync(path)) {
    console.error('Missing published article:', locale, path);
    failed = true;
  }
  if (!sitemap.includes(route)) {
    console.error('Missing published sitemap route:', locale, route);
    failed = true;
  }
}
if (failed) process.exit(1);
console.log(`Locale ${locale} output checks passed.`);
