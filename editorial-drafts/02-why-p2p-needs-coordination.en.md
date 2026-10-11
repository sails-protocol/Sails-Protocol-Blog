# Why P2P Markets Need Better Coordination

*Editorial draft. Not approved for publication.*

A peer-to-peer trade sounds simple: one person wants to buy, another wants to sell, and they agree on a price.

But agreeing is only the beginning.

Imagine a buyer who has sent a bank transfer and a seller who says the payment has not arrived. The buyer has a receipt. The seller sees no matching deposit. Neither person can safely infer the other's view from their own screen.

A marketplace helps by giving both parties a shared workflow. It can define payment windows, collect evidence, track trade status and provide a dispute process. Established P2P platforms have made these mechanisms useful at scale. They solve real problems, not merely interface problems.

The interesting question is what happens when those mechanisms are inseparable from the platform that provides them.

A wallet may want to offer P2P trading without becoming a full marketplace. Another application may want private trading groups, different payment methods or a distinct reputation model. A third may want to reuse coordination rules while keeping its own interface. Rebuilding every workflow independently creates duplicated work and, more importantly, inconsistent behavior when something goes wrong.

We began to think of coordination as a distinct problem.

Consider five questions that every trading system must answer. Who is authorized to act? What trade state is authoritative? What evidence can be submitted and by whom? What changes when a dispute begins? And which conditions permit an economic action to become final?

These questions connect. An identity check is not useful if the actor can later perform an unauthorized transition. Evidence is not reliable if its ownership or limits are ambiguous. A completed trade is not safe to record twice simply because two requests arrive together.

That is why our work on Sails Protocol is not only about connecting buyers and sellers. We are exploring reusable rules and interfaces for coordinating the lifecycle of an exchange, including failures, retries and disagreements.

This does not remove the need for marketplaces, payment providers, wallets or human judgment. Different applications will still make product decisions. External payment systems remain external. A protocol cannot make a bank transfer irreversible or guarantee that an off-chain statement is true.

The goal is narrower and, we think, more useful: make the coordination layer explicit enough to reason about, test and integrate.

The first place we are testing this approach is the Sails P2P Trading SDK. Its implementation and operational readiness must be evaluated against real code and approved evidence, not inferred from the ideas in this article.

Next, we will look at the components of the architecture and why we separate a protocol, a semantic core, node implementations, SDKs and applications.

## Evidence boundary and failure mode

Trade authorization and durable state are concrete service responsibilities, not proof of cross-platform coordination. **Failure:** interpreting this architectural or source-inspected statement as current production verification. Exact-head tests and approval are still required.

- [trade.service.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)

*Technical review pending. This article describes design motivation, not a guarantee of implemented capabilities or production readiness.*
