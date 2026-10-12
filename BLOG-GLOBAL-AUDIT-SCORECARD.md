# Sails Protocol Blog | Global audit scorecard

**Snapshot:** 2026-10-11 (audit session). **Scope:** the whole blog, including current published site and the separately planned Day 0 editorial library. **Authority:** evidence ledger, not publication approval.

## Measurement contract

A global completion percentage is **NOT DETERMINED** until the owner/CTO approves the scope, denominators, weighting and acceptance gates below. No averaging of unlike metrics; no credit for a draft, green CI, merged PR or deployed preview as proof of unrelated criteria. For each row: record PASS / FAIL / BLOCKED / NOT VERIFIED, immutable evidence, exact SHA or deployed build, reviewer and date. Count only PASS against a frozen denominator, and report partial coverage separately.

| Domain | Acceptance denominator to freeze | Currently verified | Remaining evidence |
| --- | --- | --- | --- |
| Governance / continuity | 3 canonical documents on main, 3 overlapping PRs closed, exact-head checks | 3 files on main at squash commit `033ccbea3f1d297f99529fcc0e4077c985163338`; PR #15 merged; #16–#18 closed; 3/3 PR-head workflows passed | Refresh stale current-state snapshot after integration |
| Engineering / CI | Required exact-head workflows, link/catalog correctness, regression and runtime browser gates | PR #15 HEAD `449cf0282fc3403cb60fd62baf56f3cdb0aa7f2f`: Validate Blog, Browser accessibility audit, isolated preview PASS; PR #14 old HEAD had 3 PASS | Rebase/update PR #14 on current main; re-run at new exact HEAD; verify nine localized paths and native WebMCP separately |
| Production / delivery | Deployed SHA, EN/PT-BR/ES routes, sitemap/feed/canonical/hreflang, no draft leaks | PR #15 Netlify **deploy preview** status success | Independently verify current production SHA and all routes; preview is not production |
| UX / accessibility | Desktop/tablet/mobile × EN/PT-BR/ES × light/dark/keyboard checks; recorded screenshots or test artifacts | PR-head automated browser accessibility audit PASS | Final live production manual/browser matrix, contrast, navigation and responsive QA |
| Editorial Day 0 | 48 numbered topics × 3 language editions = 144; per-edition G1–G7 evidence and owner signoff | G0 draft inventory documented; historical audit ledger reports 17/48 topics and 51/144 editions with source-backed corrections (35.4% **coverage**, not approval) | Source-to-claim ledger, independent native-language review, evidence and browser gates, CTO and owner acceptance. Historical ledger reports 0 approved topics; independently recheck before release |

## Findings and safeguards

- **F-001 | OPEN:** `BLOG-CURRENT-STATE.md` is a dated snapshot still describing #15 as pending, despite its merge. Update through reviewed PR, not a silent main edit.
- **F-002 | OPEN:** PR #14 `fix/reading-collections-catalog-source` is two commits behind `main` as of this pass. One-file scope; historical three workflows PASS on old HEAD. Do not merge without current-base and exact-head revalidation.
- **F-003 | OPEN:** Production deployment commit and final browser/mobile/multilingual acceptance are not established by the GitHub evidence collected.
- **F-004 | OPEN:** `EDITORIAL-DAY0-EVIDENCE-AUDIT.md` records G0 inventory and G1–G7 open, 17/48 source-backed topic corrections and zero final approvals. Source-backed ≠ source-complete ≠ runtime-verified ≠ publication-approved.
- **F-005 | OPEN:** Native WebMCP support cannot be certified by mocks or CI naming alone; require real supported browser evidence.
- **F-006 | OPEN:** Published Season 02 (nine articles) is a different taxonomy from the planned seven-season, 48-topic Day 0 backlog.

## Audit protocol

