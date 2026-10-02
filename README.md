# My Portfolio

Single-page React portfolio built with Vite, deployed free to GitHub Pages.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev        # start Vite dev server
npm run build      # production build into dist/
npm run preview    # preview the production build locally
npm run lint       # run ESLint
```

## Deployment (GitHub Pages)

Deployment is fully automated and uses only GitHub's free tier:

- **Workflow:** `.github/workflows/deploy.yml`
- **Trigger:** every push to `master`, or manually via the Actions tab (**Run workflow**).
- **Build:** `npm ci` + `npm run build`, output in `dist/`.
- **Publish:** uploaded as a Pages artifact and deployed by `actions/deploy-pages`.

### One-time repo setup

1. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `master` (or run the `Deploy to GitHub Pages` workflow manually).
3. Open the live URL above once the workflow finishes.

### Project base path

`vite.config.js` sets `base: '/my-portfolio/'` so built asset URLs resolve correctly under `https://<user>.github.io/my-portfolio/`. If you rename the repo, update this value and the `basename` used by the router.

### SPA deep-link support

`public/404.html` + the decoder in `index.html` implement the [spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick, so refreshing or sharing a deep link (e.g. `/my-portfolio/about`) still boots the React app correctly.
