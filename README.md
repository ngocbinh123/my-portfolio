# my-portfolio

Personal portfolio of Nguyen Ngoc Binh — Senior Mobile Solution Developer.

Built with React + Vite, deployed for free on GitHub Pages.

## Live site

https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev       # start dev server
npm run build     # production build (outputs to ./dist)
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Deployment (GitHub Pages, free)

Deployment is fully automated by `.github/workflows/deploy.yml`.

- **Automatic**: every push to `master` builds the site with Vite and publishes `dist/` to GitHub Pages.
- **Manual**: run the workflow on demand from the repo's **Actions → Deploy to GitHub Pages → Run workflow** button (`workflow_dispatch`).

The workflow uses the official GitHub Pages actions and the built-in `GITHUB_TOKEN`, so no extra secrets or third-party services are required. `actions/configure-pages` with `enablement: true` turns Pages on the first time the workflow runs.

### One-time repository setup

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `master` (or trigger the workflow manually) — the first successful run publishes the site to the URL above.

### Base path & SPA routing

- `vite.config.js` sets `base: '/my-portfolio/'` so assets resolve correctly under the project-site subpath.
- `public/404.html` + a small decoder in `index.html` handle SPA deep-link refreshes on GitHub Pages (see [spa-github-pages](https://github.com/rafgraph/spa-github-pages)).

If you fork this repo under a different name, update `base` in `vite.config.js` to match `'/<your-repo-name>/'`.
