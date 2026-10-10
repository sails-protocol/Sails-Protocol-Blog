# Why a Reference Market Should Not Own Its Own Liquidity

*Editorial draft. Not approved for publication.*

## The problem

Imagine a wallet and a web market displaying different opportunities even though both connect to the same trading ecosystem. If every interface builds its own isolated liquidity pool, participants face fragmentation rather than a shared market.

## The boundary

Our direction for Sails Market is a reference web application that consumes the same underlying economic opportunities available to integrated wallets and third parties. The market may present offers, organize private rooms and connect external services without pretending that all those services are native Sails Protocol modules.

## What remains to be proven

Shared visibility does not guarantee execution or depth. Liquidity depends on counterparties, routing, availability, pricing and permission rules. A reference application should expose those constraints honestly, including when a particular opportunity is unavailable to a user or payment method.

## Conceptual diagram

```mermaid
flowchart TD
 A[Shared economic opportunities] --> B[Sails Market]
 A --> C[Integrated wallet]
 A --> D[Third-party app]
 B --> E[User experience and policies]
```

Text equivalent: the diagram shows the responsibility boundaries discussed above, not verified deployment.

*Source references, technical review and owner publication approval pending.*
