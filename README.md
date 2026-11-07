# my-portfolio

Nguyen Ngoc Binh's personal portfolio — a React + Vite single-page site, deployed free on GitHub Pages.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev        # start Vite dev server
npm run build      # production build (outputs to ./dist)
npm run preview    # preview the production build locally
npm run lint       # run ESLint
```

Node 22+ is required (matches the CI runtime).

## Deployment (GitHub Pages, free tier)

Deployment is fully automated by `.github/workflows/deploy.yml`:

- Every push to `master` triggers a build and deploy to GitHub Pages.
- You can also trigger a redeploy manually: **GitHub → Actions → Deploy to GitHub Pages → Run workflow**.
- The workflow builds with `npm run build`, uploads `dist/` as a Pages artifact, and publishes via `actions/deploy-pages`.
- GitHub Pages is enabled automatically by `actions/configure-pages` (`enablement: true`), so no manual setup in repo Settings is required beyond selecting **Source: GitHub Actions** the first time.

### Base path

`vite.config.js` sets `base: '/my-portfolio/'` so built asset URLs match the project-site path `https://<user>.github.io/my-portfolio/`. If you fork and rename the repo, update `base` to match the new repo name.

### SPA routing on Pages

GitHub Pages doesn't natively support client-side routes (e.g. `/about` refresh → 404). The SPA redirect pattern from [rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages) is wired up:

- `public/404.html` encodes the requested path as a query string and redirects to the app root.
- A small decoder in `index.html` restores it via `history.replaceState` before React Router boots.

Keep `pathSegmentsToKeep = 1` in `public/404.html` as long as the site is served from a project subpath.
