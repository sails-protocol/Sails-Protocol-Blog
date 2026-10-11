# OpenSettlement: Coordinating Different Payment Rails

*Editorial draft. Season 4. Not approved for publication.*

## The question

Can one coordination workflow settle a Bitcoin multisig trade, a Lightning-like hold and an EVM token transfer with the same finality rules? No. The rails expose different external authorities and failure windows.

## The decision and boundary

The inspected escrow provider registry includes MULTISIG, LIGHTNING_HODL, WDK_USDT_EVM and SAFE_GUARD_EVM paths. Their readiness is not equivalent: the WDK_USDT_EVM server-custodial path is not production eligible, and SAFE_GUARD_EVM needs live funded RPC and bundler evidence. The recorded recovery/reconciliation conformance covers named MULTISIG scenarios, not all rails. OpenSettlement coordination must preserve those distinctions rather than flatten them into a generic Settled flag.

## Failure and evidence

A provider times out after a broadcast. Retrying the same economic effect without reconciling can duplicate it; assuming failure can leave the trade stuck. The recovery evidence is bounded to its tested rail, while a cross-rail guarantee needs independent provider receipts, exact-head restart tests and destination-binding verification.

## Next question

Which rail can demonstrate finality, crash recovery and destination binding under real provider failure?

## Conceptual flow

```mermaid
flowchart LR
 A["Design intent"] --> B["Bounded integration"]
 B --> C["Independent verification"]
```

Text equivalent: the proposal progresses from design intent to a bounded integration and then to independent verification. This is not an implementation status report.

*Pending: source-of-truth verification, specific citations, editorial review and owner approval.*

## Inspected boundary, not production certification

The registry names different rails with different readiness and authority; not all are production eligible. **Failure:** confusing a documented design with deployed behavior. Exact-head integration and runtime verification remain required.

- [escrow-providers.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
