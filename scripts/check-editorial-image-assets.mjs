import {readFileSync, statSync} from 'node:fs';
import {join} from 'node:path';

const root = new URL('../static/img/editorial/', import.meta.url);
const files = [
  ['sails-earth-horizon-hero.webp', 350 * 1024],
  ['sails-earth-horizon-card.webp', 150 * 1024],
];
let failed = false;
for (const [name, maxBytes] of files) {
  try {
    const path = new URL(name, root);
    const size = statSync(path).size;
    const bytes = readFileSync(path);
    const webp = bytes.toString('ascii', 0, 4) === 'RIFF' &&
      bytes.toString('ascii', 8, 12) === 'WEBP';
    if (!webp || size > maxBytes || size < 1024) {
      throw new Error('invalid WebP or file outside size budget');
    }
    console.log('PASS', name, size, 'bytes');
  } catch (error) {
    console.error('FAIL', name, error.message);
    failed = true;
  }
}
if (failed) process.exitCode = 1;
