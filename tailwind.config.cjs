/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
      colors:{
        green: "#6ED4A5",
        white: "#ffffff",
        gray: {
        10: "D9D9D9",
        20: "757474",
      },
      },
      height: {
        '6/7': '92%',
        '1/6': '14%',
        '1/5': '25%',
        '1/7': '15%',
        '2/5': '18%',
      },
      width:{
        '1/7': '13%',
        '3/4': '85%',
        '10/12': '70%',
      },
      margin:{
        '1/7': '2%',
        '1/6': '5%',
      },
      borderRadius:{
        '1/7': '3vh',
      },  
      fontSize:{
        '4xl': '3.5vh',
        '2xl': '2.5vh',
        '3xl': '4.5vh',
      },
      spacing:{
        '4': '3%',
      }
    }
  },
  fontFamily: {
    Inter: "Inter"
  },
  plugins: [],
}
plugins: []

