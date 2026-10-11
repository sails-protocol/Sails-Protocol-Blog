import {readdirSync, readFileSync, mkdirSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';

const directory = 'articles';
const files = readdirSync(directory).filter(file => /\.mdx?$/.test(file)).sort();
const articles = [];
const required = ['slug', 'title', 'description'];
for (const file of files) {
  const content = readFileSync(join(directory, file), 'utf8');
  const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!frontmatter) throw new Error(file + ': missing front matter');
  const source = frontmatter[1];
  // Match Docusaurus blog draft semantics: drafts must not enter the public catalogue.
  if (/^draft:\s*(?:true|True|TRUE)\s*$/m.test(source)) continue;
  const readScalar = key => {
    const match = source.match(new RegExp('^' + key + ':\\s*(.+)$', 'm'));
    return match?.[1]?.trim().replace(/^['"]|['"]$/g, '') || '';
  };
  const metadata = Object.fromEntries(required.map(key => [key, readScalar(key)]));
  for (const key of required) {
    if (!metadata[key]) throw new Error(file + ': missing ' + key);
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(metadata.slug)) throw new Error(file + ': invalid slug');
  const tagValue = readScalar('tags');
  const tags = /^\[.*\]$/.test(tagValue) ? tagValue.slice(1,-1).split(',').map(x => x.trim()).filter(Boolean) : [];
  if (/[<>]/.test(metadata.title + metadata.description)) throw new Error(file + ': HTML markup not allowed in metadata');
  if (articles.some(article => article.slug === metadata.slug)) throw new Error('Duplicate slug: ' + metadata.slug);
  articles.push({...metadata, tags, path: '/articles/' + metadata.slug + '/'});
}
if (!articles.length) throw new Error('No articles found');
mkdirSync('src/generated', {recursive: true});
const output = JSON.stringify(articles, null, 2) + '\n';
if (process.argv.includes('--check')) {
  const existing = readFileSync('src/generated/articles.json', 'utf8');
  if (existing !== output) throw new Error('Generated catalogue is stale. Run npm run generate:articles');
} else {
  writeFileSync('src/generated/articles.json', output);
}
console.log('Generated WebMCP catalogue for', articles.length, 'articles');
