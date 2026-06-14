import Image from "next/image"
import { teacherInfo } from "@/lib/constants"

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/about-placeholder.svg"
            alt="Chân dung giáo viên Nguyễn Thạch Thảo"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2 text-stone-900">
            {teacherInfo.name}
          </h2>
          <p className="text-lg text-stone-500 mb-3">{teacherInfo.role}</p>
          <span className="inline-block bg-sage/10 text-sage px-3 py-1 rounded-full text-sm font-bold mb-6">
            {teacherInfo.credential}
          </span>
          <p className="text-stone-900 leading-relaxed mb-6">{teacherInfo.bio}</p>

          {/* Results highlight */}
          <div className="flex gap-8 mb-4">
            <div>
              <p className="text-2xl font-bold text-sage">{teacherInfo.results.retention}</p>
              <p className="text-sm text-stone-500">học viên tái đăng ký</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-sage">{teacherInfo.results.painReduction}</p>
              <p className="text-sm text-stone-500">giảm đau mỏi sau 10 buổi</p>
            </div>
          </div>

          {/* Philosophy quote */}
          <p className="italic text-stone-500 border-l-2 border-sage pl-4">
            An toàn và hiệu quả — giúp học viên khỏe hơn, linh hoạt hơn, cảm nhận rõ cơ thể
            trong từng chuyển động
          </p>
        </div>
      </div>
    </section>
  )
}
