# Kế hoạch — RedteaGo-inspired eSIM Store

## Phạm vi
Xây dựng một website eSIM du lịch độc lập với mock data trước: trang chủ responsive, khám phá/lọc gói, chi tiết gói, form yêu cầu mua và khu vực quản trị mô phỏng. Thiết kế chỉ lấy cảm hứng từ cảm giác tiện ích của sản phẩm eSIM du lịch hiện đại; thương hiệu, nội dung, mã nguồn và dữ liệu đều nguyên bản.

## Kiến trúc
- `app/page.tsx`: giao diện landing + khám phá gói + form đăng ký ở client.
- `app/admin/page.tsx`: bảng quản trị mock CRUD cho gói eSIM và nội dung marketing.
- `app/api/plans/route.ts`: API GET mock; sau này thay bằng truy vấn Turso.
- `app/api/orders/route.ts`: API POST mock tiếp nhận yêu cầu.
- `lib/mock-data.ts`: nguồn dữ liệu mock dùng chung, có kiểu dữ liệu rõ ràng.
- `lib/db.ts`: adapter Turso tùy chọn, chỉ đọc connection từ environment.
- `public/manus-routes.json`: manifest route phục vụ preview/publishing.
- `.env.example`: danh sách biến môi trường không chứa secret thật.

## Design

### Các hướng thử nghiệm
- 0.07 — Coastal tech: xanh navy, aqua và nền cát sáng; cảm giác đáng tin, nhanh và gần biển.
- 0.05 — Editorial travel: bố cục tạp chí du lịch, chữ serif lớn và ảnh điểm đến.
- 0.08 — Neon utility: nền tối, gradient neon và các thẻ dữ liệu giàu tương phản.

### Hướng được chọn: Coastal tech
- **Design movement:** modern travel utility pha minimal editorial.
- **Core principles:** tìm nhanh trước; thông tin gói quét được; CTA luôn nổi bật; mobile-first.
- **Color philosophy:** navy tạo nền tin cậy cho thanh toán/kết nối; aqua là tín hiệu kết nối; coral là điểm nhấn chuyển đổi; nền kem làm giao diện nhẹ hơn.
- **Layout paradigm:** hero lệch trục với panel tìm kiếm nổi, các section chuyển nhịp bằng dải màu và khối bo tròn; tránh dashboard lưới cứng ở trang marketing.
- **Signature elements:** logo hình vòng sóng, pill trạng thái “ready to roam”, bản đồ chấm điểm dạng radial.
- **Interaction:** tìm kiếm tại hero cuộn đến kết quả và lọc ngay; chip quốc gia phản hồi tức thì; form có trạng thái gửi thành công rõ ràng.
- **Animation:** hover nâng nhẹ thẻ; gradient hero chuyển rất chậm; không dùng animation gây nhiễu thao tác hoặc phụ thuộc vào hover trên mobile.
- **Typography:** Inter cho UI và dữ liệu; Fraunces/serif fallback cho headline tạo chất travel editorial nhưng vẫn dễ đọc.
- **Brand essence:** một trạm eSIM minh bạch cho người đi nhiều — rõ ràng, thân thiện, linh hoạt.
- **Brand voice:** tự tin, thực tế, có chút khám phá. Ví dụ: “Bật mạng trước khi máy bay hạ cánh.” và “Chọn nơi bạn đến, phần kết nối để chúng tôi lo.”
- **Wordmark & logo:** chữ `roamly` đi cùng biểu tượng vòng sóng mở, không dùng tên RedteaGO.
- **Signature brand color:** `#22C7B8` aqua-signal.

## Turso/Vercel/GitHub
Bản mock không yêu cầu secret. Khi kết nối thật, đặt `TURSO_DATABASE_URL` và `TURSO_AUTH_TOKEN` trong Vercel Environment Variables; adapter không có fallback ghi secret vào source. Repository độc lập sẽ được checkpoint trên GitHub riêng sau khi hoàn tất giao diện và kiểm tra.
