/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: {
          50: '#effcf9',
          100: '#d6f7f0',
          200: '#b0efe2',
          300: '#7ae1cf',
          400: '#40ccb7',
          500: '#1db8a2',
          600: '#119385',
          700: '#12756c',
          800: '#145d57',
          900: '#164d48',
        }
      }
    },
  },
  plugins: [],
}