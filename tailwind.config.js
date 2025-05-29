/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00FFFF',
        'cyber-purple': '#8A2BE2',
        'cyber-green': '#00FF00',
      },
      boxShadow: {
        'glow': '0 0 10px rgba(0, 255, 255, 0.5)'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};