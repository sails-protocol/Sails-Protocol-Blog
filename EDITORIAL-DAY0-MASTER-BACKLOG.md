# Sails Protocol Blog: Day 0 Master Editorial Backlog

**Baseline date:** 2026-10-10. **Status:** proposed editorial scope freeze, pending CTO/owner acceptance. **Not a publication authorization.**

## North star

On Day 0, launch the largest **reviewed, technically defensible** library feasible in EN, PT-BR and ES. No artificial drip-feed or weekly schedule. A planned article is not an implemented capability. A draft is not a reviewed article.

## Fixed baseline: 7 seasons, 48 articles, 144 language editions

| Season | IDs | Topics | First drafts as of baseline |
| --- | --- | ---: | ---: |
| 1. Why Sails Exists | 01-05 | 5 | 5 × 3 |
| 2. Engineering Economic Coordination | 06-13 | 8 | 8 × 3 |
| 3. Building on the Protocol | 14-19 | 6 | 6 × 3 |
| 4. Beyond the Trading SDK | 20-27 | 8 | 8 × 3 |
| 5. Developer Journey and Interoperability | 28-34 | 7 | 7 × 3 |
| 6. Security, Verification and Production Readiness | 35-41 | 7 | 7 × 3 |
| 7. Real-World Economic Flows | 42-48 | 7 | not drafted |
| **Total** | **01-48** | **48** | **41 × 3 = 123 draft files** |

Remaining to reach the **first-draft baseline**: 7 topics × 3 languages = **21 files**. Reaching 144 files does not mean the publication gate has passed.

## Scope decision

Freeze the seven-season, 48-topic baseline as the default Day 0 editorial map. Do **not** add a season because a new idea sounds interesting. Log additional topics in a parking lot, then admit them only if the CTO/owner confirms a material coverage gap not addressable by improving an existing article. De-duplicate adjacent topics before adding anything.

### Coverage matrix and explicit boundaries

1. **Motivation and protocol architecture:** Seasons 1 and 3.
2. **Trade state, authorization, concurrency, exactly-once and escrow semantics:** Seasons 1, 2, 5 and 7.
3. **Identity, reputation, evidence, provenance and bounded resources:** Seasons 2, 4 and 6.
4. **SDK developer experience, versioned schemas, node operations and external adapters:** Season 5.
5. **Security, Byzantine assumptions, privacy, recovery and verification quality:** Season 6.
6. **Wallet integration, Sails Market, external liquidity and private rooms:** Seasons 3, 4 and 7.
7. **PIX/DePix, payment truth, rails, disputes, fees and incentives:** Season 7.
8. **Modular roadmap: OpenIdentity, OpenProof, OpenReputation, OpenSettlement, OpenLiquidity, OpenAgents, OpenFinance:** Season 4.
9. **Governance, compatibility, incident transparency and production evidence:** Seasons 3, 6 and 7.

**Important gaps that must be audited rather than assumed covered:** actual source-to-claim mapping; public vs private node trust assumptions; settlement/provider finality; SDK API examples and install steps; precise KYC/privacy/regulatory claims; multi-language routing and accessibility; real production observations. These may require revisions, not more topics.

## Production pipeline, with explicit acceptance criteria

**G0 Inventory:** all 48 unique topics and 144 language drafts exist; no duplicate or missing editions.  
**G1 Substance:** each article has a concrete scenario, boundaries, an alternative/tradeoff, a failure mode and a meaningful next question. Reject generic boilerplate.  
**G2 Evidence:** maintain claim-to-source ledger, exact immutable code/decision refs and maturity labels; no unsupported implementation, security or finality claims.  
**G3 Visuals:** topic-specific diagrams only where pedagogically useful, full accessible text equivalent in each language, no repeated decorative diagrams.  
**G4 Localization:** EN canonical reference; PT-BR/ES semantically equivalent and independently proofread; no false localized links.  
**G5 Site integration:** all approved articles become real public routes on Day 0, season pages with actual article links, prev/next and related reading, RSS/sitemap, metadata, canonical/hreflang and search discoverability. No draft leaks.  
**G6 Verification:** actual build, typecheck, content checks, accessibility, responsive/keyboard/browser tests; native WebMCP gate remains blocked until real browser API verification, unless separately resolved by authorized CTO decision.  
**G7 Approval:** technical/CTO approval, then explicit owner authorization to merge and publish the approved library together.

Gates are **not complete** merely because they are written here. For each gate, record evidence, date, SHA, reviewer and unresolved findings.

## Recommended work sequence

1. Draft Season 7 (42-48) in three languages to complete the 144-file inventory.
2. Pilot deep revision on Season 1 articles 01-05: claim ledger, scenarios, source checks, diagrams, language quality. This sets the standard.
3. Audit and deepen Seasons 2, 5, 6 (hard technical assertions), then 3, 4, 7. Prioritize risk and evidence, not article number alone.
4. Implement true multilingual season/article navigation and Day 0 publication manifest with only approved entries.
5. Execute and record technical gates, resolve material findings, seek CTO and owner approvals.
6. On launch approval, promote **all** approved articles simultaneously. If some remain unapproved, report the gap explicitly instead of claiming complete library coverage.

## Progress dashboard to maintain

Report **topics planned / first drafted / substantively reviewed / evidence-audited / localized and proofread / technically approved / owner-approved / publicly published**, plus last verified commit and tests run. Never conflate these stages.

## Non-negotiables

- Do not merge into `main`, deploy to Netlify production, or claim approval without explicit authorization.
- No unsupported numeric security guarantees, no invented citations, no artificial article-count inflation.
- The Sails editorial DNA remains: **Question -> Boundary -> Decision -> Failure -> Evidence -> Next Question**.
- Source of truth: `EDITORIAL-DNA-AND-QUALITY-GATES.md`, `EDITORIAL-VOICE-GUIDE.md`, `EDITORIAL-VISUAL-STANDARDS.md`, `EDITORIAL-SEASONS-AND-READING-PATHS.md`.
- **NO MATERIAL FINDING UNDER THE RUG.**

## Owner-requested institutional editorial track: AI methodology and intellectual influences

This is a **cross-cutting institutional track**, not an automatic eighth season or a silent change to the 48-article baseline. Planned public outputs: (a) a permanent, verifiable methodology page and (b) a curated authors/works/influences page, with optional links from relevant articles. The first English draft is `editorial-drafts/institutional-ai-engineering-methodology.en.md`. **Its source audit is blocked:** the canonical GitHub methodology and original inspiration list were not retrieved in the current pass. Do not guess names, imply endorsement, or publish until exact references are checked. Translate to PT-BR and ES only after factual source audit, then apply normal review gates. Track this separately from the 48 numbered topics so the progress dashboard remains honest.

## Identity, naming and transport research dossier (2026-10-10)

Added `editorial-drafts/research-identity-naming-transport.en.md` covering Spaces Protocol, Pubky, Nostr, Pear/P2P primitives and Iroh. This is **not** a completed integration claim or a new approved numbered article. Its verified upstream source links and questions feed articles 09, 13, 21, 30, 34 and 38. Next gate: verify the Sails implementation status and explicit identity/transport contracts at immutable source refs; then decide whether a standalone Day 0 article is necessary or whether the existing 48 topics adequately cover it. Preserve the seven-season baseline unless an owner/CTO scope decision changes it.
