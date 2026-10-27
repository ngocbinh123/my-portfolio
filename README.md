# Nguyen Ngoc Binh — Portfolio

Personal portfolio site built with React + Vite, deployed free on GitHub Pages.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev        # start Vite dev server
npm run build      # production build into dist/
npm run preview    # serve the production build locally
npm run lint       # run ESLint on src/
```

Node 22+ is required (matches the version used in CI).

## Deployment

Every push to `master` triggers `.github/workflows/deploy.yml`, which:

1. Installs dependencies with `npm ci`.
2. Builds the site with `npm run build`.
3. Uploads `dist/` as a GitHub Pages artifact.
4. Deploys it to GitHub Pages.

The workflow uses GitHub's free Pages hosting via the `actions/deploy-pages`
action — no third-party service, no tokens, nothing to pay for.

### One-time GitHub setup

In the repository on github.com:

1. **Settings → Pages → Build and deployment → Source:** set to **GitHub Actions**.
2. **Settings → Actions → General → Workflow permissions:** allow read/write (so
   the deploy job can publish the Pages artifact).

After that, every push to `master` publishes automatically. The deployed URL
is shown on the workflow run page and under **Settings → Pages**.

### How routes survive a refresh

GitHub Pages serves static files, so a deep link like `/my-portfolio/about`
would normally 404 on refresh. Two small scripts handle that for the SPA:

- `public/404.html` — GitHub Pages serves this for any unknown path. It
  rewrites the URL into a `/?/path` query form and redirects to the app root.
- `index.html` — a decoder restores the original route via
  `history.replaceState` before React Router boots.

Both come from the [`rafgraph/spa-github-pages`](https://github.com/rafgraph/spa-github-pages)
pattern.

### Base path

`vite.config.js` sets `base: '/my-portfolio/'` so built asset URLs match the
Pages project path. `src/router.jsx` picks up the same prefix via
`basename: import.meta.env.BASE_URL`. If you fork this under a different repo
name, update both.
