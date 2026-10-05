# My Portfolio

Portfolio cá nhân của Nguyen Ngoc Binh — Senior Mobile Solution Developer.

**Live site:** https://ngocbinh123.github.io/my-portfolio/

Dự án React + Vite, deploy miễn phí qua GitHub Pages bằng GitHub Actions.

## Phát triển

```bash
npm install
npm run dev        # chạy local tại http://localhost:5173/my-portfolio/
npm run build      # build production vào ./dist
npm run preview    # preview bản build
npm run lint       # chạy ESLint
```

## Deploy

Mỗi lần push lên nhánh `master`, workflow `.github/workflows/deploy.yml` sẽ:

1. Cài dependencies (`npm ci`)
2. Build site (`npm run build`)
3. Upload artifact từ `./dist`
4. Deploy lên GitHub Pages (environment `github-pages`)

Có thể trigger thủ công từ tab **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

### Yêu cầu cấu hình một lần trên GitHub

- Repo **Settings → Pages**: Source = **GitHub Actions**.
- Workflow đã có quyền `pages: write` và `id-token: write`, không cần token bên ngoài.

### Base path & SPA routing

- `vite.config.js` set `base: '/my-portfolio/'` để asset trỏ đúng dưới subpath của GitHub Pages.
- `public/404.html` + script giải mã trong `index.html` cho phép refresh / deep-link React Router hoạt động bình thường trên GitHub Pages (kỹ thuật `spa-github-pages`).

Nếu đổi tên repo, nhớ cập nhật `base` trong `vite.config.js` và `pathSegmentsToKeep` trong `public/404.html` cho khớp.
