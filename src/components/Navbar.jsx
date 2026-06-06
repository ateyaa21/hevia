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
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
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
      <header className="fixed top-0 left-0 w-full z-[1000]">

        <nav
          className={`
            mx-auto
            mt-3
            sm:mt-4
            w-[96%]
            lg:w-[90%]
            max-w-7xl
            transition-all
            duration-500
            ${
              scrolled
                ? `
                  bg-[#ECE6DF]/88
                  backdrop-blur-2xl
                  border
                  border-[#CBA18B]/10
                  rounded-[18px]
                  sm:rounded-[22px]
                  shadow-[0_12px_40px_rgba(0,0,0,0.05)]
                `
                : `
                  bg-[#ECE6DF]/55
                  backdrop-blur-xl
                  border
                  border-white/20
                  rounded-[18px]
                  sm:rounded-[22px]
                `
            }
          `}
        >

          <div
            className="
              px-4
              sm:px-6
              lg:px-8
              h-[68px]
              sm:h-[76px]
              flex
              items-center
              justify-between
            "
          >

            <Link
              to="/"
              className="flex items-center gap-3 sm:gap-4"
            >

              <img
                src={logo}
                alt="HEVIA"
                className="
                  w-11
                  h-11
                  sm:w-12
                  sm:h-12
                  rounded-[12px]
                  object-cover
                "
              />

              <div>

                <div
                  className="
                    text-[#1E2A38]
                    text-xs
                    sm:text-sm
                    tracking-[0.25em]
                    sm:tracking-[0.35em]
                    uppercase
                    font-medium
                  "
                >
                  HEVIA
                </div>

                <div
                  className="
                    text-[9px]
                    sm:text-[11px]
                    text-[#1E2A38]/50
                    tracking-[0.15em]
                    sm:tracking-[0.25em]
                    uppercase
                  "
                >
                  Béziers
                </div>

              </div>

            </Link>

            <ul
              className="
                hidden
                xl:flex
                items-center
                gap-8
                2xl:gap-12
                text-sm
              "
            >

              {links.map((link) => (
                <li key={link.path}>

                  <Link
                    to={link.path}
                    className={`
                      relative
                      transition-all
                      duration-300
                      ${
                        location.pathname === link.path
                          ? "text-[#CBA18B]"
                          : "text-[#1E2A38] hover:text-[#CBA18B]"
                      }
                    `}
                  >
                    {link.name}

                    {location.pathname === link.path && (
                      <span
                        className="
                          absolute
                          -bottom-2
                          left-0
                          w-full
                          h-px
                          bg-[#CBA18B]
                        "
                      />
                    )}

                  </Link>

                </li>
              ))}

            </ul>

            <div
              className="
                hidden
                xl:flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-2
                  pr-4
                  border-r
                  border-[#1E2A38]/10
                "
              >

                <a
                  href="https://www.instagram.com/maison.hevia/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-white/70
                    flex
                    items-center
                    justify-center
                    text-[#1E2A38]
                    transition-all
                    duration-300
                    hover:bg-[#CBA18B]
                  "
                >
                  <FaInstagram size={14} />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61580245243798"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-white/70
                    flex
                    items-center
                    justify-center
                    text-[#1E2A38]
                    transition-all
                    duration-300
                    hover:bg-[#CBA18B]
                  "
                >
                  <FaFacebookF size={13} />
                </a>

              </div>

              <Link
                to="/contact"
                className="
                  bg-[#1E2A38]
                  text-white
                  px-6
                  py-3
                  rounded-[12px]
                  font-medium
                  transition-all
                  duration-500
                  hover:bg-[#CBA18B]
                  hover:text-[#1E2A38]
                "
              >
                Demander un devis
              </Link>

            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                xl:hidden
                relative
                w-10
                h-10
                flex
                items-center
                justify-center
              "
            >

              <span
                className={`
                  absolute
                  w-6
                  h-[2px]
                  bg-[#1E2A38]
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "rotate-45"
                      : "-translate-y-2"
                  }
                `}
              />

              <span
                className={`
                  absolute
                  w-6
                  h-[2px]
                  bg-[#1E2A38]
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              />

              <span
                className={`
                  absolute
                  w-6
                  h-[2px]
                  bg-[#1E2A38]
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "-rotate-45"
                      : "translate-y-2"
                  }
                `}
              />

            </button>

          </div>

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
            px-6
            sm:px-10
          "
        >

          <div className="space-y-6 sm:space-y-8">

            {links.map((link, index) => (

              <Link
                key={link.path}
                to={link.path}
                className="
                  flex
                  items-center
                  gap-4
                  sm:gap-6
                  text-[#1E2A38]
                  hover:text-[#CBA18B]
                  transition-all
                "
              >

                <span
                  className="
                    text-[#CBA18B]
                    text-xs
                    sm:text-sm
                    tracking-[0.25em]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    font-light
                  "
                >
                  {link.name}
                </span>

              </Link>

            ))}

          </div>

          <Link
  to="/contact"
  className="
    mt-10
    sm:mt-14

    inline-flex
    items-center
    justify-center

    w-fit

    px-8
    py-4

    rounded-[16px]

    bg-[#1E2A38]
    text-white

    text-sm
    font-medium

    transition-all
    duration-500

    hover:bg-[#CBA18B]
    hover:text-[#1E2A38]
  "
>
  Demander un devis
</Link>

          <div className="flex gap-3 sm:gap-4 mt-8 sm:mt-12">

            <a
              href="https://www.instagram.com/maison.hevia/"
              target="_blank"
              rel="noreferrer"
              className="
                w-11
                h-11
                sm:w-12
                sm:h-12
                rounded-full
                bg-white
                shadow-md
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
                sm:w-12
                sm:h-12
                rounded-full
                bg-white
                shadow-md
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