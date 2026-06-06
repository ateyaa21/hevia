import { useEffect, useRef } from "react"
import { FaStar } from "react-icons/fa"

const reviews = [
  {
    name: "Karen Sargisyan",
    text: "J’ai commandé du carrelage 90×90 chez HEVIA – Béziers pour la rénovation de mon épicerie en centre-ville, et l’expérience a été impeccable du début à la fin. Le choix de carrelage est très large,...",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocK6ZcssUmRGPMh62riCgWLBLViXJzhIKgarWwMJP_KllEV-LQ=w144-h144-p-rp-mo-br100",
  },
  {
    name: "h batiment",
    text: "Excellent magasin de carrelage à Béziers. Très bons prix, qualité 1er choix et service rapide. Je recommande !",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocK72mmGbehQrv06NZfOQzxqPdLm9x_ZSSmNCulrNY21Gd67VQ=w144-h144-p-rp-mo-br100",
  },
  {
    name: "Volkan Ay",
    text: "Un grand merci à HEVIA Béziers ! J’ai trouvé chez eux un choix incroyable de carrelages, avec des matériaux de grande qualité et un service client vraiment personnalisé. En plus, l’offre de colle incluse est un vrai plus : pas de surprise sur le prix final, tout est clair et transparent. Prix imbattables !",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocI4367hXb1P5K257cFO402zytRuUx1h5FTDwVP8L9jCfwFt=w144-h144-p-rp-mo-br100",
  },
  {
    name: "Vincent Rossi",
    text: "Je recommande vivement Hevia pour l’achat de carrelage. Burhannetin a été d’un excellent conseil du début jusqu’à la livraison. Très à l’écoute, il prend vraiment le temps d’expliquer chaque détail et de guider dans les choix en fonction des besoins. Le magasin propose un très large..",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLM_-L6-rD-MiPDDYcbcVkxi3_HN0ZFzeJcfaFCMTCSXNR9QA=w144-h144-p-rp-mo-br100",
  },
  {
    name: "AM Boulangerie Patisserie",
    text: "Je recommande vivement ce vendeur de carrelage ! Des prix défiant toute concurrence avec une qualité au rendez-vous. Le service est plus que professionnel : accueil chaleureux, conseils personnalisés et un véritable accompagnement du début à la fin de mon projet.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLe_RXvgkx-k9NYLLvoZOk-Bm_RCfYpJjWGdbBaTvGBtLnKLw=w144-h144-p-rp-mo-br100",
  },
  {
    name: "ONS Carrelage",
    text: "En tant que carreleur professionnel, je travaille régulièrement avec HEVIA – Maison, Vie & Extérieur, et je recommande vivement cette entreprise. Leur carrelage et leur faïence sont de très bonne qualité, avec un choix moderne et adapté aux chantiers exigeants. Mais surtout, le consommable (colle, croisillons,",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVd_ENmt0IGjCTLFUeVq6kFsVqvZUe4AzI_pSK1GHm4C5bVNPs=w144-h144-p-rp-mo-br100",
  },
  {
    name: "AB SUD HABITAT",
    text: "Excellent magasin de carrelage à Béziers ! Grand choix de carrelages intérieur et extérieur, avec de très belles références pour terrasse effet travertin, piscine effet Bali, salle de bain et grands formats. Très bon accueil, conseils professionnels et prix compétitifs. Le stock est disponible rapidement et le suivi des commandes est sérieux.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW8igkCG-1EmfRoAciJdCX0bo8m2HORTi5nEg90uTl83RWmoIE=w144-h144-p-rp-mo-br100",
  },
  {
    name: "Nicolas Penas",
    text: "Très bon produit ! Rapport qualité prix imbattable !! Très bons conseils ! Je suis satisfait de mon achat et du contact avec cette entreprise !",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJ5QtKIyeW1E2Avh3efvCYlGWz3rhBNCITI7orpcW5wkZdF8g=w144-h144-p-rp-mo-br100",
  },
  {
    name: "andré Koua",
    text: "Excellent magasin et très bon service ! J’ai été agréablement surpris par la qualité des produits et le large choix proposé. L’équipe est professionnelle, à l’écoute et de très bon conseil, que ce soit pour le choix des matériaux ou la pose. On sent qu’ils connaissent bien leur métier et qu’ils ont le souci du détail.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVH0iU-_1Q3nUEXHJxuW-P4dkH0VjMgATkK23Zpy8iybmZ4e0c=w144-h144-p-rp-mo-br100",
  },
]

