/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        integral: ['"Integral CF"', 'sans-serif'],
        paragraph: ['Satoshi'], // For paragraphs
      },
    },
  },
  plugins: [],
}

