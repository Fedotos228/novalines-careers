'use client'

import Button from '@/components/ui/Button'
import { navigation } from '@/constants/navigation.data'
import useScreenSize from '@/hooks/useScreenSize'
import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from '../header.module.scss'
import { INavItems } from './navigation.types'

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const screenSizes = useScreenSize()
    const pathname = usePathname()

    return (
        <>
            {screenSizes.width > 767 && (
                <nav className="flex gap-6 lg:gap-12">
                    {navigation.map((item: INavItems) => (
                        <Link
                            key={item.id}
                            href={item.href || '/'}
                            onClick={() => setMenuOpen(false)}
                            className={`${styles.navItem} ${pathname === item.href ? styles.active : ''
                                }`}>
                            {item.title}
                        </Link>
                    ))}
                </nav>
            )}

            {screenSizes.width <= 767 && (
                <nav
                    className={`fixed top-0 -right-96 bottom-0 max-w-96 w-full !bg-white transition-all duration-300 ${menuOpen ? '!right-0' : ''
                        }`}>
                    <button onClick={() => setMenuOpen(false)}>
                        <XIcon className="absolute w-7 h-7 top-5 right-5" />
                    </button>

                    <div className="flex flex-col gap-6 p-6">
                        {navigation.map((item: INavItems) => (
                            <Link
                                key={item.id}
                                href={item.href || '/'}
                                onClick={() => setMenuOpen(false)}
                                className={`${styles.navItem} ${item.href === pathname ? styles.active : ''
                                    }`}>
                                {item.title}
                            </Link>
                        ))}
                        {screenSizes.width <= 767 && (
                            <Button href="https://docs.google.com/forms/d/1I2vbf5TsXpcfzDK6t_NZbkVDdmfGxF7627DymL3Z2WE/edit?ts=6675847f">
                                Apply Now!
                            </Button>
                        )}
                    </div>
                </nav>
            )}

            {screenSizes.width <= 767 && (
                <button onClick={() => setMenuOpen(true)}>
                    <MenuIcon className="text-foreground w-8 h-8 ml-2 cursor-pointer" />
                </button>
            )}
        </>
    )
}
