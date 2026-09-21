import Services from '@/src/features/service/components/ServiceCard'
import ServiceHero from '@/src/features/service/components/ServiceHero'
import { main } from 'motion/react-client'
import React from 'react'

export default function Service() {
  return (
    <main>
        <ServiceHero/>
        <Services/>
    </main>
  )
}
