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
| G3 BLOG-CURRENT-STATE.md | NOT VERIFIED | Current-state refresh prepared in this PR; PASS only after reviewed merge |
| G4 evidence ledger/scorecard | PASS | PR #27 merged as 03f56ca704fb2db9e753ca87029a84fa4b7bd15c; BLOG-GLOBAL-AUDIT-SCORECARD.md and this ledger present on main |
| G5 material findings triaged | NOT VERIFIED | Remaining F-001/003/004/005/006 and visual acceptance residual |

**Updated verified score: 5/25 PASS, weighted 20%*(2/5)+15%*(3/5) = 17%.** This is a deliberately conservative evidence baseline, not an assertion that the blog is only 10% built. Recompute after every verified gate. Do not credit manual or editorial acceptance without evidence.

**Day 0:** 0/144 approved editions according to historical audit ledger, pending fresh independent verification. Source-backed correction coverage 51/144 (35.4%) is separate.

## Reconciliation checkpoint | 2026-10-12 UTC

G4 promoted to PASS based on PR #27 merged and both canonical audit documents on main. I3 now PASS after independent exact-main Netlify deployment verification for PR #27. G3 remains NOT VERIFIED until the current-state update in this PR is merged and reviewed. Historical 10% baseline is superseded by 13% conservative evidence score, not by an assertion that only 13% of functionality exists.

I3 promotion evidence: Netlify deployment ID 6acc5631104cd90008479406, production ready, commit_ref 03f56ca704fb2db9e753ca87029a84fa4b7bd15c, published 2026-10-12T03:38:51.494Z. Current 17% is an evidence-gate score; this documentation PR has not yet merged.
