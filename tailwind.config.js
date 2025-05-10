/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6EE7B7',
          DEFAULT: '#10B981', 
          dark: '#047857',
        },
        secondary: {
          light: '#BFDBFE',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
        },
        accent: {
          light: '#A5F3FC',
          DEFAULT: '#06B6D4',
          dark: '#0E7490',
        },
        navy: {
          light: '#112240',
          DEFAULT: '#0A192F',
          dark: '#020C1B',
        },
        slate: {
          light: '#A8B2D1',
          DEFAULT: '#8892B0',
          dark: '#495670',
        },
        teal: {
          light: '#A7FDEB',
          DEFAULT: '#64FFDA',
          dark: '#38EFC8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};