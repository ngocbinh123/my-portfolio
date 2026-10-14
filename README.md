# my-portfolio

Nguyen Ngoc Binh — Senior Mobile Solution Developer. Single-page React portfolio built with Vite.

## Live site

**https://ngocbinh123.github.io/my-portfolio/**

Deployed free on GitHub Pages. Every push to `master` publishes a new version automatically.

## Local development

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build (outputs to dist/)
npm run preview   # preview the production build locally
npm run lint      # eslint
```

Node 22+ is recommended (CI uses Node 22).

## How the deployment works

The site is hosted on **GitHub Pages** at the project path `/my-portfolio/`, using only features GitHub provides for free.

- **Workflow** — `.github/workflows/deploy.yml` runs on every push to `master`:
  1. `npm ci`
  2. `npm run build`
  3. uploads `dist/` as a Pages artifact and deploys it with `actions/deploy-pages`.
  4. `actions/configure-pages` has `enablement: true`, so Pages is auto-enabled the first time it runs — no manual settings toggle needed.
- **Base path** — `vite.config.js` sets `base: '/my-portfolio/'` so built asset URLs resolve correctly under the project page.
- **Client-side routing** — React Router's `basename` reads `import.meta.env.BASE_URL`, which matches the Vite base. `public/404.html` + a tiny decoder in `index.html` implement the [spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick so deep links and refreshes don't 404.

## First-time setup (if you fork or rename)

If you fork this repo or change its name, update the base path in two places so Pages still serves assets correctly:

1. `vite.config.js` → `base: '/<new-repo-name>/'`
2. `public/404.html` → `pathSegmentsToKeep = 1` (keep as-is for a project page; set to `0` only for a user/organization page served at the domain root).

Then push to `master`. The workflow enables Pages automatically on the first successful run; the live URL will be printed in the workflow's `deploy` job output.
