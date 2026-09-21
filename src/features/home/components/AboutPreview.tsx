import Image from 'next/image';
import React from 'react'

import {
  GlobeCheck,
  UserRound,
  Layers,
  RotateCcw,
  CircleCheck,
  Handshake,
  Blocks,
  MapPinHouse
} from "lucide-react";


  export const aboutCard =[
    {
      id:1,
      icon:GlobeCheck,
      title:"12+",
      description:"Years of Experience"
    },
    {
      id:2,
      icon:UserRound,
      title:"250+",
      description:"happy clients"
    },
    {
      id:3,
      icon:Layers,
      title:"500+",
      description:"Successful projects"
    },
    {
      id:4,
      icon:RotateCcw,
      title:"15+",
      description:"countless served"
    },

  ]
export default function AboutPreview() {


  return (
<section className="w-full bg-background py-8 sm:py-20 lg:py-30">
  <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:gap-10 min-[1177px]:gap-8 min-[1280px]:gap-12 lg:px-8">

    {/* Left - Content */}
    <div className="w-full">

      <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-primary font-banner">
        ABOUT CONACENT
      </p>

      <h2 className="text-4xl min-[1177px]:text-[42px] min-[1280px]:text-5xl font-banner leading-none text-text-primary mb-4">
        We Engineer Solutions That Drive Real Impact
      </h2>

      <p className="mt-2 mb-4 text-base font-banner leading-6 text-gray-600  min-[1177px]:text-base md:text-sm min-[1280px]:text-lg">
        Conacent is global IT solutions consulting company that empowers
        businesses to accelerate growth, optimize operations, and create
        lasting value. With a strong focus on innovation, quality and
        customer success. We deliver targeted solutions that meet the
        evolving needs of our clients.
      </p>

      <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
        {aboutCard.map((item) => {
          const Icon = item.icon
          return(
                  <div key={item.id}>
                    <Icon className='text-text-primary'/>
                    <h2 className='text-text-primary font-bold text-lg'>{item.title}</h2>
                    <p className='text-text-primary font-bold font-banner text-md'>{item.description}</p>
                  </div>
            
          )
        })}
      </div>

      <button className="mt-6 rounded-lg bg-text-text-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-banner">
        Know More About Us
      </button>

    </div>

    {/* Right - Image */}
    <div className="relative w-full overflow-hidden rounded-2xl">
      <Image
        src="/images/home/about_img.jpg"
        alt="About us"
        width={1000}
        height={800}
        className="rounded-2xl object-cover"
      />
    </div>

  </div>
</section>
  );
}


