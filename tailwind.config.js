/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F9A109', 
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],  
}