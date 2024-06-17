/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      text: {
        '1.25vw': '1.25vw',
        '1.5vw': '1.5vw',
        '1.75vw': '1.75vw',
      },
      fontSize: {
        '1.25vw': '1.25vw',
        '1.5vw': '1.5vw',
        '1.75vw': '1.75vw',
      },
    },
  },
  plugins: [],
};
