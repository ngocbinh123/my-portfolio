# Nguyen Ngoc Binh — Portfolio

Single-page portfolio built with React + Vite, deployed to GitHub Pages.

## Live site

**https://ngocbinh123.github.io/my-portfolio/**

## Deployment (GitHub Pages — free)

Every push to `master` triggers `.github/workflows/deploy.yml`, which builds the
site with Vite and publishes `dist/` to GitHub Pages. No manual steps, no paid
hosting — everything runs on GitHub's free tier (Actions + Pages for public
repos).

Pipeline:

1. `actions/checkout@v5` — pull the repo
2. `actions/setup-node@v5` (Node 22) with npm cache
3. `npm ci && npm run build` — produce `dist/`
4. `actions/configure-pages@v5` (with `enablement: true`) — auto-enables Pages
   on first run
5. `actions/upload-pages-artifact@v3` + `actions/deploy-pages@v4` — publish

### One-time GitHub repo settings

The workflow enables Pages automatically, but if you ever need to check:

- **Settings → Pages → Source** must be set to `GitHub Actions` (not "Deploy
  from a branch")
- **Settings → Actions → General → Workflow permissions** must allow Pages
  write (the workflow's `permissions:` block already requests `pages: write`
  and `id-token: write`)

### SPA routing on GitHub Pages

React Router deep links (e.g. `/my-portfolio/about` refreshed directly) are
handled by the `public/404.html` + `index.html` decoder pair (the
[rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages)
pattern). `vite.config.js` sets `base: '/my-portfolio/'` so all assets resolve
under the project sub-path, and the router's `basename` reads from
`import.meta.env.BASE_URL` to stay in sync.

## Local development

```bash
npm install
npm run dev       # start dev server on http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # eslint
```

Requires Node 20+ (CI uses Node 22).
