# Identity, Naming and P2P Transport: Spaces, Pubky, Nostr, Pear and Iroh

*Editorial research note for Day 0. Not approved for publication. No claim that all technologies are integrated.*

## The question

How can a P2P application find and authenticate a counterparty, connect to that counterparty, exchange messages, and still enforce the correct economic rules when networks fail or an actor lies?

The answer requires separating **naming**, **identity**, **discovery**, **transport**, **data replication** and **economic authorization**. These are different jobs.

## Technology map (primary-source orientation)

| Technology | Main relevant role | What it does not prove |
| --- | --- | --- |
| Spaces Protocol | Bitcoin-anchored sovereign naming and off-chain resolution, including verifiable handles | A resolved name does not itself authorize a trade or establish settlement |
| Pubky | Public-key-oriented identity, portable data and homeserver-based retrieval; PKARR/DHT discovery concepts | A public profile or homeserver record does not establish payment finality |
| Nostr | Signed events and relay-based publication/subscription, with public-key authorship | A signed event does not establish the truth of its contents or economic finality |
| Pear and underlying P2P modules | P2P app runtime/distribution; HyperDHT/Hyperswarm discovery, Hypercore replication, related modules | Replication or peer discovery is not economic consensus |
| Iroh | Endpoint-based direct connections with discovery and relay fallback, including encrypted transport | An encrypted connection authenticates a channel endpoint, not the user's right to move funds |

## Proposed Sails boundaries

**Identity binding:** Decide whether a Nostr pubkey, Pubky key or Spaces handle is an alias, an authentication principal or merely a discoverable pointer. Define explicit challenge/response and key rotation/recovery rules. A display name must never silently become authorization authority.

**Transport independence:** Treat Pear/P2P primitives, Iroh and Nostr relays as distinct options with different delivery, metadata, offline and replay semantics. No assumption that one is a drop-in replacement for another. The protocol's validated trade intent, authorization and durable state must not depend on a specific transport remaining connected.

**Economic state:** Payment provider claims, signed messages and naming proofs are inputs. A Sails node/implementation must enforce its own trade invariants, idempotency, provenance, escrow and settlement rules. Avoid claiming that the transport layer can make an off-chain payment irreversible.

## Concrete adversarial example

Alice resolves Bob's Spaces handle to a key and sends a signed trade intent via a transport. A malicious relay duplicates or delays the message while Bob rotates keys. The application must establish which key was authorized at the relevant time, reject replayed economic actions, and distinguish successful message delivery from a committed trade transition. A different transport cannot repair an incorrect authorization rule.

## Research questions for implementation audit

1. Which identity methods are implemented, experimental or only on the roadmap in the Sails Protocol code?
2. Is there a canonical identity-to-participant binding with proof of possession, expiration and rotation semantics?
3. Which transports are deployed, optional, proposed or incompatible with current SDK/runtime constraints?
4. How do messages survive offline operation, reordering, duplicate delivery and server restart?
5. What data and metadata are visible to relays, homeservers, network peers and observers?
6. Can a verified handle be substituted or rebound after a trade begins? Which key is authoritative?
7. What evidence shows that the same economic invariant survives across transport choices?

## Primary sources for factual audit

- Spaces: https://spacesprotocol.org/ (Bitcoin-anchored naming and off-chain resolution)
- Pubky: https://pubky.org/explore/pubky-protocol/homeserver/ (homeservers, PKARR and current public-data limitations)
- Nostr: https://github.com/nostr-protocol/nips/blob/master/01.md (signed events and WebSocket relays)
- Pear/P2P: https://docs.pears.com/p2p/ (runtime versus modular discovery/replication primitives)
- Iroh: https://www.iroh.computer/blog/the-road-to-iroh-1-0 (connection-focused scope); https://docs.iroh.computer/deployment/security-privacy (relay privacy tradeoffs)

Sources above explain upstream projects, **not evidence that Sails has implemented an integration**. Before publication, verify exact Sails source commits, architecture decisions and technical review. Prepare natural EN/PT-BR/ES versions, a specific boundary diagram and accessible text equivalent.

## Editorial placement

Keep the seven-season baseline intact. Add this as a **cross-cutting research dossier** feeding:
- Season 2 article 09 (identity versus authorization), article 13 (untrusted nodes);
- Season 4 article 21 (OpenIdentity);
- Season 5 article 30 (wallet and signing boundaries), article 34 (external providers);
- Season 6 article 38 (privacy and identity linkability).

If the dossier is accepted as a standalone article, record an explicit approved scope adjustment rather than silently changing the 48-topic baseline.

*NO MATERIAL FINDING UNDER THE RUG.*
