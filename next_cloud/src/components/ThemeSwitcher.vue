<template>
  <div class="flex items-center space-x-2"> <button
      @click="toggleTheme"
      class="p-2 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
             dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition-colors duration-200"
    >
      <svg v-if="currentTheme === 'light'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9 9 0 008.354-5.646z"></path>
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h1M3 12H2m8.003-4.398l-.707-.707M10.707 17.707l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.57 4.57l-.707.707M8.343 6.343l-.707-.707"></path>
      </svg>
    </button>
    </div>
</template>

<script>
export default {
  name: 'ThemeSwitcher',
  data() {
    return {
      currentTheme: 'light',
    };
  },
  mounted() {
    this.applyThemeFromLocalStorage();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.handleSystemThemeChange);
  },
  beforeUnmount() {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', this.handleSystemThemeChange);
  },
  methods: {
    applyTheme(theme) {
      const html = document.documentElement;
      if (theme === 'dark') {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        this.currentTheme = 'dark';
      } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        this.currentTheme = 'light';
      }
    },
   applyThemeFromLocalStorage() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      // If a theme is stored, use it
      this.applyTheme(storedTheme);
    } else {
      // NEW: Always default to 'light' if no theme is stored
      this.applyTheme('light');
    }
  },
    toggleTheme() {
      if (this.currentTheme === 'light') {
        this.applyTheme('dark');
      } else {
        this.applyTheme('light');
      }
    },
    handleSystemThemeChange(event) {
      if (!localStorage.getItem('theme')) {
        this.applyTheme(event.matches ? 'dark' : 'light');
      }
    }
  },
};
</script>