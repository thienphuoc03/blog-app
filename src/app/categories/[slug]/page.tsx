import BlogLayoutThree from '@/components/Blog/BlogLayoutThree'
import Categories from '@/components/Blog/Categories'
import { allBlogs } from 'contentlayer/generated'
import GithubSlugger, { slug } from 'github-slugger'
import React from 'react'

const slugger = new GithubSlugger()

export async function generateStaticParams() {
  const categories: any = []
  const paths = [{ slug: 'all' }]

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      const tags = blog.tags

      if (tags) {
        tags.map((tag) => {
          let slugify = slugger.slug(tag)

          if (!categories.includes(slugify)) {
            categories.push(slugify)
            paths.push({ slug: slugify })
          }
        })
      }
    }
  })

  return paths
}

const CategoryPage = ({ params }: any) => {
  const allCategories = ['all']
  const blogs: any = allBlogs.filter((blog) => {
    const tags: string[] | undefined = blog?.tags

    if (tags)
      return tags.some((tag) => {
        const slugify = slug(tag)

        if (!allCategories.includes(slugify)) allCategories.push(slugify)

        if (params.slug === 'all') return true

        return slugify === params.slug
      })
  })

  return (
    <article className="mt-12 flex flex-col tex-dark">
      <div className="px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-5xl">#{params.slug}</h1>

        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge
        </span>
      </div>

      <Categories categories={allCategories} currentSlug={params.slug} />

      {/* list blog */}
      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-24 px-32">
        {blogs.map((blog: any, index: number) => (
          <article className="col-span-1 row-span-1 relative" key={index}>
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  )
}

export default CategoryPage
