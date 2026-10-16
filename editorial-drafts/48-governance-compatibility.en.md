# Open Protocol Governance and Compatibility Over Time

*Season 7. Editorial draft. Source and CTO review pending.*

## Question

A protocol evolves while applications and nodes upgrade at different speeds. A change that looks minor to one developer can redefine an economic field for another.

## Decision: compatibility must name the exact property

A version number is not a substitute for an economic contract. A client can decode a message successfully and still interpret a fee, settlement outcome or authorization condition differently. A credible compatibility claim names the schema or ruleset identity, the implementation pair, the operation, the rail and the tests that would fail if the meaning drifted. The invariant constitution explicitly separates architectural principles from enforceable obligations and executable proof.

## Failure: algebra conformance becomes a blanket claim

The inspected condition-algebra record demonstrates a bounded evaluator property, while explicitly stating that the published ruleset does **not** compose conditions. Calling this full ruleset-composition conformance would expand the claim beyond the test. Provider-substitution evidence likewise supports selected properties but not universal interoperability. Governance should publish both what passed and what was not tested, with migration rules for changes to economic meaning.


## Boundary and decision

Governance should distinguish proposals, reviewed policy, implementation, verification and deployment. Compatibility needs versioned schemas, explicit breaking-change policy, migrations and transparent deprecation. A CTO decision freeze is not the same as universal community consensus.

## Failure and evidence

A client interprets a changed fee denomination as the old one. Even if both sides compile, the result can be economically wrong. Publish exact version contracts and migration tests before declaring backward compatibility.

*No production implementation or publication approval is asserted.*

## Governance is a claim hierarchy, not a release label

The protocol's invariant document distinguishes architectural laws, concrete implementation obligations and executable evidence where testable. The condition-algebra conformance record explicitly proves a bounded algebra property while noting that the published ruleset does not itself compose conditions. Provider-substitution evidence likewise supports selected properties, not full K3 or universal interoperability. Publishing a version or passing one harness does not certify the whole protocol.

**Compatibility gate:** name the exact ruleset identity, protocol/SDK version, rail, independent implementation and falsifiable test vector. Preserve a migration story when semantics change; do not turn a single conformance PASS into universal compatibility.

**Negative compatibility vector:** use two independently built clients at different schema/ruleset revisions. Have both parse the same trade message, then change one economically meaningful field interpretation (fee denomination, beneficiary identity or settlement condition). A successful parse is insufficient: require identical authorized economic outputs or an explicit version rejection. This is a proposed verification scenario, not a reported conformance run.

### Source and maturity

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/CONDITION_ALGEBRA_CONFORMANCE_EVIDENCE.md
- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROVIDER_SUBSTITUTION_INVARIANCE_EVIDENCE.md

*Historical evidence/source inspection only; no latest-head test or publication approval.*