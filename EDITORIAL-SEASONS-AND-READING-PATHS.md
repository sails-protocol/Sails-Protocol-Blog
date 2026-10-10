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
