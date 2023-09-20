import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import React from 'react'
import { slug } from 'github-slugger'
// import ViewCounter from './ViewCouter'

const BlogDetails = ({ blog, slug: blogSlug }: any) => {
  return (
    <div className="flex flex-wrap justify-around items-center gap-4 px-10 py-2 bg-accent text-xl font-medium mx-10 rounded-lg">
      <span>{format(parseISO(blog?.publishedAt), 'LLLL d, yyyy')}</span>

      <span className="">{/* <ViewCounter slug={blogSlug} /> */}</span>

      <div className="">{blog?.readingTime?.text}</div>

      <Link href={`/categories/${slug(blog?.slug)}`} className="">
        #{slug(blog?.tags[0])}
      </Link>
    </div>
  )
}

export default BlogDetails
