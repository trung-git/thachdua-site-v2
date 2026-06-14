export const teacherInfo = {
  name: "Nguyễn Thạch Thảo",
  role: "Movement & Somatic Instructor",
  credential: "200-Hour Yoga Alliance Certified",
  bio: "Nguyễn Thạch Thảo là giáo viên yoga chuyên nghiệp với chứng chỉ 200-Hour Yoga Alliance, chuyên về Movement & Somatic Instruction. Với kiến thức giải phẫu sâu và kinh nghiệm giảng dạy, Thảo mang đến cho học viên những bài tập an toàn, hiệu quả và cá nhân hóa. Từ dân văn phòng đau lưng đến người mới bắt đầu và người tập lâu năm muốn nâng cao kỹ thuật — mỗi học viên đều được xây dựng lộ trình riêng phù hợp với mục tiêu và thể trạng. Phương pháp giảng dạy kết hợp kiểm soát chuyển động, nhịp thở, và kiến thức giải phẫu giúp học viên cảm nhận rõ cơ thể trong từng chuyển động.",
  results: {
    retention: "70%",
    painReduction: "30%",
  },
  languages: ["Tiếng Việt", "English"],
} as const;

export const services = [
  {
    title: "Private 1:1",
    description:
      "Lộ trình cá nhân hóa 100% — tập trung vào nhu cầu và mục tiêu riêng của bạn",
    icon: "user",
    highlighted: false,
  },
  {
    title: "Small Group (1:6)",
    description:
      "Lớp nhỏ, chất lượng lớn — được hướng dẫn chi tiết và chỉnh sửa tư thế đúng cách",
    icon: "users",
    highlighted: true,
  },
  {
    title: "Online Class",
    description:
      "Tập mọi lúc, mọi nơi — hướng dẫn qua video call với giáo viên chuyên môn",
    icon: "monitor",
    highlighted: false,
  },
] as const;

export const navLinks = [
  { label: "Giới Thiệu", href: "#about" },
  { label: "Dịch Vụ", href: "#services" },
  { label: "Đặt Lịch", href: "#booking" },
] as const;

export const heroContent = {
  headline: "An Toàn & Hiệu Quả",
  subheadline:
    "Yoga cá nhân hóa với kiến thức giải phẫu sâu — giúp bạn khỏe hơn, linh hoạt hơn, cảm nhận rõ cơ thể trong từng chuyển động",
  ctaText: "Đặt Lịch Ngay",
} as const;
