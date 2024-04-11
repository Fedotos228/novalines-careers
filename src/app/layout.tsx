import Footer from '@/components/layout/footer/Footer'
import { DinNextLtProFont } from '@/font'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Onest } from 'next/font/google'
import './globals.scss'
import Providers from './providers'

const onest = Onest({ subsets: ['latin'], display: 'swap', adjustFontFallback: false })

export const metadata: Metadata = {
    title: 'Cariere Novalines',
    description: 'Nova Lines is a US-based transportation and logistics company founded in 2014 by a Moldovan. We have our feet firmly planted on both sides of the ocean - and are proud of it! We like to think that our combination of both the American and Moldovan spirits helps us create a team that is greater than the sum of its parts. With 300 trucks across 48 US states and close to 120 people in our Chisinau office, we can’t wait to see how much we can achieve when you join us!',
    icons: {
        icon: ['/favicons/favicon.ico', '/favicons/favicon-16x16.png', '/favicons/favicon-32x32.png'],
        apple: ['/favicons/apple-touch-icon.png', '/favicons/safari-pinned-tab.svg'],

    }
}



const Header = dynamic(() => import('@/components/layout/header/Header'), { ssr: false })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={DinNextLtProFont.className}>
                <Providers>
                    <Header />
                    <main>{children}</main>

                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
