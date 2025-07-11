<template>
  <div class="flex h-screen overflow-hidden bg-gray-50 ">
    <Sidebar />
    <PushSidebar />

    <div
      class="flex-1 transition-all duration-300 ease-in-out"
      :class="[isExpanded || isHovered ? 'flex flex-col overflow-hidden ' : 'flex flex-col overflow-hidden']"
    >
      <AppNavbar />

      <main class="flex-1 overflow-y-auto p-3 bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue';
import PushSidebar from '../components/PushSidebar.vue';
import Sidebar from '../components/Sidebar.vue';
import { useSidebar } from '../composables/useSidebar'; // Import useSidebar

export default {
  name: 'DashboardLayout',
  components: {
    AppNavbar,
    Sidebar,
    PushSidebar
  },
  setup() {
    // This component only INJECTS the context
    const { isExpanded, isHovered } = useSidebar();
    // REMOVE THIS CALL: useSidebarProvider() // This call is incorrect here

    return {
      isExpanded,
      isHovered,
    };
  }
};
</script>

<style scoped>
/* Scoped styles for the layout if needed */
</style>