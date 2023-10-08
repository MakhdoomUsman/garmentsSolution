/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
        Opensans: ["Open Sans"],
        playFair: ["Playfair Display"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        mainBackground: "url('/image/mainPage/hero-image.jpg')",
        acheiveBackground: "url('/image/acheivements/1.jpg')",
        getInTouch: "url('/image/getintouch/getintoch.jpg')",
        serviceBreadCrum: "url('/image/breadCrums/serviepage.jpg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgDarkGray: "#404040",
        bgLightGray: "#C0AB89",
        bgGray: "#766345",
      },
    },
  },
  plugins: [],
};
