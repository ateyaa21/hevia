import { Link } from "react-router-dom"

import hero from "/images/home/catalogue_home1.jpg"

export default function ImitMarbre() {
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
              {" "}Marbre
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
            Le raffinement du marbre naturel revisité à travers
            des collections contemporaines aux finitions élégantes
            et intemporelles.
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
            alt="Imitation Marbre"
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
              Le luxe intemporel
            </h2>

          </div>

          <div>

            <p
              className="
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Les collections imitation marbre reproduisent avec
              précision les veines, les nuances et la profondeur
              visuelle des marbres les plus prestigieux.
            </p>

            <p
              className="
                mt-6
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Elles permettent de créer des espaces sophistiqués
              et lumineux tout en bénéficiant de la résistance
              et de la simplicité d'entretien du grès cérame.
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
                {" "}l'imitation marbre
              </span>
            </h2>

          </div>

          <div className="space-y-6">

            <p className="text-[#1E2A38]/70 leading-relaxed">
              Toute l'élégance du marbre sans les contraintes
              d'entretien des pierres naturelles.
            </p>

            <p className="text-[#1E2A38]/70 leading-relaxed">
              Résistant aux taches, à l'humidité et à l'usure,
              il conserve son apparence pendant de nombreuses années.
            </p>

            <p className="text-[#1E2A38]/70 leading-relaxed">
              Disponible dans de nombreux formats pour répondre
              aux projets résidentiels comme professionnels.
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
                Ambiance élégante et lumineuse.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl text-[#1E2A38]">
                Salle de bain
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Esprit hôtel haut de gamme.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl text-[#1E2A38]">
                Cuisine
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Élégance et facilité d'entretien.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl text-[#1E2A38]">
                Commerce
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Une image prestigieuse et moderne.
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
                Luxueux
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Inspiré des marbres les plus prestigieux.
              </p>

            </div>

            <div>

              <h3 className="text-xl text-[#1E2A38]">
                Lumineux
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Agrandit visuellement les espaces.
              </p>

            </div>

            <div>

              <h3 className="text-xl text-[#1E2A38]">
                Durable
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Conçu pour conserver sa beauté dans le temps.
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
                Est-ce du vrai marbre ?
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Non, il s'agit d'un carrelage reproduisant fidèlement
                l'apparence du marbre naturel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-[#1E2A38]">
                Est-il plus facile à entretenir ?
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Oui, il ne nécessite aucun traitement spécifique.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-[#1E2A38]">
                Peut-on l'utiliser au sol et au mur ?
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Oui, il convient parfaitement aux deux usages.
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