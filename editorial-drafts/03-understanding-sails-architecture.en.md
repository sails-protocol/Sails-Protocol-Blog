# Understanding the Sails Architecture

*Editorial draft. Not approved for publication.*

## A protocol is not an application

The distinction matters when we want different products to share coordination rules without sharing a user interface, a business model or control over users' funds. Sails Protocol defines the coordination model. Sails Core is the pure semantic core where the meaning of transitions belongs. A Sails Node implements the protocol and provides runtime capabilities. SDKs make specific workflows available to developers. Applications decide how people experience them.

## Why separate the layers?

Consider a wallet that wants to add P2P trading and a web marketplace that wants private trading rooms. Both may need trade lifecycle rules, authorization and evidence handling, but their interfaces and distribution are different. If those rules live only inside one app, the other has to recreate them. If they are defined independently, each integration can focus on its own experience while remaining accountable for the same economic semantics.

## What the first SDK does and does not mean

The Sails P2P Trading SDK is the first focused module. It does not make every proposed module a shipped product. Sails Market is a reference web application planned to consume protocol capabilities and external services; Satsails Wallet is a separate wallet integration. Neither application is the protocol itself. We are also exploring identity, reputation, proof and settlement modules, but their maturity must be stated individually.

## Architecture as a set of responsibilities

A clean diagram is useful, but it is not proof of a working system. The important questions are practical: who can change a trade state, which database operation is authoritative, what survives a crash, and what must never be repeated? We use those questions to test whether the separation of layers is meaningful rather than decorative. Future articles will examine the answers, including the cases where we still need evidence.

## Evidence boundary: architecture versus implementation

The protocol's invariant document distinguishes architectural laws, implementation obligations and executable evidence. That distinction matters here: naming Sails Core or Sails Node defines intended responsibilities, not proof that an independently deployed node implements every module. The inspected repository contains a concrete OpenP2P trade service and SDK client; those establish narrower implementation touchpoints, not automatic interoperability between Satsails Wallet, Sails Market and arbitrary third-party applications. Any public deployment or cross-application compatibility claim still needs versioned contracts, tests and operational evidence.

**Failure to avoid:** a reader sees a five-layer diagram and assumes all layers are independently deployable and production-verified. The diagram is a responsibility map, not a release matrix.

### Source boundary

- [Protocol invariants](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md)
- [Trade service](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)
- [SDK OpenP2P client](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)

*Source-inspected at the pinned revision; not a production or CTO approval claim.*

*Technical and factual review pending. Do not publish before explicit approval.*
