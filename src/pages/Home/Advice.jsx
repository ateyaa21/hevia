import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

import img from "/images/home/acceuil_home_2.png"

export default function Advice() {
  const imgRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const elements = [imgRef.current, textRef.current]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-12"
            )

            entry.target.classList.add(
              "opacity-100",
              "translate-y-0"
            )
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    elements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-44 bg-[#F8F5F1]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            md:gap-14
            lg:gap-16
            items-center
          "
        >

          <div
            ref={imgRef}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              sm:rounded-[32px]
              lg:rounded-[40px]
              opacity-0
              translate-y-12
              transition-all
              duration-1000
              group
            "
          >


            <img
              src={img}
              alt="Conseil HEVIA"
              className="
                w-full
                h-[360px]
                sm:h-[500px]
                lg:h-[700px]
                object-cover
                transition-all
                duration-[1800ms]
                group-hover:scale-110
              "
            />

            <div className="absolute inset-0 bg-black/15" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          </div>

          <div
            ref={textRef}
            className="
              opacity-0
              translate-y-12
              transition-all
              duration-1000
            "
          >

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
              Conseil & Expertise
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
                leading-[1.1]
              "
            >
              Trouvez le matériau
              <span className="text-[#CBA18B]">
                {" "}idéal
              </span>
            </h2>

            <p
              className="
                mt-5
                sm:mt-8
                text-sm
                sm:text-base
                lg:text-lg
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Choisir un carrelage ne se limite pas à une question
              d’esthétique. Chaque espace possède ses contraintes,
              ses usages et son identité propre.
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
              Notre équipe vous accompagne dans la sélection
              des formats, textures, couleurs et finitions
              afin de créer des espaces harmonieux,
              durables et parfaitement adaptés à votre projet.
            </p>

            <div
              className="
                mt-8
                sm:mt-12
                grid
                grid-cols-2
                gap-6
                sm:gap-8
              "
            >

              <div>

                <div
                  className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-light
                    text-[#1E2A38]
                  "
                >
                  100+
                </div>

                <p
                  className="
                    mt-2
                    text-xs
                    sm:text-sm
                    text-[#1E2A38]/60
                  "
                >
                  Références disponibles
                </p>

              </div>

              <div>

                <div
                  className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-light
                    text-[#1E2A38]
                  "
                >
                  100%
                </div>

                <p
                  className="
                    mt-2
                    text-xs
                    sm:text-sm
                    text-[#1E2A38]/60
                  "
                >
                  Accompagnement personnalisé
                </p>

              </div>

            </div>

            <div className="mt-8 sm:mt-12">

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-6
                  sm:px-8
                  py-3
                  sm:py-4
                  text-sm
                  sm:text-base
                  rounded-full
                  bg-[#1E2A38]
                  text-white
                  font-medium
                  transition-all
                  duration-500
                  hover:bg-[#CBA18B]
                  hover:text-[#1E2A38]
                  hover:scale-105
                "
              >
                Prendre rendez-vous
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}