# Setup Guide: GitHub Project Ticket Observer → Notion

## Tổng quan

Workflow này tự động phát hiện khi có ticket mới hoặc thay đổi trên GitHub Project board, phân tích thông tin (assignee, nội dung, status), và gửi thông báo tới Notion database.

## Cách hoạt động

```
GitHub Event (issue/project_card/project_v2_item)
        ↓
GitHub Actions Workflow triggers
        ↓
Phân tích ticket: assignee, nội dung, status
        ↓
Gửi entry mới → Notion Database "GitHub Project Notifications"
```

## Setup (3 bước)

### Bước 1: Tạo Notion Integration

1. Truy cập https://www.notion.so/my-integrations
2. Click **"New integration"**
3. Đặt tên: `GitHub Project Observer`
4. Chọn workspace của bạn
5. Copy **Internal Integration Secret** (bắt đầu bằng `ntn_...`)

### Bước 2: Kết nối Notion Database

1. Mở Notion database **"GitHub Project Notifications"** vừa được tạo
2. Click **"..."** (menu) → **"Connections"** → **"Connect to"**
3. Chọn integration **"GitHub Project Observer"** vừa tạo

### Bước 3: Thêm Secret vào GitHub

1. Truy cập repo trên GitHub → **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"**
3. Name: `NOTION_API_KEY`
4. Value: paste Notion integration secret từ Bước 1
5. Click **"Add secret"**

## Test

Sau khi setup xong, bạn có thể test bằng cách:

1. **Manual trigger**: Vào tab Actions → chọn workflow → "Run workflow"
2. **Tạo issue mới**: Tạo 1 issue mới trong repo → workflow sẽ tự chạy

## Events được track

| Event | Trigger |
|-------|---------|
| Issue mới | Khi tạo issue mới trong repo |
| Issue assigned | Khi gán người cho issue |
| Issue labeled | Khi thêm label |
| Issue closed/reopened | Khi đóng/mở lại issue |
| Project item added | Khi thêm item vào Project board |
| Project item moved | Khi chuyển status trên Project board |
| Project item edited | Khi sửa item trên Project board |

## Notion Database

Database ID: `24954be1-216f-407e-acd0-3f03f58f45ed`

Các trường:
- **Ticket**: Tên ticket
- **Status**: Todo / In Progress / In Review / Done / Backlog
- **Assignee**: Người được gán
- **Event**: New / Status Changed / Assigned / Updated
- **Description**: Mô tả nội dung
- **GitHub URL**: Link tới issue
- **Detected At**: Thời điểm phát hiện
- **Labels**: Nhãn của issue
- **Ticket ID**: Auto-increment (GH-1, GH-2, ...)

## Lưu ý quan trọng

- Workflow cần quyền `read` trên issues và contents
- Với `projects_v2_item` events, cần bật quyền **"Read access to organization projects"** trong GitHub App settings (nếu dùng org)
- Notion API key phải được giữ bí mật, KHÔNG commit vào code
