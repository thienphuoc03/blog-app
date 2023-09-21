'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => console.log(data)
  console.log(errors)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{' '}
      <input
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
        type="text"
        placeholder="Your name"
        {...register('Name', { required: true })}
      />
      and I want to discuss a potential project. You can email me at{' '}
      <input
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
        type="text"
        placeholder="Your email"
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      or reach out to me on{' '}
      <input
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
        type="tel"
        placeholder="Your phone number"
        {...register('Phone Number', { required: true })}
      />
      Here are some details about my project{' '}
      <textarea
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
        placeholder="Your project is about..."
        rows={3}
        {...register}
      />
      {/* Submit Button */}
      <input
        type="submit"
        value="send request"
        className="mt-8 font-medium inline-block capitalize text-xl py-3 px-8 border-2 border-solid border-dark rounded cursor-pointer"
      />
    </form>
  )
}

export default ContactForm
