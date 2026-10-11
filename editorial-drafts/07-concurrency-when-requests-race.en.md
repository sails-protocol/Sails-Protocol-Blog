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

## Verified implementation boundary

The trade service constrains client-requested status changes with `MANUAL_TRADE_TRANSITIONS`: PENDING may become ACTIVE or CANCELLED, ACTIVE may become CANCELLED, and terminal states do not admit arbitrary manual rewrites. The code explains the prior failure: a completed or disputed trade could be overwritten as CANCELLED even though escrow had already moved funds. The fix protects the trade audit trail; it is not itself proof of serializable settlement under every concurrent provider response.

**Next test:** two authenticated participants racing the same transition, a concurrent escrow event, and a restart against real Postgres. Do not mark that scenario PASS without exact-head evidence.

### Primary source / maturity

- [trade.service.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)

*Source inspection only; no new live test, CTO approval or publication authorization.*

## Read next

The next article connects this to recovery: if a process crashes halfway through a workflow, what must remain true when it starts again?
