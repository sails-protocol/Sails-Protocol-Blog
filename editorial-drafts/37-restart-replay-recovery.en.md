# Restart, Replay and Recovery: A Verification Playbook

*Season 6 / Temporada 6. Editorial draft only. Source audit and approval pending.*

## Question

The server commits a trade transition and crashes before replying. The client retries. Did the first request fail, succeed or succeed twice?

## Boundaries and tradeoffs

A useful test kills the process at precisely defined points around transaction commit, external effects and acknowledgment. Recovery must derive the authoritative outcome from durable state, not client memory. Replaying the same request should not mint a new economic action.

## Failure and verification

A mock-only PASS is insufficient. Document database engine, exact commit, concurrency setup, kill point and durable postconditions. The playbook is proposed until these executions are linked.

*No verified implementation claim or permission to publish is implied by this draft.*
