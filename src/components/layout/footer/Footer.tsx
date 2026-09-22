import { Onest } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'


const onest = Onest({ subsets: ['latin'], display: 'swap', adjustFontFallback: false })

export default function Footer() {
    return (
        <footer>
            <div className="bg-foreground flex flex-col gap-12 md:gap-0 md:flex-row items-center justify-evenly text-white py-16">
                <div className="text-center">
                    <h2>Call</h2>
                    <Link href="tel:(847) 881-0432" className="text-muted mt-2 text-sm lg:text-base">(847) 881-0432</Link>
                </div>

                <div className="text-center">
                    <h2>Visit</h2>
                    <Link href="https://maps.app.goo.gl/HyvwkPGZSW75mVy98" className="text-muted mt-2 text-sm lg:text-base">
                        8535 S. 77th Ave, Bridgeview, IL 60455
                    </Link>
                </div>

                <div className="text-center">
                    <h2>Social</h2>
                    <div className="flex items-center gap-3 
 justify-evenly text-muted mt-2 text-sm lg:text-base">
                        <Link
                            href="https://www.instagram.com/drivefornovalines/"
                            target="_blank"
                            className="block">
                            <Image
                                src="/insta.svg"
                                alt='Instagram'
                                width={30}
                                height={30}
                            />
                        </Link>
                        <Link
                            href="https://www.facebook.com/NovaLines/"
                            target="_blank"
                            className="block">
                            <Image
                                src="/facebook.svg"
                                alt='Instagram'
                                width={30}
                                height={30}
                            />
                        </Link>
                    </div>
                </div>

                <div className="text-center">
                    <h2>Write</h2>
                    <Link
                        href="mailto:careers@novalines.com"
                        className="text-muted mt-2 text-sm lg:text-base block">
                        careers@novalines.com
                    </Link>
                </div>
            </div>
            <div className={`${onest.className} flex items-center justify-center flex-wrap gap-5 sm:gap-20 bg-[#202020] py-7 px-4`} >
            </div>
        </footer>
    )
}
