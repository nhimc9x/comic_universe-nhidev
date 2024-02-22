/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'cmu-Roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'cmu-primary': '#ff3f34',
        'cmu-text-color': '#a3a1be'
      }
    }
  },
  plugins: []
}

