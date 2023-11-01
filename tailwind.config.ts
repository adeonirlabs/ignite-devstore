import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    gridTemplateRows: {
      app: 'min-content max-content',
    },
    maxWidth: {
      '8xl': '90rem',
      '9xl': '100rem',
    },
  },
  plugins: [],
}

export default config
