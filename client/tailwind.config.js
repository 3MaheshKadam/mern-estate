/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50',
        secondary: '#34495E',
        accent: '#E74C3C',
        'accent-dark': '#c0392b',
        'body-background': '#ECF0F1',
        'body-text': '#2C3E50',
        'footer-background': '#34495E',
        'secondary-dark': '#2c3e50',
      },
    },
  },
  plugins: [],
}
