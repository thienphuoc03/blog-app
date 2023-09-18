import HomeCoverSection from '@/components/Home/HomeCoverSection'
import { allBlogs } from '../../.contentlayer/generated'
import FeaturedPosts from '@/components/Home/FeaturedPosts'
import RecentPosts from '@/components/Home/RecentPosts'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <HomeCoverSection blogs={allBlogs} />

      <FeaturedPosts blogs={allBlogs} />

      <RecentPosts blogs={allBlogs} />
    </main>
  )
}
