# my-portfolio

Nguyen Ngoc Binh — Senior Mobile Solution Developer. Personal portfolio built with React + Vite, deployed free on GitHub Pages.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production bundle into dist/
npm run preview   # serve the built bundle locally
```

## Deploying to GitHub Pages (free)

Deployment is fully automated via `.github/workflows/deploy.yml`:

- Every push to `master` (or `main`) triggers a build and deploy.
- You can also trigger it manually from the **Actions → Deploy to GitHub Pages → Run workflow** button.
- The workflow uses the official `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages` actions. `enablement: true` auto-turns Pages on the first time the workflow runs, so no manual setup in **Settings → Pages** is required.
- The site is served from the GitHub Pages environment at the URL above.

### SPA routing

GitHub Pages is static, so client-side routes are handled with the standard SPA shim:

- `public/404.html` encodes the requested path into a query string and redirects to the app root.
- A small script in `index.html` decodes it back into the original path via `history.replaceState` before React Router boots.
- Based on [rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages).

### Base path

`vite.config.js` sets `base: '/my-portfolio/'` so built asset URLs match the project page path. If you rename the repository, update this value.
