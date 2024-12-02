/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": "0 10px 15px -3px rgb(0,0,0,0.12);"
      }
    },
  },
  plugins: [],
}

