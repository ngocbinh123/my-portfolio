# My Portfolio

React + Vite portfolio site, deployed free on **GitHub Pages**.

Live URL once deployed: **https://ngocbinh123.github.io/my-portfolio/**

## How deployment works (free on GitHub)

This repo ships with an automated GitHub Actions workflow — `.github/workflows/deploy.yml` —
that builds the Vite app and publishes `dist/` to GitHub Pages every time `master`
(or `main`) receives a push. It also supports manual runs via the **Run workflow**
button in the Actions tab (`workflow_dispatch`).

The workflow uses only free services included with every public GitHub repo:

- **GitHub Actions** — builds the app (Node 22 + `npm ci` + `npm run build`).
- **GitHub Pages** — hosts the built static site. `actions/configure-pages@v5`
  is called with `enablement: true`, so Pages turns itself on the first time
  the workflow runs. No manual Settings click required.

### One-time setup (already done, documented for reference)

1. Repository **Settings → Pages → Build and deployment → Source** is set to
   **GitHub Actions** (the workflow configures this automatically via
   `actions/configure-pages@v5` on first run).
2. `vite.config.js` sets `base: '/my-portfolio/'` so built assets resolve
   against the project page URL (`https://<user>.github.io/my-portfolio/`).
3. `public/404.html` + the decoder in `index.html` implement the
   [spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick so
   React Router deep links and page refreshes work on Pages.
4. React Router uses `basename: import.meta.env.BASE_URL` to match the Vite base.

### Deploying

Push to `master` (or `main`), or trigger **Actions → Deploy to GitHub Pages → Run workflow**.
Within ~1–2 minutes the site is live at the URL above.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173/my-portfolio/
npm run build      # produce dist/
npm run preview    # preview the production build
npm run lint
```

## Tech stack

- React 19 + React Router 7
- Vite 7
- ESLint 9
