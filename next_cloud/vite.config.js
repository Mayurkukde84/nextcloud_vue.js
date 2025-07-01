// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import forms from '@tailwindcss/forms'; // Ensure this is correctly imported if used

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    // forms(), // Only include if you actually installed @tailwindcss/forms
  ],
  // Other Vite configuration options if any
});