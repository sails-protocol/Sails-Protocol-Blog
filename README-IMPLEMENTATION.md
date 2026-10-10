# Blog implementation

Docusaurus 3 + React + TypeScript + Mermaid + Netlify.

Editorial posts use Docusaurus's internal `blog/` source directory and are published at **/articles/**. The Docs plugin is disabled.

## Run locally

```sh
npm install
npm run build
npm run start
```

## Netlify

Connect this repository, use `npm run build` and publish `build/`. Node 22 is configured in `netlify.toml`. **Before production**, replace the placeholder URL in `docusaurus.config.ts` with the assigned Netlify site domain.

## Governance

See `EDITORIAL-POLICY.md`. Content: CC BY 4.0. Code license not yet granted; Sails trademarks excluded.
