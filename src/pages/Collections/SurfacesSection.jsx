import { Link } from "react-router-dom"

const items = [
  {
    number: "01",
    title: "Imitation Pierre",
    path: "/collections/imitation-pierre",
    desc: "L’authenticité de la pierre naturelle alliée aux performances des matériaux modernes.",
    img: "/images/home/acceuil_home_1.jpg",
  },
  {
    number: "02",
    title: "Imitation Béton",
    path: "/collections/imitation-beton",
    desc: "Des surfaces contemporaines inspirées de l’architecture moderne.",
    img: "/images/home/catalogue_home2.jpg",
  },
  {
    number: "03",
    title: "Imitation Bois",
    path: "/collections/imitation-bois",
    desc: "La chaleur du bois avec la résistance et la simplicité d’entretien du carrelage.",
    img: "/images/home/catalogue_home2.jpg",
  },
  {
    number: "04",
    title: "Imitation Marbre",
    path: "/collections/imitation-marbre",
    desc: "Des collections élégantes inspirées des marbres les plus prestigieux.",
    img: "/images/home/catalogue_home1.jpg",
  },
  {
    number: "05",
    title: "Salle de Bain",
    path: "/collections/salle-de-bain",
    desc: "Pensé pour les espaces de bien-être et les environnements humides.",
    img: "/images/home/acceuil_home_2.png",
  },
  {
    number: "06",
    title: "Extérieur",
    path: "/collections/exterieur",
    desc: "Des matériaux conçus pour résister durablement aux conditions extérieures.",
    img: "/images/home/acceuil_home3.jpg",
  },
]

export default function SurfacesSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-44 bg-[#F8F5F1]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span
            className="
              uppercase
              tracking-[0.25em]
              sm:tracking-[0.35em]
              text-[10px]
              sm:text-xs
              text-[#CBA18B]
            "
          >
            Univers HEVIA
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
            Des collections pour
            <span className="text-[#CBA18B]">
              {" "}chaque projet
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
              max-w-2xl
              mx-auto
            "
          >
            Découvrez les différentes matières qui composent notre sélection.
          </p>

        </div>

        <div
          className="
            mt-12
            sm:mt-16
            md:mt-20
            lg:mt-24
            grid
            sm:grid-cols-2
            xl:grid-cols-3
            gap-5
            sm:gap-6
            lg:gap-8
          "
        >

          {items.map((item) => (
           <Link
           to={item.path}
           className="
             group
             relative
             overflow-hidden
             rounded-[28px]
             sm:rounded-[32px]
             lg:rounded-[40px]
             h-[360px]
             sm:h-[430px]
             lg:h-[580px]
             block
           "
         >
          

              <img
                src={item.img}
                alt={item.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-[1200ms]
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-black/25" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div
                className="
                  absolute
                  top-5
                  left-5
                  sm:top-8
                  sm:left-8
                  text-5xl
                  sm:text-6xl
                  lg:text-7xl
                  font-bold
                  text-white/15
                "
              >
                {item.number}
              </div>

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-5
                  sm:p-7
                  lg:p-8
                "
              >

                <span
                  className="
                    uppercase
                    tracking-[0.25em]
                    sm:tracking-[0.3em]
                    text-[10px]
                    sm:text-xs
                    text-[#CBA18B]
                  "
                >
                  Collection
                </span>

                <h3
                  className="
                    mt-3
                    sm:mt-4
                    text-2xl
                    sm:text-3xl
                    font-light
                    text-white
                    leading-tight
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    sm:mt-4
                    text-white/70
                    leading-relaxed
                    text-sm
                    sm:text-base
                  "
                >
                  {item.desc}
                </p>

                <div
  className="
    inline-flex
    mt-6
    sm:mt-8
    items-center
    gap-3
    text-sm
    sm:text-base
    text-[#CBA18B]
  "
>
  Découvrir

  <span
    className="
      transition-transform
      duration-500
      group-hover:translate-x-2
    "
  >
    →
  </span>

</div>

              </div>

              </Link>
          ))}

        </div>

      </div>

    </section>
  )
}