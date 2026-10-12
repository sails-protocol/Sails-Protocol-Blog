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
