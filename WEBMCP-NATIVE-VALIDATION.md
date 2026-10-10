# WebMCP native browser acceptance record

**Status: NOT EXECUTED. Day-0 blocker.** This procedure is an acceptance template, not evidence.

## Preconditions
- Use a Chrome/Chromium version that explicitly supports the WebMCP imperative API, with the required browser flags or origin trial configured according to the browser's current documentation.
- Use a preview of the exact candidate commit over a trustworthy origin. Do not deploy to production or alter the existing Netlify site without owner approval.
- Record browser version, OS, flags, origin, commit SHA, date, and tester. Do not infer support from the presence of a mock.

## Native checks
1. Open the home page and inspect the real `document.modelContext` interface in browser developer tools. Record whether `registerTool` and `unregisterTool` exist, their documented signatures and any registration errors. If `unregisterTool` is absent, STOP: the current fail-closed implementation will not expose tools. Resolve the actual API lifecycle contract before release.
2. Use the browser's official WebMCP tooling or an actual compatible agent to discover `sails_list_articles` and `sails_search_articles`; record screenshots or redacted logs of tool schemas and `readOnlyHint`.
3. Execute list, matching search, no-match search, empty query, oversized query and malformed input. Confirm response shape, canonical URLs and absence of write operations.
4. Reload and navigate between pages; check that registrations remain usable, no duplicates are exposed, and cleanup does not remove tools belonging to a newer mount. Test development StrictMode separately if applicable.
5. Test a browser without WebMCP and verify the normal site, links, sitemap and RSS remain functional.
6. Confirm that the catalogue matches the actual articles in the candidate build. Do not mistake the fixture article for editorial approval.

## Evidence to attach
- Exact preview URL, commit SHA, browser version/flags, execution date, tester
- Native discovery and execution evidence for both tools, including negative cases
- Lifecycle and fallback results, any console errors, material findings and remediation PRs
- CTO review and explicit owner release approval

**Acceptance:** Mark PASS only after actual native browser execution and CTO signoff. Mocked CI, static source review or simulated `document.modelContext` are insufficient.
