/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bosporus: {
          red: '#7B2D3E',
          'red-dark': '#5C1A26',
          gold: '#C9A227',
          'gold-dark': '#B8860B',
          brown: '#3D2314',
          cream: '#F5EDE4',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        script: ['Dancing Script', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cinzel: ['Cinzel', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
