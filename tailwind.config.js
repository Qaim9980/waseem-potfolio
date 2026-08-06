module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#caa06a',
        secondary: '#b85c3a',
        dark: '#14110f',
        light: '#f5efe6',
        ink: '#14110f',
        charcoal: '#1c1713',
        sand: '#f5efe6',
        clay: '#caa06a',
        copper: '#b85c3a',
        olive: '#7b8a5a',
        stone: '#b9afa3',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
};
