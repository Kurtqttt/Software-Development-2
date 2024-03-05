/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        snow: "#fff7f7",
        
        darkslategray: "#27374d",
        lightcyan: "#cdf0ea",
        black: "#000",
        white: "#fff",
        seagreen: "#CDF0EA", // Add the new color
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        montserrat: "Montserrat",
      },
      borderRadius: {
        xl: "20px",
        "8xs": "5px",
        mini: "15px",
        "3xs": "10px",
      },
    },
    fontSize: {
      mini: "0.938rem",
      xl: "1.25rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
