'use client'

import useScreenSize from '@/hooks/useScreenSize'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
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
        // ${scrollPosition > 120 ? ' bg-white/15 backdrop-blur-md' : ' bg-white'}
        <header
            className="w-full z-30 top-0 shadow-md py-7 bg-white">
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
            </div>
        </header>
    )
}
