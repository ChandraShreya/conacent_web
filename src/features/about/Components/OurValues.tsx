import React from "react";
import {
  ShieldCheck,
  Lightbulb,
  BadgeCheck,
  UsersRound,
} from "lucide-react";

export default function OurValues() {
  const valueCards = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "Integrity",
      description: "We do the right thing, always.",
    },
    {
      id: 2,
      icon: BadgeCheck,
      title: "Excellence",
      description: "We deliver quality in everything we do.",
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new ideas and technologies.",
    },
    {
      id: 4,
      icon: UsersRound,
      title: "Collaboration",
      description: "We achieve more together.",
    },
  ];

  return (
    <section className="mb-12 w-full bg-gray-50 py-8 sm:mb-16 sm:py-10 lg:mb-20 lg:py-12">
      
      {/* Container */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-7 sm:mb-10">
          <h2
            className="
              font-banner
              text-2xl
              font-bold
              text-text-primary
              sm:text-3xl
            "
          >
            Our Values
          </h2>
        </div>

        {/* Values */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-y-7
            sm:grid-cols-2
            sm:gap-x-8
            sm:gap-y-8
            lg:grid-cols-4
            lg:gap-x-10
            xl:gap-x-16
          "
        >
          {valueCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  group
                  flex
                  cursor-pointer
                  items-start
                  gap-3
                  sm:gap-4
                "
              >
                {/* Icon */}
                <Icon
                  className="
                    mt-0.5
                    h-8
                    w-8
                    shrink-0
                    text-text-primary
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    sm:h-9
                    sm:w-9
                    sm:mt-1
                  "
                />

                {/* Content */}
                <div className="min-w-0">
                  <h3
                    className="
                      mb-1
                      font-banner
                      text-sm
                      font-bold
                      text-text-primary
                      sm:text-base
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      max-w-[240px]
                      font-banner
                      text-xs
                      leading-5
                      text-gray-600
                      sm:text-sm
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}