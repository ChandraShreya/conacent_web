import Image from "next/image";
import React from "react";

export default function SuccessStory() {
  const successStoryCard = [
    {
      id: 1,
      img: "/images/home/DigitalTransformation.jpg",
      title: "Digital Transformation for a Global Manufacturer",
      description:
        "Streamlined operations and improved efficiency with our digital solutions.",
    },
    {
      id: 2,
      img: "/images/home/CloudMigration.jpg",
      title: "Cloud Migration for a Leading Retailer",
      description:
        "Enable scalable and secure operations on the cloud.",
    },
    {
      id: 3,
      img: "/images/home/DataAnalysis.jpg",
      title: "Data Analytics for a Financial Services Firm",
      description:
        "Data-driven insights that improved decision making and customer experience.",
    },
  ];

  return (
    <section className="w-full bg-background py-8 sm:py-12 lg:py-16">

      {/* Main Container */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8 flex flex-col items-center text-center sm:mb-10">

          <p className="mb-2 font-banner text-xs font-semibold uppercase tracking-wider text-text-primary sm:text-sm">
            Success Story
          </p>

          <h2 className="font-banner text-2xl font-bold capitalize text-text-primary sm:text-3xl lg:text-4xl">
            Delivering Success. Every Time
          </h2>

        </div>

        {/* Cards */}
        <div className="mb-10 grid w-full grid-cols-1 justify-items-center gap-6 min-[768px]:grid-cols-2 min-[1024px]:grid-cols-3 lg:gap-8">

          {successStoryCard.map((item) => {
            return (
              <div
                key={item.id}
                className={`
    group
    w-full
    max-w-[400px]
    cursor-pointer
    overflow-hidden
    rounded-xl
    bg-background
    shadow-lg
    transition-all
    duration-300
    ease-out
    hover:-translate-y-2
    hover:shadow-2xl
    ${item.id === 3 ? "md:col-span-2 md:justify-self-center lg:col-span-1" : ""}
  `}
              >

                {/* IMAGE */}
                <div className="relative h-[180px] w-full overflow-hidden sm:h-[200px]">

                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-110
                    "
                  />

                  {/* Blue Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-text-primary/70
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  {/* Case Study */}
                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      rounded-full
                      bg-white/90
                      px-3
                      py-1
                      font-banner
                      text-xs
                      font-semibold
                      text-text-primary
                      transition-opacity
                      duration-300
                      group-hover:opacity-0
                    "
                  >
                    Case Study
                  </div>

                  {/* View Case Study */}
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    <span
                      className="
                        rounded-lg
                        border
                        border-white
                        px-3
                        py-2
                        font-banner
                        text-xs
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-text-primary
                        sm:px-4
                        sm:text-sm
                      "
                    >
                      View Case Study →
                    </span>
                  </div>

                </div>

                {/* CONTENT */}
                <div className="min-h-[180px] px-4 py-5 sm:min-h-[190px] sm:px-5 sm:py-6">

                  <h3
                    className="
                      mb-3
                      font-banner
                      text-base
                      font-bold
                      leading-5
                      text-text-primary
                      sm:text-lg
                      sm:leading-6
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      font-banner
                      text-sm
                      leading-5
                      text-gray-700
                      sm:text-base
                      sm:leading-6
                    "
                  >
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

        {/* Button */}
        <div className="flex justify-center">

          <button
            className="
              rounded-lg
              bg-text-primary
              px-5
              py-2.5
              font-banner
              text-xs
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              sm:px-6
              sm:py-3
              sm:text-sm
            "
          >
            Know More About Us
          </button>

        </div>

      </div>
    </section>
  );
}