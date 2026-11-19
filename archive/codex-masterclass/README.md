# Codex Masterclass archive

Archived on 19 November 2026 at the owner's request. This directory preserves the original source outside Astro's `src/pages` and `public`. A separate public archived outline now lives at `/course/codex-masterclass`, listed under Archived courses at `/courses`. Neither route is included in the header or footer menus. The original images and embedded waitlist remain outside the published site.

## Preserved files

Each file is stored beneath this directory at its original repository-relative path:

- `src/pages/masterclass/codex.astro` — full original page, copy, pricing, dates, styling and waitlist embed.
- `public/img/codex-masterclass-hero.png`
- `public/img/codex-masterclass-hero-friendly.jpg`
- `docs/codex-masterclass-waitlist.md` — original form setup notes.

The shared navigation no longer lists the course. `astro.config.mjs` redirects the old `/masterclass/codex` URL to `/course/codex-masterclass`. In the current static Astro build, this is a generated HTML redirect rather than a server-side HTTP redirect. The public archive is generated from `src/data/courses.ts` by `src/pages/course/[slug].astro`; it has no pricing, proposed dates or registration controls.

The external Tally form and its submissions are unchanged. Its embed is no longer part of the active PAL website.

## Restore later

1. Review the archived copy, dates, pricing and waitlist before offering it again; this source retains their original values.
2. Update the course record in `src/data/courses.ts` and the `/course/<course-name>` template for the renewed offer. Change the status from `archived` to `active` only when the offer is ready.
3. Keep the catalogue out of shared navigation unless that product decision changes. Add a reviewed signup flow separately when registration reopens.
4. The original page and assets can be copied from this source archive if needed, adapting its imports and asset paths to the current course route. Avoid restoring the retired route while its redirect is configured.
5. Run `npm run build`, review the page, and deploy through the existing Vercel project.
