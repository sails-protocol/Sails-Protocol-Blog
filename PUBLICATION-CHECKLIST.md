# Publication readiness checklist

The blog is editorial, not normative Sails Protocol documentation. No merge or production deployment without explicit approval.

## Technical gate
- [x] Docusaurus build, TypeScript, generated routes and sitemap checked by CI #12 (2026-10-10)
- [ ] WebMCP Day-0: real browser tool registration, discovery, execution and negative tests verified
- [ ] Clean lockfile and reproducible `npm ci` installation
- [ ] Preview build verified on Netlify
- [ ] Desktop, mobile, dark and light mode visually reviewed
- [ ] Keyboard navigation and basic accessibility manually reviewed
- [ ] External links manually checked

## Infrastructure freeze before content and Netlify changes
- [ ] CI passes on the final branch HEAD, including registration/rollback tests
- [ ] Browser-native WebMCP verified with recorded real-browser evidence
- [ ] Dependency lockfile committed and npm ci verified
- [ ] Automated accessibility and link checks plus manual responsive review
- [ ] Security headers, CSP compatibility and no-write surface reviewed
- [ ] Technical review sign-off: no material finding under the rug

**STOP:** No new editorial content, Netlify configuration changes, merge or production deployment until the infrastructure freeze is approved. Existing introductory article is only a validation fixture until editorial sign-off.

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

WebMCP read-only article discovery is mandatory for Day 0. No release without browser-level evidence. RSS, sitemap and llms.txt are complementary, not substitutes.
