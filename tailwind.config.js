/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        nu: ["Nunito Sans"],
      },
      fontWeight: {
        "nu-300": "300",
        "nu-600": "600",
        "nu-800": "800",
      },
      colors: {
        "dark-mode-elements-dark-blue": "#2b3945",
        "dark-mode-bg-very-dark-blue": "#212d38",
        "light-mode-text-very-dark-blue": "#111517",
        "light-mode-input-dark-gray": "#858585",
        "light-mode-bg-very-light-gray": "#fafafa",
        "dark-mode-text-light-mode-elements-white": "#ffffff",
        "paginate":"#2b2eff"
      },
      borderWidth: {
        3: "3px",
      },
      fontSize:{
        'drop':"2.5rem"
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
