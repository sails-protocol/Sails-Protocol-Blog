# Sails Protocol Blog | Current operational state

**Snapshot verified:** 2026-10-11 (repository inspection). **This is a dated handoff, not a live status feed.** New agents MUST re-query GitHub and Netlify before acting.

## Canonical locations
- Repository: https://github.com/sails-protocol/Sails-Protocol-Blog
- Production: https://sails-protocol-blog.netlify.app/
- Main branch: `main`
- Netlify site ID: `210c0bc7-2380-4fa9-bbd3-55d225f7d789`
- Technology: Docusaurus 3.8.1, React 19, TypeScript, GitHub Actions, EN/PT-BR/ES

## Verified GitHub state at snapshot
- `main`: `b93734f33e205708d8dd13f1dbbc3afb26215a03`.
- PR #13 (https://github.com/sails-protocol/Sails-Protocol-Blog/pull/13): **MERGED / CLOSED**. Approved feature head `9038c88b79a7e634d418491c1a2d04b5d7bc2bb4`. The PR introduced the homepage hero WebP and six distinct article SVGs; the unused card WebP was removed. Its three exact-head workflows had passed prior to merge.
- PR #14 (https://github.com/sails-protocol/Sails-Protocol-Blog/pull/14): **OPEN, NOT MERGED**, head `2031f7c0276f5cf7366038ad8e1589524465fed4`. It makes the Season 02 collection page derive titles/links from the generated published-article catalogue while retaining curated order and failing on missing slugs. Three exact-head workflows passed before PR #13 was merged; re-check mergeability and CI against updated `main`.
- This documentation update is isolated in `docs/agent-continuity-handoff-20261011`; do not infer that it has merged merely because this file exists on its branch.
- **Netlify production deployment of PR #13 was NOT independently verified in this handoff.** Do not mark the visual release complete until the deployed commit and live responsive/localized routes are checked.

## Approved visual direction
One 1600×900, 221,138-byte illustrative Earth-horizon hero at `static/img/editorial/sails-earth-horizon-hero.webp`. Six unique topical SVGs: `market-crossroads.svg`, `software-boundary.svg`, `immutable-contract.svg`, `financial-gates.svg`, `noncustodial-keys.svg`, `stablecoin-rails.svg`. Keep the other legacy SVGs where referenced. No `sails-earth-horizon-card.webp`. Provenance is recorded in `static/img/editorial/SOURCES.md`.

## Editorial state and source-of-truth boundaries
- Public Season 02 currently has nine published articles plus an introduction, with three locale editions. Confirm actual public routes in the current build.
- The homepage highlights six articles; the Season 02 reading collection lists nine.
- The seven-season, 48-topic, 144-language-file Day 0 inventory in `editorial-drafts/` is a **draft corpus**, not 48 published articles. The historical Season 1/2 naming in the editorial planning documents differs from the currently published public Season 02. Do not silently equate the two naming systems or expose draft links.
- Owner direction: a large, evidence-reviewed Day 0 library is preferred over artificial drip-feed. This is a publishing strategy, not authorization to publish unreviewed drafts.
- Required editorial gates: technical source/claim verification, editorial review, translation review, link/build/accessibility/preview checks and explicit publication approval.

## Open findings and next actions
1. Verify PR #13 merge commit and Netlify production deployment; check EN/PT-BR/ES, desktop/tablet/mobile, six distinct SVG cards, hero, keyboard access, no horizontal overflow, SEO and WebMCP.
2. Revalidate PR #14 against current `main`, exact-head CI and authority before squash merge; confirm nine published article links in all locales.
3. Resolve the Windows CRLF false-positive in `check:articles` in a separate scoped PR, only after reproducing it; Linux CI previously passed.
4. Claude's Windows workspace previously ran out of disk space due to npm cache; cache cleanup recovered ~13.8 GB. Treat as local environment issue, not repository CI failure.
5. Review older operational statements in `EDITORIAL-START-HERE.md` as historical; use the live GitHub state and this dated snapshot instead.
6. Keep this file updated after merges and releases, recording immutable SHAs and actual deployment verification.

## Handoff reporting format
**Norte / completion:** separate code ready, CI validated, merged, deployed and live QA. Do not declare 100% merely because PR checks are green. Provide exact HEAD, verified tests, residual risks and next action. **NO MATERIAL FINDING UNDER THE RUG.**
