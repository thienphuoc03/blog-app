import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogLayoutThree = ({ blog }: any) => {
  return (
    <div className="group flex flex-col items-center text-dark">
      <Link href={blog?.url} className="h-full rounded-xl overflow-hidden">
        <Image
          src={blog?.image?.filePath?.replace('../public', '')}
          alt={blog?.title}
          placeholder="blur"
          blurDataURL={blog?.image?.blurhashDataUrl}
          width={blog?.image?.width}
          height={blog?.image?.height}
          className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease-linear duration-300"
        />
      </Link>

      <div className="flex flex-col mt-4 w-full">
        <div className="flex flex-row flex-wrap justify-start items-center gap-2">
          {blog?.tags.map((tag: string) => (
            <Link
              href={`/categories/${tag}`}
              key={tag}
              className="uppercase text-accent font-semibold text-sm"
            >
              {tag}
            </Link>
          ))}
        </div>
        <Link href={blog?.url} className="inline-block my-1">
          <h2 className="text-lg font-semibold ">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog?.title}
            </span>
          </h2>
        </Link>

        <span className="capitalize text-dark/50 font-semibold text-base">
          {format(new Date(blog?.publishedAt), 'MMMM dd, yyyy')}
        </span>
      </div>
    </div>
  )
}

export default BlogLayoutThree
