import {existsSync, readFileSync} from 'node:fs';
import {join} from 'node:path';

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
if (failed) process.exit(1);
console.log('Build smoke checks passed.');
