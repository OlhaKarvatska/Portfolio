/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter','ui-sans-serif','system-ui'],
        serif: ['Playfair Display','ui-serif','Georgia']
      },
      colors: {
        brand: { DEFAULT: '#0B0B0B', soft: '#F7F7F7', accent: '#C7B299' } // м'який беж як акцент
      },
      borderRadius: { '3xl': '1.75rem' }
    }
  },
  plugins: [],
}
