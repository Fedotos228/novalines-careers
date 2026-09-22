import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/HeaderDynamic'
import { DinNextLtProFont } from '@/font'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/constants/site'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'Non-Driving Jobs in Chicago, IL | Nova Lines Careers',
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    icons: {
        icon: ['/favicons/favicon.ico', '/favicons/favicon-16x16.png', '/favicons/favicon-32x32.png'],
        apple: ['/favicons/apple-touch-icon.png', '/favicons/safari-pinned-tab.svg'],
    },
    keywords: [
        'Nova Lines careers',
        'Nova Lines jobs',
        'non-driving jobs Chicago',
        'trucking company jobs Chicago',
        'diesel mechanic jobs Chicago',
        'truck shop jobs Chicago',
        'transportation office jobs Chicago IL',
        'logistics jobs Chicago',
        'fleet maintenance jobs Chicago',
        'safety coordinator jobs Chicago',
    ],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Non-Driving Jobs at Nova Lines Chicago | Apply Now',
        description: SITE_DESCRIPTION,
        url: '/',
        siteName: SITE_NAME,
        locale: 'en_US',
        images: [
            {
                url: '/LogotypeOrange.png',
                width: 800,
                height: 500,
                alt: 'Nova Lines logo',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Non-Driving Jobs at Nova Lines Chicago',
        description: SITE_DESCRIPTION,
        images: ['/LogotypeOrange.png'],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={DinNextLtProFont.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
