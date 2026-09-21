import Image from "next/image";
import React from "react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[220px] w-full sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px]">
      {/* Background */}
      <Image
        src="/images/about/abt_banner.png"
        alt="About Conacent banner"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="relative mx-auto flex min-h-[220px] w-full max-w-[1440px] flex-col items-start justify-center px-4 sm:min-h-[240px] sm:px-6 md:min-h-[280px] lg:min-h-[320px] lg:px-8">
        
        <h1
          className="
            font-banner
            text-2xl
            font-semibold
            leading-tight
            text-white
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
          "
        >
          Careers
        </h1>

        <p
          className="
            mt-2
            max-w-[600px]
            font-banner
            text-sm
            leading-relaxed
            text-white
            sm:mt-3
            sm:text-base
            md:max-w-[750px]
            md:text-lg
            lg:mt-4
            lg:text-xl
            capitalize
          "
        >
          are you ready to work in future technology… Join the team where heart beats the same
        </p>

      </div>
    </section>
  );
}



