/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slow-spin': 'spin 3s linear infinite', // 3 seconds per full rotation
      },
    },
  },
  plugins: [],
}