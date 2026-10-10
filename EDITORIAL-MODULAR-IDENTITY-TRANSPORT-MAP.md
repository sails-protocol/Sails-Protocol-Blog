# Sails Protocol: Modular Ownership of Identity, Naming and Transport

**Status:** proposed editorial architecture mapping, pending CTO and exact-source verification. **Not an implementation declaration.**

## Principle

The Sails module family is the organizing model. Spaces, Pubky, Nostr, Pear and Iroh are technologies or protocols that may support different interfaces, not new Sails modules. Avoid a standalone 'integration zoo' or implying that all are shipped.

## Ownership map

| Concern | Owning Sails module / architectural layer | Candidate external technologies | Boundary |
| --- | --- | --- | --- |
| Identifier resolution, key proof-of-possession, authenticated actor binding, recovery | **OpenIdentity** | Pubky, Nostr keys, Spaces names | A resolved name or signed event does not authorize an economic transition |
| Peer discovery, messaging, connectivity, offline/replay handling | **Sails Node transport adapter layer** (cross-cutting, **not** a new protocol module) | Pear/P2P primitives, Iroh, Nostr relays | Message delivery is not economic consensus or settlement |
| Evidence provenance and verification | **OpenProof** | Signed events, key attestations, external evidence references | Authorship does not prove a payment claim is true |
| Portable history and reputation attribution | **OpenReputation** | OpenIdentity references, verified OpenProof outcomes | Identity correlation and reputation policy need privacy controls |
| Offers, participant roles and economic trade state | **OpenP2P / Sails P2P Trading SDK** | Consumes the above interfaces | A transport callback cannot bypass trade state authority |
| External rail observations and settlement coordination | **OpenSettlement** | Rail-specific adapters | A provider status is not universal finality |
| Multi-application or market discovery | **OpenLiquidity** (roadmap) | Discovery/indexing sources where appropriate | Liquidity visibility does not imply custody or own liquidity |
| Agents acting under bounded permissions | **OpenAgents** (roadmap) | Identity credentials, transport and proof interfaces | An agent's signed message does not grant unlimited economic authority |

## Example: named peer and disputed payment

1. Alice resolves a Spaces handle or Pubky identity for Bob; OpenIdentity determines the *verified* binding, subject to key rotation policy.
2. Alice communicates a trade intent through a configured transport such as Pear primitives, Iroh or Nostr relay events; the transport adapter handles its own delivery semantics.
3. OpenP2P verifies participant authority and economic preconditions before persisting a state transition.
4. OpenProof records and checks relevant provenance; OpenSettlement interprets provider-specific payment facts.
5. OpenReputation may consume verified outcomes, under a separately defined policy. It must not convert unverified claims into portable trust.

**Important:** this is a conceptual flow, not proof that these combinations work in production.

## Editorial placement: reuse existing seasons

- **Season 2, article 09:** Identity vs authorization, including key binding and name resolution.
- **Season 2, article 10:** Evidence and signed events, with explicit truth boundary.
- **Season 3, article 16:** Sails Node, transport adapters and wallet/application separation.
- **Season 4, article 21:** Main conceptual home for Pubky, Nostr and Spaces under OpenIdentity.
- **Season 4, article 22:** OpenProof evidence provenance.
- **Season 4, article 23:** OpenReputation identity linkage and privacy.
- **Season 4, article 24:** OpenSettlement independence from messaging transport.
- **Season 5, article 32:** Node runtime and transport choice, Pear/Iroh/Nostr.
- **Season 6, article 38:** Metadata, identity linkability and relay privacy.

Link these articles through a clear modular architecture diagram and reading path. Do not add an eighth season or a new Sails module by default.

## Engineering/source gates

- Locate exact Sails Protocol architecture documents and current code, recording immutable commit SHAs.
- Classify each technology and module as **implemented / under validation / approved design / roadmap / exploratory**.
- Verify whether Pear is an actual selected transport, and whether Iroh, Nostr, Pubky or Spaces are integrated, experimental or merely considered.
- Confirm the naming of OpenP2P, Sails Node and the SDK against current CTO-approved terminology.
- Verify identity proof-of-possession, rotation/revocation and privacy rules before stating guarantees.
- Add a specific diagram and EN/PT-BR/ES editorial editions only after factual review.
- No CTO/owner gate is waived.

**NO MATERIAL FINDING UNDER THE RUG.**
