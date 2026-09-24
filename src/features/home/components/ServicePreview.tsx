import React from "react";
import {
  MonitorSmartphone,
  Building2,
  Cloud,
  ChartNoAxesCombined,
  Bot,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";

export const services = [
  {
    id: 1,
    icon: MonitorSmartphone,
    title: "Digital Transformation",
    description:
      "Modernize your business with innovative digital strategies and cutting-edge technologies.",
  },
  {
    id: 2,
    icon: Building2,
    title: "Enterprise Solutions",
    description:
      "End-to-end enterprise solutions to streamline processes and drive efficiency.",
  },
  {
    id: 3,
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Leverage the power of cloud to scale, secure, and accelerate your business.",
  },
  {
    id: 4,
    icon: ChartNoAxesCombined,
    title: "Data & Analytics",
    description:
      "Turn data into insights and drive smarter decisions with advanced analytics.",
  },
  {
    id: 5,
    icon: Bot,
    title: "AI & Automation",
    description:
      "Automate processes and unlock new opportunities with AI-powered solutions.",
  },
  {
    id: 6,
    icon: Smartphone,
    title: "Application Development",
    description:
      "Custom applications designed to meet your unique business requirements.",
  },
];

export default function ServicePreview() {
  return (
    <section className="w-full bg-transparent pb-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 font-banner text-sm font-semibold uppercase tracking-[0.25em] text-text-primary">
            What we do
          </p>

          <h2 className="font-banner text-4xl font-semibold tracking-wider text-text-primary">
            Our Services
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] font-banner text-base leading-7 text-text-primary/60">
            We deliver innovative technology solutions to help your business
            grow, adapt and stay ahead in a digital world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="
                  group
                  relative
                  min-h-[260px]
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  border
                  border-blue-100/80
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-500
                  ease-out

                  hover:border-blue-200
                  hover:bg-gradient-to-br
                  hover:from-white
                  hover:via-blue-50/70
                  hover:to-blue-100/80
                  hover:shadow-[0_15px_45px_rgba(37,99,235,0.15)]
                "
              >
                {/*  circle - top right */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-15
                    h-48
                    w-48
                    rounded-full
                    bg-blue-100/100
                    opacity-0
                    transition-all
                    duration-700
                    ease-out
                    group-hover:opacity-100
                  "
                />

                {/* Second  circle */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    top-20
                    h-36
                    w-36
                    rounded-full
                    bg-blue-50/100
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* Arrow */}
                <div
                  className="
                    absolute
                    right-5
                    top-5
                    z-10
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-blue-200
                    bg-white
                    text-blue-600
                    opacity-0
                    shadow-sm
                    transition-all
                    duration-500
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight
                    className="
                      h-5
                      w-5
                      transition-transform
                      duration-300
                      group-hover:rotate-0
                    "
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">

                  {/* Icon */}
                  <div
                    className="
                      mb-5
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-50
                      transition-all
                      duration-500
                      group-hover:bg-blue-700
                      group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.25)]
                    "
                  >
                    <Icon
                      className="
                        h-7
                        w-7
                        text-blue-600
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:text-white
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      font-banner
                      text-xl
                      font-semibold
                      text-text-primary
                      transition-colors
                      duration-300
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      max-w-[360px]
                      font-banner
                      text-sm
                      leading-6
                      text-text-primary/65
                      transition-colors
                      duration-300
                      group-hover:text-text-primary/75
                    "
                  >
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      font-banner
                      text-sm
                      font-semibold
                      text-blue-600
                      transition-all
                      duration-300
                      group-hover:gap-3
                    "
                  >
                    Learn More
                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-10 text-center">
          <button
            className="
              rounded-full
              bg-text-primary
              px-7
              py-3
              font-banner
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            Know More About Us
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}