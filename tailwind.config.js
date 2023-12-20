/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['poppins', 'sans-serif'],
      'geologica': ['geologica', 'sans-serif'],
    },
    extend: {
      colors: {
        'white': {
          light : '#f7f7f7',
          DEFAULT: '#ffffff',
          dark: '#191919',
        },
        'black': {
          light : '#000000',
          DEFAULT: '#000000',
          dark: '#f1f1f1',
        },
        'primary': '#00C8AC',
        'secondary': '#039D8C',
        'lime-1': {
          light : '#A0E4CB',
          DEFAULT: '#A0E4CB',
          dark: '#13694A',
        },
        'red-1': '#FF6359',
        'gray-1': '#8C8C8C',
        'dark-1': {
          light : '#312C53',
          DEFAULT: '#312C53',
          dark: '#f1f1f1',
        },
        'dark-2': {
          light : '#262626',
          DEFAULT: '#1f1f1f',
          dark: '#101010',
        },
      },
    },
  },
  plugins: [],
}

