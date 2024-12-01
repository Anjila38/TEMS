/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"], // Scan the HTML file for classes
  theme: {
    extend: {
      
    },
    screens: {
      sm: { max: "639px" }, // Target screens up to 639px (phones)
    },
  },
  plugins: [],
};
