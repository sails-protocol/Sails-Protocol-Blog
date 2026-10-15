# Sails Protocol Blog | Current operational state

**Snapshot:** 2026-10-12 UTC. This is a historical checkpoint, not a live status API. Always re-check GitHub and Netlify before acting.

## North star

A rigorous, human, multilingual engineering journal that connects real Sails Protocol architecture and economic trust boundaries to verifiable evidence. Published content must not overstate protocol implementation, SDK maturity, custody guarantees or external services.

## Repository and production

- GitHub: https://github.com/sails-protocol/Sails-Protocol-Blog
- Production: https://sails-protocol-blog.netlify.app/
- Stack: Docusaurus 3, React, TypeScript, GitHub Actions, Netlify.
- Languages: EN, PT-BR, ES.
- `main` observed at `b93734f33e205708d8dd13f1dbbc3afb26215a03` when this documentation branch was created.
- **Production deployment of that exact commit was not verified in this documentation pass.** Do not infer production success from merge status.

## Integration ledger (verified at snapshot)

| Work | State | Evidence | Next action |
| --- | --- | --- | --- |
| PR #13, editorial image assets | **Merged** 2026-10-12 01:33 UTC | https://github.com/sails-protocol/Sails-Protocol-Blog/pull/13 ; reviewed HEAD `9038c88b79a7e634d418491c1a2d04b5d7bc2bb4` | Verify deployed Netlify commit and final visual QA |
| PR #14, canonical Season 02 catalogue | **Open, ready for review, unmerged** | https://github.com/sails-protocol/Sails-Protocol-Blog/pull/14 ; HEAD `2031f7c0276f5cf7366038ad8e1589524465fed4` | Recheck mergeability and exact-head CI after PR #13; obtain merge authorization |
| Institutional agent continuity | This documentation PR | `AGENTS.md`, this file and updated `EDITORIAL-START-HERE.md` | Review and merge only after gates |

## Visual decisions

- Homepage hero uses only `static/img/editorial/sails-earth-horizon-hero.webp` (1600 x 900, AI-generated illustrative artwork, not a NASA photograph).
- Six distinct topical SVGs in `static/img/editorial/`: `market-crossroads`, `software-boundary`, `immutable-contract`, `financial-gates`, `noncustodial-keys`, `stablecoin-rails`.
- The unused `sails-earth-horizon-card.webp` was intentionally removed from PR #13.
- Preserve existing SVGs and responsive/light-dark/accessibility behavior.

## Editorial reality versus backlog

- The live site has a published introduction and a nine-article Season 02 collection according to the last reviewed application source. Verify routes and all three locales in the live build.
- `editorial-drafts/` and the seven-season, 48-topic, 144-language-edition Day 0 baseline are **draft inventory and planning**, not 48 published or approved articles.
- The master backlog and audit files may contain historical status snapshots. Inspect current evidence and resolve conflicts before presenting publication counts.

## Residual risks and next gates

1. Verify Netlify deployment and visual QA on desktop, tablet, mobile, EN/PT-BR/ES after PR #13 merge. Do not claim this is done until checked.
2. Revalidate PR #14 against current `main` and integrate only after authorization; then verify production again.
3. Keep concurrent agents off the same branch; require exact SHA and current CI at merge time.
4. Windows CRLF may produce a false `check:articles` stale result. Address in a separate focused PR; Linux CI previously passed.
5. An earlier Claude environment hit `ENOSPC` from a large npm cache, later cleared; this is local environment history, not a known production outage.
6. Maintain technical source/evidence reviews for editorial drafts before publication.

## Reporting contract

Always provide a concise north star and a percentage **with a named denominator** (e.g. 3 of 4 release gates); do not turn an estimate into verified completion. Report exact SHAs, test status, remaining blockers, and whether `main` and Netlify changed.

**NO MATERIAL FINDING UNDER THE RUG.**

## Concurrent institutional handoff PRs and taxonomy caveat

- PRs #15, #16, #17 and #18 are overlapping documentation proposals. The intended canonical integration is a reviewed consolidation on #15; the others must not be merged as duplicate sources of authority. Verify their live states before closure.
- The *published* Season 02 (nine articles) and the *planned* seven-season/48-topic editorial taxonomy are different naming systems. Do not equate their Season numbers or expose draft links.
- Owner editorial direction favors simultaneous publication of the largest fully approved Day 0 library rather than artificial drip-feed. This strategy never waives technical, editorial, localization, accessibility or owner publication gates.
- WebMCP discovery must remain read-only and native browser behavior must be checked in a real browser, not inferred from mocks.
- Every release report must separate prepared, CI-validated, merged, deployed and live-QA-verified states.

