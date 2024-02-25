/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xss': '375px',
        'xs': '475px',
        'sms': '575px',
        'mdl': '960px'
      },
      fontFamily: {
        'cmu-Nunito': ['Nunito', 'sans-serif']
      },
      colors: {
        // 'cmu-primary-200': '#ee4e34',
        // 'cmu-primary-400': '#dc3f26',
        // 'cmu-primary-600': '#b9321c',
        'cmu-secondary': '#fcedda',
        'cmu-primary': {
          '50': '#fef4f2',
          '100': '#fee6e2',
          '200': '#fed1ca',
          '300': '#fcb1a5',
          '400': '#f88471',
          '500': '#ef5b44',
          '600': '#dc3f26',
          '700': '#b9321c',
          '800': '#992c1b',
          '900': '#7f2a1d',
          '950': '#45120a'
        }
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

