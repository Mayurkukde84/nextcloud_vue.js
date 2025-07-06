// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/postcss'; // Import it
import autoprefixer from 'autoprefixer';       // Import it

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Call it as a function
        autoprefixer(), // Call it as a function
        // ... any other PostCSS plugins you have, calling them as functions
      ],
    },
  },
});