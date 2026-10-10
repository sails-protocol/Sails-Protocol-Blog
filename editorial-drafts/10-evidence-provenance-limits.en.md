# Evidence, Provenance and Resource Limits

*Editorial draft. Not approved for publication.*

## The question

A screenshot may help explain a dispute, but a system must first answer more basic questions: who uploaded it, which proof it belongs to, how large it is and whether it is allowed to enter the workflow.

## The hidden tradeoff

Without limits, evidence becomes an attack surface. An attacker can submit oversized payloads, too many references or deeply nested data to consume resources before any human has a chance to review a claim. Boundaries need to be enforced before expensive processing, not merely documented in an API description.

## Our direction

In our OpenProof work, we have defined policies for inline evidence and provider-backed references, including authenticated provenance and cumulative quotas. A policy decision is not the same as complete enforcement across all routes and providers. We will publish precise values only with their version, scope and verified implementation status.

## What we need to verify

Evidence is also not truth by decree. A valid upload proves that a permitted actor submitted data under certain constraints. Whether that data establishes a payment, an agreement or misconduct remains a separate question for the relevant verification and dispute process.

## Conceptual diagram

```mermaid
flowchart TD
  A[Authenticated uploader] --> B{Payload within limits?}
  B -->|No| C[Reject before processing]
  B -->|Yes| D[Associate evidence with proof]
  D --> E[Review evidence separately]
```

This diagram illustrates a design principle, not verified runtime behavior.


## Verified evidence boundary

In `ProofService.attachEvidence()`, the service first checks economic scope access to the Claim, then verifies an Ed25519 signature against the submitter's registered key over the SHA-256 digest of the media. A valid signature proves signer attribution and byte integrity, **not** that a bank payment occurred. The evidence provider stores bytes and returns storage metadata; storage metadata is not proof validity. Local filesystem is a reference-only default, while an S3-compatible provider is available for production-oriented storage. Do not assert Day-0 quotas or inline resource limits without inspecting their current enforcement paths.

**Failure:** a user signs genuine media but attempts to attach it to another user's unrelated proof. Signature validity alone would not authorize that action; the claim-scope check must precede storage.

### Source ledger

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/proof.service.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/evidence-provider.ts

*Source-inspected; external payment verification, live tests, CTO review and publication pending.*
