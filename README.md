# my-portfolio

Portfolio site for Nguyen Ngoc Binh — built with React + Vite, deployed free on GitHub Pages.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## How deployment works

Every push to `master` runs `.github/workflows/deploy.yml`, which:

1. Installs dependencies with `npm ci`
2. Builds the site with `npm run build` (output goes to `dist/`)
3. Uploads `dist/` as a Pages artifact and publishes it via `actions/deploy-pages`

The workflow also exposes `workflow_dispatch`, so you can trigger a redeploy
from the GitHub Actions tab without pushing a commit.

### One-time GitHub Pages setup

In the repository on github.com:

1. **Settings → Pages → Build and deployment → Source**: pick **GitHub Actions**
2. **Settings → Actions → General → Workflow permissions**: allow **Read and write**
   (needed for the `pages: write` / `id-token: write` grants in the workflow)

That's it — the next push to `master` publishes the site.

### Pages-specific details already configured

- `vite.config.js` sets `base: '/my-portfolio/'` so built asset URLs include
  the repo subpath Pages serves from.
- `src/router.jsx` uses `import.meta.env.BASE_URL` as the React Router basename,
  so routes stay correct on the Pages subpath.
- `public/404.html` + a decoder in `index.html` implement the standard
  [spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick so
  deep links and hard refreshes resolve to the SPA instead of a 404.

If you rename the repository, update `base` in `vite.config.js` to match the
new repo name (e.g. `base: '/<new-name>/'`) and `pathSegmentsToKeep` in
`public/404.html` stays at `1`.

## Local development

```bash
npm install
npm run dev      # start Vite dev server
npm run build    # production build into dist/
npm run preview  # serve the built dist/ locally
npm run lint     # run ESLint
```
