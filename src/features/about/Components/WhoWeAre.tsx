import Image from "next/image";
import React from "react";
import { BadgeCheck } from "lucide-react";

const points = [
  "Implementing smart solutions in complex scenarios",
  "Delivering end to end implementation services in an Agile environment",
  "Building and maintaining long-term relationship with clients",
  "Delivery of project on time and in a cost effective manner",
];

export default function WhoWeAre() {
  return (
    <section className="mb-12 w-full bg-background py-8 sm:mb-16 sm:py-10 lg:mb-20 lg:py-12">
      {/* Main Container */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8
            sm:gap-10
            lg:grid-cols-2
            lg:gap-12
            xl:gap-16
          "
        >

          {/* LEFT - CONTENT */}
          <div className="w-full">

            <h2
              className="
                mb-3
                font-banner
                text-2xl
                font-bold
                capitalize
                leading-tight
                text-text-primary
                sm:mb-4
                sm:text-3xl
                md:text-4xl
              "
            >
              Who We Are
            </h2>

            <p
              className="
                mb-4
                font-banner
                text-sm
                leading-6
                text-gray-600
                sm:mb-5
                sm:text-base
                sm:leading-7
              "
            >
              Conacent Consulting Pvt. Ltd is Global IT Consultancy & Services
              Company with its Head Office at Salt Lake City, the I.T. hub of
              Kolkata, West Bengal, India. Conacent is operating in National and
              various International markets since 2005 and provided smart
              business solutions towards Public Sectors as well as Corporate
              Sectors.
            </p>

            <p
              className="
                mb-4
                font-banner
                text-sm
                leading-6
                text-gray-600
                sm:mb-5
                sm:text-base
                sm:leading-7
              "
            >
              For these past glorious years Conacent served in various
              government organizations whether it is Education Sector or
              Finance & Administration or Public Sector.
            </p>

            <p
              className="
                mb-5
                font-banner
                text-sm
                leading-6
                text-gray-600
                sm:mb-6
                sm:text-base
                sm:leading-7
              "
            >
              Besides the integrated customized solutions (ERP, CRM) and
              applications, we also offer solutions on latest technology i.e.,
              Free and Open Source (FOSS) Technologies to our clients.
            </p>

            {/* POINTS */}
            <ul className="space-y-2.5 sm:space-y-3">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 sm:gap-3"
                >
                  <BadgeCheck
                    className="
                      mt-0.5
                      h-5
                      w-5
                      shrink-0
                      text-text-primary
                      sm:mt-1
                    "
                  />

                  <p
                    className="
                      font-banner
                      text-sm
                      leading-5
                      text-gray-600
                      sm:text-base
                      sm:leading-6
                    "
                  >
                    {point}
                  </p>
                </li>
              ))}
            </ul>

          </div>

          {/* RIGHT - IMAGE */}
          <div
            className="
              flex
              w-full
              justify-center
              lg:justify-end
            "
          >
            <Image
              src="/images/about/abt.jpg"
              alt="Conacent team"
              width={700}
              height={500}
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 90vw,
                (max-width: 1440px) 50vw,
                600px
              "
              className="
                h-auto
                w-full
                max-w-[500px]
                rounded-xl
                object-cover
                sm:max-w-[550px]
                lg:max-w-[500px]
                xl:max-w-[600px]
                2xl:max-w-[650px]
              "
            />
          </div>

        </div>

      </div>
    </section>
  );
}