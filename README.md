# My Portfolio

Single-page React portfolio site for Nguyen Ngoc Binh — Senior Mobile Solution Developer.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

Built with [Vite](https://vite.dev/) + [React](https://react.dev/) and deployed free of charge on [GitHub Pages](https://pages.github.com/) via GitHub Actions.

## Local development

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build into ./dist
npm run preview   # serve the built output locally
npm run lint      # run ESLint over src/
```

Node.js 22 or newer is required (matches the CI runtime).

## Deployment — free on GitHub Pages

Every push to `master` is built and published automatically by
`.github/workflows/deploy.yml`:

1. Checks out the repo and installs dependencies with `npm ci`.
2. Runs `npm run build`, producing `./dist`.
3. Uploads `./dist` as a Pages artifact and deploys it with
   `actions/deploy-pages@v4`.

GitHub Pages is enabled automatically by the workflow
(`actions/configure-pages@v5` with `enablement: true`), so no manual toggle is
needed in the repository settings.

The workflow can also be triggered on demand from the **Actions** tab in GitHub
(`Deploy to GitHub Pages` → `Run workflow`).

### SPA routing on Pages

GitHub Pages serves static files, so a deep-link refresh would normally 404.
Two small pieces make the React Router SPA work correctly:

- `public/404.html` — encodes the requested path into a query string and
  redirects to the app root.
- The inline script at the top of `index.html` — decodes that query string
  back into the real URL via `history.replaceState` before React Router boots.

### Base path

`vite.config.js` sets `base: '/my-portfolio/'` so built asset URLs point at the
project subpath on `ngocbinh123.github.io`. `src/router.jsx` picks the same
value up through `import.meta.env.BASE_URL` for React Router.

## Continuous integration

`.github/workflows/ci.yml` runs on every pull request to `master` (and on
pushes to non-master branches), executing `npm ci`, `npm run lint`, and
`npm run build`, so a broken change is caught before it reaches the live
site.
