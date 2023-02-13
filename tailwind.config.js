module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        bluegray_900: "#343541",
        bluegray_800: "#444654",
        teal_500: "#10a37f",
        black_900: "#000000",
        bluegray_200: "#acacbe",
        bluegray_100: "#d1d5db",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
        purple_400: "#9547d2",
      },
      borderRadius: { radius3: "3px", radius24: "24px" },
      fontFamily: { segoeui: "Segoe UI" },
      boxShadow: { bs: "0px 0px  24px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
