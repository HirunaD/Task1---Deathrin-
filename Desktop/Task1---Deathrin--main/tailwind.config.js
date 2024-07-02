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
        yellow: '#FF9E00',
        leftbuynow: '#FF9E00',
        rightbuynow: '#FF6D00'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        deadpool: ['Deadpool', 'sans-serif']
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        'custom': '16px',
        'customtw': '20px',
        'customff': '50px',
        'large': '110px'
      },
      borderRadius: {
        'customet': '8px' 
      }
    },
  },
  plugins: [],
}

