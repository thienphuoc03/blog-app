import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sortBlogs } from '@/utils/utils'

const HomeCoverSection = ({ blogs }: any) => {
  const sortedBlogs = sortBlogs(blogs)
  const blog = sortedBlogs[3]

  return (
    <div className="w-full inline-block">
      <article className="flex flex-col justify-end items-start mx-10 relative h-[85vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
        {blog && (
          <>
            <Image
              src={blog?.image?.filePath?.replace('../public', '')}
              alt={blog?.title}
              placeholder="blur"
              blurDataURL={blog?.image?.blurhashDataUrl}
              fill
              className="w-full h-full object-center object-cover rounded-3xl -z-10"
            />

            <div className="w-3/4 p-16 flex flex-col justify-center items-start z-0 text-light">
              <div className="flex flex-row justify-center items-center gap-4">
                {blog?.tags.map((tag: string) => (
                  <Link
                    href={`/categories/${tag}`}
                    key={tag}
                    className="inline-block py-3 px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease-linear duration-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              <Link href={blog?.url} className="mt-3 mb-2">
                <h1 className="text-4xl font-bold capitalize">
                  <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                    {blog?.title}
                  </span>
                </h1>
              </Link>
              <p className="inline-block text-lg font-in">
                {blog?.description}
              </p>
            </div>
          </>
        )}
      </article>
    </div>
  )
}

export default HomeCoverSection
