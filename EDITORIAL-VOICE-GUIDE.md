# Sails Protocol Blog: Editorial Voice and Multilingual Guide

Status: DRAFT, editorial review required. Applies to EN, PT-BR and ES.

## Purpose

Explain the questions, tradeoffs and evidence behind building Sails Protocol, with enough clarity for people to learn and enough precision for AI systems to interpret concepts without inventing capabilities.

## Voice

- Write like an engineer explaining a discovery to a thoughtful peer. Natural, curious, specific and modest.
- Begin with a real question or recognizable friction, then examine alternatives, constraints and the architectural choice.
- Do not use em dashes in prose. Prefer short sentences, commas, colons and full stops.
- Avoid generic hype, artificial drama, repetitive rhetorical formulas and claims of being the first or only solution.
- Do not treat every design decision as inevitable. Explain why an alternative was considered and what remains uncertain.
- Use examples, precise terminology and accessible explanations before introducing implementation detail.
- Make explicit whether a capability is implemented, under validation, planned or conceptual.
- Never claim production readiness, safety guarantees, custody properties or protocol-wide adoption without approved evidence.

## Multilingual policy

- Publish coordinated EN, PT-BR and ES editions.
- English is the editorial reference; Portuguese and Spanish are adapted for natural fluency, not literal translations.
- Keep technical identifiers, SDK package names, API fields, code and canonical product names unchanged.
- Keep architectural definitions and maturity qualifiers semantically identical across languages.
- Each edition requires native-language proofreading and technical review before publication.

## Structure for articles

1. A question or concrete problem.
2. Why the existing approaches help, and where tradeoffs appear.
3. The reasoning that motivated our design.
4. How the relevant Sails components fit together.
5. What is implemented today, what is being validated and what is on the roadmap.
6. References to code, docs and CTO-approved evidence where claims are testable.
7. Open questions or what we are exploring next.

This is a guideline, not a rigid template. Vary rhythm and structure to suit the story.

## Terminology

- Sails Protocol: the coordination protocol, not an application or a claim of deployed network-wide functionality.
- Sails Core: pure semantic core.
- Sails Node: a node implementation of the protocol.
- Sails P2P Trading SDK: first SDK/product in the modular family.
- Sails Market: reference web application, distinct from the protocol.
- Satsails Wallet: a separate wallet/application integration.

Avoid presenting all external integrations, wallets, rails and future modules as already shipping.

## Editorial gate

Draft -> factual review against repository and approved decisions -> translation/adaptation -> independent language review -> technical/CTO approval -> owner publication approval.

A draft or CI PASS is not permission to publish. No content merge or production release without explicit authorization.
