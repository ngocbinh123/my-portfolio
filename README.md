# My Portfolio

[![Deploy to GitHub Pages](https://github.com/ngocbinh123/my-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/ngocbinh123/my-portfolio/actions/workflows/deploy.yml)

**Live site:** https://ngocbinh123.github.io/my-portfolio/

Personal portfolio built with React 19 + Vite. Dark/light themes, single-page landing, responsive layout, CV download.

## Scripts

```bash
npm install     # install dependencies
npm run dev     # run dev server at http://localhost:5173
npm run lint    # eslint
npm run build   # production bundle to dist/
npm run preview # preview the production build locally
```

Requires Node >= 20.19 (Vite 7).

## Deploy (GitHub Pages — free)

Hosting, CI, and TLS are all provided for free by GitHub. The
`.github/workflows/deploy.yml` workflow builds the site with Vite and
publishes `dist/` to GitHub Pages.

It runs on:
- Every push to `master` (automatic deploy).
- Manual trigger from the **Actions** tab → *Deploy to GitHub Pages* → *Run workflow* (`workflow_dispatch`).

One-time Pages setup (already done on this repo — repeat if you fork):

1. Repo → **Settings** → **Pages** → *Build and deployment* → **Source: GitHub Actions**.
2. Confirm the deploy workflow has *Read and write* permissions in **Settings → Actions → General → Workflow permissions**.
3. Push to `master` (or trigger the workflow manually). The published URL is shown in the workflow summary under the `deploy` job.

### Project base path

`vite.config.js` sets `base: '/my-portfolio/'` so assets resolve under
`https://<user>.github.io/my-portfolio/`. The React Router `basename` is
bound to `import.meta.env.BASE_URL`, so deep links work.

For SPA refresh / deep links, `public/404.html` + the small redirect
decoder in `index.html` implement the standard GitHub Pages SPA trick
(rafgraph/spa-github-pages).
