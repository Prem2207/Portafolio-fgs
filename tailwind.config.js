/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#3E3C3C",
        "violet": "#9BA4ED",
        "gray-50": "#5221E6",

      }
    },
  },
  plugins: [],
}

