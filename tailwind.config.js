/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'yellow':'#facc15',
      'slate':'#1e293b',
      'white': '#fff',
    },
    fontFamily: {
      quicksand: ['Quicksand', 'sans-serif'],
    }
  },
  plugins: [],
}
