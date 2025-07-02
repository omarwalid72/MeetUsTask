module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abeezee: ['ABeeZee', 'sans-serif'],
      },
      animation: {
        slowSpin: 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}
