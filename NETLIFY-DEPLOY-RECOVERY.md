# Netlify production deploy recovery | Sails Protocol Blog

## Observed state (2026-10-12 UTC)

- GitHub `main` after PR #38: `7652f615924cd52580f28d8d84a6cd90f33bf494`.
- Netlify project: `sails-protocol-blog`.
- Netlify production deploy ID: `6acc5631104cd90008479406`.
- Production deploy state: `ready`, published `2026-10-12T03:38:51.494Z`.
- Production commit SHA: `03f56ca704fb2db9e753ca87029a84fa4b7bd15c` (older than current main).
- Repo `netlify.toml` build: `npm run build`, publish: `build`, Node 22.
- GitHub Actions validate on `push` to main and `pull_request`; these actions are **not evidence of Netlify deploys**.

## Operator recovery steps (do not mark complete without evidence)

1. In Netlify, open the project **sails-protocol-blog**, check **Project configuration → Build & deploy → Continuous deployment**. Verify Git provider authorization, linked repository, production branch `main`, build hooks, ignored builds and any deploy locks.
2. Inspect deploy history after `2026-10-12T03:38:51Z` and Netlify build/deploy logs for webhook, permission, billing or build failures. The latest reported ready deploy being old does not by itself prove which cause is responsible.
3. Reconnect the GitHub integration or trigger **Deploys → Trigger deploy → Deploy site** for `main` as appropriate. Do not deploy a different branch or unreviewed commit.
4. Confirm the resulting production deploy has `state=ready` and `commit_ref` exactly matching a freshly fetched GitHub `main` SHA. Record deploy ID, publish timestamp and SHA in `BLOG-RELEASE-ACCEPTANCE-LEDGER.md`.
5. Run production route matrix for EN, PT-BR, ES: homepage, `/seasons/`, `/articles/`, introduction, nine Season 02 articles, canonical/hreflang, sitemap, robots, RSS/Atom, images, mobile/tablet/desktop, light/dark, keyboard, console, WebMCP, and draft isolation. Attach direct evidence before promoting any acceptance gate.
6. Reassess I3 and all other release gates only after current-main production evidence. A successful GitHub CI or historic Netlify ready deploy is insufficient.

## Tool limitation

At this checkpoint, the available Netlify integration can read projects and deployments but exposes no trigger-deploy or reconnect operation. No deployment was initiated through it. The steps above require a Netlify operator or a connected tool with deploy permissions.

**NO MATERIAL FINDING UNDER THE RUG.**
