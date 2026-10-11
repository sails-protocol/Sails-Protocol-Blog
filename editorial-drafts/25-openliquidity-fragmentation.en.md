# OpenLiquidity: Connecting Fragmented P2P Markets

*Editorial draft. Season 4. Not approved for publication.*

## The question

Does showing offers from multiple venues mean liquidity is shared? No.

## Decision and boundary

OpenLiquidity is a coordination direction. Discovery and routing must respect asset, network, price, availability and permissions. Provider-substitution evidence covers selected invariants, not an operational cross-market book.

## Failure and evidence

A visible offer may be inaccessible to a wallet due to permissions or payment method. Do not advertise executable depth from visibility; require live counterparties and cross-client tests.

## Conceptual flow

```mermaid
flowchart LR
 A["Design intent"] --> B["Bounded integration"]
 B --> C["Independent verification"]
```

Text equivalent: the proposal progresses from design intent to a bounded integration and then to independent verification. This is not an implementation status report.

*Pending: source-of-truth verification, specific citations, editorial review and owner approval.*

## Source-backed scope

Selected provider substitution properties do not prove shared cross-rail liquidity. **Failure:** treating a source-level design or API as universal production readiness. Exact-head tests and approval remain outstanding.

- [PROVIDER_SUBSTITUTION_INVARIANCE_EVIDENCE.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROVIDER_SUBSTITUTION_INVARIANCE_EVIDENCE.md)
