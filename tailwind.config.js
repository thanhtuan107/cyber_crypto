/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundColor:{
        "main" : "#151937"
      },
      container:{
        center:true
      }
    },
  },
  // để sử dụng dark mode: darkMode:"class"
  darkMode:"class",
  plugins: [require('flowbite/plugin')],
  

};


