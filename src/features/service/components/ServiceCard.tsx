"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Building2,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  Headset,
  Lightbulb,
  MonitorSmartphone,
  Settings,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const serviceCard = [
  {
    id: 1,
    icon: MonitorSmartphone,
    title: "Digital Transformation",
    description:
      "Reimagine business models, customer experiences, and digital.",
    category: "Consulting",
    href: "/services/digital-transformation",
  },
  {
    id: 2,
    icon: Building2,
    title: "Enterprise Solutions",
    description:
      "End-to-end enterprise solutions to streamline processes and drive efficiency.",
    category: "Technology",
    href: "/services/enterprise-solutions",
  },
  {
    id: 3,
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Leverage the power of cloud to scale, secure, and accelerate your business.",
    category: "Cloud",
    href: "/services/cloud-services",
  },
  {
    id: 4,
    icon: ChartNoAxesCombined,
    title: "Data & Analytics",
    description:
      "Turn data into insights and drive smarter decisions with advanced analytics.",
    category: "Data & AI",
    href: "/services/data-analytics",
  },
  {
    id: 5,
    icon: Bot,
    title: "AI & Automation",
    description:
      "Automate processes and unlock new opportunities with AI-powered solutions.",
    category: "Data & AI",
    href: "/services/ai-automation",
  },
  {
    id: 6,
    icon: Smartphone,
    title: "Application Development",
    description:
      "Custom applications designed to meet your unique business requirements.",
    category: "Technology",
    href: "/services/application-development",
  },
  {
    id: 7,
    icon: BadgeCheck,
    title: "Quality Engineering",
    description:
      "Ensure quality, reliability, and performance across every stage of development.",
    category: "Technology",
    href: "/services/quality-engineering",
  },
  {
    id: 8,
    icon: Settings,
    title: "Managed Services",
    description:
      "Proactive management and support to keep your business systems running smoothly.",
    category: "Managed Services",
    href: "/services/managed-services",
  },
  {
    id: 9,
    icon: Lightbulb,
    title: "IT Consulting Services",
    description:
      "Expert guidance to align technology with your business goals and drive growth.",
    category: "Consulting",
    href: "/services/it-consulting",
  },
  {
    id: 10,
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Protect your business with robust security solutions and proactive threat management.",
    category: "Technology",
    href: "/services/cybersecurity",
  },
  {
    id: 11,
    icon: Code2,
    title: "Software Engineering",
    description:
      "Build scalable, reliable, and high-performance software tailored to your business needs.",
    category: "Technology",
    href: "/services/software-engineering",
  },
  {
    id: 12,
    icon: Headset,
    title: "Technical Support",
    description:
      "Get reliable technical support to resolve issues and maintain business continuity.",
    category: "Managed Services",
    href: "/services/technical-support",
  },
];

const categories = [
  "All",
  "Consulting",
  "Technology",
  "Cloud",
  "Data & AI",
  "Managed Services",
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filterServices =
    activeCategory === "All"
      ? serviceCard
      : serviceCard.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="mb-20 w-full bg-background py-10">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Categories */}
        <div className="mb-10 flex w-full flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                rounded-md
                px-5
                py-2
                font-banner
                text-sm
                transition-all
                duration-300
                ${
                  activeCategory === category
                    ? "bg-text-primary text-white"
                    : "border border-text-primary bg-white text-gray-700 hover:bg-text-primary hover:text-white"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {filterServices.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  group
                  flex
                  min-h-[230px]
                  flex-col
                  rounded-xl
                  border
                  border-gray-100
                  bg-white
                  p-6
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* Icon */}
                <Icon
                  className="
                    mb-4
                    h-9
                    w-9
                    text-text-primary
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                {/* Title */}
                <h2 className="font-banner text-lg font-bold text-text-primary">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="mt-2 font-banner text-sm leading-6 text-gray-600">
                  {item.description}
                </p>

                {/* Learn More */}
                <Link
                  href={item.href}
                  className="
                    mt-auto
                    flex
                    w-fit
                    items-center
                    gap-1
                    pt-5
                    font-banner
                    text-xs
                    font-semibold
                    text-text-primary
                    transition-all
                    duration-300
                    hover:gap-2
                  "
                >
                  Learn More
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}