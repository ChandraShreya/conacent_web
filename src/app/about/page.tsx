import AboutHero from '@/src/features/about/Components/AboutHero'
import OurValues from '@/src/features/about/Components/OurValues'
import WhoWeAre from '@/src/features/about/Components/WhoWeAre'
import OurJourney from '@/src/features/about/Components/OurJourney'
import { main } from 'motion/react-client'
import React from 'react'
import LeadershipTeam from '@/src/features/about/Components/LeaderShipTeam'
import Alliances from '@/src/features/about/Components/Alliances'

export default function About() {
  return (
    <main>
        <AboutHero/>
        <WhoWeAre/>
        <OurJourney/>
        <OurValues/>
        <LeadershipTeam/>
        <Alliances/>

    </main>
  )
}
