export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F3EC',
        surface: '#FFFDF9',
        ink: '#1F2A1E',
        muted: '#5B6356',
        moss: '#3E5236',
        mossdeep: '#26331F',
        clay: '#A0563A',
        claydeep: '#86452D',
        sand: '#EAE1D2',
        line: '#DDD3C2',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
};
