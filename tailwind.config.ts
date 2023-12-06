import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#2A2A2E',
        'light-gray': '#34353A',
        'pink': '#F4ACB7',
      },

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat' : ['Montserrat', 'sans-serif']
      },

      fontSize: {
        base: '1.25rem',
        lg: '1.5rem',
        xl: '4rem'
      }
    },
  },
  plugins: [],
}
export default config