import localFont from 'next/font/local'

export const DinNextLtProFont = localFont({
  src: [
    {
      path: '/font/DINNEXTLTPRO-BOLD.otf',
      weight: '700',
    },
    {
      path: '/font/DINNEXTLTPRO-BOLDITALIC.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '/font/DINNEXTLTPRO-MEDIUM.otf',
      weight: '500',
    },
    {
      path: '/font/DINNEXTLTPRO-REGULAR.otf',
      weight: '400',
    },
  ],
  variable: '--font-din-next-lt-pro',
})