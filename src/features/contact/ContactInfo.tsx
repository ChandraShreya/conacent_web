import React from "react";
import GetInTouch from "./GetInTouch";
import OurOffices from "./OurOffice";

export default function ContactInfo() {
  return (
    <section className="w-full py-12 mb-10">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        <div className="grid items-stretch gap-6 lg:grid-cols-2">

          <GetInTouch />

          <OurOffices />

        </div>

      </div>
    </section>
  );
}