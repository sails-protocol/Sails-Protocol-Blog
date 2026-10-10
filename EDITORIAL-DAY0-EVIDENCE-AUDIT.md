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

## Canonical article corrections (2026-10-10)

Source-grounded additions now exist in the **canonical numbered drafts**, not just companion documents: articles **06, 08, 43, 44 and 46**, each in EN/PT-BR/ES (**15 language files**). Their scope is source inspection against the pinned Sails Protocol commit, not full CTO acceptance or runtime verification. They distinguish optional idempotency keys, durable persistence from post-persist effects, custody by provider, fee-capable rails and asset-to-escrow mappings. No numbered article is marked G2 PASS on this basis alone; independent editorial and technical review remains required. Browser Gate status is separately recorded in [BROWSER-GATE-HANDOFF-2026-10-10.md](./BROWSER-GATE-HANDOFF-2026-10-10.md) and remains incomplete.

## Additional canonical source-backed edits (2026-10-10)

Added article **07** (manual state-transition authority and concurrency caveat), **09** (key control vs trade authorization and RFC-001 delegated agents), **12** (provider-specific settlement/finality), **10** (OpenProof signed media vs claim authority, storage boundaries), and **42** (PIX/DePix evidence vs payment truth), each in EN/PT-BR/ES. Combined with articles 06, 08, 43, 44, 46, this is **10 distinct articles / 30 canonical language editions with source-backed corrections**, not 30 verified/approved articles. The 48-topic/144-file draft baseline remains unchanged. Open issues: source-specific exact-head CI, real provider/payment authority, limits/quota enforcement, editorial depth, browser acceptance and CTO/owner approval.

## Wave A conformance residuals and canonical updates (2026-10-10)

Articles **36, 37, 40** now contain source-linked conformance caveats in EN/PT-BR/ES. Running total: **13 unique numbered articles / 39 canonical language editions with source-backed corrections** (out of 48/144); **zero articles approved**. CTO-facing material handoff: [EDITORIAL-CTO-MATERIAL-RESIDUALS-2026-10-10.md](./EDITORIAL-CTO-MATERIAL-RESIDUALS-2026-10-10.md). Open residuals: MULTISIG-scoped recovery vs other rails; independently verifiable Authority → Outcome → DestinationBinding; evidence hierarchy. These are observations from inspected code and historical evidence records, not current-head execution proof. Browser Gate remains incomplete and SHA-specific.

## Wave A threat, resource and compatibility correction (2026-10-10)

Source-backed additions were made to canonical articles **13, 35, 39, 48** in EN/PT-BR/ES (**12 more editions**). Cumulative coverage: **17 distinct articles / 51 canonical language editions** containing bounded technical corrections, not 51 completed G1/G2 acceptances. Sources include the threat model, durable truth residuals, provider-substitution conformance, condition-algebra conformance and dispute evidence-descriptor schema. A current-HEAD execution sweep is still required before claiming remediation of any historically recorded residual. No merge, site change or release authorization.

## Narrative integration pass (2026-10-10)

Moved previously appended source-backed sections ahead of the reading transition in canonical articles **06, 07, 08** across EN/PT-BR/ES (**9 editions**). This resolves the specific ordering defect in those drafts; it is **not** a complete substantive G1 rewrite or independent quality acceptance. The other source-backed articles remain queued for structure, repetition and source-maturity review. No runtime tests or Browser Gate were executed in this pass.

## Citation hygiene pass (2026-10-10)

Canonical articles **09, 10, 12** EN/PT-BR/ES now use descriptive Markdown links to immutable Protocol source paths instead of raw URLs, with consistent spacing. Removed obsolete source-pending placeholders in seven files where evidence references were already present. **This is citation/format hygiene, not deep G1 acceptance.** Existing source-backed coverage remains 17 articles / 51 language editions; no new source verification or browser test was performed.

## Deep narrative pass — article 09 (2026-10-10)

Canonical article 09 EN/PT-BR/ES now contains an integrated three-boundary explanation (authentication, trade membership authorization, economic transition validity), an adversarial valid-signature/wrong-trade case and explicit delegated-agent evidence limits. Source references remain pinned. This is a substantive editorial improvement, **not** G1 or G2 acceptance. Browser Gate and CTO review remain open.

## Deep narrative pass — articles 10 and 12 (2026-10-10)

Canonical article **10** EN/PT-BR/ES now explains signed-byte provenance versus independent payment truth, wrong-claim adversarial attachment, and the gap between resource policy and enforced bounds. Canonical article **12** EN/PT-BR/ES now separates database commits, provider reports, chain observations and off-chain payment finality, with a funding/reorg failure case and explicit per-rail limits. **6 editions** received substantive narrative additions. Prior coverage remains 17 articles / 51 source-backed language editions; these changes are not G1/G2 acceptance, exact-head runtime tests or CTO release authorization.

## Deep narrative pass — articles 35, 39, 48 (2026-10-10)

Substantive decision/failure narratives added to **9 canonical language editions** across articles **35** (threat enforcement versus catalog), **39** (resource exhaustion, provenance spoofing and zero-side-effect rejection) and **48** (property-scoped conformance versus universal compatibility). Historical security residuals are not asserted as current-HEAD failures. Pinned evidence scope preserved. This is editorial work, not G1/G2 acceptance, CI/browser execution or CTO publication authorization. Cumulative source-backed coverage remains **17 articles / 51 editions**.

## Wave A closure of source-backed corrections — 2026-10-10

Article **13** EN/PT-BR/ES received a substantive adversarial-provider authority/destination-binding narrative. Previously uncorrected Wave A articles **29** and **34** received pinned-source implementation boundaries, failure cases and test questions in all three languages (**6 new source-backed editions**). Cumulative source-backed correction coverage is now **19 distinct numbered articles / 57 canonical language editions** out of 48/144. This is *coverage of corrections*, not G1/G2 acceptance. The article 29 and 34 additions cite the historical pinned Protocol commit, not current-HEAD runtime proof. Browser Gate, CTO review and publication remain blocked; no merge.

## Correction pass — articles 06 and 08 (2026-10-10)

Six canonical editions received source-ledger localization, consistent maturity disclosures and removal of an accidental Spanish phrase from Portuguese. Article **06** EN/PT-BR/ES additionally replaced a broad claim that engineering reviews already include real database/concurrency/crash tests with the narrower source-inspected contract and an explicit requirement for exact-revision runtime evidence. This is a **claim-precision correction**, not G1/G2 approval. Source-backed coverage remains 19 articles / 57 editions; no tests or browser gate were executed.

## Correction pass — articles 07 and 08 (2026-10-10)

Article 07 EN/PT-BR/ES now uses localized source-maturity labels and descriptive immutable source links. Article 08 EN/PT-BR/ES replaces broad recovery-method prose with a narrower inspected-code claim: durable persistence versus post-persist work, requiring exact-revision restart and external reconciliation evidence before an exactly-once assertion. Six editions updated; source-backed coverage unchanged at 19/48 articles and 57/144 editions. No G1/G2 approval, browser verification or merge.
