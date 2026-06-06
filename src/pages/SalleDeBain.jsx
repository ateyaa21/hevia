import { Link } from "react-router-dom"

import hero from "/images/home/acceuil_home_2.png"

export default function SalleDeBain() {
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
            Salle de
            <span className="text-[#CBA18B]">
              {" "}Bain
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
            Des collections conçues pour transformer chaque salle
            de bain en un espace de détente, de confort et de bien-être.
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
            alt="Salle de Bain"
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
              Bien-être
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
              Un espace pensé
              pour la détente
            </h2>

          </div>

          <div>

            <p
              className="
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              La salle de bain est devenue une véritable pièce de vie.
              Nos collections permettent de créer des espaces élégants,
              chaleureux et adaptés à chaque style d'intérieur.
            </p>

            <p
              className="
                mt-6
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Du minimalisme contemporain aux ambiances naturelles,
              chaque projet bénéficie de matériaux résistants à
              l'humidité et faciles à entretenir.
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
                {" "}nos collections
              </span>
            </h2>

          </div>

          <div className="space-y-6">

            <p className="text-[#1E2A38]/70 leading-relaxed">
              Résistance à l'eau, à l'humidité et aux variations
              de température.
            </p>

            <p className="text-[#1E2A38]/70 leading-relaxed">
              Grand choix de formats, textures et finitions pour
              personnaliser chaque espace.
            </p>

            <p className="text-[#1E2A38]/70 leading-relaxed">
              Une combinaison parfaite entre esthétique,
              durabilité et simplicité d'entretien.
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
            Pour tous les projets
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
                Douche
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Revêtements adaptés aux espaces humides.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl text-[#1E2A38]">
                Sol
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Résistance et sécurité au quotidien.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl text-[#1E2A38]">
                Mur
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Création d'ambiances élégantes et modernes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-xl text-[#1E2A38]">
                Spa
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Inspiration bien-être et détente.
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
                Conçu pour les environnements humides.
              </p>

            </div>

            <div>

              <h3 className="text-xl text-[#1E2A38]">
                Élégant
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Des finitions adaptées aux tendances actuelles.
              </p>

            </div>

            <div>

              <h3 className="text-xl text-[#1E2A38]">
                Durable
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Une qualité pensée pour durer.
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
                Ces carrelages résistent-ils à l'humidité ?
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Oui, ils sont spécialement adaptés aux salles de bain.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-[#1E2A38]">
                Peut-on les utiliser dans une douche à l'italienne ?
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Oui, ils conviennent parfaitement aux douches modernes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px]">
              <h3 className="text-[#1E2A38]">
                Sont-ils faciles à nettoyer ?
              </h3>

              <p className="mt-3 text-[#1E2A38]/70">
                Oui, un entretien simple suffit au quotidien.
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