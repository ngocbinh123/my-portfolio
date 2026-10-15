# my-portfolio

Personal portfolio site built with React + Vite, deployed to GitHub Pages
for free out of the GitHub Actions runner.

**Live:** https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev        # start the dev server on http://localhost:5173/my-portfolio/
npm run lint       # ESLint
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

Node 22 is used in CI; any recent LTS works locally.

## How the GitHub Pages deployment is wired

Everything the deploy needs lives in this repo. There is no external host
and no paid service — the Actions runner builds the site and uploads it
to GitHub Pages.

- `vite.config.js` sets `base: '/my-portfolio/'` so built asset URLs match
  the project-pages path.
- `src/router.jsx` passes `basename: import.meta.env.BASE_URL` so React
  Router stays in sync with that base.
- `public/404.html` and the small decoder in `index.html` are the
  [spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick
  that lets deep links and refreshes work on a static host that has no
  SPA fallback of its own.
- `.github/workflows/deploy.yml` builds and publishes the site. It runs
  on every push to `master`, and can also be re-run on demand from the
  Actions tab (`workflow_dispatch`).
- `.github/workflows/ci.yml` runs lint + build on PRs targeting `master`
  and on pushes to any non-`master` branch, so a broken build is caught
  before it reaches the live site.

## One-time repo setup

In **Settings → Pages**, set **Source** to **GitHub Actions**. The deploy
workflow already asks `actions/configure-pages` to enable Pages, but the
source selector in Settings is the thing that tells GitHub to serve what
Actions uploads. After that, every push to `master` deploys automatically.

The deploy URL is also surfaced on each run's `deploy` job summary.
