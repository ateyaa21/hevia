import { Link } from "react-router-dom"

import hero from "/images/home/catalogue_home2.jpg"

export default function ImitBeton() {
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
              leading-tight
            "
          >
            Imitation
            <span className="text-[#CBA18B]">
              {" "}Béton
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
            Des surfaces contemporaines inspirées de l’architecture moderne,
            pensées pour créer des espaces minimalistes, élégants et durables.
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
            alt="Imitation Béton"
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
              L'esprit architectural
            </h2>

          </div>

          <div>

            <p
              className="
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Les collections imitation béton offrent un style épuré
              et contemporain inspiré des réalisations architecturales
              modernes. Elles s'intègrent parfaitement dans les espaces
              résidentiels comme professionnels.
            </p>

            <p
              className="
                mt-6
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Disponibles dans différentes teintes et formats,
              elles permettent de créer des ambiances sobres,
              élégantes et intemporelles.
            </p>

          </div>

        </div>

        <div
          className="
            mt-24
            grid
            lg:grid-cols-2
            gap-12
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
                {" "}l'imitation béton
              </span>
            </h2>

          </div>

          <div className="space-y-6">

            <p className="text-[#1E2A38]/70 leading-relaxed">
              Le carrelage imitation béton reproduit fidèlement
              l'apparence du béton ciré tout en bénéficiant des
              performances techniques du grès cérame.
            </p>

            <p className="text-[#1E2A38]/70 leading-relaxed">
              Contrairement au béton traditionnel, il ne fissure pas,
              résiste à l'humidité, aux rayures et demande très peu
              d'entretien au quotidien.
            </p>

            <p className="text-[#1E2A38]/70 leading-relaxed">
              Son esthétique minimaliste en fait une référence dans
              les projets contemporains, industriels ou haut de gamme.
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
              <h3 className="text-xl font-light text-[#1E2A38]">
                Salon
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Une continuité visuelle parfaite pour les grands espaces.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl font-light text-[#1E2A38]">
                Cuisine
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Résistant aux taches et facile à nettoyer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl font-light text-[#1E2A38]">
                Salle de bain
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Idéal pour créer une ambiance spa moderne.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl font-light text-[#1E2A38]">
                Commerce
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Très apprécié dans les espaces professionnels.
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

              <h3
                className="
                  text-xl
                  font-light
                  text-[#1E2A38]
                "
              >
                Moderne
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Inspiré des tendances architecturales actuelles.
              </p>

            </div>

            <div>

              <h3
                className="
                  text-xl
                  font-light
                  text-[#1E2A38]
                "
              >
                Résistant
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Adapté aux espaces à fort passage.
              </p>

            </div>

            <div>

              <h3
                className="
                  text-xl
                  font-light
                  text-[#1E2A38]
                "
              >
                Intemporel
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Une esthétique durable qui traverse les années.
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
                Est-ce du vrai béton ?
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Non. Il s'agit d'un carrelage reproduisant l'apparence
                du béton tout en offrant une meilleure résistance et
                un entretien simplifié.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-[#1E2A38]">
                Peut-on l'utiliser dans une douche ?
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Oui. Le carrelage imitation béton est parfaitement
                adapté aux pièces humides comme les salles de bain.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-[#1E2A38]">
                Est-il facile à entretenir ?
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Oui. Un nettoyage classique suffit pour conserver son
                aspect d'origine pendant de nombreuses années.
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