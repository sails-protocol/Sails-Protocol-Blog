# Privacy, Metadata and Identity Linkability

*Season 6 / Temporada 6. Editorial draft only. Source audit and approval pending.*

## Question

A portable identifier may simplify sign-in across applications while also making unrelated trades easier to correlate. Portability and privacy are not automatically aligned.

## Boundaries and tradeoffs

Threat-model public identifiers, timestamps, offer history, evidence metadata, provider IDs and logs. Prefer data minimization, scoped disclosure and clear retention rules. Signing with a key does not mean every counterparty should learn the same permanent identity.

## Failure and verification

A privacy claim requires tracing actual data flows, storage and network observability. This article does not assert that a deployed implementation provides anonymity.

*No verified implementation claim or permission to publish is implied by this draft.*

## Source evidence and failure boundary

Threat catalogs and identity design do not prove unlinkability or deployed privacy protections. The next gate is exact-head operational verification; this source citation does not grant release approval.

- [THREAT_MODEL.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md)

## Concrete linkability test

A trader uses the same public identity in two otherwise unrelated applications. An observer combines timestamps, repeated offer amounts, provider references and a stable identifier to infer that both activity streams belong to one person. Neither application publishes a legal name, yet the combined metadata may still identify behavior.

**Trade-off:** a universal identifier makes account portability and reputation lookup easier, but can create a persistent cross-market tracking key. Pairwise identifiers and selective disclosure reduce linkability while complicating recovery, dispute evidence and reputation portability.

**Next test:** enumerate which fields leave each client, node, WebSocket, log and evidence provider; then attempt to correlate two trades with only publicly observable data. Measure the retention and access scope of each identifier. This is a proposed privacy audit, not evidence of deployed anonymity or unlinkability.
