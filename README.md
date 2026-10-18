# my-portfolio

Single-page personal portfolio for Nguyen Ngoc Binh, built with React 19 + Vite
and deployed free of charge to GitHub Pages.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm ci          # install exact deps from package-lock.json
npm run dev     # start Vite dev server (http://localhost:5173)
npm run build   # production build into ./dist
npm run preview # serve ./dist locally to verify the build
npm run lint    # ESLint over src/
```

## Deployment (GitHub Pages, free tier)

Every push to `master` triggers `.github/workflows/deploy.yml`, which:

1. installs dependencies with `npm ci`
2. runs `npm run build` to produce `./dist`
3. uploads `./dist` as a Pages artifact and publishes it with
   `actions/deploy-pages`

The workflow also supports manual re-runs via **Actions → Deploy to GitHub
Pages → Run workflow** (the `workflow_dispatch` trigger), handy if a deploy
needs to be retried without pushing a new commit.

### One-time GitHub setup

The workflow enables Pages automatically (`actions/configure-pages` with
`enablement: true`), but the repository must grant it the right scopes.
In **Settings → Pages**, set *Source* to **GitHub Actions**. The workflow's
`permissions:` block already declares `pages: write` and `id-token: write`,
and `concurrency: pages` prevents overlapping deploys.

### Why the paths work

- `vite.config.js` sets `base: '/my-portfolio/'` so built asset URLs are
  prefixed with the project path GitHub Pages serves from.
- `src/router.jsx` passes `basename: import.meta.env.BASE_URL` to
  React Router so client-side routes line up with the same base.
- `public/404.html` plus the inline decoder in `index.html` implement the
  [spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick so
  deep links and page refreshes resolve correctly on a static host.

## Project layout

```
src/
  components/   reusable UI (navbar, hero, section header, chips, cards…)
  context/      ThemeProvider (dark/light with no-flash boot script)
  data/         portfolio content (experience, skills, projects, …)
  pages/        home-page composition
  styles/       global tokens + per-component CSS
  router.jsx    router definition
  main.jsx      entry
public/         static assets copied as-is (CV PDF, avatar, 404.html)
design/         design system tokens (.pen library)
.github/        CI workflows (deploy + optional project-ticket observer)
```

## License

MIT — see [LICENSE](./LICENSE).
