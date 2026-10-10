# Identity and Authorization Are Different Questions

*Editorial draft. Not approved for publication.*

## The question

A signed message can show control of a key. It cannot, by itself, prove that the key holder may release a particular trade. That second question depends on the trade, the role, the current state and the operation being requested.

## The hidden tradeoff

In P2P systems, it is tempting to treat a verified identity as a universal permission. But participants have different responsibilities. A buyer may submit payment evidence, a seller may confirm receipt and an authorized reviewer may assess a dispute. These are distinct authorities, even when everyone has authenticated successfully.

## Our direction

We are exploring portable identifiers and challenge-response mechanisms alongside explicit authorization at each state transition. Portability does not mean every application must trust every claim. Each integration still needs to decide which credentials and permissions it accepts.

## What we need to verify

The useful test is not merely whether a signature verifies. It is whether an authenticated actor can perform exactly the actions allowed by the current economic state, and no others. This article describes the security model we are working toward; concrete coverage must be linked to implementation evidence before publication.

## Conceptual diagram

```mermaid
flowchart TD
  A[Authenticated actor] --> B{Authorized for this trade and state?}
  B -->|No| C[Reject transition]
  B -->|Yes| D[Evaluate transition rules]
```

This diagram illustrates a design principle, not verified runtime behavior.

*Technical references and approval pending.*
