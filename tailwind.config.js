/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-black": "#171717",
        white: "#fff",
        red: {
          "100": "#ec1824",
          "200": "#ef1023",
          "300": "#ec0f1d",
          "400": "#ed0a1d",
          "500": "#e50d1b",
        },
        gray: {
          "100": "#fffdfd",
          "200": "#fafafa",
        },
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#d9d9d9",
        },
        black: "#000",
        darkslategray: "#333",
        snow: "#fffcfc",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        heading2: "'Saira Condensed'",
      },
      borderRadius: {
        xl: "20px",
        "181xl": "200px",
      },
    },
    fontSize: {
      lgi: "19px",
      xl: "20px",
      base: "16px",
      "31xl": "50px",
      "11xl": "30px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "111xl": "130px",
      "33xl": "52px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
