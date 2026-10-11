# Adapters and Wallet Boundaries: WDK, BDK and External Signing

*Draft only. No publication approval. Season 5, article 30.*

## Question

A wallet can show the same trade as another application without sharing its private keys. The interesting question is which component can request a transaction and which one may authorize the signature.

## Boundary and design

WDK and BDK represent different wallet integration surfaces and should not be treated as interchangeable derivation, discovery or signing engines. A Sails adapter must describe exact network support, key custody, address derivation, signing authority and recovery behavior. An SDK coordinating a trade must not silently gain access to seed material.

## Failure and evidence

A realistic failure case is an adapter returning an address from an unexpected derivation path or an application signing a transaction outside the approved trade context. Compatibility requires test vectors and real-wallet recovery checks, not brand-level assumptions.

*Source verification and exact API references pending.*

## Source-inspected boundary

Provider routing does not prove wallet seed isolation or derivation compatibility. A documented boundary is not exact-head runtime proof; test the stated failure against durable state before asserting readiness.

- [escrow-providers.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
