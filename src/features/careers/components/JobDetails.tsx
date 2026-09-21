"use client";

import { useState } from "react";
import ApplicationModal from "./ApplicationModal";


export default function JobDetails({ job }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="mx-auto max-w-[1440px] px-6 py-10">

        <h1 className="text-4xl font-bold text-text-primary font-banner">
          {job.title}
        </h1>

        <div className="mt-4 flex gap-6 text-gray-600 font-banner">
          <span>{job.location}</span>
          <span>{job.type}</span>
        </div>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold font-banner">
            Job Description
          </h2>

          <p className="mt-4 text-gray-600 font-banner">
            {job.description}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold font-banner">
            Responsibilities
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 font-banner">
            {job.responsibilities.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold font-banner">
            Requirements
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 font-banner">
            {job.requirements.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 mb-10 rounded-md bg-[#064DA8] px-8 py-3 text-white font-banner"
        >
          Apply Now
        </button>

      </main>

      {isModalOpen && (
        <ApplicationModal
          job={job}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}