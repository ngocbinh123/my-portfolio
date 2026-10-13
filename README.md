# my-portfolio

Personal portfolio site built with React + Vite, deployed free on GitHub Pages.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev        # start Vite dev server
npm run build      # production build into ./dist
npm run preview    # preview the production build
npm run lint       # ESLint
```

## Deployment (GitHub Pages, free)

Deployment is fully automated by GitHub Actions and uses only free GitHub
features (Pages hosting + Actions minutes for public repos). The pipeline
is defined in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

- **Trigger**: every push to `master`, or manually from the Actions tab
  (`Run workflow` button, thanks to `workflow_dispatch`).
- **Build**: Node 22 + `npm ci` + `npm run build` (output: `./dist`).
- **Publish**: uploads `./dist` as a Pages artifact and deploys it via
  `actions/deploy-pages`. The workflow sets `enablement: true` on
  `actions/configure-pages`, so Pages is turned on automatically on the
  first successful run — no manual toggle needed.

### One-time GitHub repo setup

1. Push this repo to `github.com/<you>/my-portfolio` (public repo — Pages
   is free for public repos; for private repos it requires GitHub Pro).
2. In **Settings → Pages**, set **Source** to **GitHub Actions** (the
   workflow will also enable this automatically on first run).
3. Push to `master` (or run the workflow manually). The live URL will
   appear in the deploy job summary.

### Project base path

The site is served under the repo-name path (`/my-portfolio/`), so
`vite.config.js` sets `base: '/my-portfolio/'`. If you rename the repo,
update `base` and the `pathSegmentsToKeep` value in
[`public/404.html`](public/404.html) to match.

### SPA deep links

GitHub Pages serves `404.html` for unknown paths. [`public/404.html`](public/404.html)
rewrites the URL into a `/?/path` query form, then the decoder script in
[`index.html`](index.html) restores the original route before React Router
boots — so refreshing a deep link or sharing one works.
