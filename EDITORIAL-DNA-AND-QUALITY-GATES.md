# Sails Protocol Editorial DNA: The Evidence-Led Learning Loop

Status: proposed editorial operating standard. Not publication approval.

## Our method: Question -> Boundary -> Decision -> Failure -> Evidence -> Next Question

This is our own repeatable editorial process, derived from the actual engineering culture of Sails Protocol. It is not a claim that we invented each underlying practice.

1. **Question:** Open with a recognizable P2P failure or user decision, not a feature announcement.
2. **Boundary:** Name the actors, custody/signing boundary, economic authority and external systems. State what the protocol does not control.
3. **Decision:** Explain the design tradeoff, including a credible alternative and why it may be unsuitable here.
4. **Failure:** Walk through one concrete adversarial, concurrency, restart or integration failure. What could go wrong and what must not happen?
5. **Evidence:** Separate concept, approved policy, implementation, tested behavior and observed production. Provide immutable source references where available; mark missing evidence as pending.
6. **Next question:** Close with a real unresolved question and a relevant next article, never a fabricated feature claim.

## Article acceptance checklist

- One sentence that a thoughtful engineer would actually say aloud, not generic AI marketing language.
- At least one concrete scenario with actors, action and observable consequence.
- A substantive tradeoff or rejected alternative.
- Clear status: conceptual / planned / implementation under validation / verified in defined scope.
- Diagram only when it clarifies causality, state or trust. Every diagram needs a text equivalent, a status label and a non-generic structure suited to the topic.
- Links to source-of-truth at exact commits or approved decisions, not bare assertions or fabricated evidence.
- EN, PT-BR, ES semantic parity and natural native-language review.
- Reading-path metadata: season, position, previous/next only when published, related concepts.
- Accessible responsive visuals, no invented numbers, no unsupported security or finality guarantees.
- CTO factual review and explicit owner approval before any draft enters the public route.

## Anti-patterns

- Eight articles that all share the same diagram with only labels changed.
- A generic three-heading template replacing real reasoning.
- Confusing Sails Protocol with Sails Market, Satsails Wallet, external providers or a future SDK.
- Treating a passing mock test, a PR, or a policy FREEZE as proof of production behavior.
- Showing unpublished article links on public pages.
- Publishing a translation that weakens a qualification or changes technical meaning.

## Workflow and maturity

Idea -> Outline -> First draft -> Evidence audit -> Engineering review -> Native-language editing -> Accessibility/visual audit -> CTO gate -> Owner publication approval -> Published -> Revalidation.

A failing gate returns the article to review. No silent promotion.

## Editorial debt to resolve

The initial 27-article corpus is a structured first draft, not a publication-ready library. Prioritize articles 01-05 as a pilot: deepen the scenario and alternatives, attach verified citations, replace generic diagrams, and test reading navigation. Only then apply the pattern to the remaining seasons. Articles 20-27 require particular scrutiny because they describe prospective modules.

## Visual grammar

- Architecture: component/responsibility map.
- Authorization: decision tree with explicit deny branch.
- Idempotency and concurrency: state or sequence diagram with one durable outcome.
- Evidence: provenance chain and separate truth-evaluation boundary.
- Settlement: rail-specific timeline with explicit uncertainty.
- Adversarial nodes: trust boundary and rejected malicious claim.
- Product integration: user journey with signing and custody separation.

Use design tokens and a restrained aesthetic. Prefer clear typography, whitespace and one meaningful diagram to decorative gradients, neon or meaningless stock imagery.

## What makes this Sails

Our editorial identity is a **public engineering reasoning trail**. We do not sell certainty. We show how an economic invariant was identified, which boundaries matter, how it might fail, and what evidence would justify trust. Every article should make the reader better able to challenge the system, not merely admire it.

## Day 0 publication strategy: complete library launch

**Owner direction (2026-10-10):** Day 0 is a simultaneous launch of the largest technically sound, reviewed editorial library we can prepare, not a drip-feed content calendar. All articles that pass the editorial, technical, multilingual and publication gates should be live on Day 0, organized by seasons. Do not intentionally hold approved articles back for weekly posting or artificial engagement.

- Build a substantial evergreen library before launch. Prioritize quality and factual traceability over arbitrary article count.
- Make all approved Day 0 articles publicly navigable at launch, with full season indices and previous/next links in the reader's language.
- A planned season is not a publication schedule; completed seasons can launch together.
- The number of articles shown on Day 0 is determined by actual gate completion, not by the 81 existing draft files.
- The existing draft/public route separation remains in place **until** explicit owner publication authorization. At the approved launch, promote all approved articles together, not in an artificial cadence.
- After Day 0, publish on meaningful engineering discoveries, decisions, releases or verified evidence. No mandatory posting frequency.
- Do not treat this strategy decision as authorization to merge `main`, deploy Netlify or waive the CTO, factual, translation, accessibility or WebMCP native gates.
