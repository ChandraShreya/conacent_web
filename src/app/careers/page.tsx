
import CareersHero from '@/src/features/careers/components/CareersHero'
import LifeAtConacent from '@/src/features/careers/components/LifeAtConacnet'
import OpenPositions from '@/src/features/careers/components/OpenPosition'
import WhyConacent from '@/src/features/careers/components/WhyConacent'
import React from 'react'

export default function Career() {
  return (
    <main>
        <CareersHero/>
        <WhyConacent/>
        <LifeAtConacent/>
        <OpenPositions/>

    </main>
  )
}
