# Prompt Alchemist — Marketing site tech stack (static, Vercel)

**Goal:** A small, fast **static** site that shares the project and vision (aligned with Type 4: pillars, north star, tagline, who it’s for). No backend required for v1.

**Deploy target:** [Vercel](https://vercel.com) — connect the Git repo, automatic previews on PRs, custom domain in project settings.

---

## Recommended default

| Layer | Choice | Why |
|--------|--------|-----|
| **Framework** | **Astro** | Built for mostly-static pages; minimal client JS; great for marketing + MD/MDX copy; straightforward Vercel integration. |
| **Styling** | **Tailwind CSS** | Fast iteration, consistent spacing/typography, easy to match a distinct brand later. |
| **Content** | **MD or MDX** in `/src/content` (or co-located) | Vision, pillars, and quotes stay editable without touching layout code. |
| **Language** | **TypeScript** (optional but default in Astro templates) | Safer refactors if the site grows. Plain JS is fine if you prefer less tooling. |

**Build output:** static HTML/CSS/JS in `dist/` (Astro’s default). Vercel detects Astro; set **Output Directory** to `dist` if you use a custom setup.

---

## Solid alternatives (still static + Vercel)

| If you… | Consider |
|---------|----------|
| Already live in **React** | **Next.js** with `output: 'export'` — full static export; same Vercel workflow. Slightly heavier than Astro for a simple landing. |
| Want **almost no framework** | **Vite** + vanilla or **Preact** — you hand-roll structure; maximum control, more manual work. |
| Prefer **data in files, zero components** | **Eleventy (11ty)** — excellent for content-first static sites; works on Vercel with a standard Node build. |

---

## What you can skip (for v1)

- Database, auth, API routes (not needed for “briefly share vision”).
- Heavy client frameworks unless you add interactive demos later.
- CMS — add **Sanity**, **Contentful**, or **Decap** only if non-devs must edit copy without Git.

---

## Vercel checklist

1. Repo on GitHub/GitLab/Bitbucket → **Import** in Vercel.
2. **Framework Preset:** Astro (or Next if you choose that path).
3. **Environment variables:** none required for a static marketing site unless you add analytics with a server-side key (usually client-side snippet is enough).
4. **Domain:** Project → Settings → Domains.

---

## Optional additions (later)

- **Analytics:** Vercel Analytics, Plausible, or Fathom (privacy-friendly).
- **Forms:** Static-friendly options include **Formspark**, **Basin**, or **Tally** embed — no server to maintain.
- **SEO:** Astro/Next both support metadata, `sitemap.xml`, and `robots.txt` via plugins or small config.

---

## One-line summary

**Astro + Tailwind + MD/MDX → static `dist/` → Vercel** is the simplest path that stays fast, readable, and easy to extend when you add more pages or a blog.
