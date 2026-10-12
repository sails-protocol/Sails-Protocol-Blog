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
  [`build/${locale}/index.html`, [expected[locale].headline, expected[locale].title]],
  [`build/${locale}/seasons/index.html`, [expected[locale].season, expected[locale].title]],
  [`build/${locale}/articles/season-2-01-why-sails-arrives-now/index.html`, []],
  [`build/${locale}/sitemap.xml`, ['/articles/season-2-01-why-sails-arrives-now/']],
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
if (failed) process.exit(1);
console.log(`Locale ${locale} output checks passed.`);
