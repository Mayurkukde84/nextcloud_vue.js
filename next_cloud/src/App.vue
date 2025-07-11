<template>
  <ThemeProvider>
    <router-view />
  </ThemeProvider>
</template>

<script>
import ThemeProvider from './layouts/ThemeProvider.vue'
import { useSidebarProvider } from './composables/useSidebar';

export default {
  components: {
    ThemeProvider,
  },
  setup() { // <--- Add the setup function here
    useSidebarProvider(); // <--- Call useSidebarProvider inside setup
  }
}
</script>