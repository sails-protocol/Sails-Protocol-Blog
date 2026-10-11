# PIX and DePix: Payment Proof Is Not Payment Truth

*Season 7 / Temporada 7. Editorial draft. Source and CTO review pending.*

## Question

A buyer uploads a receipt while the seller has not received funds. The document may be genuine, forged, duplicated or refer to another transfer.

## Boundary and decision

Separate the participant's claim, the provenance of the evidence, the payment provider's authenticated observation and the trade's authorized transition. PIX is a Brazilian payment rail; DePix represents a different asset and settlement context. Do not assume their reversibility, timing or verification rules are identical.

## Failure and evidence

An attacker resends a previous receipt with a new trade ID. The system must not equate a plausible image with settled value. Verify provider identifiers, amount, currency, beneficiary, freshness and finality policy at the relevant authority boundary.

*No production implementation or publication approval is asserted.*

## Evidence is not payment truth

The inspected OpenProof path verifies who signed media and whether that person is authorized to attach it to a claim; it does not validate PIX or DePix settlement. A receipt screenshot, signed file or storage hash can be authentic yet economically misleading. Any claim of paid, irreversible or settled requires an identified external payment authority, matched transaction identifiers and the applicable confirmation/reversal rules.

**Failure:** a legitimate-looking PIX receipt is attached to a trade while the external payment is absent or later reversed. The protocol should preserve evidence provenance without treating it as payment confirmation. **Open gate:** inspect the actual PIX/DePix provider adapters and their authoritative callbacks before claiming automatic reconciliation.

### Source ledger

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/proof.service.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/evidence-provider.ts

*Source-inspected; external payment verification, live tests, CTO review and publication pending.*
