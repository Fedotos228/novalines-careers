'use client'

import useScreenSize from '@/hooks/useScreenSize'
import useScrollPosition from '@/hooks/useScrollPosition'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './navigation/Navigation'

export default function Header() {
  const scrollPosition = useScrollPosition()
  const screenSizes = useScreenSize()

  const logoSizes = (): LogoSizes => {
    if (screenSizes.width < 1024 && screenSizes.width >= 767) {
      return {
        width: 130,
        height: 44,
      }
    } else if (screenSizes.width < 767) {
      return {
        width: 96,
        height: 30,
      }
    }

    return {
      width: 156,
      height: 60,
    }
  }
  return (
    <header
      className={`w-full z-30 top-0 shadow-md ${scrollPosition > 120
        ? 'animate-slideDown bg-white/15 py-5 backdrop-blur-md fixed'
        : 'py-10'
        }`}
    >
      <div className="container mx-auto flex px-4 items-center justify-between md:px-0">
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt='Logo'
            width={logoSizes().width}
            height={logoSizes().height}
          />
        </Link>

        <Navigation />
      </div>
    </header>
  )
}