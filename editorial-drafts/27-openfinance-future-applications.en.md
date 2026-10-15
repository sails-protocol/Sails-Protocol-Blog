# OpenFinance and the Future of P2P Applications

*Editorial draft / rascunho editorial / borrador editorial. Season 4. Not approved for publication.*

## The question

A user may want to trade, swap, borrow or interact with a prediction market from one interface. The convenience is real, but so is the risk of blurring independent providers and their obligations.

## Design direction

OpenFinance is a future-facing module concept, not a promise that all financial services will become native to Sails Protocol. A reference application can integrate external providers while making contracts, permissions, fees, risk disclosures and custody boundaries visible.

## Evidence before claims

The useful question is not how many services fit on one screen. It is whether a user can understand who performs each action and what happens when something fails. Those boundaries will determine which integrations deserve to ship.

## Conceptual flow

```mermaid
flowchart LR
 A[Design intent] --> B[Bounded integration]
 B --> C[Independent verification]
```

Text equivalent: design intent progresses to a bounded integration and independent verification. This is not proof of deployment.

*Source verification, references, editorial review and owner approval pending.*

## Failure scenario: one interface hides two independent contracts

A user approves a swap and a loan from the same application screen. The swap settles, but the loan provider rejects the application after receiving preliminary information. If the interface marks the whole sequence completed, the user may misunderstand outstanding exposure, fees or custody. One app does not create one legal or economic authority.

**Trade-off:** a unified dashboard is convenient but can hide provider identity, risk and recovery responsibilities. Explicit per-provider disclosures, independent confirmations and distinct pending/failed states add friction but preserve informed consent.

**Next test:** simulate one external service succeeding while another fails or delays its callback. Verify that statuses, permissions, fees and custody disclosures remain provider-specific, and that retries do not silently authorize a second action. This is a proposed verification scenario, not evidence that OpenFinance or named external services are available in production.

## Source-backed scope

OpenFinance is a proposed module, not a demonstrated production financial service. **Failure:** treating a source-level design or API as universal production readiness. Exact-head tests and approval remain outstanding.

- [PROTOCOL_INVARIANTS.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md)
