# my-portfolio

Trang portfolio cá nhân của **Nguyen Ngoc Binh**, build bằng [React](https://react.dev/) + [Vite](https://vite.dev/) và deploy miễn phí lên [GitHub Pages](https://pages.github.com/).

**Live site:** https://ngocbinh123.github.io/my-portfolio/

## Phát triển local

```bash
npm install        # cài dependencies
npm run dev        # chạy dev server (http://localhost:5173/my-portfolio/)
npm run build      # build production vào ./dist
npm run preview    # preview bản build
npm run lint       # chạy ESLint
```

## Deploy lên GitHub Pages

Dự án tận dụng toàn bộ hạ tầng miễn phí mà GitHub cung cấp:

- **GitHub Actions** (free cho public repo) build site mỗi lần có push.
- **GitHub Pages** host static site miễn phí trên domain `*.github.io`.
- **Deploy workflow** nằm ở [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Thiết lập một lần

1. Vào **GitHub repo → Settings → Pages**.
2. Ở mục **Build and deployment → Source**, chọn **GitHub Actions**.
3. Chọn **Save**. Lần build tiếp theo sẽ xuất hiện ngay trên tab **Actions**.

> Repo đã bật `actions/configure-pages` với `enablement: true` nên Pages sẽ tự bật ở lần chạy workflow đầu tiên nếu tài khoản/tổ chức cho phép.

### Cách kích hoạt deploy

| Cách | Khi nào dùng |
| --- | --- |
| Push lên branch `master` (hoặc `main`) | Deploy tự động khi merge PR về nhánh chính. |
| Vào tab **Actions → Deploy to GitHub Pages → Run workflow** | Deploy thủ công bất kỳ lúc nào (nhờ `workflow_dispatch`). |

Sau khi job `deploy` chạy xong, link site sẽ hiện ở màn hình Actions và ở **Settings → Pages**.

### Cấu hình liên quan

- `vite.config.js` đặt `base: '/my-portfolio/'` khớp với tên repo để assets có đường dẫn đúng.
- `src/router.jsx` dùng `basename: import.meta.env.BASE_URL` cho React Router.
- `public/404.html` + script trong `index.html` xử lý SPA refresh / deep link kiểu [spa-github-pages](https://github.com/rafgraph/spa-github-pages), nên refresh trên `/my-portfolio/<anything>` vẫn load đúng route.

Nếu đổi tên repo, nhớ đổi lại `base` trong `vite.config.js` và `pathSegmentsToKeep` trong `public/404.html` cho khớp.
