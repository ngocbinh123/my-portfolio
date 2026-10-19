# my-portfolio

Personal portfolio of **Nguyen Ngoc Binh** — Senior Mobile Solution Developer.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

Built with React 19 + Vite, deployed free on GitHub Pages via GitHub Actions.

## Local development

Requires Node.js 22+.

```bash
npm install     # install dependencies
npm run dev     # start the Vite dev server (http://localhost:5173)
npm run build   # production build into dist/
npm run preview # preview the production build locally
npm run lint    # run eslint
```

## Deployment (GitHub Pages)

Deployment is fully automated. Every push to `master` triggers
`.github/workflows/deploy.yml`, which:

1. Installs dependencies with `npm ci`.
2. Builds the site with `npm run build`.
3. Uploads `dist/` as a Pages artifact.
4. Deploys it to the `github-pages` environment.

The published site is served from
`https://<user>.github.io/<repo>/`, which is why `vite.config.js` sets
`base: '/my-portfolio/'` and `src/router.jsx` passes `import.meta.env.BASE_URL`
as the router basename.

### SPA deep-link support

GitHub Pages has no server-side routing. To support refreshing or sharing deep
links, this repo uses the [rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages)
pattern:

- `public/404.html` catches any unknown path and encodes it into a query string.
- A small script in `index.html` decodes it back into the real route via
  `history.replaceState` before React Router boots.

### One-time setup on a fresh fork

If you fork this repo and want your own live site:

1. **Repository → Settings → Pages → Build and deployment → Source:** choose
   **GitHub Actions**.
2. Update `base` in `vite.config.js` to `/<your-repo-name>/`.
3. If your repo name has a different number of path segments, update
   `pathSegmentsToKeep` in `public/404.html`.
4. Push to `master` — the workflow deploys automatically.

## Project structure

```
public/            static assets (CV, avatar, 404.html SPA fallback)
src/
  components/     shared UI primitives + section components
  context/        React contexts (e.g. theme)
  data/           portfolio content
  pages/          page components
  styles/         global CSS and design tokens
  router.jsx      React Router config
  main.jsx        app entry
.github/workflows/
  deploy.yml      builds and deploys to GitHub Pages on push to master
  ci.yml          validates the production build on every pull request
```
