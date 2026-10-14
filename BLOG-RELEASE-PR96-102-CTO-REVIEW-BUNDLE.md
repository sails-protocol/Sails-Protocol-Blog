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
