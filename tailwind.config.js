/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#F2EFEA', deep: '#E9E3D9' },
        ink: { DEFAULT: '#1A1A1A', soft: '#333130', muted: '#7A736A' },
        sepia: '#B9A88F',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        mega: '0.3em',
      },
    },
  },
  plugins: [],
}
