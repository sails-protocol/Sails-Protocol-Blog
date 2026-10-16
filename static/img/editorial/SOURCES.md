# Editorial cinematic image release gate

Issue: https://github.com/sails-protocol/Sails-Protocol-Blog/issues/12

## Approved generated assets

- `sails-earth-horizon-hero.webp` (1600 × 900, approximately 216 KiB)

The hero image was generated specifically for the Sails Protocol Blog using OpenAI image generation, then resized and encoded as WebP. It is **illustrative, not an authentic NASA photograph**. Do not label it as NASA photography or imply it is a factual satellite capture.

## Required release sequence

1. Upload the hero WebP file into `static/img/editorial/` on a feature branch. Do not substitute screenshots of a website or status dashboard.
2. Keep `/img/editorial/sails-earth-horizon-hero.webp` for the hero only. Use distinct topic-specific SVGs for featured article cards. Keep gradient overlays and text as accessible HTML.
3. Run `node scripts/check-editorial-image-assets.mjs` and the normal build/a11y checks.
4. Check screenshots at desktop, tablet, and mobile widths, including light mode and keyboard navigation.
5. Require exact-head CI success; merge; verify Netlify production commit and HTTP 200 on the hero image.

**Do not mark #12 complete or claim 100% before the files are actually committed and visually verified.**

## Verified repository-state reconciliation | 2026-10-15 | DRAFT PR #115

The original "Required release sequence" above is historical. At reviewed commit `963019c873f00fe6e8fdeac1da6e06ae3b11957d`, the generated `sails-earth-horizon-hero.webp` is **already committed** in `static/img/editorial/` and `src/css/custom.css` references it in the hero background (including mobile styles). The six topic-specific SVGs `market-crossroads.svg`, `software-boundary.svg`, `immutable-contract.svg`, `financial-gates.svg`, `noncustodial-keys.svg` and `stablecoin-rails.svg` are also present. These are distinct illustrations, **not licensed documentary photographs**.

The older `earth-horizon.svg` still exists and remains referenced by the `.sails-art-orbit` CSS class. That fact alone does not prove it is displayed on a live route; inspect rendered usage before deleting or replacing it. Do not describe the hero as missing, or claim that the issue's original proposed NASA photograph has been adopted. The current hero is AI-generated illustration, with no NASA endorsement.

**Outstanding issue #12 decision:** explicitly accept the existing generated-hero plus distinct SVG illustration system **or** authorize a separately sourced, licensed photographic redesign. No automatic image replacement should occur under a documentation-only gate. For either decision, verify provenance, actual rendered cards, responsive crop, contrast, keyboard focus and the current-main production assets after authorized deployment. This repository-state inspection does **not** satisfy the visual or production acceptance gates and does not close #12.

## Rendered source usage cross-check | 2026-10-15

Inspected `src/pages/index.tsx` and `src/pages/seasons/index.tsx` at `ec43a47433d2ec139e763197b4e71e51ad8846c7`. The homepage actually uses `sails-art-approved` and direct background-image references to `protocol-waves.svg`, `financial-gates.svg`, `software-boundary.svg` and `stablecoin-rails.svg`; the published-article artwork mapping also names `market-crossroads`, `software-boundary`, `immutable-contract`, `financial-gates`, `noncustodial-keys` and `stablecoin-rails`. The Seasons page renders text links without the `sails-art-orbit` class. Neither examined page references `sails-art-orbit` or `sails-art-columns`. Their CSS selectors and older SVG assets therefore appear **unused by these two page sources**; this is not a site-wide dead-code proof and not grounds for deleting them without checking other templates and generated output.

**Visual issue decision remains open** because real rendered responsive/contrast evidence and owner design acceptance are missing. Do not equate source inspection with live screenshot approval.

## Day 0 visual direction approved by owner | 2026-10-16

The project owner explicitly **approved the existing visual identity** for the Sails Protocol Blog Day 0: the current OpenAI-generated hero illustration and distinct topic SVG illustrations. **No photographic redesign or NASA-image substitution is authorized.** This decision supersedes the older alternative described above. The generated hero must continue to be identified as an illustration, not a real NASA photograph.

Evidence: [visual release issue #12](https://github.com/sails-protocol/Sails-Protocol-Blog/issues/12#issuecomment-6208509416). This is **art-direction approval only**. Actual desktop/tablet/mobile screenshot inspection, responsive crop and legibility review, independent acceptance, and post-deployment production checks remain separate gates. Automated axe/browser CI at candidate PR #115 HEAD `1296c705c1d049da7b1ba9da71915c6e74603221` was 3/3 green before this documentation-only update. Do not infer exact-head green status for a subsequent commit without checking the new runs. No merge to main or Netlify deployment is authorized.
