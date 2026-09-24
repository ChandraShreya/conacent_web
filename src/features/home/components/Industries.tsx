import React from "react";
import {
  Factory,
  Boxes,
  Hospital,
  BadgeDollarSign,
  Warehouse,
  Zap,
  GraduationCap,
  Landmark,
} from "lucide-react";

const industriesCard = [
  {
    id: 1,
    icon: Factory,
    title: "Manufacturing",
    description:
      "Optimize operations, improve productivity, and build smarter connected manufacturing systems.",
  },
  {
    id: 2,
    icon: Boxes,
    title: "Retail & Consumer Goods",
    description:
      "Enhance customer experiences, streamline supply chains, and enable data-driven retail.",
  },
  {
    id: 3,
    icon: Hospital,
    title: "Healthcare & Life Sciences",
    description:
      "Enable secure digital healthcare solutions that improve efficiency, insights, and patient experiences.",
  },
  {
    id: 4,
    icon: BadgeDollarSign,
    title: "Financial Services",
    description:
      "Strengthen financial operations with secure, scalable, and intelligent digital solutions.",
  },
  {
    id: 5,
    icon: Warehouse,
    title: "Logistics & Transportation",
    description:
      "Improve supply chain visibility, optimize logistics, and enable efficient transportation operations.",
  },
  {
    id: 6,
    icon: Zap,
    title: "Energy & Utilities",
    description:
      "Drive operational efficiency with connected, sustainable, and data-driven energy solutions.",
  },
  {
    id: 7,
    icon: GraduationCap,
    title: "Education",
    description:
      "Transform learning experiences with innovative digital platforms and intelligent solutions.",
  },
  {
    id: 8,
    icon: Landmark,
    title: "Public Sector",
    description:
      "Modernize public services with secure, scalable, and citizen-focused digital solutions.",
  },
];

export default function Industries() {
  return (
    <section className="w-full bg-transparent py-4 ">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <p className="mb-2 font-banner text-sm font-semibold uppercase tracking-wider text-text-primary">
          Industries We Serve
        </p>

        <h2 className="mb-10 text-center font-banner text-3xl font-bold capitalize tracking-wider text-text-primary sm:text-4xl">
          Empowering Business Across Industries
        </h2>

        {/* Industries */}
        <div className="mb-6 flex w-full flex-wrap justify-center gap-6">
          {industriesCard.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  group flex h-[130px] w-full sm:basis-[calc(50%-12px)] lg:basis-[calc(25%-18px)] cursor-pointer flex-col items-center justify-center 
                  rounded-xl p-4
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* Icon */}
                <Icon
                  className="mb-3 h-8 w-8 text-text-primary transition-transform duration-300 ease-out group-hover:scale-125"
                />

                {/* Title */}
                <p
                  className="
                    w-[150px]
                    text-center
                    font-banner
                    font-semibold
                    leading-tight
                    text-text-primary
                  "
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}