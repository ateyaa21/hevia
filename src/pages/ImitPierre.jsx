import { Link } from "react-router-dom"

import hero from "/images/home/acceuil_home_1.jpg"

export default function ImitPierre() {
  return (
    <section className="pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 bg-[#F8F5F1]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-[#CBA18B]
            "
          >
            Collection
          </span>

          <h1
            className="
              mt-6
              text-4xl
              sm:text-5xl
              lg:text-7xl
              font-light
              text-[#1E2A38]
            "
          >
            Imitation
            <span className="text-[#CBA18B]">
              {" "}Pierre
            </span>
          </h1>

          <p
            className="
              mt-8
              max-w-2xl
              mx-auto
              text-[#1E2A38]/70
              leading-relaxed
            "
          >
            L'élégance intemporelle de la pierre naturelle associée
            aux performances techniques du grès cérame moderne.
          </p>

        </div>

        <div
          className="
            mt-16
            overflow-hidden
            rounded-[30px]
            lg:rounded-[40px]
            h-[350px]
            sm:h-[500px]
            lg:h-[650px]
          "
        >

          <img
            src={hero}
            alt="Imitation Pierre"
            className="
              w-full
              h-full
              object-cover
            "
          />

        </div>

        <div
          className="
            mt-20
            grid
            lg:grid-cols-2
            gap-12
            items-center
          "
        >

          <div>

            <span
              className="
                uppercase
                tracking-[0.35em]
                text-xs
                text-[#CBA18B]
              "
            >
              Matière
            </span>

            <h2
              className="
                mt-4
                text-3xl
                sm:text-5xl
                font-light
                text-[#1E2A38]
              "
            >
              L'authenticité minérale
            </h2>

          </div>

          <div>

            <p
              className="
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Les collections imitation pierre reproduisent les
              nuances, les textures et le caractère des pierres
              naturelles les plus prestigieuses.
            </p>

            <p
              className="
                mt-6
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Elles permettent de créer des espaces élégants,
              authentiques et intemporels tout en bénéficiant
              d'une grande facilité d'entretien.
            </p>

          </div>

        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-12">

          <div>

            <span
              className="
                uppercase
                tracking-[0.35em]
                text-xs
                text-[#CBA18B]
              "
            >
              Avantages
            </span>

            <h2
              className="
                mt-4
                text-3xl
                sm:text-5xl
                font-light
                text-[#1E2A38]
              "
            >
              Pourquoi choisir
              <span className="text-[#CBA18B]">
                {" "}l'imitation pierre
              </span>
            </h2>

          </div>

          <div className="space-y-6">

            <p className="text-[#1E2A38]/70 leading-relaxed">
              L'imitation pierre apporte le cachet des matériaux
              naturels sans les contraintes d'entretien associées.
            </p>

            <p className="text-[#1E2A38]/70 leading-relaxed">
              Elle résiste parfaitement aux taches, à l'humidité
              et à l'usure quotidienne.
            </p>

            <p className="text-[#1E2A38]/70 leading-relaxed">
              Son esthétique intemporelle s'adapte aussi bien aux
              projets contemporains qu'aux ambiances plus traditionnelles.
            </p>

          </div>

        </div>

        <div className="mt-24">

          <span
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-[#CBA18B]
            "
          >
            Applications
          </span>

          <h2
            className="
              mt-4
              text-3xl
              sm:text-5xl
              font-light
              text-[#1E2A38]
            "
          >
            Où l'utiliser ?
          </h2>

          <div
            className="
              mt-12
              grid
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl text-[#1E2A38]">
                Salon
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Pour créer une ambiance élégante et authentique.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl text-[#1E2A38]">
                Terrasse
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Aspect naturel idéal pour les espaces extérieurs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl text-[#1E2A38]">
                Salle de bain
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Ambiance spa inspirée des matières minérales.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl text-[#1E2A38]">
                Entrée
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Une première impression forte et raffinée.
              </p>
            </div>

          </div>

        </div>

        <div
          className="
            mt-24
            bg-white
            rounded-[30px]
            lg:rounded-[40px]
            p-8
            sm:p-12
            border
            border-[#CBA18B]/10
          "
        >

          <div
            className="
              grid
              sm:grid-cols-3
              gap-8
            "
          >

            <div>

              <h3 className="text-xl text-[#1E2A38]">
                Naturel
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Fidèle aux plus belles pierres naturelles.
              </p>

            </div>

            <div>

              <h3 className="text-xl text-[#1E2A38]">
                Durable
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Conçu pour durer de nombreuses années.
              </p>

            </div>

            <div>

              <h3 className="text-xl text-[#1E2A38]">
                Facile
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Entretien simple au quotidien.
              </p>

            </div>

          </div>

        </div>

        <div className="mt-24">

          <span
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-[#CBA18B]
            "
          >
            FAQ
          </span>

          <h2
            className="
              mt-4
              text-3xl
              sm:text-5xl
              font-light
              text-[#1E2A38]
            "
          >
            Questions fréquentes
          </h2>

          <div className="mt-12 space-y-6">

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-[#1E2A38]">
                Est-ce de la vraie pierre ?
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Non, il s'agit d'un carrelage reproduisant l'apparence
                et les textures de la pierre naturelle.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-[#1E2A38]">
                Peut-on l'utiliser en extérieur ?
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Oui, certaines collections sont spécialement conçues
                pour les terrasses et aménagements extérieurs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-[#1E2A38]">
                Est-il facile à entretenir ?
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Oui, il ne nécessite aucun traitement particulier.
              </p>
            </div>

          </div>

        </div>

        <div className="mt-20 text-center">

          <Link
            to="/collections"
            className="
              inline-flex
              items-center
              justify-center
              px-8
              py-4
              rounded-full
              bg-[#1E2A38]
              text-white
              transition-all
              duration-500
              hover:bg-[#CBA18B]
              hover:text-[#1E2A38]
            "
          >
            Retour aux collections
          </Link>

        </div>

      </div>

    </section>
  )
}