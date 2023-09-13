import { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cx = (...classNames: ClassValue[]) =>
  twMerge(classNames.filter(Boolean).join(' '))
