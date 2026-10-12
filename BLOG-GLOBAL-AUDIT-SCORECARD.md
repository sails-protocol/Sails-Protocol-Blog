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
