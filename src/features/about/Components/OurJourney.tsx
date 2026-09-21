import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Globe2,
  Settings2,
  Sprout,
} from "lucide-react";

const journey = [
  {
    id: 1,
    year: "2026",
    description:
      "Shaping the next chapter with innovative solutions and a global mindset.",
    icon: Sprout,
    active: true,
  },
  {
    id: 2,
    year: "2024",
    description:
      "Continued our growth with powerful solutions for the future.",
    icon: BarChart3,
    active: false,
  },
  {
    id: 3,
    year: "2020",
    description:
      "Strengthened digital, data and digital transformation practices.",
    icon: Settings2,
    active: false,
  },
  {
    id: 4,
    year: "2016",
    description:
      "Expanded globally and built strong industry capabilities.",
    icon: Globe2,
    active: false,
  },
  {
    id: 5,
    year: "2012",
    description:
      "Started our journey with a vision to deliver innovative solutions.",
    icon: Sprout,
    active: false,
  },
];

export default function OurJourney() {
  return (
    <section className="w-full overflow-hidden bg-background py-10 sm:py-12 lg:py-16">

      {/* Main Container */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-8 sm:mb-10">

          <p
            className="
              mb-2
              font-banner
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-text-primary/70
              sm:text-sm
            "
          >
            Our Story
          </p>

          <h2
            className="
              font-banner
              text-3xl
              font-bold
              text-text-primary
              sm:text-4xl
              lg:text-5xl
            "
          >
            Our Journey
          </h2>

          <p
            className="
              mt-3
              max-w-[750px]
              font-banner
              text-sm
              leading-6
              text-gray-500
              sm:text-base
              sm:leading-7
            "
          >
            A timeline of milestones that shaped who we are today, and where
            we're headed tomorrow.
          </p>
        </div>

        {/* ================= CARDS AREA ================= */}
        <div className="relative">

          {/* Left Arrow */}
          {/* <button
            type="button"
            aria-label="Previous milestone"
            className="
              absolute
              -left-3
              top-1/2
              z-20
              hidden
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-text-primary
              shadow-md
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              lg:flex
            "
          >
            <ArrowLeft className="h-5 w-5" />
          </button> */}

          {/* Right Arrow */}
          {/* <button
            type="button"
            aria-label="Next milestone"
            className="
              absolute
              -right-3
              top-1/2
              z-20
              hidden
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-text-primary
              shadow-md
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              lg:flex
            "
          >
            <ArrowRight className="h-5 w-5" />
          </button> */}

          {/* Cards */}
          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-5
              lg:gap-4
              xl:gap-5
            "
          >
            {journey.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`
                    relative
                    min-h-[190px]
                    overflow-hidden
                    rounded-2xl
                    p-5
                    transition-all
                    duration-300
                    sm:min-h-[205px]
                    sm:p-6

                    ${
                      item.active
                        ? `
                          bg-gradient-to-br
                          from-[#1649a5]
                          via-[#1251c7]
                          to-[#0b367f]
                          shadow-[0_15px_40px_rgba(20,73,165,0.30)]
                        `
                        : `
                          border
                          border-blue-100/70
                          bg-white
                          shadow-sm
                          hover:-translate-y-1
                          hover:shadow-lg
                        `
                    }
                  `}
                >
                  {/* Active card decorative glow */}
                  {item.active && (
                    <>
                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-16
                          -top-20
                          h-48
                          w-48
                          rounded-full
                          bg-white/10
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -bottom-24
                          -left-10
                          h-48
                          w-48
                          rounded-full
                          bg-blue-950/30
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          bottom-0
                          left-0
                          h-24
                          w-full
                          bg-gradient-to-t
                          from-black/20
                          to-transparent
                        "
                      />
                    </>
                  )}

                  {/* Icon */}
                  <div
                    className={`
                      absolute
                      right-5
                      top-5
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      ${
                        item.active
                          ? "bg-white text-blue-600"
                          : "bg-blue-50 text-blue-600"
                      }
                    `}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pr-10">

                    {/* Year */}
                    <h3
                      className={`
                        font-banner
                        text-2xl
                        font-bold
                        sm:text-[28px]
                        ${
                          item.active
                            ? "text-white"
                            : "text-text-primary"
                        }
                      `}
                    >
                      {item.year}
                    </h3>

                    {/* Small Line */}
                    <div
                      className={`
                        mt-3
                        h-[2px]
                        w-9
                        ${
                          item.active
                            ? "bg-white/80"
                            : "bg-blue-500"
                        }
                      `}
                    />

                    {/* Description */}
                    <p
                      className={`
                        mt-4
                        font-banner
                        text-sm
                        leading-6
                        ${
                          item.active
                            ? "text-white/90"
                            : "text-gray-600"
                        }
                      `}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Active Arrow */}
                  {item.active && (
                    <div
                      className="
                        absolute
                        bottom-2
                        left-5
                        z-10
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-blue-600
                        shadow-md
                      "
                    >
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= TIMELINE ================= */}
        <div className="mt-8 hidden lg:block">

          <div className="relative mx-auto w-[82%]">

            {/* Timeline line */}
            <div
              className="
                absolute
                left-0
                right-0
                top-[7px]
                h-[2px]
                bg-blue-100
              "
            />

            {/* Timeline points */}
            <div className="relative flex justify-between">

              {journey.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center"
                >
                  {/* Dot */}
                  <div
                    className={`
                      h-[15px]
                      w-[15px]
                      rounded-full
                      border-4
                      border-background
                      ${
                        item.active
                          ? "bg-blue-600"
                          : "bg-slate-300"
                      }
                    `}
                  />

                  {/* Year */}
                  <p
                    className={`
                      mt-3
                      font-banner
                      text-sm
                      font-semibold
                      ${
                        item.active
                          ? "text-blue-600"
                          : "text-gray-500"
                      }
                    `}
                  >
                    {item.year}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}