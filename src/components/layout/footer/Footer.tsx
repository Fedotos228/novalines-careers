import Map from '@/components/elements/Map';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="bg-foreground flex flex-col gap-12 md:gap-0 md:flex-row items-center justify-evenly text-white py-16">
                <div className="text-center">
                    <h2>Call</h2>
                    <p className="text-muted mt-2 text-sm lg:text-base">+373 22 85 85 85</p>
                </div>

                <div className="text-center">
                    <h2>Visit</h2>
                    <p className="text-muted mt-2 text-sm lg:text-base">
                        bd. Decebal 6, Chișinău, Moldova
                    </p>
                </div>

                <div className="text-center">
                    <h2>Social</h2>
                    <div className="flex items-center gap-1 justify-evenly text-muted mt-2 text-sm lg:text-base">
                        <Link
                            href="https://www.instagram.com/whhroo/"
                            target="_blank"
                            className="underline hover:text-blaze-500 transition-colors duration-300">
                            Instagram
                        </Link>
                        <span>/</span>
                        <Link
                            href="https://www.facebook.com/petru.orbu.1"
                            target="_blank"
                            className="underline hover:text-blaze-500 transition-colors duration-300">
                            Facebook
                        </Link>
                        <span>/</span>
                        <Link
                            href="https://www.linkedin.com/in/whhroo/"
                            target="_blank"
                            className="underline hover:text-blaze-500 transition-colors duration-300">
                            LinkedIn
                        </Link>
                    </div>
                </div>

                <div className="text-center">
                    <h2>Write</h2>
                    <Link
                        href="mailto:jobs@novalines.com"
                        className="text-muted mt-2 text-sm lg:text-base block">
                        jobs@novalines.com
                    </Link>
                </div>
            </div>
            <Map />
        </footer>
    );
}
