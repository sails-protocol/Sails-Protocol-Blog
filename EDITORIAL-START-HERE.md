# Editorial continuity: start here

**Status:** institutional handoff for editorial work on the Sails Protocol Blog. This is not permission to merge or publish.

## Where to work

- Repository: `sails-protocol/Sails-Protocol-Blog`
- Working branch: `feat/blog-foundation-02`
- Draft PR: #1
- Editorial drafts: `editorial-drafts/` (27 topics, 3 language editions each, 81 first drafts)
- Public blog routes are separate. Do not promote drafts into public routes without the gates below.

## Read these documents first, in order

1. [EDITORIAL-DNA-AND-QUALITY-GATES.md](./EDITORIAL-DNA-AND-QUALITY-GATES.md): editorial method, acceptance criteria and quality gates.
2. [EDITORIAL-VOICE-GUIDE.md](./EDITORIAL-VOICE-GUIDE.md): voice, precise terminology, multilingual rules.
3. [EDITORIAL-SEASONS-AND-READING-PATHS.md](./EDITORIAL-SEASONS-AND-READING-PATHS.md): series, reading sequence, links and evidence taxonomy.
4. [EDITORIAL-VISUAL-STANDARDS.md](./EDITORIAL-VISUAL-STANDARDS.md): diagrams, accessibility, visual maturity labels.

If documents disagree, preserve the stricter evidence/publication gate and request CTO clarification instead of silently relaxing it.

## The Sails editorial DNA

**Question -> Boundary -> Decision -> Failure -> Evidence -> Next Question.**

Every article should expose a recognizable P2P problem, economic and trust boundaries, an actual design tradeoff, a concrete failure mode, the maturity and provenance of supporting evidence, and a useful continuation. No hype, invented claims, superficial repeated diagrams or generic AI prose. No em dashes in editorial prose.

This is an editorial method derived from the project's engineering approach, not a claim to invent established engineering practices.

## Current series

- Season 1, articles 01-05: Why Sails Exists.
- Season 2, articles 06-13: Engineering Economic Coordination.
- Season 3, articles 14-19: Building on the Protocol.
- Season 4, articles 20-27: Beyond the Trading SDK.

All 81 language files are drafts. EN is the reference edition; PT-BR and ES need natural adaptation and independent review. The newest drafts especially need deeper analysis, verifiable citations and topic-specific diagrams.

## Navigation and deployment boundaries

- The home page (`src/pages/index.tsx`) shows four season cards.
- The season index (`src/pages/seasons/index.tsx`) lists article titles as editorial outlines without linking to unpublished drafts.
- Styling is in `src/css/custom.css`.
- Published content must only link to published content, with locale-correct URLs.
- No `main` merge, production Netlify change, editorial approval or publication without explicit owner authorization and CTO gate.
- WebMCP native Day 0 remains BLOCKED pending real browser API verification; mock tests are not a substitute.
- Build, accessibility and navigation verification for the recent season changes has not yet been confirmed.

## Next execution sequence

1. Inspect current branch HEAD, PR #1 and changed files. Do not assume the SHA in any previous chat is still current.
2. Pilot articles 01-05: inspect exact draft content and verify technical statements against Sails Protocol source-of-truth at immutable refs.
3. Expand real scenarios, alternatives, failure analysis and maturity labels. Replace generic diagrams with meaningful topic-specific diagrams and full text equivalents in EN/PT-BR/ES.
4. Build a claim-to-evidence ledger for each article. Missing evidence remains explicitly pending, never silently resolved.
5. Check season navigation, responsive design, keyboard accessibility, article indexing and build. Preserve draft/publication separation.
6. Submit results for technical/editorial review. No release without the owner.

## Mandatory reporting

For each work session, report concrete files modified, commit SHA, tests actually executed, unresolved material findings and whether any content was published. Do not claim tests passed if not run.

**NO MATERIAL FINDING UNDER THE RUG.**
