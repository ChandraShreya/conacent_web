import {
  BadgeDollarSign,
  Boxes,
  Factory,
  GraduationCap,
  Hospital,
  Landmark,
  Warehouse,
  Zap,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export const industriesCard = [
  {
    id: 1,
    icon: Factory,
    img: "/images/industry/Manufacturing.jpg",
    title: "Manufacturing",
    description:
      "Optimize operations, improve productivity, and build smarter connected manufacturing systems.",
  },
  {
    id: 2,
    icon: Boxes,
    img: "/images/industry/Retail_consumer.jpg",
    title: "Retail & Consumer Goods",
    description:
      "Enhance customer experiences, streamline supply chains, and enable data-driven retail.",
  },
  {
    id: 3,
    icon: Hospital,
    img: "/images/industry/Healthcare.jpg",
    title: "Healthcare & Life Sciences",
    description:
      "Enable secure digital healthcare solutions that improve efficiency, insights, and patient experiences.",
  },
  {
    id: 4,
    icon: BadgeDollarSign,
    img: "/images/industry/FinancialService.jpg",
    title: "Financial Services",
    description:
      "Strengthen financial operations with secure, scalable, and intelligent digital solutions.",
  },
  {
    id: 5,
    icon: Warehouse,
    img: "/images/industry/Logistics.jpg",
    title: "Logistics & Transportation",
    description:
      "Improve supply chain visibility, optimize logistics, and enable efficient transportation operations.",
  },
  {
    id: 6,
    icon: Zap,
    img: "/images/industry/Energy.jpg",
    title: "Energy & Utilities",
    description:
      "Drive operational efficiency with connected, sustainable, and data-driven energy solutions.",
  },
  {
    id: 7,
    icon: GraduationCap,
    img: "/images/industry/Education.jpg",
    title: "Education",
    description:
      "Transform learning experiences with innovative digital platforms and intelligent solutions.",
  },
  {
    id: 8,
    icon: Landmark,
    img: "/images/industry/PublicSector.jpg",
    title: "Public Sector",
    description:
      "Modernize public services with secure, scalable, and citizen-focused digital solutions.",
  },
];

export default function IndustryCard() {
  return (
    <section className="mb-15 w-full bg-background py-10">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Industry Cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 cursor-pointer">
          {industriesCard.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  group
                  w-full
                  overflow-hidden
                  rounded-xl
                  bg-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* Image */}
                <div className="h-[150px] w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="font-banner text-lg font-bold text-text-primary">
                    {item.title}
                  </h2>

                  <p className="mt-2 font-banner text-sm leading-5 text-gray-600">
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