/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      fontSize: {
        "2.5xl": "26px",
      },
      colors: {
        "twitter-blue": "#1D9BF0",
        "twitter-blue-hover": "#1871CA",
        "searchbar-fill": "#212327",
        stroke: "rgba(29, 155, 240, 0.24)",
        "twitter-neutral": {
          50: "#F9F9F9",
          100: "#F4F4F4",
          200: "#E4E4E4",
          300: "#D3D3D3",
          400: "#A2A2A2",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0A0A0A",
          1000: "#000000",
        },
      },

      borderRadius: {
        30: "30px",
        65: "65px",
        9999: "9999px",
      },

      spacing: {
        101: "101px",
        162: "162px",
        172: "172px",
        237: "237px",
        354: "354px",
        367: "367px",
        593: "593px",
        1116: "1116px",
      },
    },
  },
  plugins: [],
};

