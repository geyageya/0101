

module.exports = {
  mode:"jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      // gridTemplateColumns: {
      // // Simple 16 column grid
      // '3x100': 'repeat(3, 100px)',
      // '6x150': 'repeat(6, 150px)',
      // }
      padding: {
        '1/2': '50%',
        full: '100%',
    }
  }
  // plugins: [],
}
}
