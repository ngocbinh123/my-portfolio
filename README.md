# my-portfolio

Portfolio site của Nguyen Ngoc Binh — Senior Mobile Solution Developer.
Xây bằng React + Vite, deploy miễn phí lên **GitHub Pages**.

## Live site

**https://ngocbinh123.github.io/my-portfolio/**

## Local dev

```bash
npm install     # cài dependencies
npm run dev     # chạy dev server (Vite HMR)
npm run build   # build production (output vào ./dist)
npm run preview # preview bản build tại local
npm run lint    # chạy ESLint
```

## Deploy lên GitHub Pages (miễn phí)

Dự án tự động deploy lên GitHub Pages mỗi khi có commit đẩy vào nhánh `master`.
Không cần chạy tay bất cứ thứ gì — mọi thứ chạy qua GitHub Actions và
GitHub Pages, cả hai đều miễn phí cho public repo.

Cấu hình gồm 3 phần:

1. **`.github/workflows/deploy.yml`** — GitHub Actions workflow build dự án
   (`npm ci && npm run build`) rồi upload thư mục `dist/` lên GitHub Pages
   qua action `actions/deploy-pages@v4`. Workflow tự bật GitHub Pages ở lần
   chạy đầu tiên (`actions/configure-pages@v5` với `enablement: true`).

2. **`vite.config.js`** — đặt `base: '/my-portfolio/'` để các đường dẫn
   asset match với URL của GitHub Pages (`<user>.github.io/<repo>/`).

3. **`public/404.html` + snippet trong `index.html`** — xử lý deep-link cho
   SPA (React Router). GitHub Pages trả `404.html` cho mọi path không có
   file thật; script trong `404.html` mã hoá path đó vào query rồi redirect
   về root, snippet ở `index.html` giải mã lại thành route thật trước khi
   React Router boot. (Kỹ thuật từ https://github.com/rafgraph/spa-github-pages)

### Lần đầu setup Pages cho repo mới

Nếu bạn fork/clone repo này về một repo khác, chỉ cần:

- Sửa `base` trong `vite.config.js` cho khớp tên repo mới
  (ví dụ `base: '/ten-repo-moi/'`).
- Sửa `pathSegmentsToKeep` trong `public/404.html` nếu path base có nhiều
  segment.
- Vào **Settings → Pages** trên GitHub, chọn **Source: GitHub Actions**
  (workflow đã tự `enablement: true` nên bước này thường không cần).
- Push lên `master` — deploy chạy tự động.

Sau khi workflow ✅ xanh, site có ở
`https://<username>.github.io/<repo>/`.
