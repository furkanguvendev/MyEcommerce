/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        300: ["300px"],
      },
      height: {},
      spacing: {},
      inset: {
        content: ["38.5%"],
        mobContent: ["54%"],
      },
      fontSize: {
        32: ["32px"],
        40: ["40px"],
      },
      fontFamily: {
        montserrat: ['"Montserrat"'],
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out forwards",
        "slide-down": "slide-down 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-20px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
