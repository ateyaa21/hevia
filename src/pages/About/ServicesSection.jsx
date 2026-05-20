import { useEffect, useRef } from "react"

export default function ServicesSection() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const items = el.querySelectorAll("[data-animate]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-10")
              entry.target.classList.add("opacity-100", "translate-y-0")
            }, index * 120)
          }
        })
      },
      { threshold: 0.2 }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-28 max-[768px]:py-14">
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto px-6 text-center"
      >

        <h2
          data-animate
          className="text-5xl md:text-6xl font-bold text-[#1E2A38] mb-10 max-[768px]:text-3xl opacity-0 translate-y-10 transition-all duration-700"
        >
          Nos services chez <span className="text-[#CBA18B]">HEVIA</span>
        </h2>

        <p
          data-animate
          className="text-lg text-[#2B2B2B]/80 leading-relaxed max-w-3xl mx-auto mb-16 max-[768px]:text-sm opacity-0 translate-y-10 transition-all duration-700"
        >
          Chez{" "}
          <span className="font-semibold text-[#85796D]">HEVIA Béziers</span>, nous
          offrons un accompagnement complet pour vos projets d’intérieur,
          alliant conseils, expertise et solutions sur mesure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-[768px]:gap-6">

          <div
            data-animate
            className="bg-white rounded-3xl p-8 shadow-2xl space-y-4 opacity-0 translate-y-10 transition-all duration-700 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="w-12 h-1 bg-[#CBA18B] rounded-full"></div>
            <h3 className="text-2xl font-semibold text-[#1E2A38]">
              Conseils personnalisés
            </h3>
            <p className="text-[#2B2B2B]/80 text-sm leading-relaxed">
              Nos experts vous accompagnent dans le choix des matériaux,
              textures et couleurs pour un intérieur unique.
            </p>
          </div>

          <div
            data-animate
            className="bg-white rounded-3xl p-8 shadow-2xl space-y-4 opacity-0 translate-y-10 transition-all duration-700 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="w-12 h-1 bg-[#CBA18B] rounded-full"></div>
            <h3 className="text-2xl font-semibold text-[#1E2A38]">
              Solutions adaptées
            </h3>
            <p className="text-[#2B2B2B]/80 text-sm leading-relaxed">
              Du petit projet à l’aménagement complet, nous proposons des
              solutions sur mesure pour chaque besoin.
            </p>
          </div>

          <div
            data-animate
            className="bg-white rounded-3xl p-8 shadow-2xl space-y-4 opacity-0 translate-y-10 transition-all duration-700 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="w-12 h-1 bg-[#CBA18B] rounded-full"></div>
            <h3 className="text-2xl font-semibold text-[#1E2A38]">
              Suivi & support
            </h3>
            <p className="text-[#2B2B2B]/80 text-sm leading-relaxed">
              HEVIA reste à vos côtés après votre achat pour garantir la réussite
              de votre projet.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}