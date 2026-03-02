export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          xl: "1200px",
        },
      },
      fontSize: {
        hero: ["56px", { lineHeight: "1.1" }],
      },
    },
  },
};