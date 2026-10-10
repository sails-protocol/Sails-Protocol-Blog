# WebMCP Day-0 contract

**Status:** Implemented in source, pending CI and real-browser validation. Day-0 release blocker.

WebMCP is a browser-native API, not an HTTP MCP server. The blog registers tools through `document.modelContext.registerTool` on supported browsers. Browsers without WebMCP continue to serve normal HTML, RSS and sitemap.

## Read-only tools
- `sails_list_articles`: list published article metadata and canonical URLs.
- `sails_search_articles`: search published article metadata by title, description and tags, with a 1–200-character query.

No mutation tools, backend credentials, user information or protocol settlement operations are exposed.

## Constraints
The initial catalogue is explicitly maintained in `src/theme/Root.tsx`. **Every new published article must update the catalogue** until an automated build-time generator is implemented. This is a known maintenance limitation, not a completed dynamic index.

## Required validation before release
1. CI passes TypeScript and production build.
2. In a compatible Chrome build with WebMCP testing enabled, open the preview and inspect `document.modelContext.getTools()`.
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
