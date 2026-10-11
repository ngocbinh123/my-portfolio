# Nguyen Ngoc Binh — Portfolio

Personal portfolio built with React + Vite, deployed to GitHub Pages.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev        # start Vite dev server
npm run build      # production build into dist/
npm run preview    # preview the production build locally
npm run lint       # run ESLint
```

## Deployment

The site auto-deploys to GitHub Pages whenever `master` is updated, using the
free `actions/deploy-pages` workflow in `.github/workflows/deploy.yml`.

- Trigger: push to `master`, or run the workflow manually from the
  **Actions → Deploy to GitHub Pages → Run workflow** button.
- Pages is enabled automatically by `actions/configure-pages` on first run —
  no manual setting required.
- The Vite `base` in `vite.config.js` is `/my-portfolio/` so assets resolve
  correctly under the project page URL.
- SPA deep links / refreshes work via `public/404.html` plus the decoder in
  `index.html` (see
  [rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages)).

## Project structure

```
src/            React app source (components, pages, theme)
public/         Static assets served as-is (CV, avatar, 404 fallback)
design/         Design-system source files
.github/        GitHub Actions workflows (deploy + issue observer)
```

## Free GitHub features in use

- **GitHub Pages** — free static hosting at `<user>.github.io/<repo>/`
- **GitHub Actions** — free CI minutes to build and deploy on every push
- **Issues + Projects** — tracked via the project observer workflow
