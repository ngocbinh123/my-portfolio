# my-portfolio

Single-page React portfolio built with Vite, auto-deployed to GitHub Pages for free hosting.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev      # start Vite dev server
npm run build    # production build into dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Deployment (GitHub Pages)

Deployment is fully automated via GitHub Actions and uses the free hosting GitHub provides for public repositories.

### How it works

- `.github/workflows/deploy.yml` builds the site and publishes `dist/` to GitHub Pages.
- The workflow runs on every push to `master` and can also be triggered manually from the **Actions** tab (`workflow_dispatch`).
- `vite.config.js` sets `base: '/my-portfolio/'` so assets resolve under the project path.
- `public/404.html` + the decoder script in `index.html` restore client-side routes on page refresh (SPA pattern for GitHub Pages).
- React Router uses `basename: import.meta.env.BASE_URL` so routes work both in dev and under `/my-portfolio/` in production.

### One-time setup (already done on this repo)

1. On GitHub, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, pick **GitHub Actions**.
3. Push to `master` (or run the workflow manually) — the deploy job publishes to GitHub Pages and the URL appears in the workflow summary.

### Manual redeploy

- **GitHub UI:** Actions → *Deploy to GitHub Pages* → **Run workflow** → pick `master` → Run.
- **From a terminal:** push any commit to `master`.

### Custom domain (optional)

To serve the site from your own domain instead of `ngocbinh123.github.io/my-portfolio/`:

1. Add a `CNAME` file to `public/` containing just the domain (e.g. `portfolio.example.com`).
2. Change `base` in `vite.config.js` to `'/'`.
3. In **Settings → Pages**, set the custom domain and enable *Enforce HTTPS*.
4. Point your DNS at GitHub Pages per the [official docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).
