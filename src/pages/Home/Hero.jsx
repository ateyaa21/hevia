import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { FaInstagram, FaFacebookF } from "react-icons/fa"

import img1 from "/images/hero/acceuil_hero1.jpg"
import img2 from "/images/hero/acceuil_hero2.jpg"
import img3 from "/images/hero/acceuil_hero3.png"
import img4 from "/images/hero/acceuil_hero4.png"

const slides = [img1, img2, img3, img4]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[100svh] overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current]}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-20 min-h-[100svh] max-w-7xl mx-auto px-5 sm:px-6">

        <div className="min-h-[100svh] flex items-center">

          <div className="max-w-[650px]">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 sm:mb-8"
            >
              <span
                className="
                inline-flex
                items-center
                gap-2
                text-white/70
                uppercase
                tracking-[0.25em]
                text-[10px]
                sm:text-xs
                "
              >
                <span className="w-8 sm:w-12 h-px bg-[#CBA18B]" />
                Maison Hevia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="
              text-white
              text-[42px]
              sm:text-5xl
              md:text-7xl
              font-light
              leading-[0.95]
              "
            >
              L'élégance des
              <br />

              <span className="text-[#CBA18B] font-medium">
                matériaux nobles
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.9 }}
              className="
              mt-5
              sm:mt-8
              text-[15px]
              sm:text-lg
              md:text-xl
              text-white/75
              leading-relaxed
              max-w-xl
              "
            >
              Découvrez une sélection de carrelages et revêtements
              haut de gamme conçus pour donner caractère, élégance
              et durabilité à chaque espace.
            </motion.p>

            <motion.div
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.25, duration: 0.9 }}
  className="
  mt-8
  sm:mt-12
  flex
  flex-col
  sm:flex-row
  gap-3
  sm:gap-4
  "
>

  <Link
    to="/collections"
    className="
    bg-[#CBA18B]
    text-black

    px-5
    sm:px-8

    py-3
    sm:py-4

    rounded-full

    text-sm
    sm:text-base

    font-medium

    transition-all
    duration-500

    hover:scale-[1.03]

    text-center

    w-fit
    "
  >
    Découvrir les collections
  </Link>

  <Link
    to="/contact"
    className="
    border
    border-white/20

    bg-white/5
    backdrop-blur-sm

    text-white

    px-5
    sm:px-8

    py-3
    sm:py-4

    rounded-full

    text-sm
    sm:text-base

    font-medium

    transition-all
    duration-500

    hover:bg-white/10

    text-center

    w-fit
    "
  >
    Prendre rendez-vous
  </Link>

</motion.div>



          </div>

        </div>

      </div>

      <div
  className="
  flex
  absolute

  left-5
  sm:left-8

  bottom-20
  sm:bottom-10

  z-30

  items-center
  gap-3
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
          border-white/15
          bg-white/5
          backdrop-blur-sm
          flex
          items-center
          justify-center
          text-white
          transition-all
          duration-300
          hover:bg-[#CBA18B]
          hover:text-black
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
          border-white/15
          bg-white/5
          backdrop-blur-sm
          flex
          items-center
          justify-center
          text-white
          transition-all
          duration-300
          hover:bg-[#CBA18B]
          hover:text-black
          "
        >
          <FaFacebookF />
        </a>
      </div>

      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2
        sm:left-auto
        sm:right-8
        sm:translate-x-0
        bottom-6
        sm:bottom-10
        z-30
        flex
        gap-2
        "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              h-[3px]
              transition-all
              duration-500
              ${
                current === index
                  ? "w-10 sm:w-14 bg-[#CBA18B]"
                  : "w-4 sm:w-6 bg-white/30"
              }
            `}
          />
        ))}
      </div>

    </section>
  )
}