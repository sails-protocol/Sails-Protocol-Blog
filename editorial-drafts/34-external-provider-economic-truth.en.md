# Integrating External Providers Without Delegating Economic Truth

*Draft only. No publication approval. Season 5, article 34.*

## Question

A provider webhook says payment complete. Should the trade immediately release its asset? Not without asking what that webhook authenticates, which transaction it identifies and whether the payment is final under that rail's rules.

## Boundary and design

An adapter translates external observations into a bounded contract. It should validate provenance, handle duplicates and reordering, preserve uncertainty and refuse to invent authority that the provider cannot establish. The protocol's economic state must follow its own verified transition rules.

## Failure and evidence

A test suite should inject forged webhooks, stale status, conflicting confirmations and provider downtime. The expected result is safe rejection or an explicitly pending state, never fabricated settlement. Provider-specific guarantees require documented evidence.

## Decision: bounded observation is not settlement authority

The inspected `bounded-rpc.ts` distinguishes owned raw HTTP requests, where an AbortController bounds waiting, from ethers JSON-RPC calls using native request timeouts. Its retry helper is opt-in: a mutating broadcast must not be automatically retried merely because a response timed out. Dispatch may already have occurred, leaving an **UNKNOWN** result. The adapter must reconcile with independently checkable receipts and durable trade authority instead of inventing a failure or success.

## Failure: timeout after dispatch

A transaction reaches the provider, but its response is lost. A naive retry sends the same economic action again; a naive failure handler declares it absent. Both are unsafe without a rail-specific deduplication or reconciliation contract. The provider-substitution evidence supports selected semantics, not universal equivalence across providers.

## Evidence and next question

- [Bounded RPC and retry rules](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/bounded-rpc.ts)
- [Provider-substitution evidence](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROVIDER_SUBSTITUTION_INVARIANCE_EVIDENCE.md)

*Source-inspected only.* Which rails have exact-head timeout-after-dispatch reconciliation proof?
