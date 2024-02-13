/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/public/BannerGif.gif')",
      },
      backgroundSize: {
        complete:"100% 100%"
      }
    },
  },
  plugins: [],
}

