/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        120: "120px",
        288: "288px",
        304: "304px",
        312: "312px",
        952: "952px",
        1280: "1280px",
        1024: "1024px",
        980: "980px",
      },
      height: {
        618: "618px",
        188: "188px",
        264: "264px",
        408: "408px",
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
      screens: {
        mobile: "0px",
        tablet: "1024px",
        desktop: "1400px",
      },
    },
  },
  plugins: [],
};
