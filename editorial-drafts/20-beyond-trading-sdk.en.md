# Beyond P2P Trading: The Sails Protocol Vision

*Editorial draft. Season 4. Not approved for publication.*

## The question

What does a protocol become after its first SDK? A family of capabilities is useful only when its shared economic rules are explicit.

## Decision and boundary

The first focused integration is P2P Trading. Identity, proof, reputation, settlement, liquidity, agents and finance describe distinct modular directions, not one already deployed product. A new module must state which actor has authority, what economic effect it may request and which existing invariant it preserves. The protocol invariant document distinguishes architecture, implementation obligations and executable evidence.

## Failure and evidence

A wallet might integrate an OpenFinance feature and assume that the protocol guarantees its external lending provider. That would transfer responsibility without proof. Each provider needs a separate authority model, failure handling and acceptance gate; no roadmap item inherits production readiness from the Trading SDK.

## Next question

Which module can demonstrate a real, bounded integration with independently reproducible evidence?

## Conceptual flow

```mermaid
flowchart LR
 A["Design intent"] --> B["Bounded integration"]
 B --> C["Independent verification"]
```

Text equivalent: the proposal progresses from design intent to a bounded integration and then to independent verification. This is not an implementation status report.

*Pending: source-of-truth verification, specific citations, editorial review and owner approval.*

## Inspected boundary and failure

Future modules are roadmap concepts until separately implemented and verified. **Failure:** overstating design as verified deployment. The pinned source supports only the stated scope; runtime and CTO gates remain open.

- [PROTOCOL_INVARIANTS.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md)
