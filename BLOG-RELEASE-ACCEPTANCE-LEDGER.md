# Sails Protocol Blog | Release acceptance ledger

**Baseline:** 2026-10-12 UTC. Source: BLOG-RELEASE-ACCEPTANCE-CONTRACT.md. Evidence owner: CTO review. PASS means this specific gate has been independently evidenced, not that neighboring gates pass.

| Gate | State | Evidence / residual |
| --- | --- | --- |
| I1 main exact-head CI | NOT VERIFIED | Re-run/check exact current main SHA after #26 |
| I2 isolated artifact | PASS | PR #26 exact HEAD a4e04640bcd8a90e9b11c4d58e8254aec26c17d4: isolated preview workflow success; recheck main as needed |
| I3 production SHA/deploy ready | PASS | PR #27 main commit 03f56ca704fb2db9e753ca87029a84fa4b7bd15c independently verified as Netlify production deploy 6acc5631104cd90008479406, ready, context production, published 2026-10-12T03:38:51.494Z |
| I4 core production HTTP 200 | NOT VERIFIED | Route-level HTTP evidence across locales needed |
| I5 assets/browser runtime | NOT VERIFIED | Verify images, browser console, native WebMCP in supported real browser |
| U1 desktop | NOT VERIFIED | Production screenshots/review |
| U2 tablet | NOT VERIFIED | Production screenshots/review |
| U3 mobile | NOT VERIFIED | Production screenshots/review |
| U4 light/dark | NOT VERIFIED | Production visual evidence |
| U5 keyboard/a11y | NOT VERIFIED | PR #26 automated axe PASS; manual production keyboard and a11y matrix outstanding |
| L1 localized routes | NOT VERIFIED | EN/PT-BR/ES route matrix |
| L2 canonical/hreflang | NOT VERIFIED | Verify deployed page heads |
| L3 sitemap/robots | NOT VERIFIED | Verify deployed files |
| L4 RSS/Atom | NOT VERIFIED | Verify deployed feeds |
| L5 navigation/metadata/drafts | NOT VERIFIED | Three locales and no draft leaks |
| E1 intro + nine articles | NOT VERIFIED | Catalog nine slugs verified, but all localized production pages not audited |
| E2 claim accuracy | NOT VERIFIED | Protocol/product claims cross-check |
| E3 source/provenance | NOT VERIFIED | F-007 code and production resolved, remaining content provenance review |
| E4 native-language signoff | NOT VERIFIED | EN/PT-BR/ES editorial reviewer approval |
| E5 Day 0 scope reconciled | NOT VERIFIED | Season 02 vs Day 0 48-topic taxonomy |
| G1 AGENTS.md | PASS | PR #15 merged squash 033ccbea3f1d297f99529fcc0e4077c985163338, canonical file on main |
| G2 EDITORIAL-START-HERE.md | PASS | PR #15 merged squash 033ccbea3f1d297f99529fcc0e4077c985163338 |
| G3 BLOG-CURRENT-STATE.md | PASS | PR #28 merged after three exact-head workflows passed, squash commit 8446a2efd1928eb5a54e8bea9e5c0cff59c3f84e; operational continuation checkpoint on main |
| G4 evidence ledger/scorecard | PASS | PR #27 merged as 03f56ca704fb2db9e753ca87029a84fa4b7bd15c; BLOG-GLOBAL-AUDIT-SCORECARD.md and this ledger present on main |
| G5 material findings triaged | NOT VERIFIED | Remaining F-001/003/004/005/006 and visual acceptance residual |

**Updated verified score: 6/25 PASS, weighted 20%*(2/5)+15%*(4/5) = 20%.** This is a deliberately conservative evidence baseline, not an assertion that the blog is only 10% built. Recompute after every verified gate. Do not credit manual or editorial acceptance without evidence.

**Day 0:** 0/144 approved editions according to historical audit ledger, pending fresh independent verification. Source-backed correction coverage 51/144 (35.4%) is separate.

## Reconciliation checkpoint | 2026-10-12 UTC

G4 promoted to PASS based on PR #27 merged and both canonical audit documents on main. I3 now PASS after independent exact-main Netlify deployment verification for PR #27. G3 was subsequently verified after PR #28 merged with all three exact-head checks passing. Historical 10% baseline is superseded by 13% conservative evidence score, not by an assertion that only 13% of functionality exists.

I3 promotion evidence: Netlify deployment ID 6acc5631104cd90008479406, production ready, commit_ref 03f56ca704fb2db9e753ca87029a84fa4b7bd15c, published 2026-10-12T03:38:51.494Z. Historical 17% was the previous evidence-gate score; PR #28 has since merged.

## Post-PR28 checkpoint | 2026-10-12 UTC

G3 now PASS based on merged PR #28 (8446a2efd1928eb5a54e8bea9e5c0cff59c3f84e), with 3/3 exact-head workflows success. **Operational evidence score 20% (6/25).** Netlify API still returned deploy 6acc5631104cd90008479406 at PR #27 SHA 03f56ca704fb2db9e753ca87029a84fa4b7bd15c after PR #28 merged; issue #29 tracks missing proof of current-main deployment and public locale/SEO audit. I3 PASS records historic exact SHA deploy; it does NOT assert that current main is deployed. If contract requires I3 to be current main at each checkpoint, reassess its status before any release declaration. This PR is documentation only and requires its own CI.

## Post-PR35 checkpoint | 2026-10-12 UTC

