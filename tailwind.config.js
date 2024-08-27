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
        "custom-gradient": "linear-gradient(rgba(0, 0, 0, 0.1), #112e42)",
      },
      colors: {
        "custom-black": "rgba(0, 0, 0, 1)",
        "custom-blue": "#112e42",
      },

      fontFamily: {
        poppins: ["var(--poppins)"],
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
