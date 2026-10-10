# Private Rooms, Public Offers and Market Abuse

*Season 7 / Temporada 7. Editorial draft. Source and CTO review pending.*

## Question

A private trading room can improve coordination among known participants, but can also conceal abusive terms, impersonation or selective visibility.

## Boundary and decision

Separate room membership, offer discovery, access control and economic authorization. A room administrator should not silently inherit signing authority over participant wallets. Public and private offers may share trade semantics while exposing different metadata.

## Failure and evidence

A revoked room member attempts to accept a cached offer. The node must evaluate current authorization and explicit offer validity rather than trusting the old UI. Privacy and moderation policies remain open design questions.

*No production implementation or publication approval is asserted.*
