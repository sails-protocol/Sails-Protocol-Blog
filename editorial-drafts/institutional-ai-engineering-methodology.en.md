# AI-Oriented Engineering at Sails Protocol

*Institutional editorial draft. Not approved for publication. Source-of-truth attribution audit pending.*

## Why we document the method

Sails Protocol is not only a set of modules. It is an engineering effort concerned with economic coordination under uncertainty, where a plausible answer is not evidence that money, identity, authorization or settlement is safe.

AI assistance can help inspect code, propose designs, write tests, compare alternatives and maintain documentation. But a language model's confidence is not a security guarantee. Human decision authority, reproducible evidence and clearly recorded limitations remain necessary.

## A workflow organized around proof

The project describes work through defined missions, explicit scope, evidence collection, review gates and controlled changes. A useful public account of the method should explain:

1. **Discover and specify:** identify the real user or economic failure and the invariant that must survive it.
2. **Design with boundaries:** document who owns keys, money, state transitions, evidence and external payment facts.
3. **Implement and verify:** prefer concrete source changes, real persistence and restart/concurrency tests over explanations or mock-only success.
4. **Challenge:** assign reviewers or agents to seek counterexamples, races, authority confusion and unsupported assumptions.
5. **CTO gate and freeze:** record the decision, exact scope, immutable references, unresolved findings and what is explicitly *not* approved.
6. **Ship and learn:** only after applicable human approvals; revisit decisions when evidence changes.

These stages are an editorial representation of the methodology, not a claim that every project workflow or automation is implemented exactly as described here.

## What AI agents may and may not decide

An agent can draft a hypothesis, execute an authorized test, inspect a PR and report evidence. It should not convert an unreviewed claim into a production guarantee, conceal a material finding, silently merge a protected branch or redefine an economic policy on its own.

**No material finding under the rug** is a discipline of transparent escalation. A failed test, uncertain provider behavior or unresolved authorization boundary stays visible until resolved or explicitly accepted by the authorized decision maker.

## Example: a trade completion race

Imagine two requests competing to complete the same trade while the server restarts. An AI-assisted workflow might propose a database transaction, create a crash-and-replay test, inspect its result and prepare a review report. The decisive evidence is not the agent's narrative; it is the actual durable postcondition under the defined test conditions, reviewed against the economic invariant.

## Intellectual influences and authors

**Attribution pending.** The project owner reports that the authors and works that inspired the Sails method are recorded in GitHub. Before naming them, retrieve and inspect the exact source documents, verify author/work names, distinguish direct inspiration from general similarity, and cite the relevant files or official publications. Do not fabricate endorsements or imply those authors contributed to Sails Protocol.

Proposed structure for each verified influence:
- Author and work (accurate title, date, primary link).
- Idea that influenced the method.
- How Sails adapted it, with a concrete example.
- Where Sails deliberately differs.
- Source-of-truth citation and date reviewed.

## Verification before publication

- Identify the canonical methodology document and original author/inspiration notes in the Sails Protocol GitHub repository.
- Verify actual names of engineering roles, workflow stages and gates against immutable revisions.
- Add an example with exact PR, commit, CI and database test evidence.
- Prepare EN, PT-BR and ES editions and independent language review.
- Obtain CTO factual approval and owner publication authorization.

*This draft is intentionally conservative about unverified sources and makes no claim of production-readiness.*
