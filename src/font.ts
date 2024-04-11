import localFont from 'next/font/local'

export const DinNextLtProFont = localFont({
  src: [
    {
      path: '../public/font/DINNEXTLTPRO-BOLD.OTF',
      weight: '700',
    },
    {
      path: '../public/font/DINNEXTLTPRO-BOLDITALIC.OTF',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/font/DINNEXTLTPRO-MEDIUM.OTF',
      weight: '500',
    },
    {
      path: '../public/font/DINNEXTLTPRO-REGULAR.OTF',
      weight: '400',
    },
  ],
  variable: '--font-din-next-lt-pro',
})