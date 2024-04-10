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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      colors: {
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
        },
        'cmu-secondary': {
          '50': '#fef7ee',
          '100': '#fcedda',
          '200': '#f8d6b0',
          '300': '#f3b97e',
          '400': '#ed914a',
          '500': '#e87427',
          '600': '#d95b1d',
          '700': '#b4451a',
          '800': '#90381c',
          '900': '#74301a',
          '950': '#3f160b'
        }
      },
      animation: {
        'slide-bottom': 'slide-bottom 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        'loading': 'loading 2.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite',
        'shower': 'shower linear 8s infinite',
        'back-in-down': 'back-in-down 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940)    both',
        'scale-up-center': 'scale-up-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        'spin-slow': 'spin-slow linear 3s infinite',
        'spin-reverse': 'spin-reverse linear 4s infinite'
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
        },
        'loading': {
          '0%': {
            left: '-100%'
          },
          to: {
            left: '100%'
          }
        },
        'shower': {
          '0%': {
            transform: 'rotate(215deg) translateX(0)',
            opacity: 0
          },
          '40%': {
            opacity: 1
          },
          '100%': {
            transform: 'rotate(215deg) translateX(-1200px)',
            opacity: 1
          }
        },
        'back-in-down': {
          '0%': {
            transform: ' scale(.6) translateY(-300px)',
            opacity: .7
          },
          '40%': {
            transform: 'scale(.6) translateY(0px)',
            'transform-origin': '50% 0%',
            opacity: .7
          },
          to: {
            transform: 'scale(1)',
            'transform-origin': '50% 0%',
            opacity: 1
          }
        },
        'spin-slow': {
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        'spin-reverse': {
          '0%': {
            transform: 'rotate(360deg)'
          }
        },
        'scale-up-center': {
          '0%': {
            transform: 'scale(.3)'
          },
          to: {
            transform: 'scale(1)'
          }
        }
      }
    }
  },
  plugins: []
}
