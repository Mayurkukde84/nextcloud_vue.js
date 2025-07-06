// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/preline/dist/*.js', // <--- IMPORTANT: Add Preline's JS files to content for PurgeCSS
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // If you need enhanced form styles
    require('preline/plugin'),      // <--- Essential for Preline UI components
  ],
}