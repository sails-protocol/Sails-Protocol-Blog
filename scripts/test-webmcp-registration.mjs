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
await assert.rejects(() => registerArticleTools({
  registerTool: () => { throw new Error('must not register without cleanup capability'); },
}, 'https://example.org'), /unregisterTool is required/);
let unsafeRegistrations = 0;
await assert.rejects(() => registerArticleTools({
  registerTool: () => { unsafeRegistrations++; },
}, 'https://example.org'), /unregisterTool is required/);
assert.equal(unsafeRegistrations, 0, 'no tool may register without safe cleanup');
// A browser-like context that exposes registration but not cleanup must fail closed.
const registrationOnlyContext = {registerTool: () => { throw new Error('unexpected registration'); }};
await assert.rejects(() => registerArticleTools(registrationOnlyContext, 'https://example.org'), /unregisterTool is required/);
const registered = new Map();
const context = {
  registerTool: tool => {registered.set(tool.name, tool);},
  unregisterTool: name => {registered.delete(name);},
};
const cleanup = await registerArticleTools(context, 'https://example.org');
assert.equal(registered.size, 2);
assert.equal(JSON.parse((await registered.get('sails_list_articles').execute({})).content[0].text)[0].url, 'https://example.org/articles/what-is-sails-protocol');
await cleanup();
assert.equal(registered.size, 0);
const partial = new Map();
await assert.rejects(() => registerArticleTools({
  registerTool: tool => {if (tool.name === 'sails_search_articles') throw new Error('injected failure'); partial.set(tool.name, tool);},
  unregisterTool: name => {partial.delete(name);},
}, 'https://example.org'));
assert.equal(partial.size, 0, 'partial registration must roll back');
const asynchronous = new Map();
const cleanupAsync = await registerArticleTools({
  registerTool: async tool => { asynchronous.set(tool.name, tool); },
  unregisterTool: async name => { await Promise.resolve(); asynchronous.delete(name); },
}, 'https://example.org');
await cleanupAsync();
assert.equal(asynchronous.size, 0, 'async cleanup must finish before resolving');
// A second registration must not silently overwrite tools in a strict registry.
const strict = new Map();
const strictContext = {
  registerTool: tool => {
    if (strict.has(tool.name)) throw new Error('duplicate tool: ' + tool.name);
    strict.set(tool.name, tool);
  },
  unregisterTool: name => { strict.delete(name); },
};
const firstCleanup = await registerArticleTools(strictContext, 'https://example.org');
await assert.rejects(() => registerArticleTools(strictContext, 'https://example.org'), /duplicate tool/);
assert.equal(strict.size, 2, 'duplicate registration must not corrupt existing tools');
await firstCleanup();
assert.equal(strict.size, 0, 'cleanup after rejected duplicate must remove original tools');
const remountCleanup = await registerArticleTools(strictContext, 'https://example.org');
assert.equal(strict.size, 2, 'registration after cleanup must succeed');
await remountCleanup();
assert.equal(strict.size, 0, 'remount cleanup must complete');
delete globalThis.__testArticleTools;
console.log('WebMCP registration, execution, cleanup and rollback checks passed');
