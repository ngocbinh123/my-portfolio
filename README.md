# my-portfolio

Nguyen Ngoc Binh — personal portfolio. React + Vite single-page site, deployed to
GitHub Pages for free via GitHub Actions.

## Live site

Once deployed, the site is served at:

**https://ngocbinh123.github.io/my-portfolio/**

The URL comes from the `base` setting in `vite.config.js` and the repository name
on GitHub. Change one and the other must follow.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/my-portfolio/
npm run build    # production build into dist/
npm run preview  # serve dist/ locally to verify the production build
```

## Deployment

Deployment is fully automatic — no manual publishing step and no `gh-pages`
branch to maintain.

- **Workflow:** `.github/workflows/deploy.yml`
- **Triggers:**
  - every push to `master` → build + deploy to GitHub Pages
  - every pull request against `master` → build-only, to catch breakage before merge
  - manual run from the Actions tab (`workflow_dispatch`)
- **Hosting:** GitHub Pages (free for public repositories), published from
  Actions artifacts via `actions/deploy-pages`.
- **Permissions:** the workflow uses the GitHub-provided `GITHUB_TOKEN`. No
  additional secrets are needed.

### One-time repo setup

GitHub Pages must be set to deploy from GitHub Actions:

1. Open **Settings → Pages** on the repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The workflow's `actions/configure-pages@v5` step passes `enablement: true`, which
asks GitHub to enable Pages the first time it runs, so in most cases step 1 is
enough. The deploy job writes to the `github-pages` environment and the URL of
the live site is printed in the Actions run summary.

### SPA routing on GitHub Pages

GitHub Pages serves static files, so a direct hit on a deep link (e.g.
`/my-portfolio/some-path`) would normally 404. The project uses the standard
[`spa-github-pages`](https://github.com/rafgraph/spa-github-pages) trick:

- `public/404.html` catches unknown paths, encodes them as a query string, and
  redirects to the project root.
- A small script in `index.html` decodes that query string back into the real
  URL via `history.replaceState` before React Router boots.
- `src/router.jsx` passes `basename: import.meta.env.BASE_URL` so routes resolve
  under `/my-portfolio/`.

If you rename the repository (and therefore the base path), update the `base`
value in `vite.config.js` to match. `pathSegmentsToKeep` in `public/404.html`
stays at `1` because the base path has a single segment.
