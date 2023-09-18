'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import {
  linkedinIcon,
  twitterIcon,
  githubIcon,
  facebookIcon,
} from '../../../public'
import Image from 'next/image'

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => console.log(data)
  console.log(errors)

  return (
    <footer className="mt-16 rounded-2xl m-10 flex flex-col items-center justify-center bg-dark text-light p-10 gap-5">
      <h3 className="font-medium text-center capitalize text-xl">
        Interesting Stories | Updates | Guides
      </h3>

      <p className="px-4 text-center w-3/5 font-light text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sed
        blanditiis, iure consectetur fuga iste doloribus itaque sint culpa
        quidem ipsum tempora? Quia cum suscipit expedita sunt! Ullam,
        perspiciatis libero.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-stretch bg-light p-2 rounded mx-4"
      >
        <input
          type="text"
          placeholder="Enter your email"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full pl-0 bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1"
        />
      </form>

      <div className="flex justify-center items-center gap-4">
        <a href="#" className="inline-block w-6 h-6">
          <Image
            src={linkedinIcon}
            alt="linkedin icon"
            className="hover:scale-125 transition-all ease-linear duration-200"
          />
        </a>
        <a href="#" className="inline-block w-6 h-6">
          <Image
            src={twitterIcon}
            alt="twitter icon"
            className="hover:scale-125 transition-all ease-linear duration-200"
          />
        </a>
        <a
          href="https://github.com/thienphuoc03"
          className="inline-block w-6 h-6 fill-light"
        >
          <Image
            src={githubIcon}
            alt="github icon"
            className="hover:scale-125 transition-all ease-linear duration-200"
          />
        </a>
        <a
          href="https://www.facebook.com/tph.2203/"
          className="inline-block w-6 h-6"
        >
          <Image
            src={facebookIcon}
            alt="facebook icon"
            className="hover:scale-125 transition-all ease-linear duration-200"
          />
        </a>
      </div>

      <div className="w-full relative font-medium border-t border-solid border-light text-end">
        <span className="text-xs">&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default Footer
