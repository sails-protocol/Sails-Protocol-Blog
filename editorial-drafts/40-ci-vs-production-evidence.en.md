# From CI to Production: What a Passing Test Does Not Prove

*Season 6 / Temporada 6. Editorial draft only. Source audit and approval pending.*

## Question

A green pipeline tells us that a defined set of checks passed on a particular revision. It does not tell us that a provider behaved correctly, that the deployment matches the revision or that a real payment settled.

## Boundaries and tradeoffs

Keep a chain of evidence: requirement, invariant, source commit, test environment, observed result, release artifact and operational observation. Distinguish mocked integration tests from real database and external-provider validation.

## Failure and verification

Publication should quote exact scope and known blind spots. A passing check is evidence for that check, not universal proof of safety or production readiness.

*No verified implementation claim or permission to publish is implied by this draft.*

## What the evidence records actually prove

The Recovery/Reconciliation Conformance report distinguishes reused tests and scoped MULTISIG recovery from unproven cross-rail automation. The Durable Protocol Truth report is expressly investigation-only and documents independent-verification gaps rather than a passed production property. A CI result, a documented investigation, a conformance suite and a live provider receipt answer different questions. None can substitute for the others.

**Review rule:** each claim needs the exact commit, environment, rail, failure injection, result and residuals. If a test used mocks, state which properties were mocked; if the investigation found a missing property, preserve it in the public-facing maturity statement.

### Evidence ledger

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/RECOVERY_RECONCILIATION_CONFORMANCE_EVIDENCE.md
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/DURABLE_PROTOCOL_TRUTH_EVIDENCE.md

*Historical evidence record and source inspection; latest deployment, CTO review and publication remain unverified.*
