'use client'

import React from 'react'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

const mdxComponent = {
  Image,
}

const RenderMdx = ({ blog }: any) => {
  const MDXContent = useMDXComponent(blog?.body?.code)

  return <MDXContent components={mdxComponent} />
}

export default RenderMdx
