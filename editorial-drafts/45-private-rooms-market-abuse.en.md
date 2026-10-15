# Private Rooms, Public Offers and Market Abuse

*Season 7. Editorial draft. Source and CTO review pending.*

## Question

A private trading room can improve coordination among known participants, but can also conceal abusive terms, impersonation or selective visibility.

## Boundary and decision

Separate room membership, offer discovery, access control and economic authorization. A room administrator should not silently inherit signing authority over participant wallets. Public and private offers may share trade semantics while exposing different metadata.

## Failure and evidence

A revoked room member attempts to accept a cached offer. The node must evaluate current authorization and explicit offer validity rather than trusting the old UI. Privacy and moderation policies remain open design questions.

*No production implementation or publication approval is asserted.*

## Evidence boundary

Private-room access controls do not alone prevent collusion, Sybil activity or market abuse. **Failure:** mistaking documented intent for verified production behavior. Exact-head runtime evidence and release approval remain pending.

- [THREAT_MODEL.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md)

## Failure drill: revoked access and stale offers

A room moderator revokes a participant while the participant's browser still holds a cached offer. The browser submits acceptance after revocation; a second account controlled by the same actor attempts to re-enter under a new identifier. A private-room badge is not proof of current membership, honest pricing or independent identity.

**Trade-off:** private discovery reduces unsolicited exposure but can also hide discriminatory terms or coordinated manipulation. The room's membership policy must be separate from trade authority, and any moderation rule needs an appeal and audit boundary.

**Authorization race to review:** capture the exact membership version and offer version read by the acceptance handler, then revoke access between that read and economic commit. A correct outcome requires either a transactionally valid authorization snapshot or rejection before any settlement side effect; checking a browser badge is insufficient. This is a proposed concurrency test. The pinned threat catalog does not establish that a production private-room authorization path exists.

**Next test:** race membership revocation with offer acceptance across two sessions, replay a stale offer and verify rejection without an economic side effect. Independently review abuse reporting and what room metadata leaks to outsiders. This is a proposed test, not evidence that private rooms are deployed.

