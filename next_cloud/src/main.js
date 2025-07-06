// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import './style.css'; // Your main Tailwind/Preline CSS

const app = createApp(App);
app.use(router); // Use the router
app.mount('#app');

// Import and initialize Preline UI JavaScript
// Ensure this is after app.mount() if Preline needs the DOM to be ready
import 'preline/dist/index.js';