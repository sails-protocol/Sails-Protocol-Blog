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

*Technical and factual review pending. Do not publish before explicit approval.*
