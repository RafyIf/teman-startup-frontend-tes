const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      'custom-blue': {
        100: '#15286D',
        200: '#383DD4',
        300: '#A3EDFF',
      },
    },
    extend: {
      fontFamily: {
        oswald: ['OSWALD', 'normal'],
        caveat: ['CAVEAT', 'normal'],
        inter: ['INTER', 'normal'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
