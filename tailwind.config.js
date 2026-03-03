/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px", // Maintains wide layout for better spacing
        },
      },
      // Fixed: Animation and Keyframes are now siblings inside 'extend'
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      fontSize: {
        // Usage: className="text-hero"
        hero: ["56px", { lineHeight: "1.1", fontWeight: "800" }],
      },
      colors: {
        brand: {
          blue: "#2563eb",
          indigo: "#4f46e5",
        }
      },
    },
  },
  plugins: [],
}