# Threat Modeling a P2P Economic Protocol

*Season 6. Editorial draft only. Source audit and approval pending.*

## Question

A buyer, seller, operator and payment provider can each behave differently from the happy-path diagram. A threat model begins by identifying which of them may lie, disappear or lose access.

## Decision: make the attacker and the enforcement point explicit

A threat is not mitigated because a catalog names it. For each scenario, the review must identify the attacker, the asset at risk, the trust boundary, the implementation that enforces it and the remaining uncertainty. Consider a browser WebSocket: an HTTP rate limit does not automatically govern messages after upgrade. The threat model records a participant-scoped message limiter as a single-instance improvement, not a distributed guarantee. It also documents the risk of a full-privilege session token in a WebSocket query string. Those are separate boundaries and require separate evidence.

## Failure: security that exists only in the diagram

If multiple sockets or nodes can bypass a local counter, the rate-limit claim must state that scope. If a session URL is logged, a valid token can leak despite correct signature verification elsewhere. The source record describes historical findings; whether either residual is fixed in the current HEAD requires a new review, not an assumption.

## Threat catalog versus demonstrated mitigation

The Sails threat catalog names Sybil attacks, fake liquidity and credential exposure, but it explicitly warns that documented mitigations are only real where implementation/deployment evidence exists. It also records a WebSocket credential exposure boundary: full-privilege session tokens in query strings can reach logs or history, and a separate narrow handshake token is a design decision rather than a deployed fix in that record.

**Failure:** a logged WebSocket URL exposes a reusable session credential. Treat the risk as a documented residual and demand current-head remediation evidence before asserting secure credential scoping.

**Source-status precision:** the threat-model ledger marks the original absence of a `SEND_MESSAGE` limiter **resolved on 2026-08-15** by a per-participant, process-local fixed-window counter (documented default 20 messages/10 seconds). That does not establish cross-instance enforcement. The full-session-token WebSocket query-string exposure is separately documented as a residual, with a WS-scoped short-lived token still a proposal in that ledger. Neither observation alone verifies today's deployed configuration.

## Next question

What exact-head evidence shows whether WebSocket credentials are scoped and message limits remain effective across workers and reconnects, without confusing an architectural proposal with a deployed control?

### Source and maturity

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md

*Historical evidence/source inspection only; no latest-head test or publication approval.*

*No verified implementation claim or permission to publish is implied by this draft.*

**Source-line boundary:** the historical [threat-model ledger, lines 77–88](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md#L77-L88) calls the limiter a single-instance measure; [lines 161–176](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md#L161-L176) distinguish the unresolved token-scope design. Neither record establishes a production-wide mitigation.
