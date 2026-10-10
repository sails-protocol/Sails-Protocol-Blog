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
