# Incident Reviews, Operational Transparency and Change Control

*Season 6 / Temporada 6. Editorial draft only. Source audit and approval pending.*

## Question

A service outage is not only an uptime statistic. It changes what users can safely assume about deposits, withdrawals and external settlement.

## Boundaries and tradeoffs

An incident review should distinguish observed symptoms, confirmed root cause, affected flows, mitigations, unresolved risks and recovery milestones. A protocol integrating external rails must separate its own actions from the operator's or network's actions.

## Failure and verification

Never use an incident narrative as proof of a security property. Cite official primary reports and the specific mitigation evidence; publish corrections when understanding changes.

*No verified implementation claim or permission to publish is implied by this draft.*

## Source evidence and failure boundary

A documented residual risk is not evidence of a current exploited incident or a deployed fix. The next gate is exact-head operational verification; this source citation does not grant release approval.

- [THREAT_MODEL.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md)

## Scenario: recovery of one flow is mistaken for recovery of all flows

After an external rail incident, an operator restores deposits but leaves one withdrawal or peg-out path suspended. A status banner says only "network restored." A user reasonably assumes every route is safe, even though the operator has verified only a subset. The communication failure is distinct from the technical failure.

**Trade-off:** a single short status is easy to distribute but obscures rail-specific risk. A per-flow status matrix is more demanding to maintain, yet separates observed recovery, remaining restrictions and unknowns. Public communication must not reveal secrets or unverified root causes.

**Next test:** construct a simulated incident timeline with a partial recovery, conflicting provider reports and a later correction. Require each update to name affected operations, evidence timestamp, residuals, owner and next verification. Compare the published status to the independently checked state of each flow. This is an editorial incident drill, not a claim about any current incident.
