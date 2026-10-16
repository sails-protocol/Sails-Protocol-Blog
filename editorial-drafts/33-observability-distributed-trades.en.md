# Observability, Error Semantics and Debugging Distributed Trades

*Draft only. No publication approval. Season 5, article 33.*

## Question

When a trade appears stuck, a dashboard that says only error is not enough. We need to know which transition was attempted, who was authorized, what persisted and whether an external provider responded.

## Boundary and design

Correlation identifiers, structured errors, durable event records and carefully scoped metrics can make a distributed workflow diagnosable. But observability must avoid leaking seeds, payment credentials, sensitive evidence or unnecessary personal data.

## Failure and evidence

An effective failure exercise follows one trade across client, SDK, node, database and provider, identifying both the last confirmed state and the unknowns. Until the actual event schema and instrumentation are inspected, these are design criteria rather than claims of deployed telemetry.

*Source verification and exact API references pending.*

## Failure drill: a trace says success, the destination disagrees

An operator dashboard shows a successful trade outcome, but the external transfer was sent to a destination different from the participant's authorized one. Logs with matching correlation IDs can explain the execution path, yet they are not independent proof that authority, outcome and destination were correctly bound. Worse, verbose diagnostics might expose sensitive payment details or seed-related material.

**Trade-off:** collecting everything speeds debugging but increases privacy and credential risk. Structured, redacted traces with explicit UNKNOWN states preserve incident evidence without implying economic finality.

**Next test:** inject an out-of-order provider event and a mismatched destination, then follow the same correlation ID across client, node, database and provider. Confirm that telemetry distinguishes observed, pending and verified states, redacts secrets and cannot alone authorize settlement. The cited durable-truth document is not a production observability certification.

## Source evidence and failure boundary

Operational traces are not independent participant proof of outcome-to-destination binding. The next gate is exact-head operational verification; this source citation does not grant release approval.

- [DURABLE_PROTOCOL_TRUTH_EVIDENCE.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/DURABLE_PROTOCOL_TRUTH_EVIDENCE.md)
