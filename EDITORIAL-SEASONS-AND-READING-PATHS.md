# Sails Protocol Blog: Seasons and Reading Paths

Status: editorial planning draft. Nothing in this file authorizes publication.

## Reading experience

The blog is a connected learning journey, not a collection of disconnected posts.

Every published article should provide:
- **Series** and position within the series.
- **Previously in this series** with a link to the previous published article, when available.
- **Read next** with a link to the next published article, when available. Never link to unpublished drafts.
- **Explore the concept** links to related articles, where relevant.
- **Sources and evidence** separating background documentation, design decisions, implementation evidence and future plans.
- **Last technical review** date and maturity statement when discussing changing implementation.

Use explicit HTML links in published pages, not only plain text. Localized links should remain within the reader's language where that edition exists. Provide language alternatives through hreflang/canonical metadata and visible language navigation once multilingual routing is implemented.

Do not fabricate links, commits, issues, approvals or source-of-truth claims. Drafts may carry pending reference placeholders clearly labeled as such; remove or resolve them before publication.

## Season 1: Why Sails Exists

1. Introducing Sails Protocol
2. Why P2P Markets Need Better Coordination
3. Understanding the Sails Architecture
4. Introducing the Sails P2P Trading SDK
5. Trust, Evidence and Settlement in P2P Markets

Learning arc: motivation -> coordination problem -> architecture -> first integration product -> trust boundaries.

## Season 2: Engineering Economic Coordination

6. Why Idempotency Matters in P2P Trading
7. Concurrency: When Two Requests Race
8. Crash Recovery and the Meaning of Exactly Once
9. Identity and Authorization Are Different Questions
10. Evidence, Provenance and Resource Limits
11. Reputation: What Can Travel Between Applications?
12. Settlement, Finality and External Payment Truth
13. Designing for Adversarial Nodes and Untrusted Providers

Learning arc: failures -> authority -> evidence -> portability -> finality -> adversarial validation.

## Season 3: Building on the Protocol (planned)

14. Integrating a P2P Trading SDK into a Wallet
15. Why a Reference Market Should Not Own Its Own Liquidity
16. Wallets, Nodes and Application Boundaries
17. Private Trading Rooms and Open Markets
18. Modular Integrations: What Is Protocol and What Is External
19. From Design Decisions to Production Evidence

All Season 2 and 3 topics are editorial plans, not statements that features are released.

## Source taxonomy

- **Conceptual reference:** explains a principle or existing industry practice.
- **Architecture decision:** records why a design was selected; not proof it shipped.
- **Implementation reference:** specific repository path and immutable commit SHA.
- **Verification evidence:** test result, CI run, scenario and SHA, with explicit scope.
- **Operational evidence:** production or beta observation, only when approved and reproducible.
- **Roadmap:** planned or exploratory, never represented as delivered.

## Multilingual policy

Each article should have coordinated EN, PT-BR and ES editions. Cross-article recommendations must preserve the reader's language. Never show an English-only next link as if its localized counterpart exists.

## Release gate

The reading path, recommendations, citations, localized URLs, accessibility and search metadata require technical verification before production. Editorial drafts remain outside the public route until approved.

## Season 4: Beyond the Trading SDK (first drafts exist)

20. Beyond P2P Trading: The Sails Protocol Vision
21. OpenIdentity: Identity Without Platform Lock-in
22. OpenProof: Verifiable Evidence for P2P Systems
23. OpenReputation: Trust Across Applications
24. OpenSettlement: Coordinating Different Payment Rails
25. OpenLiquidity: Connecting Fragmented P2P Markets
26. OpenAgents: Economic Coordination for AI Agents
27. OpenFinance and the Future of P2P Applications

This season concerns design directions and roadmaps, not an assertion that every module is shipped.

## Editorial coverage gaps to address before claiming comprehensive Day 0 coverage

**Proposed Season 5: Developer Journey and Interoperability**
28. First Integration: From SDK Installation to a Safe P2P Trade
29. State Machines and Economic Invariants in Practice
30. Adapters and Wallet Boundaries: WDK, BDK and External Signing
31. Protocol Contracts, Schemas and Version Compatibility
32. Operating a Sails Node: Responsibilities and Failure Boundaries
33. Observability, Error Semantics and Debugging Distributed Trades
34. Integrating External Providers Without Delegating Economic Truth

**Proposed Season 6: Security, Verification and Production Readiness**
35. Threat Modeling a P2P Economic Protocol
36. Byzantine and Malicious Nodes: What Must Be Assumed
37. Restart, Replay and Recovery: A Verification Playbook
38. Privacy, Metadata and Identity Linkability
39. Resource Exhaustion, Rate Limits and Evidence Abuse
40. From CI to Production: What a Passing Test Does Not Prove
41. Incident Reviews, Operational Transparency and Change Control

**Proposed Season 7: Real-World Economic Flows**
42. PIX and DePix: Distinguishing Payment Proof From Payment Truth
43. Non-Custodial Escrow and Dispute Authority
44. Fees, Incentives and Economic Sustainability
45. Private Rooms, Public Offers and Market Abuse
46. Cross-Rail Settlement and Liquidity Routing Tradeoffs
47. Satsails Wallet and Sails Market: Two Applications, One Protocol
48. Open Protocol Governance and Compatibility Over Time

These are **proposed titles only**, not authored articles or promises of implementation. Avoid duplicating Seasons 1-4: each new article must demonstrate a distinct question, example, failure boundary and evidence path. Reconcile with actual repository implementation and CTO policy before drafting.

**Day 0 intent:** publish all articles that pass review simultaneously, not a staggered posting calendar. Coverage breadth never waives factual, technical, language, accessibility or owner approval gates.
