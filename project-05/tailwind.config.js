/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '4px 4px 15px rgba(0, 0, 0, 1)',  // Custom shadow with blur and offset
        'custom-lg': '8px 8px 24px rgba(255, 255, 255, 0.15)',  // Larger custom shadow
      },
    },
  },
  plugins: [],
}

