/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        spotifyGreen: "#1DB954",
        spotifyBg: "#121212",
        spotifyContainer: "#282828",
        spotifyHover: "#333333",
      },
    },
    animation: {
      spin: "spin 3s linear infinite",
    },
  },
  plugins: [],
};
