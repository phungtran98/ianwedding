# Ian's Wedding — Tracking

Trang HTML/CSS/JS tĩnh dựng theo Figma. File này ghi lại review, quyết định và tiến độ.

## Nguồn

- File: [Static web](https://www.figma.com/design/VeJ1U4eFSjjyZFwRWiuqli/Static-web?node-id=18-3100)
- File key: `VeJ1U4eFSjjyZFwRWiuqli`
- Node: `18:3100` — "Ian's wedding"
- Kích thước gốc: 1280 × 4226 px (chỉ có bản desktop)
- Figma session: `0bd675ac-9e6d-4de4-b5e7-d197295edfa2`

## Mục tiêu

Dựng một trang tĩnh, mở được bằng trình duyệt, bám sát design. Stack: HTML, CSS, JavaScript thuần. Không dùng Tailwind hay framework.

## Quyết định đã chốt

| Hạng mục | Quyết định |
| --- | --- |
| Responsive | Desktop theo Figma. Dưới 900px, 3 cột avatar xếp thành 1 cột. |
| Click avatar | Popup đơn giản. Nội dung là lời chúc tạm cho đến khi có nội dung thật. |
| Chính tả | Sửa `realease` / `REALEAS` thành `release` / `RELEASE` khi code. |
| Animation card 4 | Lắc qua lại liên tục, không nhảy từ 6° về 0°. |

## Tiến độ

- [x] Đọc design và review
- [x] Chốt 4 quyết định ở trên
- [x] Ghi tracking vào `NOTES.md`
- [x] Bước 1 — Khung dự án, biến màu, font, tải asset (29/29 file, đã kiểm tra định dạng)
- [x] Bước 2 — Section hero và timeline
- [x] Bước 3 — Section Team Feedback (3 cột avatar, 16 thẻ, 4 nhóm màu, mũi tên nối)
- [x] Bước 4 — Click thẻ xoay ra lời chúc (11 người có message trong Figma). By Le, Andy, Danh, React Stream, Pro. Support chưa có state Message.
- [x] Bước 5 — Responsive (dưới 900px xếp 1 cột; 901–1240px thu thẻ còn 296px)
- [x] Bước 6 — Kiểm tra trên trình duyệt (1140px, 1280px, 390px: không tràn ngang, 16/16 ảnh tải được)

## Cấu trúc dự án

```
ian-wedding/
├── NOTES.md
├── index.html
├── css/style.css
├── js/main.js
└── assets/
    ├── images/
    └── icons/
```

Workspace hiện chỉ có `NOTES.md`. Bước 1 chưa làm.

## Cấu trúc trang

### Section 1 — Hero và timeline

Nền `#fdd894`. Padding ngang 60px, dọc 40px, khoảng cách giữa các khối 32px.

1. Badge pill: nền `#fdf3cf`, viền `#d49a6a`, chữ `#aa7b55`, JetBrains Mono Bold 16px, uppercase, tracking 0.8px. Có chấm tròn 14px.
   - Chữ: `release status: stable & production ready`
2. Tiêu đề Plus Jakarta Sans ExtraBold 48px, line-height 1.1, màu `#232625`, căn giữa:
   - `The Sweetest Production Release`
   - `of Ian's Life`
3. Đoạn mô tả Outfit 24px, màu `#5e6460`, rộng tối đa 900px, căn giữa. Chữ `Ian` in đậm.
   - `To Ian - our dedicated teammate, reliable brother, and the guy who always stood by the team through every release. Today, the whole team is gifting you the sweetest 'production release' of your life!`
4. Card trắng, bo 24px, viền `#d7d7d7`, đổ bóng `0 4px 40px rgba(0,0,0,0.25)`, padding 24px.
   - Nhãn: `git flow release timeline` (đã sửa từ `realease`)
   - Tiêu đề tay: `✨THE LOVE ROADMAP ✨`
   - Phụ đề: `or ian's release lifecycle` (đã sửa từ `realease`)
   - Thanh tiến trình: 4 chấm nối bằng 3 mũi tên. Chấm cuối có vòng sáng.
   - 4 thẻ milestone, gap 32px, mỗi thẻ bo 24px, padding 24px, đổ bóng `0 4px 20px rgba(0,0,0,0.2)`.
   - Dòng kết: `To be continued... ❤️` — Caveat Bold 32px, `#f70042`.
   - Nút `View Team Feedback & Code Review`: component Liquid Glass của iOS, không dùng nguyên trên web. Làm lại bằng CSS, nút bo tròn màu tối. Click cuộn mượt xuống section 2.

### 4 thẻ milestone

| Thẻ | Badge | Trạng thái | Tiêu đề | Minh họa | Chân thẻ |
| --- | --- | --- | --- | --- | --- |
| 1 | `v0.1 - DISCOVERY & D&R` xanh `#267eaf` | Done | First Meet & Match | Hai vòng `Aha! 💡` và `Hi! 👋` nối bằng đường đứt | `feature/first-encounter` · `✓ Commit OK` |
| 2 | `v1.0 - BETA TESTING` xanh lá `#57a78f` | Done | Sprint Dating | Hộp `✓ No Bug Found!` | `staging/daily-sync` · `100% Pass` |
| 3 | `v2.0 - UAT & APPROVAL` tím `#8e54be` | Done | The Proposal | Hộp `💍 Passed!` | `release/proposal-signed` · `Merged` |
| 4 | `v3.0 - PRODUCTION RELEASE` nâu `#aa7b55` | `LIVE NOW` đỏ `#f70042` | The Big Day! | `Wedding Day! 🎉` và `🚀 Deploy Success!` | `main (protected)` · `Global Go-Live` |

`DISCOVERY & D&R` giữ nguyên. Chưa rõ `D&R` nghĩa là gì, chưa phải lỗi `release`.

Thẻ 4 khác các thẻ còn lại: nền `#ffe7ba`, viền 4px `#f70042`, bóng `0 4px 20px rgba(59,0,16,0.5)`. Ô minh họa nền trắng, viền đặc `#ffc352`. Chân thẻ màu `#aa7b55`.

Animation thẻ 4 trong Figma: xoay 0° → 6° bằng spring trong khoảng 1 giây, giữ 6° thêm 1 giây, rồi nhảy về 0° và lặp mỗi 2 giây. Khi code: lắc đều hai chiều để khỏi giật.

### Section 2 — Team Feedback & Code Review

Nền trắng. Padding ngang 80px, dọc 40px.

1. Tiêu đề Plus Jakarta Sans ExtraBold 48px: `Team Feedback & Code Review`
2. Mô tả Outfit 24px, rộng tối đa 900px: `Pull requests submitted by the core team. Click each avatar to inspect the deployment notes and warm wishes.`
3. Khung nền `#fce0ad`, bo 24px, viền `#d7d7d7`, bóng giống card timeline, padding 33px 27px.

Bên trong là 3 cột thẻ, cách nhau bằng cột mũi tên rộng 32px.

Mỗi thẻ người: rộng 323px, bo 55px, padding 16px, bóng `0 4px 2px rgba(0,0,0,0.25)`. Ảnh bên trong bo 40px, viền 4px `#5b5b5b`, bóng `0 4px 10.3px rgba(0,0,0,0.4)`. Ảnh chuyển đen trắng bằng `filter: grayscale(1)`. Tên Caveat Bold 36px, trắng, tracking 1.8px, nằm trên dải màu ở đáy.

Nhóm tiêu đề: Caveat Bold 48px, bo 40px, padding 16px, nền màu nhóm ở độ trong 0.8.

### Bố cục 3 cột

**Cột trái**

- `✨No team's Blessing✨` — nền trắng
  - Phu Tran (Technical Lead) — cao 302px
  - mũi tên xuống
  - Duc Le - Daniel (Dev Ops) — cao 346px
  - mũi tên xuống
  - Thuy Le (Designer) — cao 368px
- `✨Platform Team's Blessing✨` — nền `#b9e6ff`
  - mũi tên xuống
  - Chrysanne (BA) — cao 284px, dải tên `#00609c` ở 70%
  - mũi tên xuống
  - Trung Do (Dev) — cao 614px, không ảnh, chữ `TD` Plus Jakarta Sans Bold 96px màu `#0c72bb`

**Cột giữa**

- Khoa Vu (BOSS) — cao 548px
- Trinh (QC Lead) — cao 280px, nền `#e6cef9`, dải tên tím
  - mũi tên xuống
  - Jon V (Data Lead) — cao 560px, không ảnh, chữ `JV` 96px màu `#8e54be`
- Quan Huynh (Dev) — cao 350px
  - mũi tên xuống
  - Phung Tran (Dev) — cao 240px
  - mũi tên xuống
  - Team QC — cao 308px

**Cột phải**

- `✨AI team's Blessing✨` — nền tím nhạt
  - mũi tên xuống
  - By Le (BA) — cao 240px, không ảnh, chữ `BL` 96px màu `#8e54be`
  - mũi tên xuống
  - Andy (Dev Lead) — cao 280px
  - mũi tên xuống
  - Danh (AI Lead) — cao 412px
- `✨React Team's Blessing✨` — nền `#c0ffea`
  - mũi tên xuống
  - React Stream — cao 516px, 3 ảnh xếp dọc, dải tên xanh `#37bb6c`
- `✨Production Support Team's Blessing✨` — nền `#ffcbcf`
  - mũi tên xuống
  - Pro. Support — cao 477px, 2 ảnh xếp dọc, dải tên `#ff858f`

Mũi tên ngang giữa các cột trong Figma được canh bằng khoảng trống cứng (1034px, 335px, 596px). Khi code, canh mũi tên theo từng thẻ, không copy các khoảng cứng đó.

## Màu nhóm

| Nhóm | Nền thẻ | Dải tên |
| --- | --- | --- |
| Mặc định / No team | trắng | `rgba(0,0,0,0.8)` |
| Platform | `#b9e6ff` | `rgba(0,96,156,0.7)` |
| Data / AI / QC | `#e5cdf8` / `#e6cef9` | `rgba(142,84,190,0.8)` |
| React | `#c0ffea` | `rgba(55,187,108,0.8)` |
| Production Support | `#ffcbcf` | `rgba(255,133,143,0.8)` |

## Design token

| Token | Giá trị | Dùng cho |
| --- | --- | --- |
| Text | `#232625` | Tiêu đề, chữ chính |
| Text Second | `#5e6460` | Đoạn mô tả, nhãn phụ |
| Text 3 | `#a2a2a2` | Chân thẻ milestone |
| Primary | `#2c4a5e` | Có trong biến Figma, chưa thấy dùng trên frame này |
| Nền trang | `#fdd894` | Section 1 |
| Accent đỏ | `#f70042` | LIVE NOW, To be continued, viền thẻ 4 |

Figma còn khai báo biến Liquid Glass (Opacity 25, Refraction 70, Frost 6, Light Angle 0, Splay 20, Depth 30, Dispersion 20). Chỉ dùng cho nút iOS. Nút web không mô phỏng các biến này.

## Font

Tất cả có trên Google Fonts.

| Font | Weight | Dùng cho |
| --- | --- | --- |
| Plus Jakarta Sans | 800, 700 | Tiêu đề section, chữ viết tắt TD / JV / BL |
| Outfit | 400, 700 | Đoạn văn, tên milestone, chân thẻ |
| Caveat | 700, 400 | Tiêu đề tay, tên người, nhóm |
| JetBrains Mono | 800, 700, 400 | Badge, nhãn version, chữ trong hộp minh họa |

## Asset cần tải

Link Figma hết hạn sau 7 ngày. Tải về `assets/` ở bước 1, không để URL tạm trong code.

### Ảnh chân dung — `assets/images/`

| File dự kiến | Người | Ghi chú |
| --- | --- | --- |
| `khoa-vu.png` | Khoa Vu (BOSS) | |
| `phu-tran.png` | Phu Tran | |
| `duc-le.png` | Duc Le - Daniel | |
| `thuy-le.jpg` | Thuy Le | Đổi từ `.png` sang `.jpg`, file gốc là JPEG |
| `chrysanne.png` | Chrysanne (BA) | Layer Figma tên Tra / Cuc Tra |
| `quan-huynh.png` | Quan Huynh | Cắt một vùng của ảnh gốc |
| `trinh.png` | Trinh (QC Lead) | Cùng file gốc với Team QC |
| `team-qc.png` | Team QC | Cùng file gốc với Trinh, vùng cắt khác |
| `phung-tran.png` | Phung Tran | Cùng file gốc với ảnh 2 của Pro. Support |
| `andy.png` | Andy (Dev Lead) | |
| `danh.png` | Danh (AI Lead) | Cắt một vùng của ảnh gốc |
| `react-1.png` | React Stream, ảnh 1 | |
| `react-2.png` | React Stream, ảnh 2 | |
| `react-3.png` | React Stream, ảnh 3 | Cắt một vùng của ảnh gốc |
| `pro-support-1.png` | Pro. Support, ảnh 1 | |
| `pro-support-2.png` | Pro. Support, ảnh 2 | Cùng file gốc với Phung Tran |

Không có ảnh: Trung Do (`TD`), Jon V (`JV`), By Le (`BL`).

### Icon — `assets/icons/`

- 4 chấm timeline: `ellipse-1.svg`, `ellipse-2.svg`, `ellipse-3.svg`, `ellipse-5.svg` (chấm cuối có vòng sáng)
- 1 đường nối trong thẻ 1: `line-1.svg`
- Mũi tên timeline và sơ đồ đội: `arrow-2.png`, `arrow-4.png`, `arrow-5.png`, `arrow-6.png`, `arrow-7.png`, `arrow-8.png`, `arrow-9.svg`, `arrow-10.png`, `arrow-11.png`, `arrow-12.png`

Một số mũi tên là cùng một hình được xoay 90°. Khi code, dùng lại file và xoay bằng CSS nếu hình giống nhau.

## Việc còn mở

1. Nội dung popup chưa có. Tạm dùng câu ngắn theo tên và vai trò. Thay khi có lời chúc thật.
2. `DISCOVERY & D&R` chưa rõ nghĩa. Giữ nguyên cho đến khi được xác nhận.
3. Trinh và Team QC dùng chung một ảnh gốc. Phung Tran và Pro. Support cũng vậy. Giữ đúng vùng cắt của Figma. Nếu là nhầm ảnh, sửa trên Figma rồi tải lại.
4. Breakpoint chi tiết (tablet 2 cột hay nhảy thẳng 1 cột) chốt khi làm bước 5. Ngưỡng đã chốt: dưới 900px là 1 cột.

## Cách kiểm tra từng bước

- Bước 1: mở `index.html`, nền vàng, Console không lỗi, `assets/` đủ file và không file nào rỗng.
- Bước 2: section 1 khớp screenshot, nút cuộn xuống `#team-feedback`, thẻ 4 lắc đều.
- Bước 3: đủ người, đúng nhóm màu, ảnh đen trắng, mũi tên nối đúng cặp.
- Bước 4: click từng avatar mở popup, đóng bằng nút, phím Escape và click ra ngoài.
- Bước 5: 1280px giữ 3 cột; dưới 900px còn 1 cột, không tràn ngang.
- Bước 6: đi hết trang trên desktop và mobile, đối chiếu screenshot Figma.
