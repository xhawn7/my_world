import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightBackground: '#F0F0F0',
        darkBackground: '#191919',
        lightBlack: '#6C6C6C',
        darkBlack: '#181818',
        lightWhite: '#EEE',
        darkWhite: '#8F8F8F',
        lightGreen: '#1DFFDD',
        darkGreen: '#649A92',
        grayColor: '#22262D'
      }
    }
  },
  plugins: []
}
export default config
