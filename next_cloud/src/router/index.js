// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import DashboardLayout from '../layouts/DashboardLayout.vue';
import DashboardHome from '../views/DashboardHome.vue';

const routes = [
  {
    path: '/',
    redirect: '/dashboard', // Redirect root to dashboard
  },
  {
    path: '/dashboard',
    component: DashboardLayout, // This route uses our DashboardLayout
    children: [
      {
        path: '', // Default child route for /dashboard
        name: 'DashboardHome',
        component: DashboardHome,
      },
      {
        path: 'tasks',
        name: 'DashboardTasks',
        component: { template: '<h2 class="text-2xl font-semibold dark:text-gray-200">Your Tasks</h2><p class="dark:text-gray-300">Manage your tasks here.</p>' }
      },
      {
        path: 'reports',
        name: 'DashboardReports',
        component: { template: '<h2 class="text-2xl font-semibold dark:text-gray-200">Reports Overview</h2><p class="dark:text-gray-300">View your analytics and reports.</p>' }
      },
      {
        path: 'settings',
        name: 'DashboardSettings',
        component: { template: '<h2 class="text-2xl font-semibold dark:text-gray-200">Application Settings</h2><p class="dark:text-gray-300">Configure your preferences.</p>' }
      },
      // Add more dashboard sub-routes as needed
    ],
  },
  // Add other top-level routes here if needed (e.g., /login, /public-page)
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;