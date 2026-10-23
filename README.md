# Nguyen Ngoc Binh — Portfolio

Single-page React + Vite portfolio, deployed free to GitHub Pages.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## Development

```bash
npm install
npm run dev      # start Vite dev server
npm run lint     # run ESLint
npm run build    # production build into ./dist
npm run preview  # preview the production build locally
```

## Deployment (GitHub Pages)

Deployment is fully automated and runs on GitHub's free tier.

- **Workflow:** `.github/workflows/deploy.yml`
- **Trigger:** every push to `master`, or manually from the Actions tab (**Run workflow**).
- **Pipeline:** installs deps → `npm run build` → uploads `./dist` as a Pages artifact → deploys via `actions/deploy-pages`.
- **Pages enablement:** the workflow sets `enablement: true` via `actions/configure-pages`, so no manual click in repo settings is required the first time.

### One-time repo settings

In **Settings → Pages**, confirm:

- **Source:** _GitHub Actions_ (not "Deploy from a branch").
- The site URL that appears there is the one above.

### SPA routing

React Router runs in `createBrowserRouter` mode with the base path `'/my-portfolio/'` (matches `vite.config.js` `base`). A `public/404.html` + decoder in `index.html` restore deep links on refresh (standard `rafgraph/spa-github-pages` technique).

## Pull-request checks

`.github/workflows/ci.yml` runs `npm ci`, `npm run lint`, and `npm run build` on every pull request to `master` and on pushes to non-master branches, so broken code never lands on the deploying branch.
