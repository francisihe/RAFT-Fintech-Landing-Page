/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#2B892E',
        'custom-black': '#070606',
        'custom-offwhite': '#BDBDBD',
        'custom-border-black': '#3D3D3D',
      }
    },
  },
  plugins: [],
}

