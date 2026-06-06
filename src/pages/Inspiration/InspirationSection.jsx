import { useEffect, useRef } from "react"

const inspirations = [
  {
    title: "Salle de bain contemporaine",
    image: "/images/home/acceuil_home_2.png",
  },
  {
    title: "Effet pierre naturelle",
    image: "/images/home/acceuil_home_1.jpg",
  },
  {
    title: "Terrasse extérieure",
    image: "/images/home/acceuil_home3.jpg",
  },
  {
    title: "Ambiance marbre",
    image: "/images/home/catalogue_home1.jpg",
  },
  {
    title: "Style béton architectural",
    image: "/images/home/catalogue_home2.jpg",
  },
  {
    title: "Espaces de caractère",
    image: "/images/home/acceuil_home_1.jpg",
  },
]

export default function InspirationSection() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
  
    if (!el) return
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove(
            "opacity-0",
            "translate-y-10"
          )
  
          el.classList.add(
            "opacity-100",
            "translate-y-0"
          )
  
          observer.unobserve(el)
        }
      },
      {
        threshold: 0,
        rootMargin: "-100px 0px"
      }
    )
  
    observer.observe(el)
  
    return () => observer.disconnect()
  }, [])

  return (
    <section className="pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 lg:pb-40 bg-[#F8F5F1]">

      <div
        ref={ref}
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          opacity-0
          translate-y-10
          transition-all
          duration-1000
        "
      >

        <div className="max-w-3xl mx-auto text-center">

          <span
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-[#CBA18B]
            "
          >
            Inspiration
          </span>

          <h1
            className="
              mt-6
              text-4xl
              sm:text-5xl
              lg:text-7xl
              font-light
              text-[#1E2A38]
              leading-tight
            "
          >
            Des idées pour
            <span className="text-[#CBA18B]">
              {" "}imaginer vos espaces
            </span>
          </h1>

          <p
            className="
              mt-8
              text-[#1E2A38]/70
              text-base
              sm:text-lg
              leading-relaxed
              max-w-2xl
              mx-auto
            "
          >
            Découvrez une sélection d'ambiances, de matériaux et de projets
            inspirants pour imaginer vos futurs espaces intérieurs et extérieurs.
          </p>

        </div>

        <div
          className="
            mt-16
            sm:mt-24
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {inspirations.map((item) => (

            <div
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                h-[420px]
                sm:h-[500px]
              "
            >

              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-[1800ms]
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  right-8
                "
              >

                <span
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-[10px]
                    text-[#CBA18B]
                  "
                >
                  Inspiration
                </span>

                <h3
                  className="
                    mt-3
                    text-2xl
                    sm:text-3xl
                    font-light
                    text-white
                  "
                >
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

        <div
          className="
            mt-20
            sm:mt-28
            bg-white
            rounded-[32px]
            sm:rounded-[40px]
            p-8
            sm:p-14
            text-center
            border
            border-[#CBA18B]/10
          "
        >

          <span
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-[#CBA18B]
            "
          >
            HEVIA
          </span>

          <h2
            className="
              mt-6
              text-3xl
              sm:text-5xl
              font-light
              text-[#1E2A38]
            "
          >
            Créez un intérieur
            <span className="text-[#CBA18B]">
              {" "}qui vous ressemble
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              mx-auto
              text-[#1E2A38]/70
              leading-relaxed
            "
          >
            Nos collections sont sélectionnées pour répondre aux projets les plus exigeants,
            qu'il s'agisse d'une rénovation complète, d'une construction neuve ou
            simplement d'une recherche d'inspiration.
          </p>

        </div>

      </div>

    </section>
  )
}