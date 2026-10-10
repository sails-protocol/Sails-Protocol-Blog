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
