# Sails Protocol Blog | Current operational state

**Snapshot:** 2026-10-11 (Paraguay). **This file is a handoff snapshot, not a live status feed. Verify GitHub and Netlify before acting.**

## North star
An evidence-led, technically precise, accessible multilingual (EN/PT-BR/ES) publication explaining Sails Protocol and P2P economic coordination. Keep published claims distinct from roadmap and unreviewed drafts. See [AGENTS.md](./AGENTS.md) and [EDITORIAL-START-HERE.md](./EDITORIAL-START-HERE.md).

## Repositories and deployment
- GitHub: https://github.com/sails-protocol/Sails-Protocol-Blog
- Production: https://sails-protocol-blog.netlify.app/
- Default branch: `main`
- Docusaurus 3.8.1, React 19, TypeScript, GitHub Actions, Netlify.
- The production deployment revision has **not been verified in this documentation pass**.

## Latest independently checked GitHub state
- `main` at `b93734f33e205708d8dd13f1dbbc3afb26215a03` at snapshot time.
- **PR #13** https://github.com/sails-protocol/Sails-Protocol-Blog/pull/13 : **MERGED/CLOSED**, source HEAD `9038c88b79a7e634d418491c1a2d04b5d7bc2bb4`. Prior to merge, three exact-head workflows were green. Contains hero WebP, six topic-specific SVGs, asset validation; unused card WebP removed. **Do not claim production visually verified solely from merge.**
- **PR #14** https://github.com/sails-protocol/Sails-Protocol-Blog/pull/14 : **OPEN**, source HEAD `2031f7c0276f5cf7366038ad8e1589524465fed4`. Prior checks: three workflows green; revalidate mergeability and exact-head checks against current `main`. This PR makes the Season 02 reading index use generated article metadata while preserving curated order.
- Agent continuity documentation: branch `docs/agent-continuity-handoff` (this documentation-only change). Do not assume it is merged until verified.

## Approved visual and content boundaries
- Homepage hero: `static/img/editorial/sails-earth-horizon-hero.webp` (AI-generated illustrative art, not NASA photography).
- Featured cards: six distinct subject-relevant SVGs: `market-crossroads`, `software-boundary`, `immutable-contract`, `financial-gates`, `noncustodial-keys`, `stablecoin-rails`.
- Do not reintroduce `sails-earth-horizon-card.webp` or index-based repeating art.
- Published editorial scope includes the introduction and nine Season 02 articles, subject to live route verification. Other seasons in planning docs are **not** automatically public.
- The larger 48-topic, seven-season backlog is an editorial planning baseline, not evidence of 48 published articles.

## Next execution order
1. Confirm GitHub main SHA, PR #13 merge, PR #14 current head/checks and actual Netlify production revision.
2. QA merged PR #13 on production: desktop/mobile/tablet, EN/PT-BR/ES, hero, unique SVG cards, links, contrast, overflow, accessibility.
3. Review/revalidate PR #14 after #13 and merge only with required authorization; verify resulting production deployment.
4. Keep separate follow-up for Windows CRLF false-positive in `check:articles`; avoid scope creep.
5. Align outdated references in legacy editorial handoff docs with reality without deleting historical context.
6. Update this snapshot after confirmed merges, deployments and decisions.

## Known risks and findings
- Concurrent branch pushes can invalidate reviewed SHA. Always check immediately before merge.
- Windows CRLF may make `src/generated/articles.json` appear stale locally; Linux CI previously passed. Do not mask a real index drift.
- Claude reported a local disk ENOSPC incident caused by npm cache; cleared regenerable cache and recovered ~13.8 GB at the time. This is an executor-environment issue, not a production failure.
- PR #13's final image-removal pass did not repeat screenshots. Visual QA remains a separate gate until evidenced.
- No material finding under the rug. Do not infer Netlify production success from GitHub CI.

## Reporting
Every session: actual GitHub HEAD(s), PR state, tests run, production deployment verified or not, material risks, owner decisions needed, next action and an explicitly estimated progress percentage.
