import Image from 'next/image'
import { character } from 'public'
import React from 'react'

const AboutCoverSection = () => {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
      <div className="w-1/2 h-full border-r-2 border-solid border-dark flex justify-center">
        <Image
          src={character}
          alt="character"
          className="w-full h-full object-contain object-center"
        />
      </div>

      <div className="w-1/2 h-full flex flex-col text-left items-start justify-center px-16">
        <h2 className="font-bold text-4xl capitalize">
          Dream bid, Work Hard , Achieve More!
        </h2>
        <p className="font-medium capitalize text-base mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          similique, reprehenderit consectetur quos tempore saepe. Neque
          consectetur quaerat asperiores sit numquam minima! Accusamus impedit a
          ex provident eum facere repudiandae.
        </p>
      </div>
    </section>
  )
}

export default AboutCoverSection
