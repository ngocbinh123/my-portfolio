# my-portfolio

Portfolio site of Nguyen Ngoc Binh, built with React + Vite and deployed free on **GitHub Pages**.

- **Live site:** https://ngocbinh123.github.io/my-portfolio/
- **Tech:** React 19, React Router 7, Vite 7

## Local development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Deploy to GitHub Pages (free)

Deployment is fully automated via GitHub Actions in `.github/workflows/deploy.yml`
using the free `actions/deploy-pages` flow — no gh-pages branch, no extra tokens.

Steps the workflow runs on every push to `master` (and on manual dispatch):

1. `npm ci` and `npm run build` to produce `dist/`.
2. `actions/configure-pages` enables Pages for the repo on first run.
3. `actions/upload-pages-artifact` uploads `dist/` as the Pages artifact.
4. `actions/deploy-pages` publishes it to `https://<user>.github.io/<repo>/`.

### One-time repository setup

1. Open the repo on GitHub → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `master` (or run the workflow manually from the **Actions** tab →
   *Deploy to GitHub Pages* → **Run workflow**).

Within a minute or two the site is live at
`https://ngocbinh123.github.io/my-portfolio/`.

### Why these pieces exist

- **`vite.config.js` sets `base: '/my-portfolio/'`** so built assets resolve under
  the project subpath that GitHub Pages serves.
- **`src/router.jsx` passes `basename: import.meta.env.BASE_URL`** so React Router
  matches that same subpath.
- **`public/404.html` + the decoder in `index.html`** implement the standard
  [spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick so deep
  links and refreshes resolve correctly on a static host.

### Custom domain (optional, still free)

If you later connect a custom domain under **Settings → Pages → Custom domain**,
add a `public/CNAME` file containing just the domain and change
`vite.config.js`'s `base` back to `'/'`, and `basename` will follow automatically.
