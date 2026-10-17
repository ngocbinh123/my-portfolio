# my-portfolio

Portfolio website của Nguyen Ngoc Binh — Senior Mobile Solution Developer.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

Built với React + Vite, deploy miễn phí qua GitHub Pages.

## Development

```bash
npm install
npm run dev     # local dev server
npm run build   # production build vào ./dist
npm run preview # preview build
npm run lint    # eslint
```

## Deployment

Mỗi lần push vào `master`, GitHub Actions chạy workflow
`.github/workflows/deploy.yml` để build và publish `dist/` lên GitHub
Pages — không cần làm gì thêm.

Những phần đã được cấu hình để deploy lên GitHub Pages (miễn phí):

- **Workflow deploy** (`.github/workflows/deploy.yml`) — build Vite,
  upload artifact, deploy qua `actions/deploy-pages`. Dùng
  `actions/configure-pages@v5` với `enablement: true` nên Pages tự bật
  lần đầu, không phải vào Settings bấm tay.
- **Vite base path** (`vite.config.js`) — `base: '/my-portfolio/'`
  khớp với project page URL `<user>.github.io/my-portfolio/`.
- **SPA deep-link fix** — `public/404.html` + script decoder trong
  `index.html` giữ cho `react-router-dom` hoạt động khi refresh trang
  con hoặc share deep link (GitHub Pages chỉ serve static).
- **React Router basename** — `src/router.jsx` dùng
  `import.meta.env.BASE_URL` nên dev (`/`) và prod (`/my-portfolio/`)
  đều đúng.

### Bật GitHub Pages lần đầu

Nếu Pages chưa bật trên repo:

1. Vào **Settings → Pages**.
2. Mục **Source** chọn **GitHub Actions**.
3. Push lên `master` — workflow sẽ build và deploy, URL sẽ hiện ngay
   trong tab **Actions → Deploy to GitHub Pages → deploy job**.

## Project structure

```
src/
  components/   UI primitives + section components
  context/      Theme context (dark/light)
  data/         Portfolio content
  pages/        Route components
  styles/       Global CSS + tokens
  main.jsx      App entry
  router.jsx    React Router config
public/
  404.html      SPA fallback for GitHub Pages
  avatar.jpg    Avatar
  Nguyen-Ngoc-Binh-CV.pdf
```
