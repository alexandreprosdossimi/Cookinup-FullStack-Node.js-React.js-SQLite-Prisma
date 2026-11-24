/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-escuro': '#263a29',
        'creme': '#fffaf3',
        'coral': '#f0633c',
        'verde-medio': '#3d6d4a',
        'cinza': '#444',
        'cinza-claro': '#efefef',
      },
      fontFamily: {
        'paytone': ['"Paytone One"', 'sans-serif'],
        'nunito': ['"Nunito Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'fundo': "url('/fundo.png')",
      },
    },
  },
  plugins: [],
}