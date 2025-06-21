/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4A90E2', // A thoughtful blue
        'secondary': '#50E3C2', // An insightful teal/green
        'background': '#F4F7F6', // A clean, light gray background
        'surface': '#FFFFFF', // For cards and modals
        'text-primary': '#212121',
        'text-secondary': '#757575',
      },
    },
  },
  plugins: [],
}
