// postcss.config.js
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(), // This is the Tailwind v4 PostCSS plugin. It should auto-detect tailwind.config.js
    autoprefixer(),
  ],
};