# Sails Protocol Blog: current operational state

**Snapshot:** 2026-10-12 UTC. **Authority:** informational handoff only. Recheck live GitHub, CI, Netlify and deployed pages before taking action. This file is not approval to merge or publish.

## North star

An evidence-led, multilingual (EN/PT-BR/ES) engineering journal for Sails Protocol. Clear economic and custody boundaries; verified claims; human writing; meaningful diagrams; linked reading paths; fast, accessible, responsive pages. The blog must never present planned SDK/protocol capabilities as already implemented.

## Source of truth

- Repository: https://github.com/sails-protocol/Sails-Protocol-Blog
- Production URL: https://sails-protocol-blog.netlify.app/
- Default branch: `main`
- Editorial onboarding: [EDITORIAL-START-HERE.md](./EDITORIAL-START-HERE.md)
- Agent rules: [AGENTS.md](./AGENTS.md)
- Editorial backlog: [EDITORIAL-DAY0-MASTER-BACKLOG.md](./EDITORIAL-DAY0-MASTER-BACKLOG.md)
- Evidence/quality gates: [EDITORIAL-DNA-AND-QUALITY-GATES.md](./EDITORIAL-DNA-AND-QUALITY-GATES.md)

## Verified GitHub status at snapshot

| Work | Status | Evidence |
| --- | --- | --- |
| PR #13: editorial image asset gate | **Merged** 2026-10-12 01:33 UTC | https://github.com/sails-protocol/Sails-Protocol-Blog/pull/13 ; approved feature HEAD `9038c88b79a7e634d418491c1a2d04b5d7bc2bb4` |
| PR #14: canonical Season 02 catalogue links | **Open**, not draft; not merged | https://github.com/sails-protocol/Sails-Protocol-Blog/pull/14 ; head `2031f7c0276f5cf7366038ad8e1589524465fed4` |
| `main` | Commit `b93734f33e205708d8dd13f1dbbc3afb26215a03` when inspected | Must recheck before integration |
| Production deployment | **Not verified in this documentation pass** | Do not equate GitHub merge with confirmed Netlify publication |

Before PR #13 merged, all three exact-head GitHub workflows were green: Validate Blog, Browser accessibility audit, and Build isolated blog preview artifact. PR #14 also had three green workflows on the listed HEAD when last checked; revalidate after any base changes.

## Design decisions

- Homepage hero uses only `static/img/editorial/sails-earth-horizon-hero.webp` (illustrative AI-generated image, 1600×900, 221138 bytes), with provenance in `static/img/editorial/SOURCES.md`.
- Six homepage featured-article cards use distinct topic-specific SVGs: `market-crossroads`, `software-boundary`, `immutable-contract`, `financial-gates`, `noncustodial-keys`, `stablecoin-rails`.
- The unused `sails-earth-horizon-card.webp` was removed; do not restore it without a new decision.
- Existing SVGs remain available for other contexts. Avoid repeating article illustrations by index modulo.
- Keep article metadata and links derived from the generated published-article catalogue where possible.

## Editorial reality versus planning

- Public-facing Season 02 has nine published articles and an introductory article. The homepage highlights six; verify live pages/locales after deployment.
- The separate Day 0 editorial master backlog proposes seven seasons and 48 topics / 144 language editions as a **draft inventory**, not a publication claim.
- The old [EDITORIAL-START-HERE.md](./EDITORIAL-START-HERE.md) contains chronological drafting updates and references to PR #1. Treat those as historical snapshots; current PR state is tracked here and ultimately by GitHub.

## Open work and risks

1. **PR #14:** recheck mergeability and CI against current `main`; obtain required review/authorization before squash merge.
2. **Production verification:** confirm Netlify deployed commit, EN/PT-BR/ES routing, hero and six SVG cards, desktop/tablet/mobile layout, keyboard accessibility, search, article links, WebMCP and SEO.
3. **Windows CRLF:** `check:articles` may flag `src/generated/articles.json` as stale under line-ending conversion. Investigate as a separate portability fix; CI Linux was unaffected in prior report.
4. **Concurrent writers:** freeze exact PR HEAD before merge. Avoid changing branches another agent is editing.
5. **Local disk:** Claude reported an ENOSPC episode due to an oversized npm cache; cache cleanup restored approximately 13.8 GB on that machine. This is local operational context, not a current repository defect.
6. **Editorial evidence:** audit draft claims against immutable protocol source references before publication. Preserve existing audit findings and explicit maturity labels.

## Next safe execution sequence

1. Read `AGENTS.md` and the editorial policies, then inspect current GitHub PRs, main SHA, CI and Netlify.
2. Confirm PR #13's actual production deployment and perform responsive/multilingual visual QA.
3. Review PR #14 against post-#13 main, run exact-head gates, and integrate only with authorization.
4. Reverify production and record release SHA, tests and outstanding findings.
5. Address Windows CRLF separately; only then prioritize additional editorial publication based on evidence gates.
6. Update this document with dated facts after each material change.

## Session reporting template

- **North / progress:** percentage with scope and caveat, not a substitute for evidence.
- **Implemented:** files, branch, commit, PR.
- **Verified:** exact SHA and checks actually run.
- **Published:** deployment SHA and URL, or explicitly “not verified.”
- **Material findings / blocks:** including ownership and next action.
- **Next action:** the smallest safe step.

**NO MATERIAL FINDING UNDER THE RUG.**
