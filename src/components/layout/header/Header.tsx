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
            className={`w-full z-30 top-0 shadow-md py-7 sticky ${scrollPosition > 120
                    ? 'animate-slideDown bg-white/15  backdrop-blur-md '
                    : ' bg-white'
                }`}>
            <div className="container mx-auto flex px-4 items-center justify-between">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        priority
                        className="aspect-auto"
                        width={logoSizes().width}
                        height={logoSizes().height}
                    />
                </Link>

                <Navigation />
            </div>
        </header>
    )
}
