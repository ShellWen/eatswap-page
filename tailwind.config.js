/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx,vue}', './index.html'],
  theme: {
    extend: {
      colors: {
        // ----------------------------------------------------------------
        // generated from https://javisperez.github.io/tailwindcolorshades/?primary=fdca48&secondary=ab2726
        primary: {
          50: '#FFFDF5',
          100: '#FFFCED',
          200: '#FFF7D1',
          300: '#FFF0B5',
          400: '#FCDF7E',
          500: '#fdca48',
          600: '#E3AD39',
          700: '#BD8628',
          800: '#96601A',
          900: '#73420F',
          950: '#4A2606',
        },
        secondary: {
          50: '#FAF5F0',
          100: '#F7ECE4',
          200: '#EBCFBE',
          300: '#DEAE99',
          400: '#C46958',
          500: '#ab2726',
          600: '#991F1F',
          700: '#801414',
          800: '#660D0D',
          900: '#4D0808',
          950: '#300303',
        },
        // ----------------------------------------------------------------
      },
      fontFamily: {
        'sans': ['"Noto Sans SC Variable"', 'sans'],
      }
    },
  },
  plugins: [],
}
