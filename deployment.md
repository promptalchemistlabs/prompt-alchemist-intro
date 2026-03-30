# Deploying Prompt Alchemist Intro (Astro → Vercel)

This project is a **static** Astro site. The production build outputs to the `dist/` directory.

## Prerequisites

- A [Vercel](https://vercel.com) account
- This repository pushed to GitHub, GitLab, or Bitbucket (or connect via Vercel CLI)

## One-time configuration

### 1. Set your production URL in Astro

In `astro.config.mjs`, update `site` to your real domain (including `https://`). This value is used for the canonical URL and Open Graph `og:url`.

```js
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
});
```

If you only have a Vercel preview URL at first, you can use that temporarily, then switch when the custom domain is live.

### 2. Import the project in Vercel

1. In the Vercel dashboard, choose **Add New… → Project**.
2. **Import** your Git repository.
3. Vercel usually **auto-detects Astro**. Confirm the settings:

| Setting | Value |
|--------|--------|
| **Framework Preset** | Astro |
| **Build Command** | `npm run build` (default) |
| **Output Directory** | `dist` (default for Astro) |
| **Install Command** | `npm install` (default) |

4. Deploy. Every push to the connected branch will trigger a new deployment; pull requests get preview URLs.

### 3. Node.js version (optional)

The project expects **Node 20.10+** (see `package.json` → `engines`). On Vercel you can pin the version:

- **Project → Settings → General → Node.js Version**, or
- Add an `.nvmrc` or `engines.node` (already present in `package.json`; Vercel respects `engines` when configured to do so).

If the build fails locally or on Vercel, align your local Node version with Vercel’s (see Vercel docs for current defaults).

### 4. Custom domain

**Project → Settings → Domains** → add your domain and follow DNS instructions (usually a `CNAME` to `cname.vercel-dns.com` or the values Vercel shows).

## Deploy with Vercel CLI (alternative)

```bash
npm i -g vercel
cd /path/to/prompt-alchemist-intro
vercel        # first time: link project, preview
vercel --prod # production deploy
```

Link the CLI to the same project as your Git integration if you want a single source of truth.

## Verify locally before shipping

```bash
npm install
npm run build
npm run preview
```

Open the printed local URL and check sections, nav anchors, and metadata.

## No environment variables required

A static marketing build does not need API keys or database URLs. If you later add analytics or form endpoints that need secrets, add them under **Project → Settings → Environment Variables** in Vercel.
