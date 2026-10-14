# Threat Modeling a P2P Economic Protocol

*Season 6. Editorial draft only. Source audit and approval pending.*

## Question

A buyer, seller, operator and payment provider can each behave differently from the happy-path diagram. A threat model begins by identifying which of them may lie, disappear or lose access.

## Decision: make the attacker and the enforcement point explicit

A threat is not mitigated because a catalog names it. For each scenario, the review must identify the attacker, the asset at risk, the trust boundary, the implementation that enforces it and the remaining uncertainty. Consider a browser WebSocket: an HTTP rate limit does not automatically govern messages after upgrade. The threat model records a participant-scoped message limiter as a single-instance improvement, not a distributed guarantee. It also documents the risk of a full-privilege session token in a WebSocket query string. Those are separate boundaries and require separate evidence.

## Failure: security that exists only in the diagram

If multiple sockets or nodes can bypass a local counter, the rate-limit claim must state that scope. If a session URL is logged, a valid token can leak despite correct signature verification elsewhere. The source record describes historical findings; whether either residual is fixed in the current HEAD requires a new review, not an assumption.

## Boundaries and tradeoffs

Separate funds, signing keys, payment claims, evidence and trade state into assets with different authorities. Evaluate spoofed identity, forged receipts, duplicate requests, malicious nodes and unavailable providers. A mitigation is useful only if its enforcement boundary is explicit.

## Failure and verification

This is a threat-modeling framework, not a completed audit. Before publishing security claims, tie each threat to exact code, adversarial tests, residual risk and a dated technical review.

## Threat catalog versus demonstrated mitigation

The Sails threat catalog names Sybil attacks, fake liquidity and credential exposure, but it explicitly warns that documented mitigations are only real where implementation/deployment evidence exists. It also records a WebSocket credential exposure boundary: full-privilege session tokens in query strings can reach logs or history, and a separate narrow handshake token is a design decision rather than a deployed fix in that record.

**Failure:** a logged WebSocket URL exposes a reusable session credential. Treat the risk as a documented residual and demand current-head remediation evidence before asserting secure credential scoping.

### Source and maturity

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md

*Historical evidence/source inspection only; no latest-head test or publication approval.*

*No verified implementation claim or permission to publish is implied by this draft.*
