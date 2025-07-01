// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

createApp(App).mount('#app');

// Import and initialize Preline UI JavaScript
import 'preline/dist/index.js'; // This assumes you want to import the main JS

// If you are using Vue Router, you might need to reinitialize Preline UI
// components after route changes.
// Example with Vue Router (if you have it set up):
// import router from './router'; // Assuming you have a router file
// router.afterEach(async (to, from, failure) => {
//   if (!failure) {
//     setTimeout(() => window.HSStaticMethods.autoInit(), 100);
//   }
// });