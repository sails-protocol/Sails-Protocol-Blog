# Concurrency: When Two Requests Race

*Editorial draft. Not approved for publication.*

## The question

Imagine two workers processing the same trade at almost the same instant. Each reads an apparently valid state. Each decides that it can proceed. Without a reliable authority boundary, both may try to produce an economic effect.

## What can go wrong

Concurrency is not simply a performance concern. In P2P trading, it can determine whether a completion, claim or release is applied once or twice. A check performed before a write may become stale before the write happens. The database transaction, not the timing of application code, must ultimately establish which transition won.

## Where the guarantee belongs

There are different tools for different races: constraints, transactional updates, locks and carefully scoped compare-and-set operations. None is automatically correct everywhere. The useful question is which invariant must survive two simultaneous requests, and where that invariant is enforced.

## How we approach it

Our work on Sails includes explicit concurrency and restart gates for economic transitions. We use real persistence tests because mocks can hide the timing and isolation behavior that matters. This describes our validation method, not a blanket claim that every adapter has passed every race scenario.

## Read next

The next article connects this to recovery: if a process crashes halfway through a workflow, what must remain true when it starts again?

*Sources pending: link immutable implementation commits, CTO decisions and verification runs before publication.*
