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
  if (!html.includes('Building open P2P infrastructure')) {
    console.error('Homepage content missing');
    failed = true;
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
const draftRoots = ['articles', 'i18n/pt-BR/docusaurus-plugin-content-blog/default', 'i18n/es/docusaurus-plugin-content-blog/default'];
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
    if (file.includes(slug) || contents.includes('/' + slug + '/')) {
      console.error('DRAFT LEAK:', slug, file);
      failed = true;
    }
  }
}
if (failed) process.exit(1);
console.log('Draft exposure checks passed for', draftSlugs.size, 'draft slugs.');
