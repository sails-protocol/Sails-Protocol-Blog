# Release G5 | Material findings triage matrix

**Snapshot:** 2026-10-14 UTC. **Status:** proposed review evidence, **G5 NOT VERIFIED**. This document records known residuals and their dispositions; it is not a claim of closure or independent CTO acceptance.

## Release and production residuals

| Finding | Tracking | Current disposition | Evidence required to close |
| --- | --- | --- | --- |
| I1 exact-main push CI | [#85](https://github.com/sails-protocol/Sails-Protocol-Blog/issues/85) | OPEN, evidence missing | Successful `push` workflow for exact main SHA, run URL, reviewer/date |
| Current-main production, locale/SEO/browser | [#29](https://github.com/sails-protocol/Sails-Protocol-Blog/issues/29) | BLOCKED by owner-directed Netlify credit pause | Approved deployment and production SHA match, HTTP/routes/assets, locale/SEO, browser and accessibility evidence |
| Visual identity and image provenance | [#12](https://github.com/sails-protocol/Sails-Protocol-Blog/issues/12) | OPEN, visual acceptance missing | Licensed asset attribution, production responsive screenshots, contrast and review |
| Day 0 article claims, maturity and translations | [Editorial evidence audit](./EDITORIAL-DAY0-EVIDENCE-AUDIT.md) | OPEN, 0/144 formal approvals in historical register | Per-edition source-to-claim, native-language, CTO and owner signoff |
| Historic F-001 stale state snapshot | [Current-state checkpoints](./BLOG-CURRENT-STATE.md) | HISTORICAL, superseding dated checkpoints exist; final reviewer disposition needed | CTO confirms old snapshot superseded, not silently deleted |
| Historic F-002 stale PR #14 | [Global audit checkpoint](./BLOG-GLOBAL-AUDIT-SCORECARD.md) | RESOLVED historically by PR #22; final G5 reviewer acknowledgement needed | Check immutable PR #22 evidence and reviewer/date |
| Historic F-003 production/browser gap | [#29](https://github.com/sails-protocol/Sails-Protocol-Blog/issues/29) | OPEN | Same production/browser evidence as #29 |
| Historic F-004 editorial acceptance | [Editorial evidence audit](./EDITORIAL-DAY0-EVIDENCE-AUDIT.md) | OPEN | Editorial gates G1–G7 and formal signoff |
| Historic F-005 native WebMCP | [Global audit scorecard](./BLOG-GLOBAL-AUDIT-SCORECARD.md) | OPEN, real-browser support not independently verified | Supported browser run with native API and trace |
| Historic F-006 Season 02 vs Day 0 taxonomy | [Release acceptance contract](./BLOG-RELEASE-ACCEPTANCE-CONTRACT.md) | OPEN reconciliation | Reviewed mapping of nine published Season 02 articles to 48 planned topics; avoid equating denominators |
| Historic F-007 image provenance | [Global audit checkpoint](./BLOG-GLOBAL-AUDIT-SCORECARD.md) | Implementation/deploy resolved historically; visual acceptance remains OPEN | Review image provenance and live visual gate (#12) |

## Protocol evidence residuals relevant to editorial accuracy

These are **editorial claim restrictions**, not new allegations about current Protocol HEAD. Refer to [CTO material residuals](./EDITORIAL-CTO-MATERIAL-RESIDUALS-2026-10-10.md):

- **R-01:** Historical automated recovery conformance is MULTISIG-scoped. Do not claim cross-rail restart safety without new evidence.
- **R-02:** Historical independent Authority → Outcome → DestinationBinding proof and participant export gaps. Do not claim independent verifiability of all outcomes without new evidence.
- **R-03:** Conformance tests, source inspection, exact-head CI and production observation are different evidence levels.

## G5 acceptance decision required

A reviewer must explicitly acknowledge each row, identify any additional material findings from current code/PRs, assign owner/next action and record review date and immutable evidence. **Do not promote G5 to PASS** while material findings are merely enumerated or blocked. G5 is a triage gate, not a license to hide unresolved work. Netlify remains paused; no merge or deploy is authorized by this file.

**NO MATERIAL FINDING UNDER THE RUG.**

## 2026-10-14 follow-up | source-bounded editorial triage, not gate closure

The consolidated [PR #103](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/103) now tracks source inspections and individual 3/3 green exact-head CI for [#96](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/96), [#97](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/97), [#98](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/98), [#99](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/99), and [#100](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/100). This **reduces unreviewed claim ambiguity** in five priority topics, but **does not close** F-004/E2–E4 or grant any G1–G7 article signoff.

| Material editorial boundary | Owner/next reviewer | Current disposition and closure evidence |
| --- | --- | --- |
| SDK idempotency vs Wallet guarantees (14) | Protocol CTO + Wallet integration owner | Draft qualified; require exact-head lost-response/retry and signing-context integration evidence |
| WebSocket local limiter vs distributed controls and session URL exposure (35) | Protocol security owner / Gatekeeper | Draft qualified; require actual deployment token-scope and multi-worker evidence |
| Authority → Outcome → DestinationBinding (36) | Protocol CTO / OpenProof owner | Draft preserves unresolved independent proof; require participant-verifiable export/cryptographic evidence |
| MULTISIG recovery vs other rails and divergence detection (37) | Settlement owner / Gatekeeper | Draft qualified; require per-rail restart/reconciliation conformance or explicit rail exclusion |
| Evidence descriptor vs durable quota enforcement (39) | OpenProof owner / Gatekeeper | Draft qualified; require bounds, concurrent quota accounting, zero-side-effect rejection tests |
| WDK isolation and NODE_ENV boundary (related custody claims) | Protocol Gatekeeper | [Protocol #474](https://github.com/sails-protocol/Sails-Protocol/issues/474) and [Blog #106](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/106); test and deployment boundary unresolved, no exploit asserted |

**Operational owners in this matrix are proposed functional roles, not verified assignees.** The G5 reviewer must confirm responsibility, disposition, dates, and evidence, including the non-editorial rows above. No automatic release-gate promotion. Netlify remains paused. **NO MATERIAL FINDING UNDER THE RUG.**

## F-006 reconciliation checkpoint | separate editorial taxonomies

**Verified documentary scope:** the published Season 02 is recorded as an introduction plus nine regulatory/custody/market articles; the separate Day 0 master backlog is **seven thematic seasons, 48 numbered topics, 144 draft language editions**. The Day 0 Season 2 is **Engineering Economic Coordination (IDs 06–13)**, **not** the published regulatory Season 02. Thus a matching season number is not a content mapping, and neither nine published articles nor their translations may be subtracted from the 144-edition Day 0 approval denominator.

| Comparison | Published Season 02 | Day 0 planned library | Decision |
| --- | --- | --- | --- |
| Editorial organizing principle | Regulatory/custody/market reporting | Protocol economic coordination and technical topic taxonomy | Keep distinct |
| Content units | Nine published article slugs, plus introduction in release contract | 48 numbered topics in seven seasons | No one-to-one mapping inferred |
| Language accounting | Production locale acceptance still NOT VERIFIED | 144 EN/PT-BR/ES draft editions, 0 formally accepted | Never convert published status to Day 0 approval |
| Reuse | Potential background references after individual review | Claim-ledger citations only when source and maturity match | Review article-by-article |

**F-006 disposition: PARTIALLY RECONCILED, NOT CLOSED.** Structural/denominator collision is resolved as a documentary rule. A nine-row slug/title/source-to-topic crosswalk and review of public EN/PT-BR/ES routes remain unverified here; do not invent it from topic similarity. Owner/CTO must confirm whether any individual published article should be linked as contextual reading, without changing the frozen 48-topic scope. The release contract's E5 and G5 remain NOT VERIFIED; readiness remains 16%.

## F-006 canonical nine-slug crosswalk | verified from current GitHub main, 2026-10-14

**Evidence:** `src/pages/seasons/index.tsx` defines the exact nine published Season 02 slugs; `src/generated/articles.json` supplies their canonical English titles/descriptions; `EDITORIAL-SEASONS-AND-READING-PATHS.md` defines the separate numbered Day 0 topics. This table is a **semantic candidate map for editorial reuse only**, not a claim of article equivalence, approved source coverage or verified live production routes.

| Published Season 02 article (canonical slug suffix) | Candidate Day 0 contextual reading | Mapping status |
| --- | --- | --- |
| 01 `why-sails-arrives-now` | 01–02 motivation/coordination | Context only; not equivalent |
| 02 `software-is-not-custody` | 09 identity/authority; 16 wallet/node boundaries; 43 escrow custody | Context only; legal/software scope differs |
| 03 `tornado-cash-turning-point` | 18 external-vs-protocol boundaries; 48 governance | Context only; legal developments are not Protocol conformance |
| 04 `hidden-cost-gatekeepers` | 02 coordination problem; 25 fragmented liquidity | Context only; market framing differs |
| 05 `noncustodial-business-model` | 15 reference-market liquidity; 44 fees/incentives | Context only; business argument differs from implementation |
| 06 `stablecoins-open-marketplaces` | 24 settlement rails; 46 cross-rail routing | Context only; no production compatibility implied |
| 07 `one-market-many-interfaces` | 15 reference market; 18 external integrations; 47 wallet/market | Context only; no deployed interoperability implied |
| 08 `economic-coordination-protocol` | 01 introduction; 03 architecture; 20 modular vision | Context only; maturity claims require independent audit |
| 09 `decripto-brazil-market-shift` | 02 motivation; 45 market abuse; 48 governance | Context only; jurisdiction-specific reporting differs |

**Introduction is separate:** `what-is-sails-protocol` is the public introduction, not a tenth Season 02 article and not Day 0 article 01 by identity. **No double-counting:** nine published slugs + one introduction are separate from the 48 planned Day 0 topics/144 editions. **No automated linking or publication:** suggested related-reading links require claim review, locale-specific live-route verification and approval. This closes the *missing nine-row documentary crosswalk* subtask, but F-006 remains **PARTIAL / NOT VERIFIED** for full article content, source currency, locale/browser checks and CTO acceptance; E5 and G5 stay NOT VERIFIED, score 16%.

## Published Season 02 primary-file inspection | 2026-10-14

Inspected **all nine English published Markdown files** on GitHub `main` under `articles/01-why-sails-arrives-now.md` through `articles/09-decripto-brazil-market-shift.md`, and their canonical slugs from `src/generated/articles.json`. This is an editorial **source-presence and scope inspection**, not a live-link crawl, fresh legal research, PT-BR/ES review, or signoff.

| Article | Documentary finding | Next verification |
| --- | --- | --- |
| 01 Why Sails Arrives Now | Links to BCB, FinCEN, CFTC, ESMA, Fifth Circuit and company notices; distinguishes roadmap from production | Revalidate dated regulatory/company claims against primary originals |
| 02 Software Is Not Custody | FinCEN FIN-2014-R002 and CFTC Phantom 2026 are cited; explicitly rejects blanket software exemption | Verify precise legal scope and conditional CFTC language |
| 03 Tornado Cash Turning Point | Cites Fifth Circuit Van Loon PDF; expressly limits holding to sanctions/property question | Check ruling/current procedural status before republishing |
| 04 Hidden Cost of Gatekeepers | Coinext, Bity and BCB cited; acknowledges compliance benefits and rejects automatic market-concentration proof | Verify notices, dates and any market-level inference |
| 05 Noncustodial Business Model | No external URL detected in the inspected file's source section; architectural/business analysis | Add primary provenance where claims require it; avoid implied production custody guarantee |
| 06 Stablecoins Need Open Marketplaces | ESMA guidance cited; acknowledges issuer/network dependencies and roadmap scope | Recheck MiCA/ESMA chronology and exact regulated activity |
| 07 One Market, Many Interfaces | No external URL detected in inspected file's source section; explicitly calls cross-app interoperability a design target | Anchor economic state/replay claims to immutable Protocol source and tests |
| 08 Economic Coordination Protocol | No external URL detected in inspected file's source section; design and production maturity separated | Add source-to-claim ledger for modules, authority and actual implemented scope |
| 09 DeCripto Effect | Links official Coinext, Bity, Bitso, Bybit and BCB material; distinguishes closure, migration, retail transition and insolvency | Revalidate current notices, effective dates and regulatory causal claims |

**Methodological limit:** URL presence/absence above was inspected in Markdown; external target reachability, source fidelity and current accuracy have **not** been independently verified. The English-only review cannot close localized editorial E2/E3/E4 or production L1–L5. The documentary crosswalk and primary-file inventory are complete, but F-006/E5 still require reviewer acceptance and no automatic content reuse is authorized. **No release score change: 16%; Day 0 approvals: 0/144.**

## Primary regulator source revalidation | 2026-10-14

Three first-party references were independently retrieved and compared to published English articles on GitHub `main`:

1. **FinCEN FIN-2014-R002 (2014-01-30)**, https://www.fincen.gov/resources/statutes-regulations/administrative-rulings/application-fincens-regulations-virtual : producing/distributing software alone is not acceptance/transmission; the ruling's described company was also buying/selling virtual currency **for its own investment benefit**. Article 02 correctly limits the software-only point and warns against blanket exemption. **Residual:** add explicit own-account fact pattern when revising, and distinguish other operator conduct and jurisdictions. No Sails legal determination.
2. **CFTC press release 9197-26 (2026-03-17)**, https://www.cftc.gov/PressRoom/PressReleases/9197-26 : Market Participants Division staff **no-action position** for specified proposed Phantom software activities involving registered intermediaries, subject to conditions, and specifically concerning introducing-broker/associated-person registration. Article 02's existing characterization as conditional staff position is consistent. **Residual:** do not expand to CFTC-wide exemption, other product classes, or Sails; verify underlying letter and conditions before substantive legal signoff.
3. **Fifth Circuit Van Loon v. Treasury (2024-11-26)**, https://www.ca5.uscourts.gov/opinions/pub/23/23-50669-CV0.pdf : the ruling discusses immutable Tornado Cash pool contracts and specific sanctions-property analysis. Article 03 appropriately avoids generalizing to all decentralized services. **Residual:** appellate holding is historical; any claim about later proceedings, OFAC measures or current sanctions must be checked separately.

**Decision:** no supported need to alter the three published English articles from these targeted checks; record scoped primary-source consistency only. This is **not** a complete legal or fact-check review, not counsel advice, and not PT-BR/ES signoff. E2/E3/E4 and F-006 remain open. No merge/deploy or acceptance-score increase.
