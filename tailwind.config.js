/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        cartheme: {
          primary: "#5e78aa",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
