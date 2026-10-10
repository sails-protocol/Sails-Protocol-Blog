# Material technical residuals for CTO review — editorial Wave A

**Date:** 2026-10-10. **Disposition:** OPEN. This is a source-to-editorial handoff, not a request to interrupt implementation or change the protocol.

## R-01 — Recovery coverage across settlement paths

The [Recovery/Reconciliation Conformance Evidence](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/RECOVERY_RECONCILIATION_CONFORMANCE_EVIDENCE.md) explicitly identifies M9 automated recovery as MULTISIG-scoped, with no equivalent automated crash recovery for LIGHTNING_HODL, WDK_USDT_EVM or SAFE_GUARD_EVM in the recorded scope. The unresolved policy question is **which rails survive and what recovery obligations each requires**, not an instruction to implement every rail immediately.

**Editorial action:** corrected article 37 EN/PT-BR/ES; do not market generic cross-rail crash safety.

## R-02 — Independent verifiability of authority → outcome → destination

The [Durable Protocol Truth Evidence](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/DURABLE_PROTOCOL_TRUTH_EVIDENCE.md) identifies missing independent cryptographic binding, most sharply Outcome → DestinationBinding, even for MULTISIG, and missing participant export capability. It calls this a gap in an unproven property, **not** an active violation or exploited attack. The investigation explicitly does not prescribe a mechanism or implement a fix.

**Editorial action:** corrected article 36 EN/PT-BR/ES; do not assert operator-independent proof of all economic outcomes.

## R-03 — Evidence hierarchy

The same records distinguish conformance tests, source inspection, historical exact-head results, external-network execution and operator-independent verification. The claim hierarchy must not collapse these into one PASS.

**Editorial action:** corrected article 40 EN/PT-BR/ES.

## CTO decision required only at the existing gate

1. Confirm whether these documented residuals remain open at the latest authoritative Protocol HEAD or identify the exact commits/evidence that supersede them.
2. Confirm permitted public maturity wording for each settlement rail and independent-verifiability claim.
3. Keep Browser Gate and editorial G1/G2 independent; do not merge or publish on this handoff.

**NO MATERIAL FINDING UNDER THE RUG.**
