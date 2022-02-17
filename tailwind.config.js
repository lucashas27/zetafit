module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {      
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "surface-color": "var(--surface-color)",
        "dark-primary": "var(--dark-primary)",
        "background-color": "var(--background-color);"
      },
    },
  },
  plugins: [],
}
