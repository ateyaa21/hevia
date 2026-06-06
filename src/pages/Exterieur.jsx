import { Link } from "react-router-dom"

import hero from "/images/home/acceuil_home3.jpg"

export default function Exterieur() {
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
            Aménagement
            <span className="text-[#CBA18B]">
              {" "}Extérieur
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
            Des collections pensées pour les terrasses,
            plages de piscine, jardins et espaces extérieurs
            où design et résistance doivent cohabiter.
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
            alt="Extérieur"
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
              Performance
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
              Conçu pour durer
            </h2>

          </div>

          <div>

            <p
              className="
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Les revêtements extérieurs doivent faire face
              aux intempéries, aux UV, aux variations de température
              et à une utilisation intensive tout au long de l'année.
            </p>

            <p
              className="
                mt-6
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Nos collections associent esthétique contemporaine
              et résistance afin de créer des espaces extérieurs
              élégants et durables.
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
                {" "}nos solutions extérieures
              </span>
            </h2>

          </div>

          <div className="space-y-6">

            <p className="text-[#1E2A38]/70 leading-relaxed">
              Excellente résistance aux intempéries et aux UV.
            </p>

            <p className="text-[#1E2A38]/70 leading-relaxed">
              Surface durable adaptée aux passages fréquents
              et aux usages quotidiens.
            </p>

            <p className="text-[#1E2A38]/70 leading-relaxed">
              Grand choix de finitions pour s'intégrer à tous
              les styles architecturaux.
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
            Où les utiliser ?
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
                Terrasse
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Un espace convivial pensé pour durer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl text-[#1E2A38]">
                Piscine
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Résistance à l'eau et à l'exposition solaire.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl text-[#1E2A38]">
                Jardin
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Intégration harmonieuse dans les espaces verts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl text-[#1E2A38]">
                Allée
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Robustesse adaptée aux zones de passage.
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
                Résistant
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Conçu pour affronter les conditions extérieures.
              </p>

            </div>

            <div>

              <h3 className="text-xl text-[#1E2A38]">
                Sécurisant
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Finitions adaptées aux zones extérieures.
              </p>

            </div>

            <div>

              <h3 className="text-xl text-[#1E2A38]">
                Durable
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Conserve son esthétique au fil des saisons.
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
                Les carrelages résistent-ils au gel ?
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Oui, les collections extérieures sont conçues
                pour supporter les variations climatiques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-[#1E2A38]">
                Peut-on les utiliser autour d'une piscine ?
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Oui, ils sont parfaitement adaptés aux plages
                de piscine et espaces aquatiques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-[#1E2A38]">
                Sont-ils faciles à entretenir ?
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Oui, un entretien régulier suffit à conserver
                leur aspect d'origine.
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