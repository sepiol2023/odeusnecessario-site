/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#080808",
        ink: "#f4f1ea",
        line: "#1f1d1b",
        accent: {
          red: "#8d2f2b",
          blue: "#2e5778",
          green: "#4a6542",
        },
      },
      boxShadow: {
        panel: "0 24px 80px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "page-noise":
          "radial-gradient(circle at top, rgba(255,255,255,0.05), transparent 35%), radial-gradient(circle at 20% 20%, rgba(141,47,43,0.08), transparent 30%), radial-gradient(circle at 80% 0%, rgba(46,87,120,0.08), transparent 32%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      letterSpacing: {
        editorial: "0.24em",
      },
    },
  },
  plugins: [],
};
