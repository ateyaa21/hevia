import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

import img from "/images/home/acceuil_home4.jpg"

export default function Presentation() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-12")
          el.classList.add("opacity-100", "translate-y-0")
        }
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="
        py-20
        sm:py-28
        lg:py-40
        bg-[#F8F5F1]
        opacity-0
        translate-y-12
        transition-all
        duration-1000
      "
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            lg:gap-16
            items-center
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              sm:rounded-[32px]
              lg:rounded-[40px]
              group
            "
          >

            

            <img
              src={img}
              alt="Présentation HEVIA"
              className="
                w-full
                h-[340px]
                sm:h-[500px]
                lg:h-[700px]
                object-cover
                transition-all
                duration-[1800ms]
                group-hover:scale-110
              "
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          </div>

          <div>

            <span
              className="
                uppercase
                tracking-[0.22em]
                sm:tracking-[0.35em]
                text-[10px]
                sm:text-xs
                text-[#CBA18B]
                font-medium
              "
            >
              À propos de HEVIA
            </span>

            <h2
              className="
                mt-4
                sm:mt-6
                text-[32px]
                sm:text-5xl
                lg:text-6xl
                font-light
                text-[#1E2A38]
                leading-tight
              "
            >
              Sublimer les espaces

              <span className="text-[#CBA18B]">
                {" "}par la matière
              </span>

            </h2>

            <p
              className="
                mt-5
                sm:mt-8
                text-sm
                sm:text-lg
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Chez HEVIA, nous sélectionnons des matériaux capables
              de transformer un simple espace en un lieu de caractère.
              Chaque collection est choisie pour son esthétique,
              sa durabilité et sa capacité à traverser le temps.
            </p>

            <p
              className="
                mt-4
                sm:mt-6
                text-sm
                sm:text-base
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Notre mission est d'accompagner chaque projet avec
              exigence, sens du détail et passion des belles matières.
            </p>

            <div
              className="
                mt-8
                sm:mt-12
                grid
                grid-cols-3
                gap-4
                sm:gap-8
              "
            >

              <div>

                <div
                  className="
                    text-2xl
                    sm:text-4xl
                    font-light
                    text-[#1E2A38]
                  "
                >
                  100+
                </div>

                <div
                  className="
                    mt-2
                    text-[11px]
                    sm:text-sm
                    text-[#1E2A38]/60
                  "
                >
                  Références
                </div>

              </div>

              <div>

                <div
                  className="
                    text-2xl
                    sm:text-4xl
                    font-light
                    text-[#1E2A38]
                  "
                >
                  10+
                </div>

                <div
                  className="
                    mt-2
                    text-[11px]
                    sm:text-sm
                    text-[#1E2A38]/60
                  "
                >
                  Collections
                </div>

              </div>

              <div>

                <div
                  className="
                    text-2xl
                    sm:text-4xl
                    font-light
                    text-[#1E2A38]
                  "
                >
                  100%
                </div>

                <div
                  className="
                    mt-2
                    text-[11px]
                    sm:text-sm
                    text-[#1E2A38]/60
                  "
                >
                  Sélectionnées
                </div>

              </div>

            </div>

            <div className="mt-8 sm:mt-12">

              <Link
                to="/about"
                className="
                  inline-flex
                  items-center
                  justify-center
                  w-full
                  sm:w-auto
                  gap-3
                  px-6
                  sm:px-8
                  py-3.5
                  sm:py-4
                  rounded-full
                  bg-[#1E2A38]
                  text-white
                  text-sm
                  sm:text-base
                  font-medium
                  transition-all
                  duration-500
                  hover:bg-[#CBA18B]
                  hover:text-[#1E2A38]
                  hover:scale-105
                "
              >
                Découvrir HEVIA
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}