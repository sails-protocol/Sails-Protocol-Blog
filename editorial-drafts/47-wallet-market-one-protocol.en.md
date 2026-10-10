# Satsails Wallet and Sails Market: Two Applications, One Protocol

*Season 7 / Temporada 7. Editorial draft. Source and CTO review pending.*

## Question

A wallet and a web market may show the same offer while keeping different user interfaces and signing environments. They should not invent conflicting trade realities.

## Boundary and decision

Sails Protocol defines coordination contracts; the Trading SDK is an integration surface; Satsails Wallet and Sails Market are applications. Sails Market should not require its own isolated liquidity, and neither application should silently take custody merely to render a trade.

## Failure and evidence

If two applications display different trade states after reconnection, the source of economic authority must be explicit and reconciliation testable. This is a product architecture goal, not proof of deployed interoperability.

*No production implementation or publication approval is asserted.*
