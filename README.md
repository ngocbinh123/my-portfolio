# my-portfolio

Personal portfolio built with React + Vite, deployed for free on **GitHub Pages**.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev      # start Vite dev server
npm run build    # build to ./dist
npm run preview  # preview the production build locally
npm run lint     # run eslint
```

## Deployment (GitHub Pages — free)

Deployment is fully automated via GitHub Actions (`.github/workflows/deploy.yml`):

- Every push to `master` triggers a build and publishes `./dist` to GitHub Pages.
- Manual re-deploys are available from the Actions tab (**Deploy to GitHub Pages → Run workflow**).

### One-time setup on GitHub

The workflow calls `actions/configure-pages@v5` with `enablement: true`, so Pages
is turned on automatically on first run. If you ever need to do it by hand:

1. Open the repository **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### How single-page routing works on GitHub Pages

GitHub Pages serves static files only, so a direct hit on a deep link such as
`/my-portfolio/about` would return 404. The project uses the standard
[spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick:

- `public/404.html` catches unknown paths and redirects to the app root with the
  original path encoded in the query string.
- A small inline script in `index.html` decodes it with `history.replaceState`
  before React Router boots, so deep links and refreshes resolve correctly.

### Base path

The project is served from a sub-path (`/my-portfolio/`), set via
[`base`](https://vite.dev/config/shared-options.html#base) in `vite.config.js`.
If you fork this repo under a different name, update that `base` to match the
new repo name (or `/` for a user/organization site).
