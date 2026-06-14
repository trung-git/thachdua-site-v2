# Requirements: Dừa Yoga

**Defined:** 2026-06-14
**Core Value:** An toàn và hiệu quả — giúp học viên khỏe hơn, linh hoạt hơn, cảm nhận rõ cơ thể trong từng chuyển động thông qua kiến thức giải phẫu sâu và lộ trình cá nhân hóa.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Hero & Navigation

- [x] **NAV-01**: User thấy Hero section với headline, subheadline, và CTA button đặt lịch
- [x] **NAV-02**: User thấy Navigation bar sticky khi scroll (mobile hamburger menu)
- [ ] **NAV-03**: User chuyển đổi ngôn ngữ VI/EN qua language switcher

### About

- [x] **ABT-01**: User đọc giới thiệu bản thân giáo viên (profile, kinh nghiệm, chứng chỉ 200-Hour Yoga Alliance)
- [x] **ABT-02**: User thấy hình ảnh chuyên nghiệp của giáo viên

### Services

- [x] **SRV-01**: User thấy 3 dịch vụ: Private 1:1, Small Group (1:6), Online Class
- [x] **SRV-02**: User đọc mô tả ngắn gọn cho từng dịch vụ
- [x] **SRV-03**: User thấy Small Group (1:6) nổi bật nhất (primary service)

### Pricing

- [ ] **PRC-01**: User thấy bảng giá cụ thể cho từng gói dịch vụ
- [ ] **PRC-02**: User thấy nút CTA đặt lịch qua Zalo/Messenger cho mỗi gói

### Gallery

- [ ] **Gal-01**: User xem thư viện ảnh tập yoga của giáo viên

### Contact & Booking

- [ ] **CON-01**: User click vào link Zalo để đặt lịch (deep link đến Zalo cá nhân)
- [ ] **CON-02**: User thấy thông tin location (studio + dạy tại nhà)

### Mobile & Performance

- [ ] **MBL-01**: User trải nghiệm trang web mượt trên mobile (mobile-first design)
- [ ] **PRF-01**: User thấy trang tải nhanh dưới 3 giây trên 4G

### SEO

- [ ] **SEO-01**: User tìm thấy trang trên Google khi search "yoga quận [X]" hoặc "yoga teacher HCMC"

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### About

- **ABT-03**: Video intro ngắn từ giáo viên
- **ABT-04**: Quantified results (70% retention, 30% pain reduction)

### Services

- **SRV-04**: Phân khúc đối tượng (dân văn phòng, người mới, người tập lâu năm)

### Pricing

- **PRC-03**: So sánh giá trị giữa các gói (value comparison)

### Gallery

- **Gal-02**: Video demo bài tập
- **Gal-03**: Lightbox viewer cho ảnh/video

### Contact & Booking

- **CON-03**: Messenger link (fallback cho người không dùng Zalo)
- **CON-04**: Micro-copy hướng dẫn flow đặt lịch ("Sau khi nhắn Zalo, Thảo sẽ phản hồi trong 24h")

### Content

- **CNT-01**: Testimonial/đánh giá từ học viên hiện tại
- **CNT-02**: Blog/kiến thức yoga

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Online payment | Booking qua Zalo/Messenger trước, không cần backend phức tạp |
| CMS/admin panel | Quản lý nội dung trực tiếp trong code |
| User accounts | Không cần authentication cho landing page |
| Scheduling calendar | Đặt lịch qua Zalo/Messenger, không cần tích hợp calendar |
| E-commerce | Không bán sản phẩm vật lý |
| Newsletter | Chưa có email marketing strategy |
| Complex animations | Ảnh tĩnh + subtle animations đủ, không cần heavy JS |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| NAV-01 | Phase 1 | Complete |
| NAV-02 | Phase 1 | Complete |
| NAV-03 | Phase 3 | Pending |
| ABT-01 | Phase 1 | Complete |
| ABT-02 | Phase 1 | Complete |
| SRV-01 | Phase 1 | Complete |
| SRV-02 | Phase 1 | Complete |
| SRV-03 | Phase 1 | Complete |
| PRC-01 | Phase 2 | Pending |
| PRC-02 | Phase 2 | Pending |
| Gal-01 | Phase 2 | Pending |
| CON-01 | Phase 2 | Pending |
| CON-02 | Phase 2 | Pending |
| MBL-01 | Phase 3 | Pending |
| PRF-01 | Phase 3 | Pending |
| SEO-01 | Phase 3 | Pending |

**Coverage:**

- v1 requirements: 16 total
- Mapped to phases: 16
- Unmapped: 0 ✓

---
*Requirements defined: 2026-06-14*
*Last updated: 2026-06-14 after roadmap creation*
