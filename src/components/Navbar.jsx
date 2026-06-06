import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaInstagram, FaFacebookF } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"

import logo from "/images/logo/logo-hevia.jpg"

const links = [
  { name: "Accueil", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "Inspiration", path: "/inspiration" },
  { name: "Réalisations", path: "/realisations" },
  { name: "À propos", path: "/about" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)

  const location = useLocation()

  useEffect(() => {
    let lastScroll = window.scrollY

    const handleScroll = () => {
      const currentScroll = window.scrollY

      setScrolled(currentScroll > 20)

      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      lastScroll = currentScroll
    }

    window.addEventListener("scroll", handleScroll)

    return () =>
      window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <header
  className={`
    fixed
    top-0
    left-0
    w-full
    z-[1000]

    transition-all
    duration-500

    ${
      showNavbar
        ? "translate-y-0 opacity-100"
        : "-translate-y-full opacity-0"
    }
  `}
>

        <nav
          className={`
            mx-auto
            mt-3

            w-[96%]
            max-w-7xl

            h-[64px]

            px-4
            sm:px-6

            rounded-[18px]

            flex
            items-center
            justify-between

            transition-all
            duration-500

            ${
              scrolled
                ? "bg-[#F4EEE8] shadow-lg border border-[#CBA18B]/10"
                : "bg-[#F8F5F1] border border-[#CBA18B]/10"
            }
          `}
        >

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="HEVIA"
              className="
                w-10
                h-10
                rounded-xl
                object-cover
              "
            />

            <div>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.28em]
                  font-medium
                  text-[#1E2A38]
                "
              >
                HEVIA
              </p>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-[#1E2A38]/50
                "
              >
                Béziers
              </p>

            </div>

          </Link>

          <ul
            className="
              hidden
              xl:flex
              items-center
              gap-8
              text-sm
            "
          >

            {links.map((link) => (

              <li key={link.path}>

                <Link
                  to={link.path}
                  className={`
                    transition-colors
                    duration-300

                    ${
                      location.pathname === link.path
                        ? "text-[#CBA18B]"
                        : "text-[#1E2A38] hover:text-[#CBA18B]"
                    }
                  `}
                >
                  {link.name}
                </Link>

              </li>

            ))}

          </ul>

          <div
            className="
              hidden
              xl:flex
              items-center
              gap-3
            "
          >

            <a
              href="https://www.instagram.com/maison.hevia/"
              target="_blank"
              rel="noreferrer"
              className="
                w-8
                h-8

                rounded-full

                border
                border-[#1E2A38]/10

                flex
                items-center
                justify-center

                transition-all
                duration-300

                hover:bg-[#CBA18B]
              "
            >
              <FaInstagram size={13} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61580245243798"
              target="_blank"
              rel="noreferrer"
              className="
                w-8
                h-8

                rounded-full

                border
                border-[#1E2A38]/10

                flex
                items-center
                justify-center

                transition-all
                duration-300

                hover:bg-[#CBA18B]
              "
            >
              <FaFacebookF size={12} />
            </a>

            <Link
              to="/contact"
              className="
                px-5
                py-2.5

                rounded-full

                bg-[#CBA18B]
                text-[#1E2A38]

                text-sm
                font-medium

                transition-all
                duration-500

                hover:scale-[1.03]
              "
            >
              Demander un devis
            </Link>

          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              xl:hidden

              text-[#1E2A38]

              text-2xl
            "
          >
            {menuOpen ? "×" : "☰"}
          </button>

        </nav>

      </header>

      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="
        fixed
        inset-0
        z-[1100]
        bg-black/20
        backdrop-blur-sm
        xl:hidden
      "
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          ml-auto
          h-full
          w-full
          bg-[#F8F5F1]
        "
      >
        <div
          className="
            flex
            h-20
            items-center
            justify-between
            border-b
            border-[#CBA18B]/10
            px-6
          "
        >
          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="HEVIA"
              className="
                w-10
                h-10
                rounded-xl
                object-cover
              "
            />

            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.28em]
                  font-medium
                  text-[#1E2A38]
                "
              >
                HEVIA
              </p>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-[#1E2A38]/50
                "
              >
                Béziers
              </p>
            </div>

          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="
              text-4xl
              font-light
              text-[#1E2A38]
            "
          >
            ×
          </button>
        </div>

        <div
          className="
            flex
            min-h-[calc(100dvh-80px)]
            flex-col
            justify-between
            p-6
            pb-20
          "
        >
          <nav className="flex flex-col">

            {links.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="
                    block
                    border-b
                    border-[#CBA18B]/10
                    py-5
                    text-2xl
                    font-light
                    text-[#1E2A38]
                    transition-all
                    duration-300
                    hover:text-[#CBA18B]
                  "
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

          </nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="
                mb-12
                flex
                w-full
                items-center
                justify-center
                rounded-2xl
                bg-[#1E2A38]
                px-6
                py-4
                text-base
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[#CBA18B]
                hover:text-[#1E2A38]
              "
            >
              Demander un devis
            </Link>

            <div className="flex gap-3 mb-8">

              <a
                href="https://www.instagram.com/maison.hevia/"
                target="_blank"
                rel="noreferrer"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-[#1E2A38]/10
                  flex
                  items-center
                  justify-center
                  text-[#1E2A38]
                "
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61580245243798"
                target="_blank"
                rel="noreferrer"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-[#1E2A38]/10
                  flex
                  items-center
                  justify-center
                  text-[#1E2A38]
                "
              >
                <FaFacebookF />
              </a>

            </div>

            <div className="space-y-2 text-sm text-[#1E2A38]/60">
              <p>Béziers • Occitanie</p>
              <p>contact@hevia.fr</p>
              <p>Maison, Vie & Extérieur</p>
            </div>

          </motion.div>

        </div>

      </motion.div>

    </motion.div>
  )}
</AnimatePresence>

    </>
  )
}