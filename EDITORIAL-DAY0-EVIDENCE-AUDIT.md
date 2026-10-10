# Day 0 Evidence and Editorial Audit Register

**Created:** 2026-10-10. **Scope:** 48 topics × EN/PT-BR/ES. **Current status:** first drafts only, G0 inventory milestone reached, G1-G7 open. This is a working audit register, not a technical certification.

## Mandatory per-article record

| Field | Required evidence |
| --- | --- |
| Article / edition | 01-48, EN/PT-BR/ES, exact file path |
| Claims | Each nontrivial statement of implementation, security, economic policy, compatibility or operation |
| Source | Immutable code commit + path/lines, approved policy decision or primary external documentation |
| Maturity | Conceptual / approved design / implementation under validation / verified in scope / observed operational |
| Scenario | Concrete actors, action, failure and consequence |
| Tradeoff | Alternative and why chosen or rejected |
| Verification | Exact tests, real persistence/provider environment, date, SHA and limits |
| Language | Native editing and semantic parity in PT-BR/ES |
| Accessibility | Diagrams with text equivalents, responsive and keyboard checks |
| Approvals | Engineering reviewer, CTO decision, owner authorization |

## Audit queue, ordered by risk

**Wave A: economic and security assertions**: 06, 07, 08, 09, 10, 12, 13, 29, 34, 35, 36, 37, 39, 40, 42, 43, 44, 46, 48. Inspect authority, concurrency, replay, chargebacks, quotas, finality and fee policies. No unsupported guarantees.

**Wave B: architectural contracts and integration**: 03, 04, 14, 16, 18, 19, 21, 22, 23, 24, 30, 31, 32, 33, 38, 47. Confirm names, SDK APIs, module boundaries, key custody, identity/transport integration status and actual test topology.

**Wave C: positioning and prospective modules**: 01, 02, 05, 11, 15, 17, 20, 25, 26, 27, 28, 41, 45. Distinguish roadmap from shipped features and verify all cross-project descriptions.

Each number appears in exactly one wave. These are **queues, not completed audits**.

## Blocking findings as of creation

1. **No complete source-to-claim ledger.** The main Sails Protocol source repository and institutional decisions have not been fully retrieved and inspected in this editorial pass. All implementation claims require exact source audit.
2. **Insufficient article depth.** Many drafts are short conceptual summaries. They do not yet meet the substance, unique failure-case, alternative and evidence criteria.
3. **Translations not independently reviewed.** Existence of three files does not prove native-language quality.
4. **Site publication infrastructure incomplete.** Drafts are outside public routes; seven season outlines do not provide live article pages, localized routes, related reading, search metadata or complete navigation.
5. **No build/browser/accessibility verification in this pass.** Do not claim tests passed.
6. **Native WebMCP remains blocked** pending verified browser API availability and CTO decision; mocked API checks cannot substitute.
7. **Institutional author attribution unverified.** No named influences should be published until original GitHub records are retrieved.
8. **Transport/identity integration status unverified.** Spaces, Pubky, Nostr, Pear and Iroh require source classification, not assumed shipping.
9. **No CTO/owner publication approval.** Do not merge into main or deploy.

## Review workflow

For each wave, create article-specific claim tables and evidence citations; revise EN, reconcile PT-BR/ES; perform accessibility review; run site tests; submit to CTO and owner. Record every finding and resolution with date, reviewer, exact commit and test outputs.

**NO MATERIAL FINDING UNDER THE RUG.**

## First source-backed audit pass (2026-10-10)

See [EDITORIAL-AUDIT-WAVE-A-2026-10-10.md](./EDITORIAL-AUDIT-WAVE-A-2026-10-10.md) for findings A-01 through A-04 with immutable Sails source commit and primary file links. The correct main repository is `sails-protocol/Sails-Protocol`, not the previous historical `alan-schramm/Sails-Protocol` path. Material editorial custody/rail discrepancy remains open. These are targeted documentary findings, not runtime test results, and G2 remains open.

## Provider-level audit and editorial corrections (2026-10-10)

Read [EDITORIAL-AUDIT-CUSTODY-IDEMPOTENCY-MATRIX.md](./EDITORIAL-AUDIT-CUSTODY-IDEMPOTENCY-MATRIX.md). Source-inspected WDK EVM reference custody, Bitcoin MULTISIG client signature collection, Arkade LIGHTNING_HODL testnet scope, and optional `createTrade` idempotency key. Prepared three source-backed editorial companion drafts at `editorial-drafts/deep-revisions/06-43-idempotency-escrow-source-audit.{en,pt-BR,es}.md`. They are **not** approved replacements for the canonical articles. Material custody language and deployment-status verification remain open; no tests executed.

## Wave A continued: SDK/route propagation and rail gates (2026-10-10)

[EDITORIAL-AUDIT-WAVE-A-ROUTING-2026-10-10.md](./EDITORIAL-AUDIT-WAVE-A-ROUTING-2026-10-10.md) records source-backed findings A-05 through A-08: optional trade idempotency forwarded SDK → route → service; SAFE_GUARD_EVM as a fourth real provider with an explicit live-infrastructure verification limitation; asset-specific recommended escrow mappings; fee collection capable only for MULTISIG in the inspected registry; and dual-approval flag default false unless explicitly enabled. These are scoped code observations, not a deployment or end-to-end certification. G1/G2 remain open.
