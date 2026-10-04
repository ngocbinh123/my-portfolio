# My Portfolio — Nguyen Ngoc Binh

Single-page personal portfolio built with React + Vite, deployed for free on GitHub Pages.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/my-portfolio/
npm run build    # production bundle in dist/
npm run preview  # preview the production bundle
npm run lint
```

Vite is pinned to the project base path `/my-portfolio/` (see `vite.config.js`), which matches the GitHub Pages URL above. React Router reuses the same base via `import.meta.env.BASE_URL`, so routes work the same locally and in production.

## Deployment (GitHub Pages — free)

Deployment is fully automated by `.github/workflows/deploy.yml`:

- Every push to `master` builds the site with `npm run build` and publishes `dist/` to GitHub Pages using the official `actions/deploy-pages` action.
- The workflow is also wired to `workflow_dispatch`, so a redeploy can be triggered manually from the repository's **Actions → Deploy to GitHub Pages → Run workflow** menu.
- `actions/configure-pages` has `enablement: true`, so the first successful run auto-enables Pages on the repository (source: GitHub Actions).

### Deep-link / refresh handling

GitHub Pages serves static files, so a direct hit on a client-side route (e.g. refreshing a deep link) would normally return 404. The project uses the standard [spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick:

- `public/404.html` encodes the requested path into a query string and redirects to the app root.
- A tiny decoder in `index.html` restores the original URL via `history.replaceState` before React Router boots.

The result: refreshes and shared links resolve to the right section even though the host is static.

### What's free from GitHub

- **GitHub Pages** hosts the static build at `https://<user>.github.io/<repo>/` with HTTPS by default.
- **GitHub Actions** runs the build + deploy on every push (public repos get unlimited free minutes).

## Project layout

```
src/
  components/   UI primitives and section blocks
  context/      Theme provider (dark + light, no-flash on load)
  data/         Content for sections (projects, skills, experience, …)
  pages/        Route-level pages (single landing)
  styles/       Global CSS variables + resets
  router.jsx    React Router config (uses BASE_URL as basename)
  main.jsx      App entry
public/         Static assets copied as-is (incl. CV PDF, 404.html)
```
