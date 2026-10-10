# Byzantine and Malicious Nodes: What Must Be Assumed

*Season 6 / Temporada 6. Editorial draft only. Source audit and approval pending.*

## Question

A node can be online and still be dishonest. Availability checks do not establish that its trade status, signatures or external observations are correct.

## Boundaries and tradeoffs

Distinguish a malicious participant, a compromised operator and colluding nodes. Ask which transitions can be independently verified, which facts rely on a provider and where the protocol must fail closed. A multi-node deployment alone does not prove Byzantine fault tolerance.

## Failure and verification

This topic belongs to adversarial readiness. Any claim of Byzantine resilience requires a defined fault model, test topology and evidence beyond conceptual diagrams.

*No verified implementation claim or permission to publish is implied by this draft.*

## Independent verifiability is an open property

The Durable Protocol Truth investigation identifies a material missing property: an independent verifier cannot yet establish the full signed Authority → Outcome → DestinationBinding relationship without trusting operator-held associations. The report narrows the strongest gap to Outcome → DestinationBinding, even for MULTISIG, and records the absence of participant export capability for the facts. This is a documented design/evidence gap, not proof of a presently exploited attack.

**Adversarial question:** if an operator alters its database association or withholds evidence, what independently exported, cryptographically bound artifact lets another node verify the authorized destination? No universal Byzantine-resistance claim is justified by the inspected evidence.

### Evidence ledger

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/DURABLE_PROTOCOL_TRUTH_EVIDENCE.md

*Historical evidence record and source inspection; latest deployment, CTO review and publication remain unverified.*
