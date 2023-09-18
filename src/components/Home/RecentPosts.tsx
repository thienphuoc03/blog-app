import { sortBlogs } from '@/utils/utils'
import React from 'react'
import BlogLayoutOne from '../Blog/BlogLayoutOne'
import BlogLayoutTwo from '../Blog/BlogLayoutTwo'
import Link from 'next/link'
import BlogLayoutThree from '../Blog/BlogLayoutThree'

const RecentPosts = ({ blogs }: any) => {
  const sortedBlogs = sortBlogs(blogs)

  return (
    <section className="w-full mt-32 px-32 flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-between items-center">
        <h2 className="w-full inline-block font-bold  capitalize text-4xl">
          Recent Posts
        </h2>

        <Link
          href={'/categories/all'}
          className="inline-block font-medium text-accent underline underline-offset-2"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-16 mt-16s">
        {sortedBlogs.slice(5, 11).map((blog, index) => (
          <article className="col-span-1 row-span-1 relative" key={index}>
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </section>
  )
}

export default RecentPosts
