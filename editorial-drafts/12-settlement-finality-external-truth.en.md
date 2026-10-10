# Settlement, Finality and External Payment Truth

*Editorial draft. Not approved for publication.*

## The uncomfortable question

A buyer says a transfer is complete. A seller says nothing arrived. A payment provider reports a pending status. Which statement should a P2P coordination system treat as final?

## Where assumptions break

There is no single answer that applies to every payment rail. A bank transfer, a blockchain transaction and an internal wallet transfer have different confirmation, reversal and failure properties. Even within one rail, a provider notification can be delayed or wrong. A protocol must not turn an observation into an irreversible economic claim without an explicit authority model.

## Defining authority

That is why we distinguish external signals, authorized decisions and committed state transitions. A receipt is evidence. A provider callback is an observation whose trust level depends on its source and verification. A completed trade is an economic state that must satisfy the workflow's own rules. These concepts may interact, but they are not synonyms.

## What we can responsibly claim

Our Sails engineering work addresses the authority of payment accounts, trade binding, escrow-related transitions and exactly-once local effects. These decisions require evidence at specific persistence and adapter boundaries. A locally atomic transaction does not make an external bank payment irreversible. Any public guarantee must identify the rail, the operation and its verified scope.

## What we need to test

The practical lesson is to keep uncertainty visible. A pending payment should remain pending until the relevant conditions are satisfied. A disputed signal should not silently become a final state. And a failed integration should have a recovery path that does not manufacture certainty.

## Conceptual diagram

```mermaid
flowchart TD
 A[External payment signal] --> B[Verify source and context]
 B --> C{Authorized transition?}
 C -->|No or uncertain| D[Remain pending or dispute]
 C -->|Yes| E[Commit local economic state]
```

The diagram is conceptual and does not establish implemented security guarantees.

*Pending: immutable source references, threat model, verification evidence and CTO approval.*

## Source-backed settlement boundary

The escrow registry maps BTC to MULTISIG, LN_BTC to Arkade-based LIGHTNING_HODL, and USDT_ERC20 to the WDK EVM reference provider. These mappings describe implementation selection, not verified production finality. The WDK provider declares a single server-held seed and production-ineligible status; the Arkade provider documents testnet-only scope. Bitcoin multisig describes external funding observation and separate signature collection. The protocol must distinguish a request accepted by its database, a provider-reported transaction, chain confirmation and irreversible economic settlement.

**Failure scenario:** a provider reports funding but a reorganization or incomplete receipt invalidates the assumed lock. The source documents funding/reorg mechanisms for specific rails, not a blanket guarantee. Require exact network, confirmations, receipts, restart tests and release authority before saying 'final'.

### Primary source / maturity

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/wdk-settlement.provider.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/lightning-hodl.provider.ts

*Source inspection only; no new live test, CTO approval or publication authorization.*
