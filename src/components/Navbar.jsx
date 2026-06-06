import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaInstagram, FaFacebookF } from "react-icons/fa"

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

      <div
        className={`
          fixed
          inset-0
          z-[999]

          bg-[#F8F5F1]

          transition-all
          duration-500

          ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >

        <div
          className="
            h-full

            flex
            flex-col
            justify-center

            px-8
          "
        >

          <div className="space-y-8">

            {links.map((link) => (

              <Link
                key={link.path}
                to={link.path}
                className="
                  block

                  text-4xl
                  font-light

                  text-[#1E2A38]
                "
              >
                {link.name}
              </Link>

            ))}

          </div>

          <Link
            to="/contact"
            className="
              mt-12

              w-fit

              px-8
              py-4

              rounded-full

              bg-[#CBA18B]
              text-[#1E2A38]

              font-medium
            "
          >
            Demander un devis
          </Link>

          <div
            className="
              flex
              gap-4
              mt-10
            "
          >

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

        </div>

      </div>

    </>
  )
}