/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: '3200px',
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '998px',
        xl: '1440px',
      },
      colors: {
        pri : "#f6e3ba",
        sec : "#946d43",
        light: "#fffde7",
        dark: '#dfcaa0'
      }
    },
  },
  plugins: [],
}