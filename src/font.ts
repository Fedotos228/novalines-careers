import localFont from 'next/font/local'

export const DinNextLtProFont = localFont({
  src: [
    {
      path: './public/font/DINNEXTLTPRO-BOLD.otf',
      weight: '700',
    },
    {
      path: './public/font/DINNEXTLTPRO-BOLDITALIC.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './public/font/DINNEXTLTPRO-MEDIUM.otf',
      weight: '500',
    },
    {
      path: './public/font/DINNEXTLTPRO-REGULAR.otf',
      weight: '400',
    },
  ],
  variable: '--font-din-next-lt-pro',
})