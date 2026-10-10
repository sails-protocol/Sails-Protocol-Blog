# OpenProof: Verifiable Evidence for P2P Systems

*Editorial draft. Season 4. Not approved for publication.*

## The question

What can a trading system actually prove when a participant uploads a receipt? A file can be genuine and still refer to the wrong payment. Authenticity of bytes is not the same as truth of the claim.

## The boundary and decision

OpenProof aims to record attributable evidence without turning the evidence store into a bank or settlement oracle. In the inspected proof service, an Ed25519 signature binds a SHA-256 digest of media to a key. The service also checks access to the associated claim. This can support provenance; it cannot independently establish that a transfer settled. Larger or non-inline evidence belongs on the EvidenceProvider path, with resource policies verified separately from the conceptual model.

## Failure and verification

A buyer submits an authentic receipt for an unrelated transfer. The signature verifies, but the seller has not been paid. A safe workflow must keep provenance, relevance and external payment confirmation separate. Another failure is accepting oversized evidence before enforcing resource limits. Exact-head boundary tests should demonstrate rejection without downstream economic, storage or event side effects; no such new runtime test was run for this article.

## The next question

Who is authorized to submit each reference, and what independent authority can connect the evidence to the actual payment?

## Conceptual flow

```mermaid
flowchart LR
 A["Design intent"] --> B["Bounded integration"]
 B --> C["Independent verification"]
```

Text equivalent: the proposal progresses from design intent to a bounded integration and then to independent verification. This is not an implementation status report.

*Pending: source-of-truth verification, specific citations, editorial review and owner approval.*

## Inspected boundary, not production certification

Signed media attribution is not independent payment truth. **Failure:** confusing a documented design with deployed behavior. Exact-head integration and runtime verification remain required.

- [proof.service.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/proof.service.ts)
