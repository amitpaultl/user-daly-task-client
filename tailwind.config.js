/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {    screens:{
    'sm':'567px',
    'md':'768px',
    'lg':'1024px',
    'xl':'1100px',
    '2xl':'1200px'
  },
    extend: {},
  },
  plugins: [],
}