/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        carolina: {
          clay: '#c85a32',
          clayLight: '#e07a5f',
          pine: '#1b4332',
          deepPine: '#0f291e',
          riverStone: '#78716c',
          creekSand: '#f7f4ed',
          limestone: '#e7ded1'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 25px -4px rgba(0, 0, 0, 0.06), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
        'premium': '0 20px 40px -15px rgba(20, 83, 45, 0.15)',
        'elevated': '0 25px 50px -12px rgba(15, 41, 30, 0.25)',
      }
    },
  },
  plugins: [],
}
