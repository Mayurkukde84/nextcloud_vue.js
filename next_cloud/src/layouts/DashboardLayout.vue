src/layouts/DashboardLayout.vue
<template>
  <div class="flex h-screen overflow-hidden bg-gray-50 ">
    <!-- Left Sidebar -->

    <Sidebar />

    <PushSidebar />

    <!-- Main Content Wrapper (Navbar + Content) -->
    <div class="flex flex-col flex-1 overflow-hidden">

      <AppNavbar />

      <!-- Main Content Area -->
      <main class="flex-1 overflow-y-auto p-3 bg-gray-50  text-gray-800 ">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue';
import PushSidebar from '../components/PushSidebar.vue';
import Sidebar from '../components/Sidebar.vue';

export default {
  name: 'DashboardLayout',
  components: {
    AppNavbar,
    Sidebar,
    PushSidebar
  },
};
</script>

<style scoped>
/* Scoped styles for the layout if needed */
</style>