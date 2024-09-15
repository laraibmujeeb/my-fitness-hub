/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // roboto: ['Roboto', 'sans-serif'],
        // Or use system fonts like below:
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        // Custom dark colors
        'dark-blue': '#0f172a',
        'dark-purple': '#312e81',
        'dark-gray': '#1f2937',
        'dark-green': '#064e3b',
      },
      backgroundImage: {
        'gradient-dark':
          'linear-gradient(135deg, #0f172a 0%, #1f2937 50%, #312e81 100%)',
        'gradient-green': 'linear-gradient(135deg, #064e3b 0%, #1f2937 100%)',
      },
    },
  },
  plugins: [],
};
