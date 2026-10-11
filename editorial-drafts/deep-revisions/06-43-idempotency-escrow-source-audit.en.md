# Idempotency and Escrow: What the Code Actually Guarantees

*Source-backed editorial companion for articles 06, 08, 37 and 43. Draft only; no publication approval.*

## A request that fails after succeeding

Imagine a buyer accepting an offer. The trade row is committed, but a later event emission throws and the HTTP caller receives an error. Retrying the same request is not necessarily a new business intention. Treating the error as proof of no side effect can create a second trade.

In the inspected Sails source, `TradeService.createTrade()` calls `withIdempotency()` with the scope `openp2p.trade.create`, the accepting participant, an offer-and-amount payload and an **optional** client-provided idempotency key. A retry without that key may create another trade. This is a bounded guarantee, not universal exactly-once semantics.

The common idempotency implementation explicitly documents previous failure modes: completion bookkeeping failing after a successful write; two callers racing to reclaim a failed claim; and post-persistence exceptions being mistaken for failed persistence. Its design separates durable persistence from post-persist actions and includes atomic claim/reclaim and UNKNOWN-outcome handling. These statements describe the source, not a fresh production test.

## An escrow is not one custody model

The inspected WDK EVM reference provider declares that one server-held seed controls both treasury and trade escrow subaccounts. It labels itself **production-ineligible**. A feature-flagged two-person application approval does not turn that into on-chain multisig.

The Bitcoin MULTISIG provider instead describes client-held buyer and seller keys, a server-held arbiter key, and unsigned PSBT collection of independent client signatures. The Arkade-based LIGHTNING_HODL provider describes a related client-signature flow but explicitly states testnet/mutinynet scope. These are different trust boundaries and verification environments.

## Design consequence

A useful protocol article must always name the operation, provider, key holder, signing threshold, environment and verification evidence. 'Non-custodial', 'idempotent' and 'exactly once' are not global labels that can be inferred from a module name.

## Next question

Which exact provider, configuration and end-to-end evidence are authorized for Day 0? This remains a CTO and release gate, not a claim answered by this article.

## Source ledger

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/common/idempotency.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/wdk-settlement.provider.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/multisig.provider.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/lightning-hodl.provider.ts

**Maturity:** source-inspected, runtime verification pending. CTO review pending.
