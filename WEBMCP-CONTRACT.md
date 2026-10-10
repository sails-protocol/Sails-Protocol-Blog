# WebMCP Day-0 contract

**Status:** Source and mocked lifecycle tests passed CI #48; real-browser validation remains outstanding. Day-0 release blocker.

WebMCP is a browser-native API, not an HTTP MCP server. The blog registers tools through `document.modelContext.registerTool` on supported browsers. Browsers without WebMCP continue to serve normal HTML, RSS and sitemap.

## Read-only tools
- `sails_list_articles`: list published article metadata and canonical URLs.
- `sails_search_articles`: search published article metadata by title, description and tags, with a 1–200-character query.

No mutation tools, backend credentials, user information or protocol settlement operations are exposed.

## Constraints
The article catalogue is generated from top-level `articles/*.md(x)` frontmatter by `scripts/generate-article-index.mjs` into `src/generated/articles.json`. CI enforces consistency via `npm run check:articles`. The generator currently supports a limited subset of frontmatter syntax and top-level article paths only; nested articles and complex YAML require deliberate parser changes and tests. The catalogue reflects source metadata and is not an independent proof of editorial approval.

## Required validation before release
1. CI passes TypeScript and production build.
2. In a compatible Chrome build with WebMCP testing enabled, open the preview and inspect the available browser WebMCP developer tooling for registered tools (do not assume a `getTools()` method exists without confirming the browser API).
3. Confirm both tool names, input schemas and `readOnlyHint` annotations.
4. Execute list, matching search, no-match search and invalid-input cases. Verify expected URLs and no side effects.
5. Verify that browsers without WebMCP still render the site normally.
6. Check that there are no write/publish/delete tools.
7. Confirm the article catalogue matches the published index.

WebMCP is experimental and client/browser support is not universal. Do not advertise universal agent compatibility.

References:
- https://developer.chrome.com/docs/ai/webmcp
- https://developer.chrome.com/docs/ai/webmcp/imperative-api
- https://github.com/webmachinelearning/webmcp
