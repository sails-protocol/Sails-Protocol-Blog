# Agent operating instructions | Sails Protocol Blog

Read [EDITORIAL-START-HERE.md](./EDITORIAL-START-HERE.md) and [BLOG-CURRENT-STATE.md](./BLOG-CURRENT-STATE.md) before changing anything. **Never treat the status document as live GitHub truth**: verify branch heads, PR states, checks and deployed revision directly.

## Mission and editorial truth
Build a technically defensible, multilingual (EN, PT-BR, ES) editorial learning journey about Sails Protocol and open P2P economic coordination. Follow [EDITORIAL-DNA-AND-QUALITY-GATES.md](./EDITORIAL-DNA-AND-QUALITY-GATES.md), [EDITORIAL-VOICE-GUIDE.md](./EDITORIAL-VOICE-GUIDE.md), [EDITORIAL-POLICY.md](./EDITORIAL-POLICY.md), [EDITORIAL-VISUAL-STANDARDS.md](./EDITORIAL-VISUAL-STANDARDS.md), and [EDITORIAL-SEASONS-AND-READING-PATHS.md](./EDITORIAL-SEASONS-AND-READING-PATHS.md).

Editorial DNA: **Question → Boundary → Decision → Failure → Evidence → Next Question**. Distinguish concept, approved policy, implemented code, tested behavior and observed production. Cite verifiable evidence and never present plans, unreviewed drafts or future modules as shipped capabilities. No hype, invented citations, repetitive generic illustrations or em dashes in editorial prose.

## Execution and safety
- Discover → Specify → Design → Build → Verify → Ship → Learn.
- Read current GitHub state and exact SHA before work. Prefer narrow, isolated branches and PRs; do not write concurrently to another executor's branch.
- Preserve Docusaurus, three locales, SEO/hreflang/canonical/sitemaps, accessibility, responsive design, Mermaid and WebMCP.
- Preserve the approved homepage direction: one cinematic Earth-horizon WebP **only in the hero**; distinct topic-relevant SVGs for featured article cards. Do not restore the unused card WebP.
- Preserve separation of published articles and `editorial-drafts/`. A passing build does not grant editorial approval.
- Run relevant typecheck, build, article-index, browser accessibility and workflow gates on the **exact proposed HEAD**. Revalidate after any new commit.
- No merge or production publication without owner authorization and required CTO/Gatekeeper approval. Never weaken tests to obtain green CI.
- Report modified files, SHA, tests actually run, material findings, next gate and production status. **NO MATERIAL FINDING UNDER THE RUG.**
- Keep this guidance and [BLOG-CURRENT-STATE.md](./BLOG-CURRENT-STATE.md) up to date when a milestone changes; do not overwrite historical editorial documents.

## First five minutes
1. Read the two entry documents and linked editorial standards.
2. Fetch `main`, open PRs, workflows and latest Netlify deployment independently.
3. Compare actual state to the dated snapshot in BLOG-CURRENT-STATE.md.
4. Work only on the next safe, scoped task; escalate material decisions.
