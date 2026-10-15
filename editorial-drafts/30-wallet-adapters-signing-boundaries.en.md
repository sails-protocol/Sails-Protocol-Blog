# Adapters and Wallet Boundaries: WDK, BDK and External Signing

*Draft only. No publication approval. Season 5, article 30.*

## Question

A wallet can show the same trade as another application without sharing its private keys. The interesting question is which component can request a transaction and which one may authorize the signature.

## Boundary and design

WDK and BDK represent different wallet integration surfaces and should not be treated as interchangeable derivation, discovery or signing engines. A Sails adapter must describe exact network support, key custody, address derivation, signing authority and recovery behavior. An SDK coordinating a trade must not silently gain access to seed material.

## Failure and evidence

A realistic failure case is an adapter returning an address from an unexpected derivation path or an application signing a transaction outside the approved trade context. Compatibility requires test vectors and real-wallet recovery checks, not brand-level assumptions.

*Source verification and exact API references pending.*

## Failure drill: signing the right transaction for the wrong trade

An adapter displays an address that looks valid, but it belongs to another network or derivation path. The user signs a transaction whose destination differs from the trade's authorized destination. A valid wallet signature proves consent to bytes, not that the application correctly represented the economic obligation. Recovery also fails if an imported seed produces a different address set than the original wallet.

**Trade-off:** tightly coupling one wallet implementation simplifies support but reduces portability; abstract adapters enable choice but demand explicit network, derivation, signing and recovery contracts. Neither approach permits an SDK to access seed material implicitly.

**Next test:** compare deterministic derivation vectors, reject wrong-network destinations, tamper with the proposed output after user confirmation and restore in a second wallet implementation. Record actual supported versions and signer behavior. The cited provider registry does not prove WDK/BDK compatibility or production seed isolation.

## Source-inspected boundary

Provider routing does not prove wallet seed isolation or derivation compatibility. A documented boundary is not exact-head runtime proof; test the stated failure against durable state before asserting readiness.

- [escrow-providers.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
