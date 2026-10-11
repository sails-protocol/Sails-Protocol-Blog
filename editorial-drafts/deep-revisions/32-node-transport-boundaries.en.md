# Sails Node Transport: Delivery Is Not Settlement

*Editorial deep-draft. Not approved for publication. Season 5 / Article 32 companion revision.*

## The question

Alice sends a signed trade intent, but Bob is offline. A relay stores it, another path delivers it twice, and the client reconnects after the node restarts. How does the trade stay consistent?

## Transport is a replaceable boundary

The Sails Node's proposed transport adapter boundary separates peer discovery, connection setup, message delivery, ordering, retries and reconnection from authenticated economic intent. **Pear** provides an application ecosystem with P2P primitives; **Iroh** focuses on direct endpoint connectivity with discovery and relay assistance; **Nostr** offers relay-mediated signed events. Their delivery and privacy properties differ. None can be assumed to be a drop-in replacement without tests.

The economic handler must validate the message schema, authenticate the actor and enforce transition preconditions against durable state. A successfully delivered message is not an accepted trade transition. A relay acknowledgment is not payment finality.

## Failure scenario

Bob receives an intent through Nostr and the same logical intent through another adapter. If the application treats each arrival as a new economic action, it can duplicate an effect. A safe design requires a stable intent identity, explicit replay semantics, idempotent transition handling and durable conflict resolution independent of the delivery path.

## Design choice

Pluggable transports reduce lock-in and can support different deployment constraints. The cost is a larger matrix of reconnection, identity binding, privacy and delivery tests. Keeping transport behind an adapter does not eliminate those differences; it makes them explicit.

## Evidence and status

This is a conceptual design article, **not** proof of Pear, Iroh or Nostr support in a released Sails Node. Verify source contracts, runtime topology, persistence tests and CTO decisions before publication.

## Next question

Once an event reaches the node, which evidence can justify a payment-related transition? See OpenProof and OpenSettlement.

## Upstream references to audit

- https://docs.pears.com/p2p/
- https://docs.iroh.computer/
- https://github.com/nostr-protocol/nips/blob/master/01.md
- Sails Node implementation source and approved transport contract: **pending**.
