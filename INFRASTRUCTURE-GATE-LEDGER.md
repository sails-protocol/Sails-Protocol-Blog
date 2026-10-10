# Blog infrastructure gate ledger

Owner: Blog curator. Technical source of truth: Sails Protocol repository and CTO-approved evidence.
Status: **BLOCKED FOR PRODUCTION**. This is an evidence ledger, not a release approval.

| Gate | Evidence | State |
| --- | --- | --- |
| Build, TypeScript, route smoke checks | GitHub Actions Validate Blog #91, all steps successful | PASS for tested commit |
| WebMCP catalogue, tool execution, registration and rollback | GitHub Actions #91, static, execution, mocked AbortSignal registration/rollback/duplicate-remount and interrupted React lifecycle cleanup tests | PASS on #91; browser-native test separate |
| Browser-native WebMCP registration and agent discovery | No compatible-browser execution record | OPEN, BLOCKER |
| WebMCP security and browser compatibility review | No end-to-end negative/compatibility report | OPEN, BLOCKER |
| Dependency lockfile and reproducible npm ci | Committed package-lock.json and mandatory npm ci passed CI #48 | PASS for tested commit |
| Visual QA, keyboard accessibility and responsive behavior | Chromium #35 PASS: desktop/mobile WCAG 2.1 AA axe, route navigation, JS errors, landmarks, overflow and Tab-focus smoke checks. Manual keyboard sequence and visual review still missing | OPEN, BLOCKER |
| External links, CSP and deployment headers | Conservative headers added to netlify.toml; static check in CI; deployed response headers, CSP and links not browser-reviewed | OPEN, BLOCKER |
| Editorial claims and CTO review | Introductory article is a test fixture, not approved publication | OPEN, BLOCKER |
| Netlify preview and production | Deliberately deferred until infrastructure freeze | NOT STARTED |

## Evidence rules

1. A passing CI validates the exact commit only. Subsequent commits require fresh validation.
2. A mock of `document.modelContext` is not evidence of real-browser WebMCP.
3. Blog descriptions of custody, settlement, fees, security, network availability or production integrations require a current CTO-approved source.
4. Keep every material finding open until a concrete fix and corresponding evidence exist.
5. Do not merge, change Netlify configuration, or publish without explicit project-owner approval.

## Coordination with CTO

The blog is an editorial surface and not protocol implementation authority. When the CTO changes the approved architecture, claims or terminology, first record the source decision, then propose an editorial update. No silent reinterpretation of protocol guarantees.
