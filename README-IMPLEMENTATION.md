# Blog implementation

Docusaurus 3 + React + TypeScript + Mermaid + Netlify.

Editorial source files live in `articles/` and are served at `/articles/`. The Docs plugin is disabled.

## Local verification

```sh
npm install
npm run build
npm run typecheck
npm run start
```

Build and typecheck must pass before merge. The first GitHub PR remains a draft until validated.

## Netlify

Connect this repository to Netlify. Build command: `npm run build`; publish directory: `build/`; Node 22 is configured in `netlify.toml`.

Set environment variable `SITE_URL` to the actual production origin, e.g. `https://your-site.netlify.app`, with no trailing slash. This controls canonical URLs and the sitemap. Configure deploy previews separately as needed.

## Governance

See `EDITORIAL-POLICY.md`. Editorial content is CC BY 4.0. A code license has not yet been granted; Sails trademarks are excluded. WebMCP tools are planned and not yet implemented.
