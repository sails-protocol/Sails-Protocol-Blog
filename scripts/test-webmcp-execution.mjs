import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import ts from 'typescript';

const catalogue = JSON.parse(readFileSync('src/generated/articles.json', 'utf8'));
const source = readFileSync('src/webmcp/article-tools.ts', 'utf8');
const injected = source.replace(
  /^import ARTICLES from ['"]\.\.\/generated\/articles\.json['"];?\s*/m,
  'const ARTICLES = ' + JSON.stringify(catalogue) + ';\n',
);
assert.notEqual(injected, source, 'Expected generated catalogue import');
const javascript = ts.transpileModule(injected, {
  compilerOptions: {module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022},
}).outputText;
const {articleTools} = await import('data:text/javascript;base64,' + Buffer.from(javascript).toString('base64'));
assert.equal(articleTools.length, 2);
const list = articleTools.find(t => t.name === 'sails_list_articles');
const search = articleTools.find(t => t.name === 'sails_search_articles');
assert.ok(list && search);
for (const tool of articleTools) assert.equal(tool.annotations.readOnlyHint, true);
const parse = result => JSON.parse(result.content[0].text);
const origin = 'https://example.org';
const listed = parse(await list.execute({}, origin));
assert.equal(listed.length, catalogue.length);
assert.equal(listed[0].url, origin + catalogue[0].path);
const matched = parse(await search.execute({query: 'sails'}, origin));
assert.ok(matched.some(a => a.slug === 'what-is-sails-protocol'));
assert.deepEqual(parse(await search.execute({query: 'no-such-article-zzzz'}, origin)), []);
for (const query of ['', '   ', 'x'.repeat(201), null, 42]) {
  const result = await search.execute({query}, origin);
  assert.equal(result.isError, true, 'invalid query must return an error');
}
console.log('WebMCP execution checks passed: list, match, no-match, invalid inputs');
