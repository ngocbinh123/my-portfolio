# my-portfolio

Personal portfolio site for Nguyen Ngoc Binh — Senior Mobile Solution Developer.

Built with **React 19 + Vite 7** and deployed to **GitHub Pages** via GitHub Actions.

## Live site

https://ngocbinh123.github.io/my-portfolio/

## Local development

```bash
npm install
npm run dev        # start dev server (http://localhost:5173)
npm run build      # production build -> dist/
npm run preview    # preview built site locally
npm run lint       # run ESLint
```

Requires Node.js 22+.

## Deployment (GitHub Pages — free hosting)

Deployment is fully automated. Every push to the `master` branch runs
`.github/workflows/deploy.yml`, which:

1. Installs dependencies with `npm ci`
2. Builds the site with `npm run build`
3. Uploads `dist/` as a Pages artifact
4. Deploys it to GitHub Pages using `actions/deploy-pages@v4`

No manual `gh-pages` branch, no `gh-pages` package — it uses GitHub's
native Pages deployment flow included free with public repos.

### One-time repository setup

If you fork this repo, enable GitHub Pages once from the repo settings:

**Settings → Pages → Build and deployment → Source: `GitHub Actions`**

The workflow also calls `actions/configure-pages@v5` with `enablement: true`,
so Pages will be turned on automatically the first time the workflow runs
(as long as the repo is public or has Pages available on the plan).

### Project base path

The site is served from a subpath (`/my-portfolio/`), so `vite.config.js`
sets:

```js
base: '/my-portfolio/',
```

If you fork and rename the repo, update that value (and the
`pathSegmentsToKeep = 1` constant inside `public/404.html`) to match the
new repo name — or set `base: '/'` and host it on a user/organization
Pages site (`<user>.github.io`).

### SPA routing on GitHub Pages

GitHub Pages serves a static `404.html` for any unknown path, which
breaks client-side routing on hard refreshes and deep links. The
redirect pattern from [rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages)
is already wired up:

- `public/404.html` rewrites the URL into a `/?/path` query form and
  redirects to the app root.
- A small decoder near the top of `index.html` restores the original
  route via `history.replaceState` before React Router boots.

## Tech stack

- React 19 + React Router 7
- Vite 7 (build + dev server)
- ESLint 9 with React Hooks + Refresh plugins
- GitHub Actions + GitHub Pages (free hosting + CI/CD)
