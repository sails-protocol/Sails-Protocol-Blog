# Crash Recovery and the Meaning of Exactly Once

*Editorial draft. Not approved for publication.*

## The question

The hardest moment in a distributed workflow may be the one nobody sees: a process stops after doing something important but before reporting that it succeeded.

## What can go wrong

Suppose a service claims a trade completion, records an effect and then loses power. When it restarts, it must determine whether to continue, retry or return the previous result. A careless recovery path can lose an action or apply it twice. The words exactly once sound reassuring, but they hide an important question: exactly once within which system boundary?

## Where the guarantee belongs

A database transaction can make related local state changes atomic. It cannot automatically make an external bank, blockchain or provider participate in that same transaction. External effects need their own reconciliation, idempotency and failure model. We should never describe local atomicity as universal end-to-end finality.

## How we approach it

For Sails, crash-and-replay scenarios are part of the engineering evidence we seek for economic transitions. We want tests that stop a process at meaningful boundaries, restart it against durable state and check that the intended invariants still hold. A claim about exactly-once behavior must name the operation, its persistence boundary and the evidence that supports it.

## Read next

In the next article we turn from process behavior to people and permissions: knowing who someone is does not automatically tell us what they are allowed to do.

*Sources pending: link immutable implementation commits, CTO decisions and verification runs before publication.*

## Durable write, lost response, and replay

The inspected common idempotency module distinguishes a durable create from post-persist work and documents historical failure windows: a database write succeeds but completion bookkeeping fails; two retries race to reclaim a failed attempt; or an exception after persistence is mistaken for no effect. The trade service passes persistence and post-persist functions separately into `withIdempotency()`. An UNKNOWN outcome is a reason to reconcile, not to blindly repeat external effects.

**Failure scenario:** the trade exists but the event publication fails. Returning an error does not erase the trade. Replaying with the same key should follow the bounded idempotency protocol; replaying without a key can create a duplicate. Database atomicity also cannot guarantee that an external bank, chain, or provider executed exactly once.

**Next question:** Which exact-head Postgres restart tests, event-outbox evidence, and external provider receipts demonstrate recovery for each operation?

### Source ledger and maturity

- [SDK method](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)
- [HTTP route](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.routes.ts)
- [Trade service](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)
- [Common idempotency mechanism](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/common/idempotency.ts)

*Source-inspected only. No new runtime verification, CTO approval or publication authorization.*
