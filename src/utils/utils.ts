import { ClassValue } from 'clsx'
import { compareDesc, parseISO } from 'date-fns'
import { twMerge } from 'tailwind-merge'

export const cx = (...classNames: ClassValue[]) =>
  twMerge(classNames.filter(Boolean).join(' '))

export const sortBlogs = (blogs: any[]) =>
  blogs
    .slice()
    .sort((a: any, b: any) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    )
