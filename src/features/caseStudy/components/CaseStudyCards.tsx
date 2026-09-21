"use client";

import Image from "next/image";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    category: "Manufacturing",
    title: "Digital Transformation for a Global Manufacturer",
    description:
      "Driving operational excellence and improved business outcomes through digital transformation.",
    image: "/images/caseStudy/globalManufacturer.jpg",
  },
  {
    id: 2,
    category: "Retail",
    title: "Cloud Migration for a Leading Retailer",
    description:
      "Modernizing retail infrastructure with scalable cloud solutions and improved performance.",
    image: "/images/caseStudy/cloudMigration.jpg",
  },
  {
    id: 3,
    category: "Finance",
    title: "Data Analytics for a Financial Services Firm",
    description:
      "Using advanced analytics to provide deeper insights and support better business decisions.",
    image: "/images/caseStudy/dataAnalytics.jpg",
  },
  {
    id: 4,
    category: "Healthcare",
    title: "ERP Implementation for a Healthcare Organization",
    description:
      "Streamlining healthcare operations with an integrated enterprise resource planning solution.",
    image: "/images/caseStudy/health.jpg",
  },
  {
    id: 5,
    category: "Public Sector",
    title: "Smart City Data Operations for a Government",
    description:
      "Building modern digital infrastructure to improve public services and operational efficiency.",
    image: "/images/caseStudy/smartCity.jpg",
  },
  {
    id: 6,
    category: "Manufacturing",
    title: "AI Automation Transformation for a Manufacturing Company",
    description:
      "Implementing intelligent automation to improve productivity and optimize business processes.",
    image: "/images/caseStudy/aiAutomation.jpg",
  },
];

const categories = [
  "All",
  "Manufacturing",
  "Retail",
  "Finance",
  "Healthcare",
  "Public Sector",
];

export default function CaseStudyCards() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCaseStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="w-full bg-background py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  rounded-md
                  border
                  px-4
                  py-2
                  font-banner
                  text-sm
                  transition-all
                  duration-300
                  ${
                    activeCategory === category
                      ? "border-text-primary bg-text-primary text-white"
                      : "border-gray-200 bg-white text-gray-600 hover:border-text-primary hover:text-text-primary"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {filteredCaseStudies.map((item) => (
            <article
              key={item.id}
              className="
                overflow-hidden
                rounded-xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >

              {/* Image */}
              <div className="relative h-[175px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex min-h-[160px] flex-col p-4">

                {/* Category */}
                <span className="mb-2 font-banner text-xs font-semibold text-text-primary">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="font-banner text-sm font-bold leading-5 text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 line-clamp-3 font-banner text-xs leading-5 text-gray-500">
                  {item.description}
                </p>

                {/* Read More */}
                <button
                  type="button"
                  className="
                    mt-2
                    flex
                    w-fit
                    items-center
                    gap-1
                    pt-3
                    font-banner
                    text-xs
                    font-semibold
                    text-text-primary
                    transition-all
                    duration-300
                    hover:gap-2
                  "
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}