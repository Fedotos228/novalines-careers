import localFont from 'next/font/local'

export const DinNextLtProFont = localFont({
  src: [
    {
      path: '../public/font/DINNEXTLTPRO-Bolt.otf',
      weight: '700',
    },
    {
      path: '../public/font/DINNEXTLTPRO-BoltItalic.otf',
      weight: '700',
      style: 'italic',
    },
    // {
    //   path: '../public/font/DINNEXTLTPRO-Medium.otf',
    //   weight: '500',
    // },
    // {
    //   path: '../public/font/DINNEXTLTPRO-Regular.otf',
    //   weight: '400',
    // },
  ],
  variable: '--font-din-next-lt-pro',
})