# Satsails Wallet and Sails Market: Two Applications, One Protocol

*Season 7. Editorial draft. Source and CTO review pending.*

## Question

A wallet and a web market may show the same offer while keeping different user interfaces and signing environments. They should not invent conflicting trade realities.

## Boundary and decision

Sails Protocol defines coordination contracts; the Trading SDK is an integration surface; Satsails Wallet and Sails Market are applications. Sails Market should not require its own isolated liquidity, and neither application should silently take custody merely to render a trade.

## Failure and evidence

If two applications display different trade states after reconnection, the source of economic authority must be explicit and reconciliation testable. This is a product architecture goal, not proof of deployed interoperability.

*No production implementation or publication approval is asserted.*

## Evidence boundary

Shared economic semantics require executable cross-client evidence, not merely a common protocol label. **Failure:** mistaking documented intent for verified production behavior. Exact-head runtime evidence and release approval remain pending.

- [PROTOCOL_INVARIANTS.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md)

## Failure drill: two interfaces, conflicting authority

A wallet displays a trade as pending while the web market shows completed after receiving an out-of-order event. The user tries to release funds again from the wallet. Sharing a protocol name does not establish that both clients share the same durable state, idempotency key or signing permissions.

**Trade-off:** each application can offer its own user experience, but economic transitions must remain anchored to the same verified node authority. A shared backend may simplify reconciliation while introducing an operator dependency; multiple nodes require stronger independent-verification and conflict-handling evidence.

**Reconciliation vector:** record one trade's canonical identifier, authority decision, durable outcome and external settlement reference. Feed wallet and market clients the same events in different orders, including a duplicate completion after reconnect. Compare their displayed status to an independently re-fetched authoritative snapshot and attempt a second release. The required result is convergence **without a second economic effect**; an SDK shared between clients is not sufficient proof. This test remains proposed, not executed.

**Next test:** open the same trade in wallet and market, disconnect one client, deliver duplicate and reordered events, then reconnect. Verify identical authoritative outcomes and no second release. Treat this as an interoperability acceptance scenario, not proof that both applications already interoperate.

