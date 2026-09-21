"use client";

import React from "react";
import Image from "next/image";

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
    name: "IBM",
    img: "/images/logo/IBM.png",
  },
  {
    id: 6,
    name: "Infor",
    img: "/images/logo/Infor.png",
  },
];

export default function Alliances() {
  return (
    <section className="mb-20 w-full bg-background py-4">

      {/* Container */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="font-banner text-2xl font-bold text-text-primary">
            Our Alliances
          </h2>
        </div>

        {/* Logo Slider */}
        <div className="w-full rounded-xl border border-gray-100 bg-white px-6 py-6 shadow-lg">

          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={4000}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 45,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            className="w-full"
          >
            {[...logos, ...logos].map((logo, index) => (
              <SwiperSlide key={`${logo.id}-${index}`}>
                <div className="flex h-16 items-center justify-center">
                  <Image
                    src={logo.img}
                    alt={logo.name}
                    width={140}
                    height={60}
                    className="
                      h-auto
                      max-h-10
                      w-auto
                      max-w-[120px]
                      object-contain
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
}