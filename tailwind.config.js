/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       "blue1":"#126fb3",
       "blue2":"#0e4f82",
       "navbar-Search":"#F2F2F2"
      },
      width:{
        "mywidth":"350px"
      }
    },
  },
  plugins: [],
}

