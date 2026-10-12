# Agent instructions: Sails Protocol Blog

This file is the permanent entry point for AI assistants and human contributors working in this repository. Read [EDITORIAL-START-HERE.md](./EDITORIAL-START-HERE.md), then [BLOG-CURRENT-STATE.md](./BLOG-CURRENT-STATE.md) before planning changes. These files do not grant merge or deployment authority.

## Mission and product boundaries

Sails Protocol Blog is an evidence-led, multilingual engineering journal about open P2P economic coordination, trust and custody boundaries, architecture, security and market context. Do not conflate Sails Protocol, the P2P Trading SDK, Sails Core, Sails Node, Sails Market or third-party integrations. Distinguish implemented and verified capabilities from approved policy, concepts, draft content and roadmap. Never promote unpublished drafts into public routes or claim tests, approvals, integrations or production behavior without evidence.

## Mandatory reading

1. [EDITORIAL-START-HERE.md](./EDITORIAL-START-HERE.md) for onboarding and the historical record.
2. [BLOG-CURRENT-STATE.md](./BLOG-CURRENT-STATE.md) for a dated operational snapshot; verify live GitHub and deployment state because it can become stale.
3. [EDITORIAL-DNA-AND-QUALITY-GATES.md](./EDITORIAL-DNA-AND-QUALITY-GATES.md), [EDITORIAL-POLICY.md](./EDITORIAL-POLICY.md), [EDITORIAL-VOICE-GUIDE.md](./EDITORIAL-VOICE-GUIDE.md).
4. [EDITORIAL-SEASONS-AND-READING-PATHS.md](./EDITORIAL-SEASONS-AND-READING-PATHS.md), [EDITORIAL-DAY0-MASTER-BACKLOG.md](./EDITORIAL-DAY0-MASTER-BACKLOG.md) and evidence/audit documents for editorial scope.
5. [EDITORIAL-VISUAL-STANDARDS.md](./EDITORIAL-VISUAL-STANDARDS.md) and [CONTRIBUTING.md](./CONTRIBUTING.md) for visual and contribution standards.

## Editorial DNA

**Question → Boundary → Decision → Failure → Evidence → Next Question.** Explain real economic actors, authority, signing/custody, external truth, failure modes and tradeoffs. Evidence maturity must be explicit: concept, proposed/approved policy, implementation under review, tested scope, or observed production. No generic AI marketing prose, invented citations or repeated decorative diagrams. Avoid em dashes in editorial prose. Adapt EN/PT-BR/ES naturally and check localized navigation.

## Current design direction

Homepage hero: one illustrative Earth-horizon WebP, with provenance recorded in `static/img/editorial/SOURCES.md`. Article cards: distinct, topic-specific, lightweight SVG artwork; no modulo-based repetition of a small set of graphics. Preserve contrast, keyboard access, responsive layout, SEO, hreflang, WebMCP and Mermaid. Do not reintroduce the unused hero-card WebP without explicit product approval.

## Working and release protocol

- Inspect live `main`, open PRs, HEAD SHAs, CI and production deployment before acting. Never trust a dated snapshot over live state.
- Use small isolated branches/PRs. Avoid concurrent edits to another executor's branch.
- Preserve draft/publication separation. Planned 48-topic/144-edition corpus is **not** automatically approved or published.
- Require exact-head tests relevant to each change (article catalogue, typecheck, multilingual builds, accessibility, WebMCP, Netlify configuration and production smoke checks as applicable). Report tests not run.
- Do not merge or publish without owner authorization and the applicable CTO/Gatekeeper review. Revalidate exact SHA immediately before merge; use expected-head protection.
- Record concrete changed paths, commit/PR, verification results, unresolved material findings, next steps and whether production changed.
- **NO MATERIAL FINDING UNDER THE RUG.** If sources disagree, follow the stricter evidence/publication gate and escalate material uncertainty.

## Documentation maintenance

Update `BLOG-CURRENT-STATE.md` when PRs merge, release status changes or the next mission changes. Keep `EDITORIAL-START-HERE.md` as the navigation entry and preserve historical sections as history, not current instructions. Do not replace evidence with optimistic status percentages.
