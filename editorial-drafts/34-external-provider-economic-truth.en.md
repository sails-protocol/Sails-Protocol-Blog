# Integrating External Providers Without Delegating Economic Truth

*Draft only. No publication approval. Season 5, article 34.*

## Question

A provider webhook says payment complete. Should the trade immediately release its asset? Not without asking what that webhook authenticates, which transaction it identifies and whether the payment is final under that rail's rules.

## Boundary and design

An adapter translates external observations into a bounded contract. It should validate provenance, handle duplicates and reordering, preserve uncertainty and refuse to invent authority that the provider cannot establish. The protocol's economic state must follow its own verified transition rules.

## Failure and evidence

A test suite should inject forged webhooks, stale status, conflicting confirmations and provider downtime. The expected result is safe rejection or an explicitly pending state, never fabricated settlement. Provider-specific guarantees require documented evidence.

*Source verification and exact API references pending.*
