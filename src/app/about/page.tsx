import AboutCoverSection from '@/components/About/AboutCoverSection'
import Skills from '@/components/About/Skills'
import React from 'react'

const AboutPage = () => {
  return (
    <>
      <AboutCoverSection />

      <Skills />

      <h2 className="mt-8 font-semibold text-2xl self-start mx-20 text-dark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni
        excepturi voluptatem.
      </h2>
    </>
  )
}

export default AboutPage
