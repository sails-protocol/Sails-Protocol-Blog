# AGENTS.md | Sails Protocol Blog

This file is the persistent operating contract for AI agents and human contributors working in this repository. Read [EDITORIAL-START-HERE.md](./EDITORIAL-START-HERE.md) and [BLOG-CURRENT-STATE.md](./BLOG-CURRENT-STATE.md) before acting.

## Mission and boundaries

Build a technically defensible, accessible, multilingual engineering journal about open P2P economic coordination. The blog is a connected learning journey, not a marketing feed. Explain real economic/trust boundaries and distinguish Sails Protocol, its SDKs, nodes, wallets, reference applications and third-party services. Never imply an external integration is part of the protocol itself.

**NO MATERIAL FINDING UNDER THE RUG.**

## Source-of-truth order

1. Live GitHub state (branch, exact commit SHA, PRs, CI) and deployed-site evidence for operational status.
2. Verified implementation evidence at immutable refs for technical claims.
3. Approved owner/CTO decisions and the editorial policies linked from EDITORIAL-START-HERE.md.
4. BLOG-CURRENT-STATE.md as a timestamped snapshot, never as proof that a PR is still open or a deploy is live.
5. Historical handoffs, drafts and chat summaries as context, not current-state authority.

If documents disagree, investigate and preserve the stricter evidence/publication gate. Do not silently resolve material conflicts.

## Editorial DNA

**Question -> Boundary -> Decision -> Failure -> Evidence -> Next Question.**

For each article: concrete scenario, actors, custody/signing and economic authority boundaries, tradeoff, credible failure mode, evidence with maturity and provenance, and a meaningful continuation. No invented citations, commits, audit outcomes, production capabilities or generic AI filler. Avoid em dashes in editorial prose.

Evidence labels must distinguish concept, proposal, approved policy, implementation under review, verified test scope and observed production. An approved policy is not proof of implemented behavior. A draft is not a published article.

## Publication and multilingual gates

- English, Brazilian Portuguese and Spanish must be natural and consistent; preserve locale-aware links, canonical/hreflang, sitemap and discoverability.
- Never promote `editorial-drafts/` to public routes without editorial, technical, security, localization, accessibility and build gates.
- Preserve WebMCP, Mermaid, search, keyboard navigation and responsive behavior. Real browser behavior cannot be replaced by mocked evidence.
- Keep SVGs topic-specific and lightweight; avoid repeated generic art. Current visual decision: one illustrative Earth-horizon WebP in the homepage hero, distinct thematic SVGs for featured article cards. Preserve accurate AI-image provenance in `static/img/editorial/SOURCES.md`.
- No new release cadence or season expansion contrary to the editorial backlog without owner/CTO decision.

## Engineering and collaboration

- Before any edit: inspect `main`, open PRs, changed files, exact HEAD and existing CI. Coordinate ownership; never write into a branch owned by another active agent.
- Use isolated branches and narrowly scoped PRs. Do not force-push, rewrite another agent's commits, or broaden an approved mission silently.
- Run appropriate tests and report exactly which tests ran; CI green at an earlier SHA is not current evidence.
- No merge, production publish or irreversible action without applicable owner authorization and CTO/Gatekeeper gates. Protect merges with the expected HEAD SHA and revalidate after concurrent changes.
- A merged PR does not prove production deployed. Verify the deployment commit and production behavior separately.
- For every handoff: report files, PR, branch, exact SHA, tests, decisions, unresolved findings, published/deployed status and next actions.

## Mandatory reading

- [Editorial continuity](./EDITORIAL-START-HERE.md)
- [Operational state](./BLOG-CURRENT-STATE.md)
- [Editorial DNA and quality gates](./EDITORIAL-DNA-AND-QUALITY-GATES.md)
- [Voice guide](./EDITORIAL-VOICE-GUIDE.md)
- [Editorial policy](./EDITORIAL-POLICY.md)
- [Seasons and reading paths](./EDITORIAL-SEASONS-AND-READING-PATHS.md)
- [Visual standards](./EDITORIAL-VISUAL-STANDARDS.md)
- [Day 0 master backlog](./EDITORIAL-DAY0-MASTER-BACKLOG.md)
