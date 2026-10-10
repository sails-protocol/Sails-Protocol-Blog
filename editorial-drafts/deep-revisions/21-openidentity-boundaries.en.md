# OpenIdentity: Names Are Not Authorization

*Editorial deep-draft. Not approved for publication. Season 4 / Article 21 companion revision. Do not promote over the original article before review.*

## The question

Alice wants to trade with Bob. She sees a familiar name, a public key and a signed message. Which of those proves that Bob can authorize a specific economic action?

A handle helps a person find another person. A public key can verify a signature. Neither automatically proves that the key holder owns an account, is the intended trade participant, or can release escrow.

## Identity is a layered problem

The proposed OpenIdentity boundary should distinguish five steps:

1. **Identifier:** a human-readable name, key or reference supplied by the user.
2. **Resolution:** a current binding between the name and cryptographic material, with a defined source and freshness.
3. **Proof of possession:** a signed challenge bound to a nonce, audience, action and expiry.
4. **Participant binding:** an explicit, durable association between the verified key and a Sails participant or account.
5. **Authorization:** the separate decision that this actor may perform this transition on this trade at this moment.

Collapsing steps 2 through 5 creates a confused-deputy risk. A correctly signed message may be signed by the wrong actor, for the wrong trade, or after authority was revoked.

## Where the external technologies fit

**Pubky** explores public-key-based identity and portable published data. Its homeserver and discovery model may help resolve profiles, but a profile is not a trade authorization.

**Nostr** uses public keys and signed events. A relay delivers events; it does not validate their economic meaning. An event's author is not automatically the seller entitled to release assets.

**Spaces Protocol** offers a Bitcoin-anchored naming model. A readable name can improve discovery and verification, but OpenIdentity must still define the trusted resolution snapshot, binding and key-change policy.

These are **candidate integration surfaces**, not a statement that Sails ships all three.

## Failure: a name changes during an open trade

Bob opens a trade while Alice's application resolves his handle to key K1. Later the name points to K2. An attacker resends a previously signed confirmation from K1 through a relay.

A robust design needs an explicit answer to whether the trade is bound to K1, K2, a stable participant identity, or a reviewed rotation event. It also needs replay protection and a transition-level authorization check. Neither a name lookup nor the transport layer can make that policy decision.

## Decision and evidence

A portable identity interface is attractive because wallets and markets can share identity context. The tradeoff is linkability and key lifecycle complexity. Sails must not claim anonymity, safe rotation or interoperable identity until the concrete bindings and adversarial tests are reviewed.

**Maturity:** conceptual architecture and editorial proposal. Source audit pending. No assertion of deployed Pubky, Nostr or Spaces integration.

## Next question

Once we know who signed a message, how do we know it arrived safely, only once, and in the right order? That belongs to the Sails Node transport boundary, not to OpenIdentity.

## Primary references to verify

- https://spacesprotocol.org/
- https://pubky.org/
- https://github.com/nostr-protocol/nips/blob/master/01.md
- Sails Protocol exact source commit and identity policy: **pending**.
