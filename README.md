# My Portfolio — Nguyen Ngoc Binh

Live site: **https://ngocbinh123.github.io/my-portfolio/**

Single-page React portfolio built with Vite, deployed free on GitHub Pages via GitHub Actions.

## Stack

- React 19 + React Router 7
- Vite 7 (build + dev server)
- Dark / light theme via CSS variables
- GitHub Pages (hosting) + GitHub Actions (CI/CD)

## Local development

```bash
npm install
npm run dev        # http://localhost:5173/my-portfolio/
npm run build      # production build to ./dist
npm run preview    # preview the production build locally
npm run lint
```

## Deployment (GitHub Pages, free)

Every push to `master` triggers `.github/workflows/deploy.yml`, which:

1. Installs dependencies with `npm ci`
2. Builds the site with `npm run build`
3. Uploads `./dist` as a Pages artifact
4. Deploys it to the `github-pages` environment

You can also trigger a deploy manually from **Actions → Deploy to GitHub Pages → Run workflow** (the workflow has `workflow_dispatch`).

### One-time repository setup

In the repository on GitHub:

1. **Settings → Pages → Build and deployment → Source**: select **GitHub Actions**.
   (The workflow also calls `actions/configure-pages` with `enablement: true`, so this is usually set automatically on first run.)
2. **Settings → Actions → General → Workflow permissions**: ensure read/write is allowed, or at minimum keep the per-job permissions declared in the workflow (`pages: write`, `id-token: write`).

Once enabled, the site is served from:

```
https://<github-username>.github.io/my-portfolio/
```

### Why these two bits matter

- `vite.config.js` sets `base: '/my-portfolio/'` so built asset URLs resolve under the project page path. If you fork and rename the repo, update this value to `'/<new-repo-name>/'`.
- `public/404.html` plus the decoder script in `index.html` implement the SPA fallback: GitHub Pages serves `404.html` for any deep-link refresh (e.g. `/my-portfolio/about`), which rewrites the URL into a query string and the app restores the real route before React Router boots.
