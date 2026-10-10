# Observability, Error Semantics and Debugging Distributed Trades

*Draft only. No publication approval. Season 5, article 33.*

## Question

When a trade appears stuck, a dashboard that says only error is not enough. We need to know which transition was attempted, who was authorized, what persisted and whether an external provider responded.

## Boundary and design

Correlation identifiers, structured errors, durable event records and carefully scoped metrics can make a distributed workflow diagnosable. But observability must avoid leaking seeds, payment credentials, sensitive evidence or unnecessary personal data.

## Failure and evidence

An effective failure exercise follows one trade across client, SDK, node, database and provider, identifying both the last confirmed state and the unknowns. Until the actual event schema and instrumentation are inspected, these are design criteria rather than claims of deployed telemetry.

*Source verification and exact API references pending.*

## Source evidence and failure boundary

Operational traces are not independent participant proof of outcome-to-destination binding. The next gate is exact-head operational verification; this source citation does not grant release approval.

- [DURABLE_PROTOCOL_TRUTH_EVIDENCE.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/DURABLE_PROTOCOL_TRUTH_EVIDENCE.md)
