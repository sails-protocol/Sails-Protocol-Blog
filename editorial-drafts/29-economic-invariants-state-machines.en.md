# State Machines and Economic Invariants in Practice

*Draft only. No publication approval. Season 5, article 29.*

## Question

A state machine is useful because an economic action must have a precise meaning. A trade cannot be both completed and disputed by contradictory concurrent requests.

## Boundary and design

Model permitted transitions separately from side effects. An authenticated participant requests a transition, a durable authority checks preconditions and only one valid outcome commits. Payment-provider responses and client retries are inputs, not automatic proof that the transition is allowed.

## Failure and evidence

The diagram is an illustrative invariant, not the canonical production state machine. The next step is to compare each named transition with exact source definitions and adversarial tests at an immutable commit.

## Decision: make terminal transitions durable

The inspected trade service explicitly protects terminal state from manual overwrites through `MANUAL_TRADE_TRANSITIONS`. This is a concrete code boundary, not a claim that every distributed economic effect is atomic. A participant must be authorized for the trade, the transition must be valid for the persisted state, and competing requests must not silently produce incompatible terminal outcomes. The protocol invariants describe stronger normative obligations; each implementation needs its own test evidence.

## Failure: a late request rewrites completed history

Two requests race: one completes a trade, the other tries to dispute or cancel it based on stale state. A read-then-write check without durable concurrency control can allow both callers to believe they succeeded. The acceptance test must exercise real Postgres transactions and competing workers, inspect the final row and events, then restart and replay. Code inspection alone does not certify this behavior on the current HEAD.

## Evidence and next question

- [Trade service](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)
- [Protocol invariants](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md)

*Source inspection, not new runtime conformance.* Which transitions have exact-head concurrent restart proof?
