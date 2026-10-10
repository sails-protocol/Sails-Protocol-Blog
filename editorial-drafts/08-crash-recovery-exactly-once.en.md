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
