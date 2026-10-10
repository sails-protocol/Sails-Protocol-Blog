# Introducing the Sails P2P Trading SDK

*Editorial draft. Not approved for publication.*

## Start with one real workflow

A protocol can promise many things on paper. We chose to focus the first SDK on a concrete problem: coordinating the lifecycle of a P2P trade. That means dealing with offers, participants, payment steps, evidence, disputes and the conditions under which a trade may reach a final state. Each step has to be meaningful even when requests arrive out of order or are retried.

## The difficult part is not the happy path

In a demo, the buyer pays, the seller confirms and the trade completes. In a real system, a client can lose its connection after submitting a request. Two processes can attempt the same action. A provider can respond slowly. A dispute can introduce evidence that changes what must be reviewed. We have treated idempotency, concurrency, restart behavior and authority boundaries as central engineering questions, not optional polish.

## An SDK is an integration surface, not a guarantee

The SDK is meant to let different applications integrate trading workflows without rewriting every coordination rule. But an integration still needs correct configuration, authenticated actors, dependable storage and trustworthy adapters. A package compiling successfully is not the same as proving economic behavior under crashes, races and external failures. That is why our engineering process requires reproducible evidence and explicit review gates.

## What comes next

The first SDK is a starting point for a wider modular family, not proof that the entire family exists today. As the implementation advances, we will publish concrete examples, supported interfaces, test evidence and known limitations. Until then, this article explains the product direction rather than declaring production readiness.

## What the inspected integration actually exposes

At the pinned source revision, the OpenP2P SDK client exposes `trade(offerId, amount, idempotencyKey?)`. The key is optional, but that choice has economic consequences: a caller that omits it can create a second trade after a lost response. The HTTP route validates the supplied key and forwards the authenticated participant context to the trade service. The service scopes the logical attempt to its action, participant and offer/amount payload. This is a concrete integration contract, not proof that every wallet preserves the key across offline retries.

**Failure:** a mobile client regenerates the key whenever the user taps Retry. The server sees new attempts instead of a replay of the original acceptance. **Decision:** persist and reuse the key for the same logical acceptance; issue a new key only for a genuinely new acceptance.

### Sources and maturity

- [OpenP2P SDK client](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)
- [Trade HTTP route](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.routes.ts)
- [Trade service](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)

*Pinned source inspection; no exact-head client/restart test or publication approval.*


*Technical and factual review pending. Do not publish before explicit approval.*
