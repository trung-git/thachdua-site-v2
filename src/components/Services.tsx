import { User, Users, Monitor } from "lucide-react"
import { services } from "@/lib/constants"

const iconMap = {
  user: User,
  users: Users,
  monitor: Monitor,
} as const

export default function Services() {
  return (
    <section id="services" className="py-24 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">
          Dịch Vụ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div
                key={service.title}
                className={`relative bg-white rounded-xl p-6 shadow-sm border border-warm-100 hover:shadow-md transition-shadow duration-200 ${
                  service.highlighted ? "border-l-4 border-sage ring-1 ring-sage/20" : ""
                }`}
              >
                {/* Badge for highlighted card */}
                {service.highlighted && (
                  <span className="absolute top-4 right-4 bg-sage/10 text-sage text-xs font-bold px-2 py-0.5 rounded-full">
                    Phổ Biến Nhất
                  </span>
                )}

                <Icon className="w-8 h-8 text-sage mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold mb-2 text-stone-900 text-center">
                  {service.title}
                </h3>
                <p className="text-stone-500 leading-relaxed text-center">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