1. Freeze a canonical release scope and weighted/unweighted scoring policy with the owner; separately track live-blog readiness and 144-edition Day 0 readiness.
2. Reconcile each criterion against live GitHub/Netlify, exact SHAs and browser evidence. Label missing proof NOT VERIFIED, not PASS.
3. Require an issue/PR for each material FAIL/BLOCKED finding; never erase a historical residual to improve the percentage.
4. Publish two independent percentages only after denominator approval: **current live-blog release readiness** and **Day 0 editorial acceptance**. An optional global percentage requires an explicitly approved composition rule.
5. Recompute the scorecard after every merge, deploy, editorial approval or scope change. Historical evidence stays immutable.

**NO MATERIAL FINDING UNDER THE RUG.**

## Verified checkpoint | 2026-10-12 UTC (supersedes stale status above, does not erase history)

- **F-002 RESOLVED:** PR #22 replaced stale PR #14 on current main; its exact HEAD `7a353406c3b245ad5b1299472a05d18029c9bbb4` passed Validate Blog, isolated preview artifact, and browser accessibility audit. Nine Season 02 slugs verified present in the generated catalogue; PR #22 merged as `d2d655c5f408ae931b2739c124e6cfeddd4f23d8`. PR #14 closed without merge. This does not prove every localized production route.
- **F-003 PARTIAL:** Netlify production deploy `6acc4a3d7ca32e00089ce3f5` confirmed ready at `940793b0b1b5e81477f6a3e40124bbf4dc406b0a` (four Seasons cards). A subsequent production deploy `6acc4a755ecf2200084ed982` confirmed ready at `f315850154eda0db3ca8b2825284b83d4f895ecd` (scorecard). Production for PR #22's merge SHA and multilingual/browser matrix remains NOT VERIFIED at this checkpoint.
- **F-007 OPEN | Artwork provenance conflict:** `src/pages/index.tsx` currently uses `sails-earth-horizon-hero.webp` in the Introduction Seasons card although `static/img/editorial/SOURCES.md` reserves that asset for the homepage hero. Resolve with a separate approved introduction illustration, preserving four cards, before marking visual governance PASS.
- **F-001 PARTIAL:** `BLOG-CURRENT-STATE.md` contains a dated historic snapshot and a post-merge checkpoint, but its integration ledger still describes PR #14 as open. Refresh the current ledger through review without deleting historic evidence.

**Global percentage remains NOT DETERMINED.** These findings do not constitute acceptance of Day 0 editorial editions, real-browser WebMCP, or all locale/responsive gates.

## Production verification checkpoint | 2026-10-12 UTC

- **F-007 implementation/deploy RESOLVED, visual acceptance OPEN:** PR #25 superseded closed-unmerged #24, exact HEAD `4e8629653494cdd65bf95654783a32a45c2572ef` passed all three required GitHub workflows (Validate Blog, isolated preview artifact, browser accessibility audit), was squash-merged as `f7d1955e38ff933639c7beba145a2cb1bec73d06`. Netlify production deploy `6acc520182271500089828b2` independently reported `ready`, `context: production`, `commit_ref: f7d1955e38ff933639c7beba145a2cb1bec73d06`, published `2026-10-12T03:20:59.386Z`, `error_message: null`. The Introduction card now references the existing `protocol-waves.svg`; Earth Horizon is reserved for hero. Manual production screenshots across desktop/tablet/mobile and light/dark/keyboard remain NOT VERIFIED.
- **F-003 PARTIAL:** Exact production commit is verified for PR #25. Full locale route matrix, sitemap/feed/canonical/hreflang, native WebMCP in supported real browser, and manual visual checks remain NOT VERIFIED; do not equate deploy success with those gates.
- **Historical F-007 OPEN label above remains as the original observation**, superseded for implementation and deploy by this checkpoint; no historical evidence deleted.

**Global percentage remains NOT DETERMINED** pending owner-approved denominator and release gates. Separate the completed technical/deployment subtask from outstanding global UX/editorial acceptance.
