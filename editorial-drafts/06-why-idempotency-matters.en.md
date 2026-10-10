# Why Idempotency Matters in P2P Trading

*Editorial draft. Not approved for publication.*

## The question

A user taps Confirm and the network times out. Did the request fail, or did the server complete it without delivering the response? Retrying feels natural. In a financial workflow, treating every retry as a new action can be dangerous.

## What can go wrong

Idempotency means that repeating the same intended operation does not create an additional economic effect. It is not the same as ignoring every duplicate-looking request. The system must identify which action is being repeated, who is authorized to request it and which recorded outcome is authoritative.

## Where the guarantee belongs

An API key or request identifier helps, but it is not the entire solution. Imagine that a service records a completed trade and crashes before returning success. On restart, a retry must find the prior outcome instead of applying settlement again. This requires durable state and a clear transactional boundary.

## The engineering decision

The inspected SDK and service implement a scoped idempotency contract for trade creation. That source inspection is narrower than a production guarantee: database-backed concurrency, crash-and-replay, and client key persistence must each be evidenced at an exact tested revision. A passing unit test alone does not establish exactly-once economic behavior.

## A concrete contract in the Sails SDK

The inspected `OpenP2P.trade(offerId, amount, idempotencyKey?)` SDK method forwards the optional key to `POST /v1/openp2p/trades`. The route validates a nonempty key of up to 200 characters and passes it with the authenticated participant ID to `TradeService.createTrade()`. That service scopes the attempt to `openp2p.trade.create`, the participant, and the offer/amount payload. **Omitting the key permits a second trade on retry**; the SDK itself tells applications to generate one key per logical acceptance and reuse it for retries of that same acceptance. A fresh intentional acceptance needs a fresh key.

**Failure scenario:** A timeout follows durable trade creation. The UI generates a new key for each retry instead of reusing the original. The server cannot recognize these as the same logical attempt under this contract. **Boundary:** the code path is source-inspected, but current caller behavior and Postgres crash/replay results are not certified here.

**Next question:** Which applications persist the logical-attempt key across process restarts and offline retries?

### Source ledger and maturity

- [SDK method](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)
- [HTTP route](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.routes.ts)
- [Trade service](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)
- [Common idempotency mechanism](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/common/idempotency.ts)

*Source-inspected only. No new runtime verification, CTO approval or publication authorization.*

## Read next

Next we will look at a related but different problem: what happens when two requests arrive at the same time, before either can observe the other's result?
