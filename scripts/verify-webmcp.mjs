import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const source = readFileSync('src/webmcp/article-tools.ts', 'utf8');
const catalogue = JSON.parse(readFileSync('src/generated/articles.json', 'utf8'));
assert.ok(catalogue.length > 0, 'article catalogue must not be empty');
assert.equal(new Set(catalogue.map(a => a.slug)).size, catalogue.length, 'article slugs must be unique');
for (const article of catalogue) {
  assert.equal(article.path, '/articles/' + article.slug);
  assert.ok(article.title && article.description);
  assert.ok(Array.isArray(article.tags));
}
for (const name of ['sails_list_articles', 'sails_search_articles']) {
  assert.ok(source.includes("name: '" + name + "'"), name + ' must be registered');
}
assert.equal((source.match(/readOnlyHint: true/g) || []).length, 2, 'both tools must be read-only');
assert.ok(!/name:\s*['"][^'"]*(create|update|delete|publish)/i.test(source), 'no mutation tools');
console.log('WebMCP static contract checks passed for', catalogue.length, 'articles');
