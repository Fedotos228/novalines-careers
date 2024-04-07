import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
        },
        blaze: {
          '50': '#fff6ed',
          '100': '#feecd6',
          '200': '#fcd4ac',
          '300': '#f9b678',
          '400': '#f68d41',
          '500': '#f37021',
          '600': '#e45312',
          '700': '#bd3d11',
          '800': '#963216',
          '900': '#792b15',
          '950': '#411309',
        },
        coral: {
          '50': '#f2fbf8',
          '100': '#d4f3e9',
          '200': '#a9e6d4',
          '300': '#77d1ba',
          '400': '#4ab79e',
          '500': '#319b84',
          '600': '#257d6c',
          '700': '#216458',
          '800': '#1f5048',
          '900': '#1d443d',
          '950': '#0c2724',
        },
      },

      animation: {
        slideDown: 'slideDown 0.3s ease-in-out',
      },

      keyframes: {
        slideDown: {
          from: {
            transform: 'translateY(-100%)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}

export default config
