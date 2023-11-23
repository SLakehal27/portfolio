/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage:{
        'sunset' : "url('src/assets/img/sunset.jpg')",
        'moon' : "url('src/assets/img/moon.jpg')"
      }
    },
  },
  plugins: [],
}

