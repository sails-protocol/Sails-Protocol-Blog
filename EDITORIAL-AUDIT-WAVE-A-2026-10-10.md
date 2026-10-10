# Source-backed technical audit, Wave A — first findings

**Audit date:** 2026-10-10  
**Sails source snapshot:** `sails-protocol/Sails-Protocol@be6d3bc2ddfc384cfafa4276e01b8aacc096d421` (default-branch snapshot surfaced by GitHub code search).  
**Scope:** targeted review of source and institutional documentation, not an exhaustive runtime test. **Publication gate: CLOSED.**

## Finding A-01 — Idempotency is conditional, not global

**Primary source:** [`src/common/idempotency.ts`](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/common/idempotency.ts).

The file explicitly documents client-supplied keys and says callers that omit a key get no protection from that mechanism. It also documents previously found defects: a successful durable create followed by bookkeeping failure; non-atomic FAILED retries; and post-persist exceptions incorrectly treated as absence of side effects. The design separates persistence from post-persist work and discusses an UNKNOWN status and atomic claim/reclaim.

**Editorial action:** Article 06 must not claim that every creation endpoint guarantees exactly-once execution. Article 08 must distinguish durable effect, response success, and recovery. Quote scope by operation and caller behavior, not an unqualified platform guarantee.

**Still unverified:** current deployed behavior, all API routes' key propagation, tests against real Postgres in current CI, exact failure recovery coverage. Do not mark as production-verified.

## Finding A-02 — Core participant identity is intentionally abstract

**Primary source:** [`docs/rfcs/RFC-001-participant-model.md`](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-001-participant-model.md).

The RFC explicitly accepts a `Participant` abstraction at the Core boundary, with `Identity` as one implementation, and excludes Wallet and Agent as direct peer implementations of Participant. Agent actions are delegated and attributable to the principal. An organization multisig participant is an illustrative future implementation, not a shipped integration.

**Editorial action:** Article 09 and article 21 must lead with Participant versus Identity versus authorization. Spaces/Pubky/Nostr must be described as candidate identity/resolution inputs, not equivalent economic principals or proven integrations.

**Still unverified:** actual runtime implementation of every RFC interface, key rotation, revocation, and integrations.

## Finding A-03 — Dual approval is not cryptographic multisig

**Primary source:** [`docs/rfcs/RFC-015-dual-authorization-escrow-release.md`](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-015-dual-authorization-escrow-release.md).

The RFC explicitly describes a **feature-flagged, off-by-default application-layer maker-checker gate** for a WDK EVM settlement path. It says this is **not on-chain multisig** and explains that the WDK package in that context is single-owner. This cannot be used as evidence for independent on-chain custody.

**Editorial action:** Article 43 must identify the exact escrow type, rail, custody/signing model and release mechanism before saying 'non-custodial'. Article 37 must treat independent signatures and app-layer approvals as different threat boundaries.

**Still unverified:** present flag configuration, actual deployed provider selection, current signature collection paths and live settlement tests.

## Finding A-04 — Security narrative contains scoped implementation differences

**Primary source:** [`docs/SECURITY_MODEL.md`](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/SECURITY_MODEL.md).

This document describes client-held-key multisig and Arkade-related flows with disclosed verification limitations; it also records a separate WDK provider gap involving a server-held seed and treasury. Consequently its high-level 'Sails never holds funds' principle **must not be presented as an unconditional property of every reference implementation and rail**. These sections require reconciliation against the exact current code and supported configuration.

**Editorial action:** Articles 03, 04, 12, 35, 37, 43 and 47 must distinguish protocol design goal, provider-specific implementation, verification environment and actual operational status. No universal custody guarantee until the CTO reviews this discrepancy.

**Severity:** MATERIAL EDITORIAL BLOCKER pending rail-by-rail custody matrix and source confirmation. This is a discrepancy between broad security principles and documented provider behavior, not proof of an active exploit.

## Next mechanical gates

1. Inspect current escrow provider implementations and release callers, documenting exact line-level custody/signature authority and deployment flags.
2. Trace idempotency key propagation through the SDK, API routes and creation services; map operations covered and uncovered.
3. Cross-check current CTO decisions, real Postgres tests, restart evidence and exact-head CI.
4. Amend the affected EN article drafts, then independently reconcile PT-BR and ES.
5. Record reviewers and approvals. Do not publish, merge or mark G2 complete.

**NO MATERIAL FINDING UNDER THE RUG.**
