# Agent operating instructions | Sails Protocol Blog

This file is the permanent entry point for AI assistants, engineers and editorial reviewers. Read [BLOG-CURRENT-STATE.md](./BLOG-CURRENT-STATE.md) for the operational snapshot, then [EDITORIAL-START-HERE.md](./EDITORIAL-START-HERE.md) for the editorial documentation map. Never treat a dated snapshot as a live GitHub status.

## Purpose and boundaries
Sails Protocol Blog is an evidence-led, multilingual (EN/PT-BR/ES) engineering publication about open P2P economic coordination. It is not normative protocol documentation or an advertisement. Distinguish **concept**, **proposal/roadmap**, **approved policy**, **implemented**, **tested within stated scope**, and **observed production behavior**. Do not conflate Sails Protocol, the P2P Trading SDK, Sails Core, Sails Node, Sails Market, Satsails Wallet or external integrations. Do not claim an external service is part of Sails Protocol.

## Mandatory reading order
1. BLOG-CURRENT-STATE.md (dated snapshot and outstanding work)
2. EDITORIAL-START-HERE.md (documentation map and historical handoffs)
3. EDITORIAL-DNA-AND-QUALITY-GATES.md
4. EDITORIAL-POLICY.md and EDITORIAL-VOICE-GUIDE.md
5. EDITORIAL-SEASONS-AND-READING-PATHS.md and EDITORIAL-DAY0-MASTER-BACKLOG.md
6. EDITORIAL-VISUAL-STANDARDS.md, EDITORIAL-DAY0-EVIDENCE-AUDIT.md and relevant audit/residual files
7. README-IMPLEMENTATION.md, CONTRIBUTING.md, CI workflows and current source code

## Editorial method
Question -> Boundary -> Decision -> Failure -> Evidence -> Next Question.
Use real actors, trust/custody/authorization boundaries, tradeoffs, failure modes and verifiable source references. Clearly label evidence maturity. No fabricated quotes, links, commits, test results or production claims. No generic AI marketing prose or em dashes in editorial prose. Natural translations require independent review; EN is a reference, not a substitute for PT-BR/ES review. Published links must target published routes in the appropriate locale. Drafts in editorial-drafts/ are not published articles.

## Technical and visual rules
Preserve Docusaurus, multilingual routes, SEO, canonical/hreflang, sitemap, RSS/Atom, WebMCP, Mermaid, keyboard accessibility and responsive design. WebMCP article discovery must remain read-only; browser-native verification is distinct from mocked tests. Homepage visual direction: one optimized illustrative Earth-horizon WebP in the hero, topic-specific non-repeating SVG artwork for featured articles. Do not reintroduce the unused card WebP. Keep provenance clear; generated imagery is not NASA photography.

## Execution and authority
- Inspect the live repository, branch HEADs, PRs, workflow conclusions, deployment state and relevant files **before** deciding what remains.
- Work in an isolated branch/PR; never write to another agent's active branch without coordination.
- Preserve exact-head CI evidence. Never merge with red/pending gates or stale approval.
- A successful build is not evidence of production deployment. Verify the Netlify deploy commit and live routes before claiming published.
- No merge, deployment, editorial publication or policy relaxation without appropriate owner/CTO/Gatekeeper authorization. A prior technical approval is not a blanket authorization for a changed HEAD.
- Never silently resolve contradictory documentation. Prefer current verified code and evidence for operational status, and escalate policy conflicts.
- Report files changed, exact commit SHA, checks actually run, unresolved findings, merge/deploy status and next action. **NO MATERIAL FINDING UNDER THE RUG.**

## Maintenance contract
Update BLOG-CURRENT-STATE.md after material merges, releases, editorial scope changes or newly discovered blockers. Update EDITORIAL-START-HERE.md when the reading map or permanent editorial decisions change. Keep historical audit records intact; label superseded operational claims rather than deleting history.
