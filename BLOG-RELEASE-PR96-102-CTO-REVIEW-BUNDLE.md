# Consolidated CTO / owner review bundle: PRs #96–#102

**Snapshot:** 2026-10-14. **Scope:** pre-deploy review only. **No approval, merge or Netlify deploy implied.** All seven PRs were observed OPEN, DRAFT and mergeable with their individual three GitHub workflows successful at the checked exact HEAD. All seven had **zero submitted GitHub reviews** at inspection. Individual green CI is not an integrated-branch CI result.

## Review order and source claims

| PR | Exact reviewed HEAD | Changed material | Independent reviewer question | Gate |
| --- | --- | --- | --- | --- |
| [#96](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/96) | `0e4de7efb47edb13c5f923db5c52ba87acc81119` | Article 14 EN/PT-BR/ES | Is optional SDK idempotency distinguished from actual wallet retry and custody guarantees? | Editorial source, three locales |
| [#97](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/97) | `a0ea37451518cfcfb2d025c0c4453c7482fa54c2` | Articles 36/37 PT-BR/ES | Do both translations preserve independent-proof and rail-scoped recovery limitations? | Editorial source, native review |
| [#98](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/98) | `8ae03906dcf54cabf4b57e46a3c11ea9fdee3cfb` | Articles 36/37 EN | Does article 36 avoid universal Byzantine guarantees and article 37 avoid cross-rail crash safety claims? | Editorial source |
| [#99](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/99) | `a8ebe46c5bbb44cee94d34ce832a18dab835d4a3` | Article 35 EN/PT-BR/ES | Are WebSocket token/log exposure and per-instance versus distributed rate limits qualified? | Security claims, native review |
| [#100](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/100) | `1575719b2a0e7abec93d98a7fbba6f127b0ec9a1` | Article 39 EN/PT-BR/ES | Are descriptor type checks distinguished from proven durable upload/quota enforcement? | Security claims, native review |
| [#101](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/101) | `eb55fb22204f17bed82c1a181e7f3652b9f266a1` | Release acceptance ledger | Does the 16% current-release score distinguish historical evidence and Day 0 editorial acceptance? | Governance |
| [#102](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/102) | `d8634557e89bba2ed215988ed37b5ef21596405c` | G5 material triage matrix | Are all material findings acknowledged with owner, disposition and evidence? | G5 review, **NOT VERIFIED** |

## Technical source review boundaries

The English drafts for articles 14, 35, 36, 37 and 39 were sampled at the exact PR HEADs. They explicitly distinguish historical source inspection from current-head tests and operational proof. This is a **targeted reading**, not exhaustive source-to-claim certification and not independent PT-BR/ES native-language signoff. Historical Sails Protocol evidence anchor is `be6d3bc2ddfc384cfafa4276e01b8aacc096d421`; a fresh authoritative Protocol HEAD check is still required before any current-maturity claim.

## Single-deployment integration plan

1. Obtain explicit CTO technical review and owner authorization for the **content and governance changes**, including any corrections; verify each PR's exact-head CI again if changed.
2. Determine safe merge order and resolve any shared-file changes; run **new integrated-main exact-head CI**. Individual PR success does not prove the combined release.
3. Keep Netlify publication disabled/paused until the owner authorizes one consolidated deployment and credits are available. A GitHub merge is not automatically safe if Netlify is connected to `main`; confirm auto-build/deploy behavior **before** merging.
4. On authorized deployment, record exact production SHA, live EN/PT-BR/ES routes, canonical/hreflang, sitemap/robots, RSS/Atom, assets, responsive screenshots, keyboard accessibility and browser errors. These cannot be signed off from isolated CI alone.
5. Maintain separate scores: release readiness 16% as last accepted snapshot, Day 0 editorial signoffs 0/144 in historical register. Update only against immutable reviewed evidence.

## Review decision template

For each PR record: reviewer; UTC date; reviewed exact SHA; **APPROVED / CHANGES REQUESTED / BLOCKED**; claim or language issues; linked test/source evidence; approval to merge **separate** from approval to deploy. Do not treat this checklist as a review submission.

**NO MATERIAL FINDING UNDER THE RUG.**

## Follow-up source review and updated exact-head evidence | 2026-10-14

The five editorial PRs #96–#100 received focused, source-bounded edits after this bundle's initial snapshot. The table above now records their **new exact HEADs**, checked against GitHub PR metadata. At each updated HEAD, the three individual workflows (Validate Blog, isolated preview build, browser accessibility audit) were observed **3/3 PASS**. This is individual branch CI, not integrated release acceptance.

| Article / PR | Specific reviewed boundary and resulting correction | Evidence status |
| --- | --- | --- |
| 14 / #96 | SDK `SailsOpenP2PModule.trade(offerId, amount, idempotencyKey?)` forwards an optional key; reuse is a scoped server contract, not a Wallet integration or exactly-once settlement claim | EN/PT-BR/ES edited; primary `packages/sails-sdk/src/modules/openp2p.ts` inspected; runtime test not executed |
| 35 / #99 | Historical threat ledger marks process-local per-participant WS message limiter resolved 2026-08-15; distributed enforcement unproven; full-session query-token exposure is a separate residual | EN/PT-BR/ES edited; primary `docs/THREAT_MODEL.md` inspected; deployed state not verified |
| 36 / #97, #98 | Outcome → DestinationBinding independent-verification gap includes MULTISIG; no universal Byzantine-resistance assertion | EN/PT-BR/ES reviewed against `docs/DURABLE_PROTOCOL_TRUTH_EVIDENCE.md`; no material semantic mismatch found; no change needed |
| 37 / #97, #98 | MULTISIG-scoped recovery must not be confused with correspondence/divergence detection or other rails' crash recovery | EN/PT-BR/ES edited; primary `docs/RECOVERY_RECONCILIATION_CONFORMANCE_EVIDENCE.md` inspected; no runtime test executed |
| 39 / #100 | Descriptor schema preserves fields; service owns pointer exclusivity; evidence provider handles bytes/hash, not proof authority or durable quotas | EN/PT-BR/ES edited; primary `evidence-descriptor-schema.ts` and `evidence-provider.ts` inspected; no quota tests executed |

**Primary Protocol revision:** `be6d3bc2ddfc384cfafa4276e01b8aacc096d421` was compared to Protocol `main` and found identical at the 2026-10-14 checkpoint. That is revision currency *at inspection*, not perpetual freshness or execution proof. The cross-project WDK/NODE_ENV review is tracked separately in Protocol [#474](https://github.com/sails-protocol/Sails-Protocol/issues/474) and Blog [#106](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/106).

**Still blocked:** independent native-language review, full claim-to-line technical acceptance, integrated branch CI, G5/G6/G7 and owner merge/deploy authorization. No Day 0 edition is accepted by this bundle. Formal readiness stays **16%**.

## Release review addendum: published Season 02 localization and G5 | 2026-10-14

The seven-PR table above is a **historical snapshot**, not the current HEAD for #102. Rechecked GitHub DRAFT PRs and exact-head CI:

| PR | Current reviewed HEAD | Automated checks | Reviewer / production status |
| --- | --- | --- | --- |
| [#102](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/102) | `138739685acae9f4b2e42d0a6e95cda5e5231e95` | 3/3 PASS (Validate Blog, isolated preview, browser accessibility) | G5 review pending; later documentation-only commit `de99c265f33afd5a483dcdb8b87d82ed946f8453` was observed 2/3 PASS and accessibility in progress at checkpoint |
| [#108](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/108) | `42e63ee27ad5de894daaa4f8e4c734e9e474f116` | 3/3 PASS | Article 03 PT-BR/ES frontmatter descriptions repaired; native review and merge pending |
| [#109](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/109) | `f918ec9103a3baa29b237d4a60b91bbefbc6137d` | 3/3 PASS | Article 08 PT-BR/ES Mermaid labels localized; original graph semantics retained; native review and merge pending |

**Content inspection coverage:** nine published Season 02 articles in EN/PT-BR/ES = 27 source files inspected for metadata, sources and high-risk claim boundaries; targeted first-party checks covered FinCEN, CFTC Phantom, Van Loon, Coinext, Bity, Bitso and Bybit. This does **not** constitute a complete legal review, translation signoff or release acceptance. The Day 0 **48 topics x three locales** are a separate editorial denominator. Source review details, explicit caveats and F-006 crosswalk reside in #102.

**Required before 100%:** review and authorized merge of all relevant DRAFT PRs; integrated current-main CI; verified Netlify production SHA, public routes and browser/SEO/a11y checks; complete material findings closure (G5); owner/editor acceptance of 144/144 Day 0 editions through G1–G7. **Current operational 16%, editorial 0/144**. Do not merge, trigger deploy or upgrade Netlify credits without explicit authorization.

## Pre-integration conflict inventory | 2026-10-14

Read current GitHub PR metadata and full changed-file lists for **all 14 open DRAFT PRs #96–#109**. The combined change set touches **27 unique file paths; zero exact-path overlaps** among these PRs at the inspected HEADs. This is a path-level conflict inventory, **not** proof that combined code/Markdown builds or that no semantic dependencies exist.

| Suggested review/merge batch, only after explicit authorization | PRs | Files / dependency rationale |
| --- | --- | --- |
| A. Governance and evidence | #101, #102, #103, #104, #105, #106 | Separate ledger, triage, review bundle, multilingual review, Day 0 backlog, and Protocol source audit files. Reconcile cross-links and the historical vs current readiness ledger before approval |
| B. Draft source corrections | #96, #97, #98, #99, #100, #107 | Distinct Day 0 editorial-draft paths. Obtain technical claim and native-language signoffs; never count corrections as G1–G7 approvals |
| C. Published locale quality | #108, #109 | Distinct localized article 03 metadata and article 08 Mermaid labels. Both 3/3 exact-head CI PASS, still require native review and release authorization |

**Immutable snapshot:** #96 `0e4de7e`; #97 `a0ea374`; #98 `8ae0390`; #99 `a8ebe46`; #100 `1575719`; #101 `eb55fb2`; #102 `de99c26`; #103 previous head `c1b8a64` (this bundle will advance with this addendum); #104 `d276e6c`; #105 `72044bd`; #106 `c65fdad`; #107 `fda6beb`; #108 `42e63ee`; #109 `f918ec9`. All were open DRAFT, GitHub marked individually mergeable at inspection; this is **not owner approval**. The #102 latest head was independently 3/3 CI PASS; #103 `c1b8a64` was 2/3 PASS with browser accessibility still running at last check.

**Release gate:** no merge while Netlify auto-deploy/credit behavior and explicit owner authorization remain unresolved. After authorized integration, re-run exact combined-main CI, confirm content, then deploy once on approved billing and run live I3–I5/U1–U5/L1–L5/E1–E5. G5 closes only when material findings have disposition and verification, not because filenames do not overlap. **16% current operational; 0/144 Day 0 approvals**.

## Integrated batch verification | 2026-10-14 | immutable CI checkpoint

This addendum **supersedes the prior pre-integration planning table as the current integration status**, while preserving the earlier historical inventory. Three DRAFT batch PRs were created from the same `main` baseline `fbba5cd9176cf973e826d98a130cd924e3ed0799`:

| Batch | PR | Source PRs integrated | Changed paths | Exact-head workflow evidence |
| --- | --- | --- | ---: | --- |
| Published Season 02 localization | [#112](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/112) `13ede3b7bbed4ebd02689c0bd659aaa273528cc8` | #108–#111 | 6 | 3/3 PASS |
| Governance and evidence | [#113](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/113) `33a48593da6f2ccf9b7594db677df1172e26d15b` | #101–#106 | 6 | 3/3 PASS |
| Day 0 draft claim boundaries | [#114](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/114) `fde6f689d968c2a175a64b6d4ce7ae63f63d35d9` | #96–#100 and #107 | 17 | 3/3 PASS |
| Combined integration | [#115](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/115) `2c1ef3e60cc4db9053c73a1a4e01b8201ba43180` | #112 + #113 + #114 | **29 unique** | **3/3 PASS** |

For each PASS, GitHub Actions reported **Validate Blog**, **Build isolated blog preview artifact**, and **Browser accessibility audit** completed successfully on the listed exact commit. The 29 changed paths have **zero path overlaps across the three batch PRs**. The two article 08 files overlapping in original #109/#111 were intentionally reconciled **inside** #112; no claim of zero overlap among the original 16 source PRs is made.

**What this proves:** the combined branch has an exact-head successful automated validation, isolated preview build and workflow accessibility audit. **What it does not prove:** native-language independent signoff, complete source-to-claim CTO approval, production deployment, live route/SEO/browser verification, G5 material finding closure, or 144/144 Day 0 editorial acceptance. All source PRs and batches remain DRAFT; selecting #115 as the single authorized integration route would avoid applying individual batches twice. Reviewers must recheck the latest HEAD and current `main` before any approved merge.

**Decision pending:** CTO/owner chooses integration route and signs off; editors approve per-edition claims/translations; owner separately authorizes merge and Netlify production after credit constraints resolve. Operational acceptance **16%**; Day 0 editorial acceptance **0/144**. No merge or deploy was performed. **NO MATERIAL FINDING UNDER THE RUG.**
