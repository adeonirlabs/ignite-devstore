import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      gridTemplateRows: {
        app: 'min-content max-content',
      },
      maxHeight: {
        215: '54rem',
      },
      maxWidth: {
        64: '16rem',
        72: '18rem',
        '8xl': '90rem',
        '9xl': '100rem',
      },
    },
  },
  plugins: [],
}

export default config
