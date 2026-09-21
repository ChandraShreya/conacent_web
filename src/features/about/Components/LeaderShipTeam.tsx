import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const leadershipTeam = [
  {
    id: 1,
    name: "Rajesh Venkatesan",
    designation: "CEO & Managing Director",
    image: "/images/about/leader_1.jpg",
  },
  {
    id: 2,
    name: "Manoj Mehta",
    designation: "Director - Operations",
    image: "/images/about/leader_2.jpg",
  },
  {
    id: 3,
    name: "Deepa Nair",
    designation: "Director - Delivery",
    image: "/images/about/leader_3.jpg",
  },
  {
    id: 4,
    name: "Sanjay K.",
    designation: "Director - Solutions",
    image: "/images/about/leader_4.jpg",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="w-full bg-background py-8">

      {/* Container */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="font-banner text-2xl font-bold text-text-primary">
            Leadership Team
          </h2>
        </div>

        {/* Team */}
        <div className="grid w-full grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 ">

          {leadershipTeam.map((member) => (
            <div key={member.id} className="group ">

              {/* Image */}
              <div className="h-[180px] w-full max-w-[260px] overflow-hidden rounded-xl cursor-pointer">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={200}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-300
                    ease-out
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Details */}
              <div className="mt-4">
                <h3 className="font-banner text-base font-bold text-text-primary">
                  {member.name}
                </h3>

                <p className="mt-1 font-banner text-sm text-gray-600">
                  {member.designation}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <button
            className="
              flex
              items-center
              gap-2
              rounded-md
              bg-text-primary
              px-6
              py-3
              font-banner
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:opacity-90
            "
          >
            View All Leadership
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}