# My Portfolio

Nguyen Ngoc Binh — Senior Mobile Solution Developer. Single-page React portfolio built with Vite, deployed free on GitHub Pages.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev       # http://localhost:5173/my-portfolio/
npm run build     # production bundle in ./dist
npm run preview   # serve the production bundle
npm run lint
```

## Deploy to GitHub Pages

Deployment is automated by `.github/workflows/deploy.yml` using GitHub's free Pages hosting.

**When it runs**
- Every push to `master` (production deploy)
- Manually from the Actions tab → *Deploy to GitHub Pages* → *Run workflow* (any branch)

**One-time setup on GitHub**
1. On github.com, open the repo → **Settings** → **Pages**.
2. Under *Build and deployment*, set **Source** to **GitHub Actions**.
   (The workflow also calls `actions/configure-pages` with `enablement: true`, so this is usually auto-enabled on the first run.)
3. Push to `master` (or trigger the workflow manually). When the run finishes, the live URL appears on the Actions summary and in Settings → Pages.

**How the pieces fit together**
- `vite.config.js` sets `base: '/my-portfolio/'` so assets resolve under the project path on `*.github.io/my-portfolio/`.
- `src/router.jsx` reads `import.meta.env.BASE_URL` so React Router matches that same base.
- `public/404.html` + the decoder in `index.html` give the SPA working deep links and refresh on Pages (which only serves `index.html` and `404.html`).
- `public/.nojekyll` tells Pages not to run Jekyll over the build output.

## Project layout

```
src/
  pages/        route-level screens
  components/   reusable UI
  context/      theme provider
  data/         static portfolio content
  styles/       global CSS + tokens
public/         static assets copied verbatim to the build root
```

## License

MIT — see [LICENSE](./LICENSE).
