# Wave A: Provider Custody and Idempotency Source Matrix

**2026-10-10.** Targeted source inspection of `sails-protocol/Sails-Protocol` default branch; **not** a deployment inspection or test run. Every statement below is limited to the referenced source file. Do not generalize provider capabilities to the protocol as a whole.

## Custody matrix

| Provider | Source-declared authority and signing | Source-declared limitations | Editorial verdict |
| --- | --- | --- | --- |
| `WDK_USDT_EVM` | One server-held `WDK_SEED_PHRASE` controls treasury and per-trade subaccounts; service signs real on-chain transfers | Explicit `server-custodial-reference-implementation`, `PRODUCTION-INELIGIBLE` | Never label non-custodial; describe as reference implementation |
| `MULTISIG` | Buyer and seller generate client-held keys; server holds arbiter key; unsigned PSBT and client signature collection | Exact production funding, chain environment and release proof require separate evidence | Describe specific 2-of-3 Bitcoin custody model, not a universal platform guarantee |
| `LIGHTNING_HODL` (Arkade) | Buyer and seller client-held keys, server arbiter key; client-signed Ark transaction bundle | Source states testnet/mutinynet only; live funded-VTXO verification cannot be assumed | Describe as Arkade-based provider, not ordinary Lightning hold invoice or production-proven |

### Immutable source file links

- [WDK custody and eligibility](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/wdk-settlement.provider.ts)
- [MULTISIG custody and client signature collection](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/multisig.provider.ts)
- [Arkade-based LIGHTNING_HODL custody and environment](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/lightning-hodl.provider.ts)
- [Escrow service and custody model projection](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow.service.ts)
- [RFC-015 maker-checker is not multisig](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-015-dual-authorization-escrow-release.md)

The provider comments are primary implementation disclosures. They are **not** proof that each branch and external network passed the latest end-to-end tests. Also inspect the exact active provider registry and deployment configuration before claiming a default.

## Idempotency matrix, first operation

| Operation | Source | Behavior and limitation |
| --- | --- | --- |
| `TradeService.createTrade()` | [trade.service.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts) | Calls `withIdempotency` with scope `openp2p.trade.create`, `counterpartyId` and optional `idempotencyKey`; omitted key can permit duplicate trade creation on retry |
| Common mechanism | [idempotency.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/common/idempotency.ts) | Distinguishes durable persistence and post-persist work; documents UNKNOWN outcomes and atomic reclaim; not universal when caller omits key |

**Follow-up:** trace HTTP route parsing and SDK client forwarding, `createOffer` and `submitEvidence` independently. This matrix does not claim full API coverage.

## Required edits

- Article 06: use `createTrade` as the concrete opt-in idempotency example.
- Article 08: illustrate persistence success followed by event emission or response failure, avoiding blanket exactly-once promises.
- Article 37 and 43: compare app-layer maker-checker, WDK reference, Bitcoin multisig and Arkade without conflating signing control.
- Article 47: distinguish protocol self-custody design goal from individual reference provider implementation.

## Open CTO questions

1. Which provider types are authorized for Day 0 production and in which environments?
2. What is the current feature-flag posture for dual approval and escrow routing?
3. Which exact-head CI / real Postgres / funded external-network tests qualify as verified evidence?
4. What language is approved for non-custodial guarantees by rail and application?

**NO MATERIAL FINDING UNDER THE RUG.**
