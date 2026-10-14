# Resource Exhaustion, Rate Limits and Evidence Abuse

*Season 6. Editorial draft only. Source audit and approval pending.*

## Question

A small-looking JSON payload can trigger expensive parsing, hashing or storage. A malicious participant can exploit the gap between accepted requests and bounded work.

## Decision: reject before the expensive boundary

An attacker can use many small requests as effectively as one oversized upload. A complete budget therefore needs limits on individual bytes, nesting/complexity, references per proof, cumulative storage and attempts, attributed to durable identities rather than a process-local counter. The inspected evidence-descriptor schema shows the explicit `externalReference: true` marker; it does not itself prove those budgets. Service-side pointer exclusivity and an OpenProof media hash are different checks again.

## Failure: an external pointer masquerades as verified media

A client submits a raw URI while presenting it as an integrity-bound evidence reference. Accepting the descriptor without checking its declared type would allow a false provenance claim. A second failure occurs if the system rejects a payload only after writing bytes or emitting events. The publication gate should demand exact-boundary acceptance, +1 rejection and zero side effects, using the actual service path and durable quota ledger.

## Failure and verification

Boundary tests should show exact-limit acceptance, one-unit-over rejection and zero downstream effects after rejection. Policy numbers must be checked against approved current decisions and implementation before publication.

## Evidence descriptors are not uploaded evidence

The dispute HTTP schema preserves `evidenceReferenceId` and the explicit `externalReference: true` marker. A raw URI is not silently upgraded to an integrity-bound OpenProof reference: the service checks mutually exclusive pointer forms and requires the external-reference declaration. The evidence provider interface deliberately separates stored bytes and metadata from proof authority. This is an input-trust boundary, not proof that all resource quotas, upload sizes, JSON depth or cumulative budgets are enforced in production.

**Abuse test:** submit oversized nested descriptors, repeated evidence references, and external URIs pretending to be verified media. Demand exact enforcement code, rejection-with-zero-side-effects evidence and per-scope accounting before claiming comprehensive resource protection.

**Source-specific limitation:** the shared Zod descriptor schema preserves fields, while mutual exclusivity between a raw `uri` and `evidenceReferenceId` is explicitly enforced later in the dispute service, not by the schema itself. The provider's `store()`/`retrieve()` contract covers media storage and hashing, not the authority of the proof signature. Neither source alone certifies upload quota enforcement.

## Next question

Which actor and proof scopes own the durable budget when concurrent requests arrive on different workers, and what exact-head tests demonstrate that a rejected request leaves neither stored evidence nor an authoritative quota debit?

### Source and verification status

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/evidence-descriptor-schema.ts
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/evidence-provider.ts

*Source inspection only. No new quota test, production execution, CTO approval or publication.*

*No verified implementation claim or permission to publish is implied by this draft.*
