/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        accent : "#0989FF",
        topHeadingPriamry : "#010f1c",
        topHeadingSecondary :"#021d35",
        pink :"#FD4B6B",
        Mycolor: "#ff5722", // Replace with your color code
      },

      container:{
        center:  true,
        padding:"15px",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideIn: 'slideIn 1s ease-out',
      },

    },
  },
  plugins: [],
}