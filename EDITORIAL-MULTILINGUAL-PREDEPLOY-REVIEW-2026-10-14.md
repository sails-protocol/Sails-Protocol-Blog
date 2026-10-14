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
