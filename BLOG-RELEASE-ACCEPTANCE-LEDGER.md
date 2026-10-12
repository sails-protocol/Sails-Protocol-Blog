# Sails Protocol Blog | Release acceptance ledger

**Baseline:** 2026-10-12 UTC. Source: BLOG-RELEASE-ACCEPTANCE-CONTRACT.md. Evidence owner: CTO review. PASS means this specific gate has been independently evidenced, not that neighboring gates pass.

| Gate | State | Evidence / residual |
| --- | --- | --- |
| I1 main exact-head CI | NOT VERIFIED | Re-run/check exact current main SHA after #26 |
| I2 isolated artifact | PASS | PR #26 exact HEAD a4e04640bcd8a90e9b11c4d58e8254aec26c17d4: isolated preview workflow success; recheck main as needed |
| I3 production SHA/deploy ready | NOT VERIFIED | #25 f7d1955 production verified ready at Netlify deploy 6acc520182271500089828b2; #26 merged after it, needs exact current main deploy check |
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
| G3 BLOG-CURRENT-STATE.md | NOT VERIFIED | Historical ledger includes stale #14 status; refresh current state |
| G4 evidence ledger/scorecard | NOT VERIFIED | Scorecard on main, this ledger PR pending merge |
| G5 material findings triaged | NOT VERIFIED | Remaining F-001/003/004/005/006 and visual acceptance residual |

**Initial verified score: 3/25 PASS, weighted 20%*(1/5)+15%*(2/5) = 10%.** This is a deliberately conservative evidence baseline, not an assertion that the blog is only 10% built. Recompute after every verified gate. Do not credit manual or editorial acceptance without evidence.

**Day 0:** 0/144 approved editions according to historical audit ledger, pending fresh independent verification. Source-backed correction coverage 51/144 (35.4%) is separate.
