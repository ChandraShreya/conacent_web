"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  {
    id: 1,
    name: "Oracle",
    img: "/images/logo/Oracle.png",
  },
  {
    id: 2,
    name: "Microsoft",
    img: "/images/logo/Microsoft.png",
  },
  {
    id: 3,
    name: "AWS",
    img: "/images/logo/AWS.png",
  },
  {
    id: 4,
    name: "SAP",
    img: "/images/logo/SAP.png",
  },
  {
    id: 5,
    name: "Infor",
    img: "/images/logo/Infor.png",
  },
  {
    id: 6,
    name: "IBM",
    img: "/images/logo/IBM.png",
  },
];

const wordAnimations = [
  { x: -250, y: -120, rotate: -18 },
  { x: 220, y: 100, rotate: 14 },
  { x: -180, y: 130, rotate: 12 },
  { x: 250, y: -100, rotate: -15 },
];

export default function Hero() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        w-full
        min-h-[600px]
        sm:min-h-[600px]
        md:min-h-[620px]
        lg:min-h-[650px]
      "
    >
      {/* Background */}
      <Image
        src="/images/home/hero.jpeg"
        alt="Banner"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* ================= HERO CONTENT ================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[500px]
          w-full
          max-w-[1440px]
          items-center
          px-4
          sm:min-h-[520px]
          sm:px-6
          lg:min-h-[550px]
          lg:px-8
        "
      >
        <div
          key={animationKey}
          className="
            w-full
            max-w-[700px]
            pt-6
            sm:max-w-[650px]
            md:max-w-[700px]
          "
        >
          {/* HEADING - ROW 1 */}
          <div className="flex flex-wrap">
            <motion.span
              initial={{
                opacity: 0,
                x: wordAnimations[0].x,
                y: wordAnimations[0].y,
                rotate: wordAnimations[0].rotate,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mr-2
                inline-block
                font-banner
                text-3xl
                leading-tight
                text-white
                sm:mr-3
                sm:text-4xl
                lg:text-5xl
              "
            >
              Delivering
            </motion.span>

            <motion.span
              initial={{
                opacity: 0,
                x: wordAnimations[1].x,
                y: wordAnimations[1].y,
                rotate: wordAnimations[1].rotate,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                inline-block
                font-banner
                text-3xl
                leading-tight
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Change.
            </motion.span>
          </div>

          {/* HEADING - ROW 2 */}
          <div className="flex flex-wrap">
            <motion.span
              initial={{
                opacity: 0,
                x: wordAnimations[2].x,
                y: wordAnimations[2].y,
                rotate: wordAnimations[2].rotate,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mr-2
                inline-block
                font-banner
                text-3xl
                leading-tight
                text-white
                sm:mr-3
                sm:text-4xl
                lg:text-5xl
              "
            >
              Transforming
            </motion.span>

            <motion.span
              initial={{
                opacity: 0,
                x: wordAnimations[3].x,
                y: wordAnimations[3].y,
                rotate: wordAnimations[3].rotate,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                inline-block
                font-banner
                text-3xl
                leading-tight
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Tomorrow.
            </motion.span>
          </div>

          {/* PARAGRAPH */}
          <motion.p
            initial={{
              opacity: 0,
              x: -180,
              y: 80,
              rotate: -4,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-4
              max-w-[550px]
              font-banner
              text-sm
              leading-6
              text-white/90
              sm:mt-5
              sm:text-base
              sm:leading-7
              lg:text-lg
            "
          >
            Delivering comprehensive, end-to-end business solutions that
            empower organizations to improve efficiency, drive innovation,
            and achieve sustainable growth.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 120,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-6
              flex
              flex-wrap
              gap-3
              sm:mt-8
              sm:gap-4
            "
          >
            <button
              className="
                rounded-lg
                bg-primary
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition-opacity
                hover:opacity-90
                sm:px-6
                sm:py-3
              "
            >
              Get Started
            </button>

            <button
              className="
                rounded-lg
                border
                border-white
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:bg-white/10
                sm:px-6
                sm:py-3
              "
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* ================= TRUSTED LOGOS ================= */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          z-20
          w-[calc(100%-2rem)]
          max-w-[1440px]
          -translate-x-1/2
          translate-y-1/2
          rounded-xl
          bg-background
          px-4
          py-4
          shadow-xl
          sm:w-[calc(100%-3rem)]
          sm:px-6
          sm:py-5
          lg:w-[calc(100%-4rem)]
          lg:px-8
        "
      >
        <p
          className="
            mb-3
            text-center
            font-banner
            text-sm
            font-bold
            capitalize
            text-text-primary
            sm:mb-4
            sm:text-base
          "
        >
          Trusted By Global Leaders
        </p>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={4500}
          spaceBetween={15}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 35,
            },
          }}
          className="w-full"
        >
          {[...logos, ...logos].map((logo, index) => (
            <SwiperSlide key={`${logo.id}-${index}`}>
              <div
                className="
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  sm:h-14
                  lg:h-16
                "
              >
                <Image
                  src={logo.img}
                  alt={logo.name}
                  width={80}
                  height={80}
                  className="
                    max-h-8
                    w-auto
                    max-w-[90px]
                    object-contain
                    sm:max-h-10
                    sm:max-w-[110px]
                    lg:max-w-[120px]
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}