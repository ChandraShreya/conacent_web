import { ArrowRight } from "lucide-react";
import { jobs } from "../data";
import Link from "next/link";

// const positions = [
//   {
//     id: 1,
//     title: "Oracle EBS Technical Consultant",
//     location: "India",
//     type: "Full Time",
//   },
//   {
//     id: 2,
//     title: "Cloud Infrastructure Architect",
//     location: "India",
//     type: "Full Time",
//   },
//   {
//     id: 3,
//     title: "Data Analyst",
//     location: "India",
//     type: "Full Time",
//   },
// ];

export default function OpenPositions() {
  return (
    <section className="mb-20 w-full bg-background py-10">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="font-banner text-2xl font-bold text-text-primary">
            Open Positions
          </h2>

          <p className="mt-2 font-banner text-sm text-gray-600 sm:text-base">
            Explore opportunities and find your next career move.
          </p>
        </div>

        {/* Jobs */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="
                flex
                w-full
                flex-col
                gap-5
                rounded-xl
                border
                border-gray-200
                bg-white
                px-5
                py-5
                shadow-sm
                transition-all
                duration-300
                hover:shadow-md
                sm:px-6
                lg:flex-row
                lg:items-center
                lg:justify-between
                lg:gap-6
              "
            >
              {/* Job title */}
              <div className="min-w-0">
                <h3 className="font-banner text-base font-bold text-text-primary sm:text-lg">
                  {job.title}
                </h3>
              </div>

              {/* Job information */}
              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:items-center
                  sm:gap-6
                  lg:shrink-0
                  lg:gap-8
                "
              >
                <span className="font-banner text-sm text-gray-600">
                  {job.location}
                </span>

                <span className="font-banner text-sm text-gray-600">
                  {job.type}
                </span>

                <Link
                href={`/careers/${job.id}`}
                  className="
                    flex
                    w-fit
                    items-center
                    gap-1
                    rounded-md
                    bg-text-primary
                    px-4
                    py-2
                    font-banner
                    text-sm
                    text-white
                    transition-all
                    duration-300
                    hover:opacity-90
                  "
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
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
            View All Openings
          </button>
        </div>

      </div>
    </section>
  );
}