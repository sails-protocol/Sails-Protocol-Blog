# Protocol Contracts, Schemas and Version Compatibility

*Draft only. No publication approval. Season 5, article 31.*

## Question

A client and a node can both be working correctly in isolation yet disagree about the meaning of a field. That mismatch becomes dangerous when the field affects amount, asset, identity or settlement authority.

## Boundary and design

Schemas are executable contracts only when validation is enforced at the relevant boundary. Versioning needs to distinguish additive metadata from changed economic meaning. Unknown critical fields should not be silently interpreted as harmless, and a client must not assume a newer node supports an older economic contract.

## Failure and evidence

Compatibility claims need fixture-based tests across versions and precise migration policies. Package names, schema versions and supported matrices must be checked in the source before publishing a compatibility table.

*Source verification and exact API references pending.*

## Source-inspected boundary

Bounded algebra conformance is not published ruleset composition or universal compatibility. A documented boundary is not exact-head runtime proof; test the stated failure against durable state before asserting readiness.

- [CONDITION_ALGEBRA_CONFORMANCE_EVIDENCE.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/CONDITION_ALGEBRA_CONFORMANCE_EVIDENCE.md)
