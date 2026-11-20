# my-portfolio

Nguyen Ngoc Binh's personal portfolio — Senior Mobile Solution Developer.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

Built with React 19 + Vite 7 + React Router 7, deployed to GitHub Pages
on every push to `master` through the free GitHub Actions + Pages pipeline.

## Local development

```bash
npm install
npm run dev       # start Vite dev server
npm run build     # produce production bundle in dist/
npm run preview   # serve the built bundle locally
npm run lint      # eslint
```

## Deployment

Hosting is 100% free, courtesy of:

- **GitHub Actions** — builds the site in `.github/workflows/deploy.yml`.
- **GitHub Pages** — serves the static `dist/` output.

The workflow runs on every push to `master`:

1. `actions/checkout@v5` — pull the source.
2. `actions/setup-node@v5` with Node 22 + npm cache — install dependencies with `npm ci`.
3. `npm run build` — Vite builds `dist/`.
4. `actions/configure-pages@v5` with `enablement: true` — turns Pages on automatically the first time.
5. `actions/upload-pages-artifact@v3` — upload `./dist`.
6. `actions/deploy-pages@v4` — publish to Pages.

Deploy history: https://github.com/ngocbinh123/my-portfolio/actions/workflows/deploy.yml

### SPA routing on Pages

GitHub Pages serves static files only, so a direct hit on a sub-route
(e.g. `/my-portfolio/about`) would normally 404. The repo uses the
[rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages)
pattern:

- `public/404.html` catches unknown paths and rewrites the URL into a query-string form before redirecting to the app root.
- A small decoder in `index.html` restores the original route via
  `history.replaceState` before React Router boots.

This lets deep links and page refreshes resolve correctly without a server.

### Vite base path

`vite.config.js` sets `base: '/my-portfolio/'` so all built asset URLs are
prefixed with the repo name — required because the site is served at
`ngocbinh123.github.io/my-portfolio/`, not the domain root.
`src/router.jsx` mirrors it with `basename: import.meta.env.BASE_URL`.

## First-time GitHub Pages setup

The workflow uses `actions/configure-pages@v5` with `enablement: true`,
which enables Pages automatically on the first successful run. If Pages
is ever disabled or a run fails because of it, enable it manually at
**Settings → Pages → Source: GitHub Actions**.
