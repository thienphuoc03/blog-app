import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { logo, sunIcon } from '../../../public'

const menu = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full py-4 px-10">
      {/* logo */}
      <Link href="/">
        <div className="w-24 overflow-hidden border-none">
          <Image src={logo} alt="logo" className="w-full h-auto" />
        </div>
      </Link>

      {/* menu */}
      <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-4 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-[9999]">
        {menu.map((item) => (
          <Link href={item.href} key={item.name} className="mx-2">
            {item.name}
          </Link>
        ))}
      </nav>

      {/* other options */}
      <div className="">
        {/* button change theme */}
        <button>
          <Image src={sunIcon} alt="sunny icon" className="w-full h-auto" />
        </button>
      </div>
    </header>
  )
}

export default Header
