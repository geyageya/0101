

module.exports = {
  mode:"jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    
    extend: {
      gridTemplateColumns: {
      // Simple 16 column grid
      '3x100': 'repeat(3, minmax(100px, 1fr))',
      '6x150': 'repeat(6, minmax(150px, 1fr))',

      // Complex site-specific column configuration
      'footer': '200px minmax(900px, 1fr) 100px',
      }
    }
  }
  // plugins: [],
}
