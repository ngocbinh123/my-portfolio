# my-portfolio

Personal portfolio site for **Nguyen Ngoc Binh** — Senior Mobile Solution Developer.
Built with React + Vite and deployed free on GitHub Pages.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## Local development

Requires Node.js 22+.

```bash
npm install
npm run dev        # start dev server at http://localhost:5173
npm run build      # production build into ./dist
npm run preview    # preview the production build locally
npm run lint       # run eslint
```

## Deployment (free, via GitHub Pages)

Every push to `master` is built and published automatically by
[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) using the
official `actions/deploy-pages` action, which runs on GitHub's free tier for
public repositories.

- Pull requests to `master` also trigger a build (verification only, no deploy),
  so a broken build is caught before merge.
- The workflow can also be triggered manually from the Actions tab
  (`workflow_dispatch`).

### One-time GitHub setup

If you fork or re-create this repo, enable Pages once:

1. Open **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `master` (or run the workflow manually) — the site publishes to
   `https://<user>.github.io/<repo>/`.

### Project base path

`vite.config.js` sets `base: '/my-portfolio/'` so built asset URLs resolve under
the repository name on GitHub Pages. If you rename the repository, update that
value to match.

### SPA deep links

`public/404.html` plus the small decoder script in `index.html` restore deep
links / page refreshes under React Router on GitHub Pages (based on
[rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages)).

## License

See [LICENSE](./LICENSE).
