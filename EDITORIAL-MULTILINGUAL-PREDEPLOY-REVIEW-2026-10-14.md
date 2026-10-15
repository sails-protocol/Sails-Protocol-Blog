# Pre-deploy multilingual editorial review | Articles 14, 35, 36, 37, 39

**Review date:** 2026-10-14 UTC. **Reviewer:** preliminary AI-assisted editorial reading, **not** a native-language independent approval or CTO source audit. **Disposition:** preliminary semantic checks recorded; G1–G7 and publication signoff remain OPEN.

## Exact evidence scope

| Article | EN PR / HEAD | PT-BR and ES PR / HEAD | Preliminary semantic observation | Outstanding acceptance |
| --- | --- | --- | --- | --- |
| 14, Wallet SDK integration | #96 `14e3462b6945f2b676e287f51f0bd98d40deaec7` | #96, same HEAD | Both distinguish Satsails Wallet from Sails Protocol, SDK coordination from custody, conceptual integration from deployed support | SDK API current-head verification, retry test, native-language review |
| 35, P2P threat model | #99 `25c9634edf4004e2c4726be93980a12584878208` | #99, same HEAD | Both preserve token-in-URL exposure and instance-scoped versus distributed WebSocket rate-limit boundaries | Current-head mitigation evidence, native-language review |
| 36, Byzantine/malicious nodes | #98 `8dbfb68dbf61eda84be7ba9f3ba7616cb9b5a57f` | #97 `a1746cc15dab0885b2b559581dde847f83efa5f0` | Both preserve unproven independent Authority → Outcome → DestinationBinding verification and avoid universal Byzantine claims | Current-head proof/export verification, native-language review |
| 37, Restart/replay/recovery | #98, same HEAD | #97, same HEAD | Both preserve MULTISIG-scoped M9 evidence and missing documented recovery for LIGHTNING_HODL, WDK_USDT_EVM and SAFE_GUARD_EVM | Current-head rail-specific conformance evidence, native-language review |
| 39, Resource exhaustion/evidence abuse | #100 `a78943e1f188d6b991bdbe4f17f9a5abe611d829` | #100, same HEAD | Both distinguish `externalReference: true` descriptor validation from durable cumulative quota and upload enforcement | Current-head bounds/side-effect tests, native-language review |

### Review method and limitations

Read the PT-BR and ES text of each of these five topics from the PR-specific exact HEAD and compared central technical boundaries to the EN draft. All ten translations contain immutable historical Sails Protocol source references (one per edition for articles 14, 35, 36, 37; two per edition for 39). This is a **targeted semantic inspection**, not full line-by-line proofreading, source-to-claim verification, complete native copyedit or production browser testing. Do not mark any of these ten editions as editorially accepted.

The source evidence currently cited in the drafts is anchored to historical Protocol SHA `be6d3bc2ddfc384cfafa4276e01b8aacc096d421`; this does **not** establish latest Protocol HEAD maturity. A separate reviewer must revalidate claims against authoritative current code and decisions before publication.

## Release handling

- Cross-reference the [consolidated review bundle](./BLOG-RELEASE-PR96-102-CTO-REVIEW-BUNDLE.md) after its PR is reviewed and merged; this file's link is forward-looking until then.
- Keep Netlify paused. Do not merge draft PRs merely to get integrated CI if the GitHub main branch triggers Netlify automatically.
- Require exact SHA, reviewer, date, findings, explicit editorial acceptance and separate owner merge/deploy authorization.
- Historical Day 0 editorial acceptance remains **0/144** until approvals are evidenced; the operational release score remains **16%** at last accepted checkpoint.

**NO MATERIAL FINDING UNDER THE RUG.**

## Cross-project source maturity and review dependency (2026-10-14)

A later source inspection confirmed the historical Protocol SHA `be6d3bc2ddfc384cfafa4276e01b8aacc096d421` was **identical to `main` at the time of comparison**. This upgrades the *revision currency at that checkpoint*, **not** the independent claim-to-line audit, real Postgres/provider runtime proof, native-language editorial approval or release acceptance. Do not continue describing the pin as necessarily stale without a new comparison; equally do not claim it is still current after subsequent commits without rechecking.

