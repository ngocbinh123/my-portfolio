# my-portfolio

Nguyen Ngoc Binh's personal portfolio — a single-page React + Vite site deployed
free of charge on **GitHub Pages**.

Live site: **https://ngocbinh123.github.io/my-portfolio/**

## Local development

```bash
npm install
npm run dev        # start Vite dev server on http://localhost:5173
npm run build      # produce production bundle in dist/
npm run preview    # preview the production build locally
npm run lint       # run ESLint
```

## Deployment (GitHub Pages, free)

Deployment is automated by `.github/workflows/deploy.yml` and uses only the
free tier provided by GitHub:

- **Trigger:** every push to `master`, plus a manual **"Run workflow"** button
  on the Actions tab (`workflow_dispatch`).
- **Build job:** checks out, runs `npm ci`, then `npm run build`, and uploads
  the `dist/` folder as a Pages artifact.
- **Deploy job:** publishes that artifact to the `github-pages` environment via
  the official `actions/deploy-pages` action.

The workflow uses `actions/configure-pages@v5` with `enablement: true`, so
GitHub Pages is turned on automatically the first time the workflow runs — no
manual setting toggling required.

### One-time repo setup

1. On GitHub, go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions** (the workflow handles the rest).
3. After the next push to `master`, the live URL above becomes active.

### Base path & SPA routing

- `vite.config.js` sets `base: '/my-portfolio/'` so built asset URLs resolve
  under the project's Pages path.
- React Router uses `basename: import.meta.env.BASE_URL` to match.
- `public/404.html` + the decoder script in `index.html` implement the
  [spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick, so
  deep links and refreshes work on GitHub Pages (which has no server-side
  rewrites).

### Trigger a redeploy manually

Go to **Actions → Deploy to GitHub Pages → Run workflow** and pick `master`.
