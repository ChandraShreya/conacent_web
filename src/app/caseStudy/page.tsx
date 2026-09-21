
import CaseStudyCards from '@/src/features/caseStudy/components/CaseStudyCards'
import CaseStudyHero from '@/src/features/caseStudy/components/CaseStudyHero'
import { main } from 'motion/react-client'
import React from 'react'

export default function CaseStudy() {
  return (
    <main>
      <CaseStudyHero/>
      <CaseStudyCards/>

    </main>
  )
}