For articles 36/37, preserve the separate EN (#98) and PT-BR/ES (#97) review heads until integrated compatibility and semantic parity are verified together. For custody and settlement statements in related articles, the [Protocol Gatekeeper issue #474](https://github.com/sails-protocol/Sails-Protocol/issues/474) tracks WDK production isolation tests; [Blog PR #106](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/106) holds the evolving, source-bounded editorial assessment. Neither issue closure nor CI success may be inferred here. Publication remains blocked.

## Article 36/37 three-locale source cross-check (2026-10-14)

Inspected the exact PR-specific article files at #98 EN HEAD `8dbfb68dbf61eda84be7ba9f3ba7616cb9b5a57f` and #97 PT-BR/ES HEAD `a1746cc15dab0885b2b559581dde847f83efa5f0`, and opened the **actual primary Protocol documents** at pinned SHA `be6d3bc2ddfc384cfafa4276e01b8aacc096d421`:

- **36:** `docs/DURABLE_PROTOCOL_TRUTH_EVIDENCE.md` explicitly locates the independent-verifiability stop at `Outcome → DestinationBinding`, including MULTISIG. EN/PT-BR/ES retain that limitation, distinguish evidence gap from exploited attack, and avoid a universal Byzantine-resistance claim. **Targeted semantic/source consistency: no material mismatch found.** The report also records stale Project bookkeeping about TimestampAnchor, which is separate from article 36's main claim; do not extrapolate that drift into a missing anchor implementation.
- **37:** `docs/RECOVERY_RECONCILIATION_CONFORMANCE_EVIDENCE.md` explicitly describes MULTISIG-only C4/M9 recovery coverage and no automated recovery path for LIGHTNING_HODL, WDK_USDT_EVM, SAFE_GUARD_EVM. EN/PT-BR/ES all preserve the crucial distinction between *crash recovery* and *divergence/correspondence detection*, although that second distinction is not spelled out as a named contrast in each article. **Targeted semantic/source consistency: no material mismatch found.** This is a scoped historical code/documentary observation, not executed conformance verification.

**Editorial improvement candidate, not a publication blocker proven here:** make the recovery-vs-correspondence distinction explicit in all three article 37 versions before G1 approval. Do not rewrite article 36 without a concrete defect. **Unresolved:** native-speaker independent copyedit, source-line signoff, exact-head runtime tests, integrated preview, CTO/owner approval. No G1/G2/G4 acceptance claimed.

## Article 37 candidate recheck and Season 02 localization batch | 2026-10-14

The previously proposed recovery-versus-correspondence editorial improvement **already exists** in all three current article 37 draft HEADs: EN #98 `8ae03906dcf54cabf4b57e46a3c11ea9fdee3cfb`, PT-BR/ES #97 `a0ea37451518cfcfb2d025c0c4453c7482fa54c2`. Each includes an explicit **Additional boundary / Limite adicional / Límite adicional** paragraph distinguishing divergence/correspondence detection from recovery after interruption. **No further edit is warranted** on this point; native review and runtime proof remain outstanding.

The 18 localized published Season 02 source files (nine topics, PT-BR and ES) were scanned on `main` for literal-truncated frontmatter descriptions and Mermaid language residue. Specific remediations are isolated in DRAFT PRs:

| Finding | PR | Scope | Release state |
| --- | --- | --- | --- |
| Article 03 descriptions end with ellipsis | [#108](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/108) | Two frontmatter descriptions | 3/3 exact-head CI PASS; not merged |
| Article 08 Mermaid labels in English | [#109](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/109) | Two Mermaid diagrams | 3/3 exact-head CI PASS; not merged |
| Article 07 Mermaid edges `Success` / `Conflict` untranslated | [#110](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/110) | PT-BR `Sucesso` / `Conflito`; ES `Éxito` / `Conflicto` | 2/3 CI PASS and browser accessibility in progress at checkpoint; not merged |
| Article 08 PT-BR/ES descriptions retain English slogan | [#111](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/111) | Two SEO descriptions, no body changes | 2/3 CI PASS and browser accessibility in progress at checkpoint; not merged |

This is a **targeted metadata/diagram scan**, not exhaustive proofreading of 18 localized articles, native review or acceptance. PR #109 and #111 touch the same two article 08 paths, but different content spans; integrate/rebase and run combined CI after authorization. Earlier 14-PR zero-overlap inventory did **not** include #110/#111. No merge/deploy or G1–G7 approval implied. Operational 16%; Day 0 0/144.

## Integrated multilingual checkpoint | 2026-10-14

The older 2/3 workflow statuses and uncombined article 08 same-path warning above are historical. DRAFT [#112](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/112) `13ede3b7bbed4ebd02689c0bd659aaa273528cc8` combines PT-BR/ES article 03 complete descriptions, article 07 translated Mermaid edge labels, and article 08 translated Mermaid labels plus localized descriptions. Its exact-head Validate Blog, isolated preview build, and browser accessibility workflows are **3/3 PASS**. The article 08 overlap is resolved in the #112 combined files, without claiming native translation signoff.

The separate Day 0 draft claim-boundary corrections are integrated in DRAFT [#114](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/114) `fde6f689d968c2a175a64b6d4ce7ae63f63d35d9`, **3/3 PASS**. DRAFT [#115](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/115) originally passed combined CI **3/3** at `2c1ef3e60cc4db9053c73a1a4e01b8201ba43180`; subsequent documentation commits require new exact-head confirmation. This proves an automated integration check, not independent native editorial review or claim-to-source CTO acceptance. All drafts remain unmerged. **G1–G7 and production gates remain open; operational 16%, Day 0 0/144.**
