import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import image from "/images/logo/logo_hevia.png"

export default function AboutSection() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove(
            "opacity-0",
            "translate-y-12"
          )

          el.classList.add(
            "opacity-100",
            "translate-y-0"
          )
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
pt-36
sm:pt-40
md:pt-44
lg:pt-52

pb-20
sm:pb-24
md:pb-32
lg:pb-44

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
            md:gap-14
            lg:gap-20
            items-center
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              sm:rounded-[30px]
              lg:rounded-[40px]
              group
              order-1
            "
          >

            <div
              className="
                absolute
                top-4
                left-4
                sm:top-6
                sm:left-6
                lg:top-8
                lg:left-8
                z-20
                text-[50px]
                sm:text-[70px]
                lg:text-[90px]
                font-bold
                text-white/15
              "
            >
              03
            </div>

            <img
              src={image}
              alt="HEVIA"
              className="
                w-full
                h-[340px]
                sm:h-[480px]
                md:h-[600px]
                lg:h-[720px]
                object-cover
                transition-all
                duration-[1800ms]
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/15" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          </div>

          <div className="order-2">

            <span
              className="
                uppercase
                tracking-[0.25em]
                sm:tracking-[0.35em]
                text-[10px]
                sm:text-xs
                text-[#CBA18B]
                font-medium
              "
            >
              Maison HEVIA
            </span>

            <h2
              className="
                mt-4
                sm:mt-6
                text-[32px]
                sm:text-5xl
                md:text-6xl
                font-light
                text-[#1E2A38]
                leading-tight
              "
            >
              Une vision moderne du
              <span className="text-[#CBA18B]">
                {" "}carrelage
              </span>
            </h2>

            <p
              className="
                mt-6
                sm:mt-8
                text-sm
                sm:text-base
                lg:text-lg
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              HEVIA réunit design, exigence et sélection
              rigoureuse afin de proposer des collections
              capables de répondre aux projets les plus ambitieux.
            </p>

            <p
              className="
                mt-5
                sm:mt-6
                text-sm
                sm:text-base
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Chaque matériau est choisi pour sa qualité,
              sa durabilité et sa capacité à créer des espaces
              élégants qui traversent les années sans perdre
              leur caractère.
            </p>

            <p
              className="
                mt-5
                sm:mt-6
                text-sm
                sm:text-base
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Notre approche repose sur le conseil,
              la proximité et une attention particulière
              portée aux détails qui font toute la différence.
            </p>

            <div
              className="
                mt-10
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
                    sm:text-3xl
                    lg:text-4xl
                    font-light
                    text-[#1E2A38]
                  "
                >
                  100+
                </div>

                <p
                  className="
                    mt-2
                    text-[11px]
                    sm:text-sm
                    text-[#1E2A38]/60
                  "
                >
                  Références
                </p>

              </div>

              <div>

                <div
                  className="
                    text-2xl
                    sm:text-3xl
                    lg:text-4xl
                    font-light
                    text-[#1E2A38]
                  "
                >
                  Premium
                </div>

                <p
                  className="
                    mt-2
                    text-[11px]
                    sm:text-sm
                    text-[#1E2A38]/60
                  "
                >
                  Collections
                </p>

              </div>

              <div>

                <div
                  className="
                    text-2xl
                    sm:text-3xl
                    lg:text-4xl
                    font-light
                    text-[#1E2A38]
                  "
                >
                  100%
                </div>

                <p
                  className="
                    mt-2
                    text-[11px]
                    sm:text-sm
                    text-[#1E2A38]/60
                  "
                >
                  Sélectionnées
                </p>

              </div>

            </div>

            <div
              className="
                mt-10
                sm:mt-14
                flex
                flex-col
                sm:flex-row
                gap-3
                sm:gap-4
              "
            >

              <Link
                to="/collections"
                className="
                  text-center
                  px-6
                  sm:px-8
                  py-3
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
                "
              >
                Découvrir les collections
              </Link>

              <Link
                to="/about"
                className="
                  text-center
                  px-6
                  sm:px-8
                  py-3
                  sm:py-4
                  rounded-full
                  border
                  border-[#1E2A38]/15
                  text-[#1E2A38]
                  text-sm
                  sm:text-base
                  transition-all
                  duration-500
                  hover:border-[#CBA18B]
                  hover:text-[#CBA18B]
                "
              >
                Notre histoire
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}