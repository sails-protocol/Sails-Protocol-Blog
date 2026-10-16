# OpenReputation: Trust Across Applications

*Editorial draft. Season 4. Not approved for publication.*

## The question

Can a good reputation in one market be trusted in another? Only with context.

## Design decision and boundary

OpenReputation is a direction for portable, attributable signals, not a universal score. The participant model defines actors but does not implement cross-market scoring or a common trust policy. Each receiving application must choose what it accepts.

## Failure and evidence

A successful trade signal stripped of payment rail, dispute history and issuer can mislead another market. Prove provenance, consent, revocation and receiving-market policy before making portability claims.

## Conceptual flow

```mermaid
flowchart LR
 A["Design intent"] --> B["Bounded integration"]
 B --> C["Independent verification"]
```

Text equivalent: the proposal progresses from design intent to a bounded integration and then to independent verification. This is not an implementation status report.

*Pending: source-of-truth verification, specific citations, editorial review and owner approval.*

## Scenario: a portable success signal loses its meaning

A seller completes ten small trades in one market. Another application imports a positive score without the issuing market, trade amounts, payment rails, dispute outcomes or the time window. It then treats the seller as trustworthy for a much larger, unrelated obligation. Even if every original event is authentic, the new conclusion does not follow from the evidence.

A malicious participant could also replay an old positive signal after a later dispute or withdrawal of consent. Portable identity alone cannot tell the receiving application whether the signal is current, representative or relevant.

## Decision and next test

A single universal score is convenient but collapses context and governance. A safer approach is to carry attributable event claims with issuer, scope, timestamp, provenance, consent and revocation status, while leaving risk interpretation to each receiving market. That approach has interoperability costs and requires privacy controls; it is not evidence that such infrastructure is deployed.

**Next test:** import a valid but stale success signal, omit its dispute context and revoke consent before reuse. Verify that the receiving application does not silently treat it as a current universal trust guarantee. The participant-model RFC identifies actors, not an implemented cross-market reputation engine.

## Inspected boundary and failure

Participant identity is not a universal portable reputation score. **Failure:** overstating design as verified deployment. The pinned source supports only the stated scope; runtime and CTO gates remain open.

- [RFC-001-participant-model.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-001-participant-model.md)
