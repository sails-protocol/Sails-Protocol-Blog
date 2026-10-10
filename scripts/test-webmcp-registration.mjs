import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import ts from 'typescript';

const catalogue = JSON.parse(readFileSync('src/generated/articles.json', 'utf8'));
const load = (path, substitutions = []) => {
  let source = readFileSync(path, 'utf8');
  for (const [pattern, replacement] of substitutions) source = source.replace(pattern, replacement);
  const js = ts.transpileModule(source, {compilerOptions: {module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022}}).outputText;
  return import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
};
const {articleTools} = await load('src/webmcp/article-tools.ts', [[/^import ARTICLES from .*?;\s*/m, 'const ARTICLES = ' + JSON.stringify(catalogue) + ';\n']]);
globalThis.__testArticleTools = articleTools;
const {registerArticleTools} = await load('src/webmcp/register-tools.ts', [[/^import \{articleTools\} from .*?;\s*/m, 'const articleTools = globalThis.__testArticleTools;\n']]);
const registered = new Map();
const context = {
  registerTool: tool => {registered.set(tool.name, tool);},
  unregisterTool: name => {registered.delete(name);},
};
const cleanup = await registerArticleTools(context, 'https://example.org');
assert.equal(registered.size, 2);
assert.equal(JSON.parse((await registered.get('sails_list_articles').execute({})).content[0].text)[0].url, 'https://example.org/articles/what-is-sails-protocol');
cleanup();
assert.equal(registered.size, 0);
const partial = new Map();
await assert.rejects(() => registerArticleTools({
  registerTool: tool => {if (tool.name === 'sails_search_articles') throw new Error('injected failure'); partial.set(tool.name, tool);},
  unregisterTool: name => {partial.delete(name);},
}, 'https://example.org'));
assert.equal(partial.size, 0, 'partial registration must roll back');
delete globalThis.__testArticleTools;
console.log('WebMCP registration, execution, cleanup and rollback checks passed');
