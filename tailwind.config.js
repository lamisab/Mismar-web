/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./src/**/*.{js,jsx,ts,tsx}",
   ],
  theme: {
    extend: {
      colors:{
        backgroundColor: "#F8F8F8",
        navBarColor:"#FFFFFF",
        sideBarColor:"#333333",
        hoverColor:"#FF0000",
      },
    },
  },
  plugins: [],
}
