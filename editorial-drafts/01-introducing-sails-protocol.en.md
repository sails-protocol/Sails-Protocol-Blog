# Introducing Sails Protocol

*Editorial draft. Not approved for publication.*

Why does trading directly with another person still require so much coordination behind the scenes?

A buyer and a seller can agree on a price in minutes. Completing the exchange is harder. They need to agree on how payment will be made, how an asset will be held or released, what counts as proof, and what happens if either side disagrees. Each decision brings its own risks.

Platforms have spent years making this experience easier. Many provide discovery, reputation, dispute resolution and payment workflows in one place. That convenience matters. It also raises a question we kept returning to: how much of this coordination has to belong to a single platform?

Sails Protocol grew out of that question.

We are exploring a modular way to coordinate peer-to-peer economic activity. The aim is not to replace every marketplace or wallet with one more destination. It is to make coordination capabilities available to applications that want to build their own experiences.

That distinction shaped the architecture. Sails Protocol describes the coordination model. Sails Core contains the semantic rules. Sails Node is an implementation of the protocol. The Sails P2P Trading SDK is our first focused product for integrating trading workflows. Sails Market is being planned as a reference web application, not as the protocol itself.

These names are not interchangeable. A wallet integrating an SDK is still a wallet. A marketplace remains responsible for its product and user experience. The protocol is the layer we are building to help those systems coordinate.

We also learned that a design is only as credible as its failure cases. What happens when a request is retried? When two actors race to complete a trade? When a process crashes after one step but before the next? When evidence arrives late or is too large? These are not edge cases to postpone until after launch. They are part of defining what the system means.

Our work on the first SDK therefore includes explicit boundaries for identity, evidence, economic state and settlement behavior. Some of those boundaries are implemented and tested; others remain subject to technical gates. We will describe each with its actual maturity rather than presenting a roadmap as a finished network.

This blog will follow the same method we use while building: ask the question, examine the alternatives, show the decision and revisit it when evidence changes.

Next, we will look more closely at why peer-to-peer markets need coordination and what existing platforms already do well.

*Technical review pending. Claims about implementation and readiness must be checked against the repository and CTO-approved evidence before publication.*
