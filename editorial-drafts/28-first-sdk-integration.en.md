# First Integration: From SDK Installation to a Safe P2P Trade

*Draft only. No publication approval. Season 5, article 28.*

## Question

An integration is not complete when an SDK imports successfully. Consider a buyer who submits payment confirmation, loses connectivity and presses the button again. The application must not turn that second request into a second economic effect.

## Boundary and design

The integration needs distinct responsibilities: the UI presents the trade; identity authenticates the actor; the SDK submits a bounded intent; the node enforces state and authority; the wallet signs only what the user authorizes; the external rail supplies its own settlement evidence. No single layer should claim all of those responsibilities.

## Failure and evidence

A useful first integration test should retry the same intent, race two competing actions, restart the process before acknowledgment and verify the durable result. Until exact API signatures, supported adapters and reproducible test results are checked against the repository, this is an integration design guide, not a copy-paste quickstart.

*Source verification and exact API references pending.*

## Source-backed scope

The SDK exposes an optional trade idempotency key; callers must preserve it across retries. **Failure:** treating a source-level design or API as universal production readiness. Exact-head tests and approval remain outstanding.

- [openp2p.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)

## Integration acceptance contract

The inspected SDK signature is `trade(offerId, amount, idempotencyKey?)`. The key is optional at the API boundary, so the client must generate a stable key for one logical acceptance, persist it before dispatch and reuse it after an ambiguous response. The route validates the supplied key; the service scopes it to the authenticated participant, action and trade payload. A new user acceptance is a new intent, not a retry.

**Counterexample:** a mobile app recreates the key after reconnecting. The second call may be treated as a new acceptance. **Evidence required:** an exact-head integration test with the same key, different payload, concurrent calls and a process restart, using the real persistence path. This article does not claim those tests were executed.

- [Trade route](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.routes.ts)
- [Trade service](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)
