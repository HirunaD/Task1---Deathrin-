/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leftBlue: '#234593',
        rightBlue: '#132F6D',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        'custom': '16px', // Custom font size of 16px
      },
    },
  },
  plugins: [],
}

