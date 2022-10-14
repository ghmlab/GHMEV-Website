/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors : {
        ghmDark: "#1B1A1F",
        ghmGreen: "#2DAB63",
        ghmGray: "#DDDDDD",
        ghmYellow: "#FFDB83",
        ghmLight: "#F7F9F8"
      }
    },

    backgroundImage : {
      'model-l': "url('https://source.unsplash.com/BRDO4C-0h_s.jpg')",
      'bgProduct': "url('assets/CarouselBG.png')"
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}