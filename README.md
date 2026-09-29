# my-portfolio

Personal portfolio site for Nguyen Ngoc Binh — Senior Mobile Solution Developer.
Built with React + Vite, deployed for free on GitHub Pages.

## Live site

https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build into dist/
npm run preview   # preview the production build
npm run lint      # run eslint
```

## Deployment (GitHub Pages, free)

Every push to `master` triggers `.github/workflows/deploy.yml`, which:

1. Installs dependencies with `npm ci` on Node 22.
2. Runs `npm run build`, producing static files in `dist/`.
3. Uploads `dist/` as a Pages artifact and publishes it via
   `actions/deploy-pages`.

The workflow uses `actions/configure-pages` with `enablement: true`, so the
Pages site is enabled automatically on the first successful run — no manual
setup needed in the repo settings.

### Project-site base path

Because the site is served under `https://<user>.github.io/my-portfolio/`
(not the domain root), `vite.config.js` sets `base: '/my-portfolio/'` and
`src/router.jsx` uses `basename: import.meta.env.BASE_URL`. If you ever fork
this repo under a different name, change the `base` to match the new
repository name.

### SPA deep-link support

GitHub Pages serves static files only, so a client-side route like
`/my-portfolio/about` refreshed directly would 404. `public/404.html`
catches that, re-encodes the path into a query string, and redirects to the
app root; a small decoder in `index.html` restores the original URL before
React Router boots. See https://github.com/rafgraph/spa-github-pages for the
technique.
