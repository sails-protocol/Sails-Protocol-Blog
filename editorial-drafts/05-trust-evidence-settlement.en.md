# Trust, Evidence and Settlement in P2P Markets

*Editorial draft. Not approved for publication.*

## A receipt is not the whole truth

A buyer uploads a payment receipt. Does that prove the seller received money? Not necessarily. It may be genuine but refer to a different transaction. It may be incomplete. The payment may still be pending. Evidence helps participants and reviewers reason about a dispute, but evidence is not automatically an authoritative statement about an external payment system.

## Identity, provenance and limits

Before asking whether evidence is convincing, a system must know who submitted it, which trade or proof it belongs to and which limits apply. We have been defining explicit resource boundaries for evidence handling and treating authenticated provenance as part of the model. This is as much about resisting abuse and unexpected cost as it is about preserving a useful audit trail.

## Settlement requires an authority model

A trade may involve an on-chain transfer, a wallet, a payment provider or a bank transfer. These systems do not share the same finality rules. The coordination layer therefore needs to distinguish an observed event from an authorized economic transition. We are working through the conditions for final states, retries and crash recovery, including how to avoid applying the same effect twice. None of this means the protocol controls external funds or can reverse external payments.

## Why we insist on failure tests

The strongest claims about a financial workflow should survive uncomfortable questions. What if two completion requests race? What if the service restarts between recording a claim and applying its effect? What if a provider is unavailable? Our engineering reviews use these scenarios to demand evidence rather than rely on optimistic diagrams. Where a scenario remains unresolved, it stays unresolved in our public explanations too.

## Source-backed boundary and next test

A signed evidence digest attributes bytes to a registered key, not a completed bank payment.

**Failure to avoid:** presenting this inspected boundary as a deployed end-to-end guarantee. **Next verification:** exact-head behavior, integration tests and operational evidence. Source inspection only; editorial and CTO approval pending.

- [proof.service.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/proof.service.ts)

*Technical and factual review pending. Do not publish before explicit approval.*
