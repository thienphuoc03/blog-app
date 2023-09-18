import BlogDetails from '@/components/Blog/BlogDetails'
import RenderMdx from '@/components/Blog/RenderMdx'
import { allBlogs } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = ({ params }: { params: { slug: string } }) => {
  const blog: any | undefined = allBlogs.find(
    (blog) => blog._raw.flattenedPath === params.slug
  )

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex flex-row justify-start items-center gap-4">
            {blog?.tags.map((tag: string) => (
              <Link
                href={`/categories/${tag}`}
                key={tag}
                className="inline-block bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease-linear duration-200 px-6 text-sm py-2"
              >
                {tag}
              </Link>
            ))}
          </div>

          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal relative w-5/6">
            {blog?.title}
          </h1>
        </div>

        <div className="absolute top-0 left-0 bottom-0 h-full bg-dark/60 w-full" />
        <Image
          src={blog?.image?.filePath?.replace('../public', '')}
          alt={blog?.title}
          placeholder="blur"
          blurDataURL={blog?.image?.blurhashDataUrl}
          width={blog?.image?.width}
          height={blog?.image?.height}
          className="aspect-square w-full h-full object-cover object-center"
        />
      </div>

      <BlogDetails blog={blog} slug={params.slug} />

      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
        <div className="col-span-4">
          <details
            className="border-[1px] border-solid border-dark text-dark rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold cursor-pointer capitalize">
              Table Of Content
            </summary>
            <ul className="mt-4 font-in text-base">
              {blog?.toc.map((heading: any, index: number) => (
                <li key={index} className="py-1">
                  <a
                    href={`#${heading.slug}`}
                    data-level={heading?.level}
                    className="data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40 data-[level=three]:pl-6 flex items-center justify-start"
                  >
                    {heading?.level === 'three' ? (
                      <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                        &nbsp;
                      </span>
                    ) : null}
                    <span className="hover:underline">{heading?.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
        <div className="col-span-8 font-in prose-lg max-w-max prose-blockquote:bg-accent/20 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:border-accent prose-blockquote:border-l-4 prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent dark:prose-invert dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark first-letter:text-3xl sm:first-letter:text-5xl">
          <RenderMdx blog={blog} />
        </div>
      </div>
    </article>
  )
}

export default Blog
