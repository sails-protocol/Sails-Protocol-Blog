# OpenIdentity: Identity Without Platform Lock-in

*Editorial draft. Season 4. Not approved for publication.*

## The question

Identity can prove control of a key, but who may act on a trade?

## Design decision and boundary

The participant model distinguishes the principal from a delegated wallet or agent. Challenge-response authentication is not trade authorization; each economic transition must check its participant and role.

## Failure and evidence

A valid signature from the wrong participant must not release escrow. Prove delegated scope and replay resistance in exact-head tests before calling identity portable across applications.

## Conceptual flow

```mermaid
flowchart LR
 A["Design intent"] --> B["Bounded integration"]
 B --> C["Independent verification"]
```

Text equivalent: the proposal progresses from design intent to a bounded integration and then to independent verification. This is not an implementation status report.

*Pending: source-of-truth verification, specific citations, editorial review and owner approval.*

## Scenario: a valid key without economic authority

A delegated agent signs an authentication challenge correctly, then attempts to release escrow for a trade owned by a different principal. The cryptographic signature establishes control of the agent's key, not authority over that trade or its destination. A second request replays a previously valid authorization after delegation is revoked. If the server checks only key validity, both requests can be mistakenly accepted.

## Alternative and test

Treating every valid key as a fully authorized participant is simple but unsafe. A scoped delegation model must bind principal, agent, role, action, trade context, expiration and revocation semantics, with replay controls. Portability across apps additionally requires explicit recognition of those scopes by each relying service.

**Next test:** submit an authenticated request from the wrong principal, replay a revoked delegation, and change the destination while keeping the same signer. Record exact-head rejection and verify that no escrow transition occurs. The linked participant RFC is design context, not proof that cross-app delegated authority works in production.

## Inspected boundary, not production certification

Delegated agents are not independent economic participants. **Failure:** confusing a documented design with deployed behavior. Exact-head integration and runtime verification remain required.

- [RFC-001-participant-model.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-001-participant-model.md)
