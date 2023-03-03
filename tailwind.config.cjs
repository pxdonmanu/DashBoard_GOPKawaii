/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      white:"#FFFFFF",
      green: "6ED4A5",
      gray: {
        10: "D9D9D9",
        20: "757474",
      },
    }
  },
  fontFamily: {
    Inter: "Inter"
  },
  plugins: [],
}
