# Publication readiness checklist

The blog is editorial, not normative Sails Protocol documentation. No merge or production deployment without explicit approval.

## Technical gate
- [x] Docusaurus build, TypeScript, generated routes and sitemap checked by CI #12 (2026-10-10)
- [ ] Clean lockfile and reproducible `npm ci` installation
- [ ] Preview build verified on Netlify
- [ ] Desktop, mobile, dark and light mode visually reviewed
- [ ] Keyboard navigation and basic accessibility manually reviewed
- [ ] External links manually checked

## Editorial gate
- [ ] Introductory article reviewed for accuracy and approved
- [ ] Security/economic/production claims backed by current implementation evidence
- [ ] Metadata, title, tags and descriptions reviewed
- [ ] Attribution and original content license confirmed

## Release gate
- [ ] Publication approval by project owner
- [ ] Merge PR #1 into main
- [ ] Verify Netlify deployment and live routes
- [ ] Verify sitemap, RSS and canonical URLs on production

WebMCP read-only discovery is a separate planned integration and is not part of this foundation release.
