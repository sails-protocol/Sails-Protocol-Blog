# Sails Protocol Blog | Owner-approved release acceptance contract

**Approved:** 2026-10-12. Goal: bring the existing blog to 100% validated before shifting routine attention to new posts after Day 0.

## Two independent release gates

**Live-blog operational readiness:** 25 mandatory criteria across five weighted domains below. **Day 0 editorial acceptance:** 48 planned topics x 3 languages = 144 editions, subject to canonical backlog confirmation and G1–G7 editorial gates. Do not average these two scores or treat source-backed corrections as approvals.

| Domain | Weight | Five mandatory acceptance criteria |
| --- | ---: | --- |
| Infrastructure, CI, deploy | 20% | I1 main exact-head CI; I2 isolated artifact; I3 production SHA/deploy ready; I4 core production HTTP 200; I5 assets and browser runtime error-free |
| UI, responsive, accessibility | 20% | U1 desktop; U2 tablet; U3 mobile; U4 light/dark; U5 keyboard and accessibility, all with real production evidence |
| EN/PT-BR/ES and SEO | 20% | L1 localized routes; L2 canonical/hreflang; L3 sitemap/robots; L4 RSS/Atom; L5 localized navigation/metadata and no draft leaks |
| Published content/editorial | 25% | E1 intro + 9 Season 02 articles across locales; E2 claim accuracy; E3 sources/provenance; E4 native-language review/signoff; E5 Day 0 scope/release claims reconciled |
| Documentation/governance | 15% | G1 AGENTS.md; G2 EDITORIAL-START-HERE.md; G3 BLOG-CURRENT-STATE.md; G4 evidence ledger/scorecard; G5 all material findings/PRs triaged |

## Scoring

Each criterion scores 1 only when PASS with immutable evidence, reviewer, date and production SHA as applicable; FAIL, BLOCKED, NOT VERIFIED score 0. Domain progress = PASS / 5; weighted operational progress = sum(domain weight * PASS / 5). A global 100% requires 25/25 PASS; no compensating for failed mandatory gates. Day 0 separately reports editions accepted / 144, only with G1–G7 and signoff. Historical ledger: 17/48 topics and 51/144 editions with source-backed corrections is **35.4% correction coverage, not approval**. No assertion of Day 0 completion from that metric.

## Execution protocol

Maintain BLOG-RELEASE-ACCEPTANCE-LEDGER.md with gate, state, immutable evidence, reviewer, date, and next action. Initial state NOT VERIFIED unless specific current evidence exists. Green CI does not certify manual visual QA, real-browser WebMCP, locale navigation, or editorial quality. For each finding create focused issue/PR; revalidate exact HEAD; verify Netlify production commit and live acceptance; preserve historical evidence. Require owner approval before changing denominator. Keep release and Day 0 editorial completion separate until both reach 100% with zero material unresolved findings. **NO MATERIAL FINDING UNDER THE RUG.**
