/** @type {import('tailwindcss').Config} */
export default {
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
        'primary': '#00C8AC',
        'secondary': '#039D8C',
        'lime-1': '#A0E4CB',
        'red-1': '#FF6359',
        'gray-1': '#8C8C8C',
        'dark-1': '#312C53',
        'dark-2': '#0E0A29',
      },
    },
  },
  plugins: [],
}

