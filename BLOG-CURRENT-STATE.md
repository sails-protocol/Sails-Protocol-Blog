# Sails Protocol Blog | Current operational state

**Snapshot:** 2026-10-12 UTC. This is a historical checkpoint, not a live status API. Always re-check GitHub and Netlify before acting.

## North star

A rigorous, human, multilingual engineering journal that connects real Sails Protocol architecture and economic trust boundaries to verifiable evidence. Published content must not overstate protocol implementation, SDK maturity, custody guarantees or external services.

## Repository and production

- GitHub: https://github.com/sails-protocol/Sails-Protocol-Blog
- Production: https://sails-protocol-blog.netlify.app/
- Stack: Docusaurus 3, React, TypeScript, GitHub Actions, Netlify.
- Languages: EN, PT-BR, ES.
- `main` observed at `b93734f33e205708d8dd13f1dbbc3afb26215a03` when this documentation branch was created.
- **Production deployment of that exact commit was not verified in this documentation pass.** Do not infer production success from merge status.

## Integration ledger (verified at snapshot)

| Work | State | Evidence | Next action |
| --- | --- | --- | --- |
| PR #13, editorial image assets | **Merged** 2026-10-12 01:33 UTC | https://github.com/sails-protocol/Sails-Protocol-Blog/pull/13 ; reviewed HEAD `9038c88b79a7e634d418491c1a2d04b5d7bc2bb4` | Verify deployed Netlify commit and final visual QA |
| PR #14, canonical Season 02 catalogue | **Open, ready for review, unmerged** | https://github.com/sails-protocol/Sails-Protocol-Blog/pull/14 ; HEAD `2031f7c0276f5cf7366038ad8e1589524465fed4` | Recheck mergeability and exact-head CI after PR #13; obtain merge authorization |
| Institutional agent continuity | This documentation PR | `AGENTS.md`, this file and updated `EDITORIAL-START-HERE.md` | Review and merge only after gates |

## Visual decisions

- Homepage hero uses only `static/img/editorial/sails-earth-horizon-hero.webp` (1600 x 900, AI-generated illustrative artwork, not a NASA photograph).
- Six distinct topical SVGs in `static/img/editorial/`: `market-crossroads`, `software-boundary`, `immutable-contract`, `financial-gates`, `noncustodial-keys`, `stablecoin-rails`.
- The unused `sails-earth-horizon-card.webp` was intentionally removed from PR #13.
- Preserve existing SVGs and responsive/light-dark/accessibility behavior.

## Editorial reality versus backlog

- The live site has a published introduction and a nine-article Season 02 collection according to the last reviewed application source. Verify routes and all three locales in the live build.
- `editorial-drafts/` and the seven-season, 48-topic, 144-language-edition Day 0 baseline are **draft inventory and planning**, not 48 published or approved articles.
- The master backlog and audit files may contain historical status snapshots. Inspect current evidence and resolve conflicts before presenting publication counts.

## Residual risks and next gates

1. Verify Netlify deployment and visual QA on desktop, tablet, mobile, EN/PT-BR/ES after PR #13 merge. Do not claim this is done until checked.
2. Revalidate PR #14 against current `main` and integrate only after authorization; then verify production again.
3. Keep concurrent agents off the same branch; require exact SHA and current CI at merge time.
4. Windows CRLF may produce a false `check:articles` stale result. Address in a separate focused PR; Linux CI previously passed.
5. An earlier Claude environment hit `ENOSPC` from a large npm cache, later cleared; this is local environment history, not a known production outage.
6. Maintain technical source/evidence reviews for editorial drafts before publication.

## Reporting contract

Always provide a concise north star and a percentage **with a named denominator** (e.g. 3 of 4 release gates); do not turn an estimate into verified completion. Report exact SHAs, test status, remaining blockers, and whether `main` and Netlify changed.

**NO MATERIAL FINDING UNDER THE RUG.**

## Concurrent institutional handoff PRs and taxonomy caveat

- PRs #15, #16, #17 and #18 are overlapping documentation proposals. The intended canonical integration is a reviewed consolidation on #15; the others must not be merged as duplicate sources of authority. Verify their live states before closure.
- The *published* Season 02 (nine articles) and the *planned* seven-season/48-topic editorial taxonomy are different naming systems. Do not equate their Season numbers or expose draft links.
- Owner editorial direction favors simultaneous publication of the largest fully approved Day 0 library rather than artificial drip-feed. This strategy never waives technical, editorial, localization, accessibility or owner publication gates.
- WebMCP discovery must remain read-only and native browser behavior must be checked in a real browser, not inferred from mocks.
- Every release report must separate prepared, CI-validated, merged, deployed and live-QA-verified states.

## Post-merge verification checkpoint (2026-10-11 audit session)

The earlier snapshot above is retained for provenance and must not be mistaken for live status. Institutional PR #15 was squash-merged into `main` at `033ccbea3f1d297f99529fcc0e4077c985163338`, after three exact-head workflow successes at `449cf0282fc3403cb60fd62baf56f3cdb0aa7f2f`; overlapping PRs #16, #17 and #18 were closed without merging. PR #14 remained open and two commits behind `main` at this checkpoint; historical CI successes are not current-base revalidation. Netlify PR #15 preview succeeded, but the production deploy SHA and final responsive/localized browser QA were not verified. The independent audit ledger is `BLOG-GLOBAL-AUDIT-SCORECARD.md`. Global completion remains **NOT DETERMINED** until the owner approves denominators and gates. Do not turn the editorial 17/48 source-backed correction coverage into final approval.
