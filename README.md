# roamly — travel eSIM mock store

Website độc lập lấy cảm hứng từ cảm giác tiện ích của các sản phẩm eSIM du lịch hiện đại. Dữ liệu hiện tại là mock để duyệt giao diện và luồng thao tác.

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`. Trang `/` là storefront; `/admin` là mock control room.

## Turso

Sao chép `.env.example` thành `.env.local`, sau đó đặt `TURSO_DATABASE_URL` và `TURSO_AUTH_TOKEN` trong môi trường local/Vercel. `lib/db.ts` chỉ khởi tạo client khi cả hai biến tồn tại; không có secret nào được commit. Bước tiếp theo là tạo schema `esim_plans`, `marketing_blocks` và `purchase_requests`, rồi thay các route mock bằng truy vấn Turso.

## Vercel/GitHub

Project được tạo độc lập tại repository riêng. Dùng `npm run build` để kiểm tra production build trước khi push. Vercel cần Node.js hiện đại và hai biến Turso ở Production/Preview theo nhu cầu.
