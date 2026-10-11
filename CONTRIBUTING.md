# Contributing to the Sails Protocol Blog

This repository publishes editorial articles, not normative protocol specifications.

## Writing an article
1. Create a Markdown/MDX article in `articles/` with a dated filename.
2. Provide front matter: `slug`, `title`, `description` and relevant tags from `articles/tags.yml`.
3. Separate what exists today from design proposals and future roadmap.
4. Link to primary technical evidence for claims about security, custody, escrow, settlement, availability or integrations.
5. Include a text explanation beside every diagram.
6. Open a draft pull request. Follow `EDITORIAL-POLICY.md` and `PUBLICATION-CHECKLIST.md`.

## Validate
```sh
npm install
npm run typecheck
npm run build
node scripts/verify-build.mjs
```

Publication requires explicit approval. Passing CI does not imply editorial approval.