## Post-merge verification checkpoint (2026-10-11 audit session)

The earlier snapshot above is retained for provenance and must not be mistaken for live status. Institutional PR #15 was squash-merged into `main` at `033ccbea3f1d297f99529fcc0e4077c985163338`, after three exact-head workflow successes at `449cf0282fc3403cb60fd62baf56f3cdb0aa7f2f`; overlapping PRs #16, #17 and #18 were closed without merging. PR #14 remained open and two commits behind `main` at this checkpoint; historical CI successes are not current-base revalidation. Netlify PR #15 preview succeeded, but the production deploy SHA and final responsive/localized browser QA were not verified. The independent audit ledger is `BLOG-GLOBAL-AUDIT-SCORECARD.md`. Global completion remains **NOT DETERMINED** until the owner approves denominators and gates. Do not turn the editorial 17/48 source-backed correction coverage into final approval.

## Live continuation checkpoint | 2026-10-12 UTC

This checkpoint supersedes the **historical** PR ledger above for operational decisions. Preserve that ledger for traceability.

- PR #14 closed unmerged, superseded by PR #22, merged as `d2d655c5f408ae931b2739c124e6cfeddd4f23d8`, with all three exact-head workflows PASS and Netlify production deploy `6acc4ed49008ec0008c31022` ready at that SHA.
- PR #21 merged as `940793b0b1b5e81477f6a3e40124bbf4dc406b0a`: four Seasons cards. PR #25 corrected Introduction artwork provenance, merged as `f7d1955e38ff933639c7beba145a2cb1bec73d06`, deployed ready to production at Netlify deploy `6acc520182271500089828b2`.
- PR #23 merged `6a2d3c882ff72f7b52466dada080539897c39066`; PR #26 merged `42d92b66d05ee838941273254b53adb4da88cea3`, deployed ready at Netlify deploy `6acc54db16099a000844d1f0`.
- PR #27 merged `03f56ca704fb2db9e753ca87029a84fa4b7bd15c`: owner-approved 25-gate weighted readiness contract and conservative evidence ledger. Production subsequently independently verified ready at Netlify deploy `6acc5631104cd90008479406`, published `2026-10-12T03:38:51.494Z` at that exact SHA.
- **Current north:** independently verify exact main production SHA; audit EN/PT-BR/ES routes, SEO, browser/device accessibility and editorial claims; record PASS only with direct evidence. Keep Day 0 144-edition acceptance separate from operational readiness. No material finding under the rug.

## Current integration checkpoint | 2026-10-12 UTC (post PR #37)

This section supersedes older operational snapshots above without deleting history.

