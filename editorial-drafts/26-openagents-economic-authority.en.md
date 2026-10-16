# OpenAgents: Economic Coordination for AI Agents

*Editorial draft. Season 4. Not approved for publication.*

## The question

Can an AI agent negotiate without becoming an independent owner of funds?

## Decision and boundary

The participant RFC treats agents as delegated, not independent economic principals. OpenAgents therefore needs explicit scope, revocation, limits and accountable authority; model output cannot itself authorize settlement.

## Failure and evidence

An agent may propose a trade after its mandate expires. The node must reject before economic effects; prove authorization at an exact revision. No deployed autonomous-agent guarantee is established.

## Conceptual flow

```mermaid
flowchart LR
 A["Design intent"] --> B["Bounded integration"]
 B --> C["Independent verification"]
```

Text equivalent: the proposal progresses from design intent to a bounded integration and then to independent verification. This is not an implementation status report.

*Pending: source-of-truth verification, specific citations, editorial review and owner approval.*

## Failure scenario: an agent exceeds a revoked mandate

A user delegates authority to an agent to propose trades below a specified limit. The agent prepares a proposal, but the user revokes the mandate before submission. A delayed agent message arrives after revocation and requests escrow release, or changes the destination while retaining a valid signature. Model output and key possession are not substitutes for fresh participant authorization.

**Design trade-off:** giving agents broad standing permissions reduces friction but concentrates economic risk. Scoped mandates, expiration, explicit confirmation and revocation checks impose extra steps while making accountability testable. The principal remains the economic actor.

**Next test:** race revocation against submission, exceed a delegated amount limit, replay a signed request and change its destination. Verify exact-head authorization rejection before durable state changes or external economic effects. The participant RFC documents roles; it does not establish a deployed autonomous trading agent.

## Source-inspected boundary

A delegated agent does not acquire independent economic authority. A documented boundary is not exact-head runtime proof; test the stated failure against durable state before asserting readiness.

- [RFC-001-participant-model.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-001-participant-model.md)
