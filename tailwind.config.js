/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        304: "304px",
      },
      height: {
        618: "618px",
      },
      colors: {
        "color-primary": "#585EE3",
        "color-primary-light": "#F5F8FF",
        "color-interface-black": "#000000",
        "color-interface-black-medium": "#21343D",
        "color-interface-black-grey": "#657178",
        "color-interface-light": "#F0F4F5",
        "color-interface-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
