/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'cmu-Nunito': ['Nunito', 'sans-serif']
      },
      colors: {
        'cmu-primary-200': '#ee4e34',
        'cmu-primary-400': '#dc3f26',
        'cmu-primary-600': '#b9321c',
        'cmu-secondary': '#fcedda'
      },
      animation: {
        'slide-bottom': 'slide-bottom 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both'
      },
      keyframes: {
        'slide-bottom': {
          '0%': {
            transform: 'translateY(-10px)',
            opacity: 0
          },
          to: {
            transform: 'translateY(0)',
            opacity: 1
          }
        }
      }
    }
  },
  plugins: []
}

