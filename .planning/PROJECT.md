# Dừa Yoga — Landing Page

## What This Is

Landing page cho Dừa Yoga — thương hiệu yoga của Nguyễn Thạch Thảo, giáo viên Movement & Somatic Instructor. Trang web đóng vai trò trung tâm giới thiệu bản thân, dịch vụ, bảng giá, và cho phép học viên đặt lịch qua Zalo/Messenger. Phục vụ cả học viên Việt Nam và quốc tế (dạy bằng tiếng Anh).

## Core Value

An toàn và hiệu quả — giúp học viên khỏe hơn, linh hoạt hơn, cảm nhận rõ cơ thể trong từng chuyển động thông qua kiến thức giải phẫu sâu và lộ trình cá nhân hóa.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Giới thiệu bản thân giáo viên (profile, kinh nghiệm, chứng chỉ)
- [ ] Hiển thị dịch vụ: Private 1:1, Small Group (1:6), Online Class
- [ ] Bảng giá cụ thể cho từng gói dịch vụ
- [ ] Đặt lịch qua Zalo/Messenger
- [ ] Thư viện ảnh tập yoga
- [ ] Video demo bài tập
- [ ] Phân khúc đối tượng: dân văn phòng, người mới, người tập lâu năm
- [ ] Đa ngôn ngữ: tiếng Việt + tiếng Anh

### Out of Scope

- Blog/kiến thức yoga — chưa có nội dung, thêm sau
- Testimonial/đánh giá học viên — chưa có, thêm sau
- Thanh toán online — dùng Zalo/Messenger trước
- Workshop/Event — chưa có dịch vụ này
- CMS/admin panel — quản lý nội dung trực tiếp trong code

## Context

**Giáo viên:** Nguyễn Thạch Thảo
- Chứng chỉ: 200-Hour Yoga Teacher Training (Yoga Alliance)
- Kinh nghiệm: Yoga Instructor (06.2025 - hiện tại), Marketing Executive (2022-2025)
- Thế mạnh: Kiến thức giải phẫu (Anatomy), kiểm soát chuyển động, nhịp thở
- Ngôn ngữ giảng dạy: Tiếng Việt + Tiếng Anh
- Dịch vụ: Private 1:1, Small Group (1:6), Online Class
- Kết quả: 70% học viên tái đăng ký, giảm 30% đau mỏi sau 10 buổi

**Tham khảo:** https://www.courtneywatts.com/#pricing

**Target audience:**
- Dân văn phòng: ngồi nhiều, đau lưng, stress
- Người mới bắt đầu: chưa từng tập yoga
- Người tập lâu năm: muốn nâng cao kỹ thuật

## Constraints

- **Budget**: Cá nhân, cần giải pháp chi phí thấp (static site, hosting free/cheap)
- **Content**: Có sẵn ảnh + video demo, chưa có testimonial/blog
- **Booking**: Qua Zalo/Messenger, không cần backend phức tạp
- **Domain**: Chưa có, cần mua tên miền phù hợp

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Static site (không cần backend) | Booking qua Zalo/Messenger, không cần database | — Pending |
| Đa ngôn ngữ (VI + EN) | Phục vụ cả học viên Việt Nam và quốc tế | — Pending |
| Hiện giá cụ thể | Minh bạch, học viên biết ngay, giảm inbox hỏi giá | — Pending |

---

*Last updated: 2026-06-14 after initialization*

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state