- PR #32 merged as `db711ce449b7207694d30d3bd4a66535d64bfd0a`, 3/3 exact-head workflows PASS. Custom homepage and Seasons UI localization EN/PT-BR/ES.
- PR #34 merged as `656c11decb314900d694f64682f4267645559d6d`, 3/3 exact-head workflows PASS. Locale-specific built HTML smoke checks.
- PR #35 merged as `7e61625aba2f7d8c39d5c0536cc9ea929ac766c9`, 3/3 exact-head workflows PASS. Correct Seasons anchor and localized empty-search state.
- Netlify production API **still reports** ready deploy `6acc5631104cd90008479406` on SHA `03f56ca704fb2db9e753ca87029a84fa4b7bd15c`. This is **not current main**. The historic I3 PASS does not constitute a current-main production acceptance; I3 must be reassessed as NOT VERIFIED for current release readiness until the published SHA equals main.
- Issue #33 tracks English-only article catalog titles/descriptions in localized custom pages. L5 remains NOT VERIFIED.
- No fresh production browser/locale/editorial acceptance. Do not count PR checks as live-site QA.
- Historical ledger remains **20% evidence baseline** (6/25) for continuity; strict **current-release** interpretation would downgrade I3, yielding **16%** (5/25 gates weighted: I2 4% + G1–G4 12%). Use **16%** as the conservative current-release score until Netlify catches up and exact-main production is verified.

## Production credit pause | 2026-10-12 UTC

- Netlify team UI reported: "Sails Protocol is now running on operational credits". Published sites remain live, but production deploys and Agent Runners are paused. Operational credits cannot fund new deploys. This is a billing restriction, not evidence of broken code or Git integration.
- User decision: wait for the next billing cycle without paid upgrade. Exact renewal date not established; inspect Netlify team billing to determine it.
- GitHub main after PR #39: 531fb6604408646d68ce835f247f74b5bca0a6db, PR exact-head CI 3/3 PASS. Last observed Netlify ready production deploy 6acc5631104cd90008479406 at older commit 03f56ca704fb2db9e753ca87029a84fa4b7bd15c.
- Continue GitHub PRs, exact-head CI, editorial fixes, tests, and review during the deploy freeze. Do not claim production publication or trigger paid plan changes.
- On credit renewal: deploy latest main, verify published SHA, production route HTTP, browser/assets, accessibility, EN/PT-BR/ES metadata and SEO, and editorial signoff. Issue #29 tracks release gate.
- Strict current-release acceptance remains 16% (I2 and G1-G4). Historical 20% does not represent current release readiness.

## Current release authority | 2026-10-13 UTC | post-PR93

**Authoritative current-release score: 16% (5 of 25 mandatory gates: I2 and G1–G4).** The historical 20% heading and I3 PASS row above describe an older production SHA and are **not** valid current-release acceptance. For this release, I3 is **NOT VERIFIED** until Netlify publishes the exact reviewed current `main` commit. Do not add historical and current scores.

- GitHub `main` after squash PR #93: `d36fe241a8cf37d3e3636edc3456d98d22745c6a`. PR #92 exact-head `a80252acb3ff5d45ad666c4fac1cf7d8f4d76692` and PR #93 exact-head `af408ad4302445977587d59a59b1366a7254718f` each passed Validate Blog, Browser accessibility audit, and Build isolated blog preview artifact (3/3), before squash merge.
- Netlify project `sails-protocol-blog` independently checked 2026-10-13: current production deploy `6acc5631104cd90008479406`, `ready`, published 2026-10-12T03:38:51.494Z, source commit `03f56ca704fb2db9e753ca87029a84fa4b7bd15c`. **It is not the current main commit.** No new deploy was triggered.
- I1 **NOT VERIFIED**: the available GitHub commit workflow-run connector exposes PR-triggered runs, not main push runs. Combined commit status API returned an empty status array for `d36fe241a8cf37d3e3636edc3456d98d22745c6a`; this is not proof that main CI failed or passed. Issue #85 tracks immutable main push-run evidence. Potential score if independently verified: 20%.
- I2/G1–G4 remain PASS on their previously documented evidence. I3–I5, U1–U5, L1–L5, E1–E5, G5 require their respective current-release evidence. Green PR CI is not a production or editorial signoff.
- Owner decision: finish GitHub and editorial preparation first, then deploy on Netlify once ready and permitted by team billing/credits, then conduct live production/browser/SEO and native editorial acceptance. Do not spend credits or bypass the paused deploy policy prematurely.
- **Day 0 editorial acceptance remains separately unverified**; 48 planned topics × 3 locales is a planning denominator, not a claim of 144 published or approved editions.

**NO MATERIAL FINDING UNDER THE RUG.**

## I1 direct push CI evidence candidate | 2026-10-16 UTC | review pending

- GitHub branch API returned current `main` HEAD `fbba5cd9176cf973e826d98a130cd924e3ed0799`.
- GitHub Actions run [38470073314](https://github.com/sails-protocol/Sails-Protocol-Blog/actions/runs/38470073314) is workflow **Validate Blog**, triggered by **push** to `main` on exact SHA `fbba5cd9176cf973e826d98a130cd924e3ed0799`, created `2026-10-13T21:22:14Z`, status **completed**, conclusion **success**. This is direct main push CI evidence, not inferred from PR checks.
- Evidence discovery recorded in [issue #85](https://github.com/sails-protocol/Sails-Protocol-Blog/issues/85). **Independent reviewer identity/date and formal acceptance are pending**. Keep I1 **NOT VERIFIED** for acceptance until reviewer signs off; do not treat this candidate as an automatic 4-point promotion.
- **Current-release weighted acceptance remains 16%** (I2 and G1–G4 only). If I1 receives documented independent approval, its 4-point weight may raise the total to 20%, subject to the acceptance contract.
- No Netlify deploy, PR merge, editorial signoff, or production/browser QA is implied.
