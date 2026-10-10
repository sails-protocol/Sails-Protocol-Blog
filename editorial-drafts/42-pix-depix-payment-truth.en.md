# PIX and DePix: Payment Proof Is Not Payment Truth

*Season 7 / Temporada 7. Editorial draft. Source and CTO review pending.*

## Question

A buyer uploads a receipt while the seller has not received funds. The document may be genuine, forged, duplicated or refer to another transfer.

## Boundary and decision

Separate the participant's claim, the provenance of the evidence, the payment provider's authenticated observation and the trade's authorized transition. PIX is a Brazilian payment rail; DePix represents a different asset and settlement context. Do not assume their reversibility, timing or verification rules are identical.

## Failure and evidence

An attacker resends a previous receipt with a new trade ID. The system must not equate a plausible image with settled value. Verify provider identifiers, amount, currency, beneficiary, freshness and finality policy at the relevant authority boundary.

*No production implementation or publication approval is asserted.*
