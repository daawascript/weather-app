module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#eb6e4b',
        grey: '#48484a',
        white: '#fff',
        aqua: '#59CDBE',
      },
      screens: {
        xs: '360px',
      },
    },
  },
  plugins: [],
};