export default function Reviews() {
  const trackRef = useRef(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    let raf
    let pos = 0
    const speed = 0.4

    const loop = () => {
      pos += speed

      el.style.transform = `translate3d(-${pos}px,0,0)`

      if (pos >= el.scrollWidth / 2) {
        pos = 0
      }

      raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="relative bg-[#F8F5F1] py-20 md:py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">

        <div className="text-center mb-10 md:mb-16">

          <span
            className="
            uppercase
            tracking-[0.35em]
            text-xs
            text-[#CBA18B]
            font-medium
            "
          >
            Témoignages
          </span>

          <h2
            className="
            mt-6
            text-4xl
            md:text-6xl
            font-light
            text-[#1E2A38]
            "
          >
            Ce que disent nos
            <span className="text-[#CBA18B]">
              {" "}clients
            </span>
          </h2>

        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#F8F5F1] to-transparent z-20" />

        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#F8F5F1] to-transparent z-20" />

        <div className="overflow-hidden py-8">
          {/* LE PY-8 EST LE SEUL CHANGEMENT IMPORTANT */}

          <div
            ref={trackRef}
            className="flex gap-5 md:gap-8 will-change-transform"
          >

            {[...reviews, ...reviews].map((review, index) => (

              <div
                key={index}
                className="
                group relative overflow-hidden

                w-[260px]
                sm:w-[280px]
                md:w-[320px]
                shrink-0

                bg-white

                border border-[#CBA18B]/10

                rounded-2xl

                p-5 md:p-6

                shadow-lg

                hover:border-[#CBA18B]/30
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]

                transition-all duration-500

                flex flex-col gap-4

                text-[#1E2A38]
                "
              >

                <span
                  className="
                  pointer-events-none absolute inset-0

                  before:absolute
                  before:inset-0

                  before:bg-gradient-to-r
                  before:from-transparent
                  before:via-white/60
                  before:to-transparent

                  before:translate-x-[-100%]
                  before:skew-x-[-20deg]

                  before:transition-transform
                  before:duration-700

                  group-hover:before:translate-x-[200%]
                  "
                />

                <div className="flex items-center gap-3 md:gap-4">

                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-[#F8F5F1]">

                    <img
                      src={review.avatar}
                      alt={review.name}
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://ui-avatars.com/api/?name=" +
                          encodeURIComponent(review.name)
                      }}
                      className="w-full h-full object-cover"
                    />

                  </div>

                  

                  <div className="min-w-0">

                    <p className="font-semibold text-sm md:text-base whitespace-nowrap text-[#1E2A38]">
                      {review.name}
                    </p>

                    <div className="flex text-[#CBA18B] text-xs md:text-sm">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                  </div>
                  

                </div>

                <p className="text-[#1E2A38]/70 text-xs md:text-sm leading-relaxed break-words whitespace-normal hyphens-auto">
                  {review.text}
                </p>

                <div className="mt-auto flex justify-between items-center">

                  <span className="text-[10px] md:text-xs text-[#1E2A38]/50">
                    Avis Google
                  </span>

                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                    alt="Google"
                    className="w-4 md:w-5 opacity-70"
                  />

                </div>

              </div>

            ))}


          </div>


        </div>

            
        <div className="flex justify-center mt-14">

        <a
  href="https://www.google.com/maps/place/HEVIA+B%C3%A9ziers+-+Maison,+Vie+%26+Ext%C3%A9rieur/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    text-[#1E2A38]
    text-sm
    uppercase
    tracking-[0.25em]
    transition-all
    duration-300
    hover:text-[#CBA18B]
  "
>
  Voir tous les avis
</a>

</div>

</div>

</section>
  )
}