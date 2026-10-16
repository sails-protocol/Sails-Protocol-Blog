# Operating a Sails Node: Responsibilities and Failure Boundaries

*Draft only. No publication approval. Season 5, article 32.*

## Question

A node that restarts halfway through a trade cannot rely on remembering what was in process memory. Its responsibilities must be recoverable from durable state and verified external observations.

## Boundary and design

A node implementation may enforce authorization, transition validity, replay resistance and durable effects. Operators additionally need secrets management, database lifecycle, backups, migrations, monitoring and incident response. None of this makes a node the custodian of a user's wallet by default.

## Failure and evidence

A restart drill should interrupt a trade between durable commit and client acknowledgment, then prove that replay does not duplicate economic effects. Deployment requirements and supported node topology must be verified before this becomes an operator manual.

*Source verification and exact API references pending.*

## Failure drill: restart between commit and acknowledgment

A node commits a trade transition to PostgreSQL, then crashes before replying. The client reconnects and retries. If the node trusts in-memory flags, the same request may execute again; if it assumes the first call failed, it may create a second external effect. Multiple workers and a stale provider response amplify the uncertainty.

**Trade-off:** process-local coordination is easy to operate but cannot by itself guarantee durable cross-worker authority. Database-backed atomic checks and rail-specific reconciliation increase operational complexity but make recovery testable. Backups and migrations must preserve the meaning of economic state, not just rows.

**Next test:** kill a worker after durable commit, replay from another worker, then restart with a delayed provider response. Inspect state, events, provider receipts and any duplicate side effects. Existing MULTISIG recovery evidence is scoped and does not establish cross-rail operational readiness.

## Source evidence and failure boundary

Recorded recovery coverage is scoped to named MULTISIG scenarios, not every rail. The next gate is exact-head operational verification; this source citation does not grant release approval.

- [RECOVERY_RECONCILIATION_CONFORMANCE_EVIDENCE.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/RECOVERY_RECONCILIATION_CONFORMANCE_EVIDENCE.md)
