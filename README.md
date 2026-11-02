# My Portfolio

[![Deploy to GitHub Pages](https://github.com/ngocbinh123/my-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/ngocbinh123/my-portfolio/actions/workflows/deploy.yml)
[![CI](https://github.com/ngocbinh123/my-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/ngocbinh123/my-portfolio/actions/workflows/ci.yml)

Personal portfolio site for **Nguyen Ngoc Binh** — Senior Mobile Solution Developer.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

Built with React + Vite, deployed free on GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev        # start Vite dev server
npm run lint       # run ESLint
npm run build      # production build into dist/
npm run preview    # preview the production build locally
```

Node 22 is used in CI (see `.github/workflows/`).

## Deployment

Deploys happen automatically on every push to `master`:

1. `.github/workflows/deploy.yml` builds the Vite app and publishes `dist/` to GitHub Pages.
2. The site is served at `https://ngocbinh123.github.io/my-portfolio/`.
3. `vite.config.js` sets `base: '/my-portfolio/'` so asset paths resolve under the project sub-path.
4. `public/404.html` + the SPA decoder in `index.html` make React Router deep links survive refresh on GitHub Pages (see https://github.com/rafgraph/spa-github-pages).

To trigger a deploy without a code change, use **Actions → Deploy to GitHub Pages → Run workflow** on GitHub.

## Enabling GitHub Pages (one-time)

If the Pages site is not live yet, enable it once in the repo:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `master` (or run the workflow manually) — the next run will publish the site.

## CI

`.github/workflows/ci.yml` runs lint + build on pull requests and non-`master` branches, so broken builds get caught before they can reach the live site.
