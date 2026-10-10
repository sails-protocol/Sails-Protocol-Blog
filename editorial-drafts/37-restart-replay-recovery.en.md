# Restart, Replay and Recovery: A Verification Playbook

*Season 6 / Temporada 6. Editorial draft only. Source audit and approval pending.*

## Question

The server commits a trade transition and crashes before replying. The client retries. Did the first request fail, succeed or succeed twice?

## Boundaries and tradeoffs

A useful test kills the process at precisely defined points around transaction commit, external effects and acknowledgment. Recovery must derive the authoritative outcome from durable state, not client memory. Replaying the same request should not mint a new economic action.

## Failure and verification

A mock-only PASS is insufficient. Document database engine, exact commit, concurrency setup, kill point and durable postconditions. The playbook is proposed until these executions are linked.

*No verified implementation claim or permission to publish is implied by this draft.*

## Conformance evidence: recovery is not uniform across rails

The protocol's Recovery/Reconciliation Conformance evidence reports that the automated M9 machinery (including C4, C8, C13–14, C18 and reorg sweeps) is scoped to MULTISIG. The report explicitly identifies missing automated crash recovery for LIGHTNING_HODL, WDK_USDT_EVM and SAFE_GUARD_EVM as an unresolved backlog delta, not a solved feature. It asks which rails should survive and which recovery obligations each surviving rail must satisfy.

**Failure:** a process crashes during a non-MULTISIG release. A working provider method alone does not establish a durable restart/reconciliation path. The editorial claim must name the rail and the evidence scope.

### Evidence ledger

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/RECOVERY_RECONCILIATION_CONFORMANCE_EVIDENCE.md

*Historical evidence record and source inspection; latest deployment, CTO review and publication remain unverified.*
