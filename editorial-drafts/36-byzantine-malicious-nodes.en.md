# Byzantine and Malicious Nodes: What Must Be Assumed

*Season 6 / Temporada 6. Editorial draft only. Source audit and approval pending.*

## Question

A node can be online and still be dishonest. Availability checks do not establish that its trade status, signatures or external observations are correct.

## Boundaries and tradeoffs

Distinguish a malicious participant, a compromised operator and colluding nodes. Ask which transitions can be independently verified, which facts rely on a provider and where the protocol must fail closed. A multi-node deployment alone does not prove Byzantine fault tolerance.

## Failure and verification

This topic belongs to adversarial readiness. Any claim of Byzantine resilience requires a defined fault model, test topology and evidence beyond conceptual diagrams.

*No verified implementation claim or permission to publish is implied by this draft.*