- Latest verified merged main SHA: `e469cc4fdac49fa939133fce6af441a6e0ffc193` (PR #37). PR #37 exact-head `429e10bd9d5a789dff34bc791acf37844f7bbe0b` had 3/3 GitHub workflows PASS before squash merge.
- PR #32 merged `db711ce449b7207694d30d3bd4a66535d64bfd0a`: homepage and Seasons static UI EN/PT-BR/ES localization.
- PR #34 merged `656c11decb314900d694f64682f4267645559d6d`: CI assertions for localized custom-page HTML.
- PR #35 merged `7e61625aba2f7d8c39d5c0536cc9ea929ac766c9`: fixed Seasons fragment and localized search empty state.
- PR #36 merged `53ced5b367e443cb440abed276da17037b9aa201`: release ledger distinguishes historical deploy from current-main readiness.
- PR #37 merged `e469cc4fdac49fa939133fce6af441a6e0ffc193`: slug-keyed article metadata translations for ten published articles in PT-BR/ES across homepage cards, Seasons and search. Native editorial language review is not automatically satisfied by passing CI.
- **Netlify production remains behind**: last independently observed production deploy `6acc5631104cd90008479406`, state ready, commit `03f56ca704fb2db9e753ca87029a84fa4b7bd15c`. This is not current main. Issue #29 is still the deployment/live QA blocker. The available Netlify connector exposes deploy reads but no deploy-trigger action; do not invent a production update.
- Issue #33 source implementation is in PR #37, but closure requires native-language/editorial signoff and a deployed verification pass. Avoid declaring L5 PASS from code-only checks.
- **Current-release evidence score: 16% conservative**, based on I2 and G1–G4, versus 20% historical evidence including stale I3. Do not claim 100% or grant other gates without new production/editorial evidence.
- Immediate next steps: resolve Netlify build/deploy integration, verify published exact SHA and EN/PT-BR/ES browser/SEO route matrix, obtain native-language signoff, then recompute the 25-gate weighted release score.

## Operational checkpoint after PR #64 | 2026-10-12 UTC

This is the latest checkpoint in this document and supersedes earlier operational PR states above without deleting historical evidence.

- **Merged on `main`:** PR #61 (all 10 published article routes included in browser axe audit, plus Mermaid dark-mode contrast and reference-link affordance), squash `b1f29cfb73cf66ba4c710f258edc97d162bf71e1`, exact-head CI 3/3 PASS.
- **Merged on `main`:** PR #63 (PT-BR/ES rendered descriptions of six featured homepage articles verified in isolated builds), squash `85c31d981949266905cfcbc29e16e3ae47b2717d`, exact-head CI 3/3 PASS. Initial assertion about introduction description was invalid and replaced before merge; it uses separate editorial copy.
- **Merged on `main`:** PR #64 (PT-BR/ES Season 02 article titles asserted inside their respective nine article links), squash `6545398a8dcc90edcc4883cb80a6d16bfbf009c9`, exact-head CI 3/3 PASS. Initial malformed test code failed CI and was corrected before merge.
- **Netlify production:** Team reported operational-credit mode, which keeps the existing site online but pauses production deploys and Agent Runners. Owner chose to **wait for the next billing cycle**, without paid upgrade or hosting migration. Do not attempt deploys or claim that recent `main` commits are live. Last independently observed ready production deploy: `6acc5631104cd90008479406` at SHA `03f56ca704fb2db9e753ca87029a84fa4b7bd15c`, **not** current `main`.
- **Current-release readiness:** conservative **16%** according to the 25-gate weighted acceptance contract: I2 4% plus G1–G4 12%. Historical I3 production PASS does not apply to current-main production acceptance. CI and merged code improve preparedness but do not independently satisfy production, native visual, or editorial signoff gates.
- **Editorial Day 0:** 48 planned topics / 144 language editions remain a distinct backlog from the 10 published articles. Do not infer native-language approval or production publication from CI.
- **Next gate:** continue isolated GitHub checks and source-backed editorial review while deploys are paused. After credit renewal, verify the exact deployed `main` SHA, live EN/PT-BR/ES routes, browser/responsive/a11y matrix and editorial signoffs before promoting any acceptance gate.

## Operational checkpoint after PR #67 | 2026-10-12 UTC

- PR #65 merged at `d9fa6ad9007bf96d80473436dee4ed613144f034`: operational state checkpoint; exact-head 3/3 PASS.
- PR #66 merged at `f42ce1d37a18c1b2463582497fc5dd11eb77f49b`: additional PT-BR/ES homepage, Seasons, article browser accessibility matrix; exact-head 3/3 PASS.
- PR #67 merged at `f546b9a4cbb5076f8e1cf7bd47e038f3c92f116a`: exact canonical URL assertions for *isolated locale builds*; exact-head `912386ba4a4e9c3dff0e27ac37bb7449abb77fa1` had 3/3 PASS. CI builds PT-BR and ES separately at root `/`, and their canonical URLs accordingly omit locale prefixes. **This does not verify canonical URLs of the combined multilingual production deployment.** The initial tests incorrectly assumed prefixed URLs in isolated builds; real HTML was inspected before correction.
- Netlify remains in operational-credit pause by owner decision. Do not trigger deployment, upgrade, or migration. Last observed production SHA `03f56ca704fb2db9e753ca87029a84fa4b7bd15c` is stale relative to main.
- Strict Day 0 release readiness remains **16%**. No production or native-language/editorial gate is newly accepted by these merges. Issues #29 and #33 remain subject to live verification/signoff.

## GitHub-only multilingual SEO and CI checkpoint (2026-10-12)

This checkpoint supersedes older PR-status references above for the specific PRs below; it does not assert that `main` is deployed.

- PR #69 merged as `bdee7052f608938aff3e20910eac51cac1d89ca3`: the default Docusaurus combined EN/PT-BR/ES build is verified with `scripts/verify-build.mjs --require-all-locales`. Exact-head workflows 3/3 success.
- PR #70 merged as `76ad49bd56fce93a2329892174b33fdd680d72ca`: combined-build canonical checks cover homepage and Seasons for EN/PT-BR/ES. Exact-head workflows 3/3 success.
- PR #71 merged as `d61baccd37062da1b9f718db262f17f899267d35`: those six custom pages require exactly one correct canonical link. Exact-head workflows 3/3 success.
- PR #72 merged as `9df1ab1eaf2bec8567a8aa6ff29ca79c78aefe4a`: the 10 published articles in each of three locales require exactly one correct canonical link. Exact-head workflows 3/3 success.
- PR #73 merged as `48b954689f9dbbd96c7615cacf4e689d94a3ecdd`: removed the duplicate default full-locale build while retaining strict checks. Exact-head workflows 3/3 success.

**Release boundary:** GitHub validation is not a production deploy, native editorial approval, or live-browser QA. Netlify deploys remain intentionally paused for the team's credit/billing cycle; do not trigger deploys or paid upgrades without a new owner decision. The formal Day 0 release acceptance remains **16%** (weighted 25-gate contract) until individually evidenced gates change. The 48-topic × 3-locale editorial inventory remains planned work, not 144 approved live articles. After Netlify credits renew, compare deployed SHA with current `main`, then perform deployment and multilingual live QA before updating acceptance.

## Exact sitemap acceptance checkpoint (2026-10-12)

The following work was merged after all three pull-request workflows passed on each exact PR head:

- PR #75, merge `bbc13f0749539d2cdf3424f6747d3ce8b492e58d`: exact unique absolute sitemap `<loc>` for each of 10 published article routes in EN/PT-BR/ES.
- PR #76, merge `79924cdd6d42c45def108c3612c7021e454671d4`: exact unique absolute sitemap `<loc>` for homepage and Seasons in each locale.
- PR #77, merge `a2cc410606acee9b0a07fc2223260686a5c4eb1a`: reject foreign-locale published article URLs in each locale sitemap.
- PR #78, merge `f173b370a5fc1fe65cf78c7446ed7bbf436f56a7`: reject foreign-locale homepage and Seasons URLs in each locale sitemap.

All checks above operate on the generated GitHub build, **not** a verified current-main Netlify production deploy. The strict current-release acceptance remains **16%** until immutable evidence satisfies another named release gate. In particular, the available GitHub connector's commit-workflow-run query only returns pull-request-triggered runs, so an empty result for a squash-merge SHA does **not** prove the push-to-main CI failed or never ran. Do not promote I1 without independent exact-main CI evidence. Continue the no-Netlify-deploy credit pause until the owner authorizes renewal.

## Generated article catalogue fail-closed checkpoint (2026-10-13)

Merged after three exact-head PR workflows succeeded for each change:

- PR #80, merge `c4679267ed3001e368f808fbe7cf288a079343b5`: a missing `src/generated/articles.json` fails combined-build verification instead of skipping article checks.
- PR #81, merge `45295643ad337af444a95dab9ce1524bbf7a5971`: a present but empty article catalogue fails verification.
- PR #82, merge `6fe489ea48483f023e52ce6567464597ee1a8d90`: malformed or duplicate article slugs fail verification.
- PR #83, merge `dbebc441c0b4cfd1e5f8baededd23066d5bb69aa`: catalogue public paths must match `/articles/{slug}/`.

These are build-time safeguards, not production QA or a new formal release acceptance gate. Strict readiness remains **16%**, and Netlify deploys remain paused due to the owner's credit-cycle decision. The exact-main push CI evidence and live production verification remain outstanding.

## Operational handoff after PR #94 | 2026-10-13 UTC

**Current reviewed GitHub main:** `0aaa04f2c52f62d877d012000ebba39fa32224bc` (PR #94 squash). This is a snapshot; recheck SHA before acting.

- PR #86 through #93 were integrated after 3/3 exact-head GitHub Actions success for each. They harden article catalogue/sitemap and isolated locale canonical/hreflang assertions. PR #92 initially failed on incorrect locale-prefixed URLs in isolated root-mounted builds; corrected at HEAD `a80252acb3ff5d45ad666c4fac1cf7d8f4d76692` with 3/3 PASS, then merged as `7a005df6ab7caf3e03ce3b1680e64a20d2dbe164`. PR #93 passed 3/3 at `af408ad4302445977587d59a59b1366a7254718f`, then merged as `d36fe241a8cf37d3e3636edc3456d98d22745c6a`.
- PR #94 recorded the independently checked Netlify deployment and the authoritative release baseline in `BLOG-RELEASE-ACCEPTANCE-LEDGER.md`; 3/3 exact-head CI PASS at `61d1ba079b7eaf97aefe661b004dee5c810df3e9`; squash merged as `0aaa04f2c52f62d877d012000ebba39fa32224bc`.
- Netlify project ID `210c0bc7-2380-4fa9-bbd3-55d225f7d789`; published ready production deploy `6acc5631104cd90008479406` at `03f56ca704fb2db9e753ca87029a84fa4b7bd15c`, **not current main**. No deploy requested; owner wants final deployment only after pre-deploy work is ready and billing/credits permit.
- **Release score 16%** (I2 and G1–G4). **Editorial acceptance separately NOT VERIFIED** (48 topics × 3 locales planned, not 144 approved articles). No new release gate is credited by CI-only PRs.
- **Next gate I1**: issue #85. Need an immutable successful `push` workflow run whose `head_sha` equals current `main` and a reviewer/date recorded in the ledger. GitHub connector only exposes PR runs via commit-workflow query; empty push-run results and empty combined-status are inconclusive. Do not manufacture a 20% score.
- **Remaining predeploy work**: focused claim/source/provenance review, Day 0 editorial scope reconciliation, material finding triage. **Postdeploy**: exact SHA production verification, real HTTP and assets/browser, responsive light/dark/keyboard/accessibility, multilingual routes/SEO/feeds, editorial native signoff. Track #29, #33, #12. Do not conflate code readiness with editorial or production acceptance.

**NO MATERIAL FINDING UNDER THE RUG.**

## Predeploy editorial handoff | 2026-10-15 | integrated DRAFT #115

This checkpoint supersedes the historical operational snapshots above **for review planning only**. Recheck all live systems before merge or deployment.

- GitHub `main` verified at `fbba5cd9176cf973e826d98a130cd924e3ed0799`. Exact-main `push` Validate Blog [run 38470073314](https://github.com/sails-protocol/Sails-Protocol-Blog/actions/runs/38470073314) succeeded on this SHA. I1 is **evidence-backed pending CTO/owner acceptance**, not proof of production readiness.
- Integrated [DRAFT PR #115](https://github.com/sails-protocol/Sails-Protocol-Blog/pull/115) reviewed at `6ded8bb20d35d614b7bafe27b002d4015231ae32`. Three exact-head workflows **SUCCESS**: Validate Blog, isolated preview artifact, browser accessibility. All later commits require new exact-head checks. **Do not merge PR #112–114 separately if integrating #115.**
- Day 0 planning inventory is **48 topics × EN/PT-BR/ES = 144 draft editions**; 144/144 structural/source-link first pass is documented. Editorial fixes include ES article 15 missing section, EN article 26 Spanish sentence, ES/PT-BR article 27 disclaimers, and nine PT-BR/ES safety disclaimer corrections in articles 38/40/41/45/47. The [native review request #116](https://github.com/sails-protocol/Sails-Protocol-Blog/issues/116) contains evidence comments and remains open. **Named independent approvals: 0/144**. Targeted semantic checks are not native signoff.
- The formal release acceptance contract remains **6/25 evidence-backed gates, 20% weighted provisional** (I1/I2/G1–G4), subject to CTO/owner acceptance. I3 production-current-main and I4–I5/U1–U5/L1–L5/E1–E5/G5 remain NOT VERIFIED. Do not conflate this weighted score with any subjective global-preparation estimate.
- Open operational blockers: [#12 visual asset/provenance decision](https://github.com/sails-protocol/Sails-Protocol-Blog/issues/12), [#29 Netlify current-main deployment and live QA](https://github.com/sails-protocol/Sails-Protocol-Blog/issues/29), [#85 I1 evidence owner disposition](https://github.com/sails-protocol/Sails-Protocol-Blog/issues/85), and [#116 native editorial signoff](https://github.com/sails-protocol/Sails-Protocol-Blog/issues/116). G5 material findings F-001–F-007 require explicit evidence/disposition before PASS; issue inventory alone is insufficient.
- Netlify production last independently recorded as deploy `6acc5631104cd90008479406`, commit `03f56ca704fb2db9e753ca87029a84fa4b7bd15c`, **behind main**. Owner chose to wait for operational-credit renewal. No merge, production deploy, paid upgrade, or native approval authorized by this checkpoint.

**Next:** independent editorial/CTO reviewers sign off exact files and SHA; resolve material findings and visual provenance; revalidate CI on final PR HEAD; obtain merge authorization. Only after owner authorizes deployment and credits permit it, verify live exact SHA, HTTP, SEO, accessibility and all 25 release gates. **NO MATERIAL FINDING UNDER THE RUG.**
