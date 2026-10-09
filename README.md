# My Portfolio

Personal portfolio site for Nguyen Ngoc Binh — single-page React app built with Vite, deployed free on GitHub Pages.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev      # start Vite dev server
npm run lint     # run ESLint
npm run build    # production build into dist/
npm run preview  # preview the built site locally
```

Node 22+ is recommended (matches the CI runners).

## Deployment

Deployment is fully automated via GitHub's free offerings:

- **GitHub Actions** builds the site on every push to `master`.
- **GitHub Pages** serves the built `dist/` artifact.
- **CI workflow** (`ci.yml`) runs lint + build on every pull request and on
  non-master pushes, so regressions never reach production.
- **Manual re-deploys** are available from the Actions tab via the
  "Run workflow" button on the *Deploy to GitHub Pages* workflow
  (powered by `workflow_dispatch`).

### How it fits together

| Piece | File | Purpose |
| --- | --- | --- |
| Vite base path | `vite.config.js` (`base: '/my-portfolio/'`) | Serves assets from the project subpath GitHub Pages exposes. |
| Router basename | `src/router.jsx` (`basename: import.meta.env.BASE_URL`) | Keeps React Router routes aligned with the Pages subpath. |
| SPA 404 fallback | `public/404.html` + decoder in `index.html` | Lets deep links / refreshes resolve on a static host. |
| Build + deploy | `.github/workflows/deploy.yml` | Builds on `master` push (or manual run) and uploads to Pages. |
| Pre-merge checks | `.github/workflows/ci.yml` | Runs `npm run lint` + `npm run build` on PRs. |

### First-time Pages setup

The workflow enables Pages automatically (`actions/configure-pages` with
`enablement: true`), so no manual toggling is needed in repository settings
beyond keeping the source set to **GitHub Actions** under
*Settings → Pages*.

## Project structure

```
src/
  components/   # shared UI primitives
  context/      # theme provider
  data/         # portfolio content
  pages/        # route-level pages
  styles/       # global CSS variables + resets
  router.jsx    # route table (basename-aware)
  main.jsx      # app entrypoint
public/         # static assets copied verbatim into dist/
```
