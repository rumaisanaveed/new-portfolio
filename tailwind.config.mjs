/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: "#1D1F20",
        lightBackground: "#FAFAFA",
        darkHeading: "#F5F5F5",
        lightHeading: "#111111",
        darkBody: "#CDCDCD",
        lightBody: "#2D2D2D",
        darkDefaultIcon: "#CDCDCD",
        lightDefaultIcon: "#2D2D2D",
        themeIcon: "#29BC89",
        themeText: "#29BC89",
        darkGlass: "#313334",
        lightGlass: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
