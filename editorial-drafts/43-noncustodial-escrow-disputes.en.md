# Non-Custodial Escrow and Dispute Authority

*Season 7 / Temporada 7. Editorial draft. Source and CTO review pending.*

## Question

A seller locks an asset and the buyer claims to have paid. Who may release the asset when their stories conflict?

## Boundary and decision

Distinguish custody of signing keys, control of the locking mechanism, dispute adjudication and execution of a release. A non-custodial claim must describe the actual script, signatures and recovery paths, not merely say that the platform does not hold a wallet seed.

## Failure and evidence

A disputed trade times out while an arbiter is unavailable. Safe behavior depends on the specific escrow and timeout policy; no generic diagram proves recoverability. Verify supported rails and adversarial paths against the code.

*No production implementation or publication approval is asserted.*
