import Image from "next/image";
import React from "react";

export default function LatestInsights() {
  const insightsCard = [
    {
      id: 1,
      img: "/images/home/Ai.jpg",
      date: "July 10, 2026",
      title: "The Role AI in Digital Transformation",
    },
    {
      id: 2,
      img: "/images/home/cloud.jpg",
      date: "June 26, 2026",
      title: "Cloud Adoption Best Practices for Businesses",
    },
    {
      id: 3,
      img: "/images/home/data.jpg",
      date: "August 20, 2026",
      title: "Data Analytics: Turning Data Into Business Value",
    },
    {
      id: 4,
      img: "/images/home/enterprise.jpg",
      date: "September 3, 2026",
      title: "The Future of Enterprise Applications",
    },
  ];

  return (
    <section className="mb-15 w-full bg-transparent py-8">

      {/* Main Container */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 flex flex-col items-center text-center">

          <p className="mb-2 font-banner text-sm font-semibold uppercase tracking-wider text-text-primary">
            Insights
          </p>

          <h2 className="font-banner text-2xl font-bold capitalize tracking-wider text-text-primary sm:text-3xl">
            Latest Insights
          </h2>

        </div>


        {/* Cards */}
        <div className="mb-10 grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {insightsCard.map((item) => (
            <div
              key={item.id}
              className="
        group
        w-full
        max-w-[330px]
        cursor-pointer
        overflow-hidden
        rounded-2xl
        bg-background
        shadow-lg
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:shadow-2xl
      "
            >

              {/* Image */}
              <div className="relative h-[150px] w-full overflow-hidden">

                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 330px"
                  className="
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-105
          "
                />

              </div>

              {/* Content */}
              <div className="flex min-h-[160px] w-full flex-col px-5 py-4">

                {/* Date */}
                <p
                  className="
            mb-2
            font-banner
            text-sm
            text-gray-600
            transition-colors
            duration-300
            group-hover:text-text-primary
          "
                >
                  {item.date}
                </p>

                {/* Title */}
                <h3
                  className="
            mb-3
            font-banner
            text-lg
            font-bold
            leading-6
            text-text-primary
            transition-colors
            duration-300
          "
                >
                  {item.title}
                </h3>

                {/* Read Article */}
                <div
                  className="
            mt-auto
            flex
            items-center
            gap-1
            font-banner
            text-sm
            font-semibold
            text-text-primary
            opacity-0
            -translate-x-2
            transition-all
            duration-300
            group-hover:translate-x-0
            group-hover:opacity-100
          "
                >
                  Read Article
                  <span>→</span>
                </div>

              </div>

            </div>
          ))}

        </div>


        {/* Button */}
        <div className="flex justify-center">

          <button
            className="
              rounded-lg
              bg-[var(--color-text-primary)]
              px-6
              py-3
              font-banner
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            Know More About Us
          </button>

        </div>

      </div>

    </section>
  );
}