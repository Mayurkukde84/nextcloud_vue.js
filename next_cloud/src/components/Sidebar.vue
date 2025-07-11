<script setup>
import { ref } from 'vue';
import next_cloud from '../assets/next_cloud.png';

// Define your navigation links with icons and names
const navLinks = ref([
    {
        name: 'Dashboard',
        icon: `
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857ZM18 14a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2Z" clip-rule="evenodd" />
            </svg>
        `,
        to: '/dashboard',
        exact: true // Add exact matching for dashboard
    },
    {
        name: 'Files',
        icon: `
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z" />
            </svg>
        `,
        to: '/dashboard/files',
        exact: true // Add exact matching for files
    },
    {
        name: 'Photos',
        icon: `
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clip-rule="evenodd" />
            </svg>
        `,
        to: '/dashboard/photos',
        exact: true
    },
    {
        name: 'Activity',
        icon: `
           <svg class="w-5 h-5"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M19 4h18L26 18h15L17 44l5-19H8L19 4Z"/></svg>
        `,
        to: '/dashboard/activity',
        exact: true
    },
    {
        name: 'Talk',
        icon: `
           <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 464 488"><path fill="currentColor" d="M460 187q0-76-67.5-129.5T230 4T67.5 57.5T0 187q0 65 51.5 115.5T181 367q-4 51-21 97q63-16 126-99q76-15 125-64.5T460 187zM329 300q-6 2-10 2h-18q59-43 59-115q0-79-70-121q6-2 19-2q46 0 78.5 34.5T420 183q0 44-26 77t-65 40z"/></svg>
        `,
        to: '/dashboard/talk',
        exact: true
    },
    {
        name: 'Mail',
        icon: `
           <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M1 3h22v18H1V3Zm2 2v1.83l9 4.55l9-4.55V5H3Zm18 4.07l-9 4.55l-9-4.55V19h18V9.07Z"/></svg>
        `,
        to: '/dashboard/mail',
        exact: true
    },
    {
        name: 'Contacts',
        icon: `
 <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" clip-rule="evenodd" />
            </svg>
        `,
        to: '/dashboard/contacts',
        exact: true
    },
    {
        name: 'Calendar',
        icon: `
 <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"/></svg>
        `,
        to: '/dashboard/calendar',
        exact: true
    },
    {
        name: 'Deck',
        icon: `
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.36 21.28h31.28a2.85 2.85 0 0 1 2.86 2.86v15.52a2.86 2.86 0 0 1-2.86 2.86H8.36a2.86 2.86 0 0 1-2.86-2.86V24.14a2.85 2.85 0 0 1 2.86-2.86Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.64 21.28V17a1 1 0 0 0-1-1H9.36a1 1 0 0 0-1 1v4.27M37.38 16v-4.25a1 1 0 0 0-1-1H11.62a1 1 0 0 0-1 1V16m24.13-5.25V6.48a1 1 0 0 0-1-1h-19.5a1 1 0 0 0-1 1v4.27"/></svg>`,
        to: '/dashboard/deck',
        exact: true
    },
    {
        name: 'Collecation',
        icon: `
         <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22q-.825 0-1.413-.588T2 20V6h2v14h14v2H4Zm4-4q-.825 0-1.413-.588T6 16V4q0-.825.588-1.413T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.588 1.413T20 18H8Zm5-7l2.5-1.5L18 11V4h-5v7Z"/></svg>
        `,
        to: '/dashboard/collecation',
        exact: true
    },
    {
        name: 'Polls',
        icon: `
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10 3h4v18h-4zM3 13h4v8H3zm18-5h-4v13h4z" clip-rule="evenodd"/></svg>
        `,
        to: '/dashboard/polls',
        exact: true
    },
    {
        name: 'Forms',
        icon: `
           <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M10 21h9a2 2 0 0 0 2-2v-2H10v4Zm0-6h11v-5H10v5Zm-2-5v5H3v-5h5Zm2-2h11V6a2 2 0 0 0-2-2h-9v4ZM8 4v4H3V6a2 2 0 0 1 2-2h3Zm0 13v4H5a2 2 0 0 1-2-2v-2h5Z"/></g></svg>
        `,
        to: '/dashboard/forms',
        exact: true
    },
    {
        name: 'Tasks',
        icon: `
           <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M256 85.334h170.666V128H256zm0 149.333h170.666v42.667H256zM256 384h170.666v42.667H256zM189.814 46.126l25.364 19.51l-76.032 98.843l-68.617-60.04l21.072-24.082l42.968 37.574zm0 149.333l25.364 19.511l-76.032 98.842l-68.617-60.04l21.072-24.082l42.968 37.574zm0 149.334l25.364 19.51l-76.032 98.843l-68.617-60.04l21.072-24.082l42.968 37.574z"/></svg>
        `,
        to: '/dashboard/task',
        exact: true
    },
    {
        name: 'Conferences',
        icon: `
           <svg  class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 10a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v9l8-6v23l-8-6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10Zm6 6v4m5-6v8m5-6v4"/></svg>
        `,
        to: '/dashboards/conferences',
        exact: true
    },
]);

const utilityLinks = ref([
    {
        name: 'Delete',
        icon: `
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
            </svg>
        `,
        to: '/delete',
        exact: true
    },
    {
        name: 'Recent',
        icon: `
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v5l2 2m6-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
        `,
        to: '/recent',
        exact: true
    },
    {
        name: 'Settings',
        icon: `
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9v3a5.006 5.006 0 0 1-5 5h-4a5.006 5.006 0 0 1-5-5V9m7 9v3m-3 0h6M11 3h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z" />
            </svg>
        `,
        to: '/settings-group',
        exact: true
    },
]);
</script>

<template>
  <aside class="flex flex-col items-center border-r border-gray-300 dark:border-gray-700 w-20 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-lg py-4 transition-colors duration-200 overflow-y-auto custom-scrollbar overflow-x-hidden" style="scrollbar-width: none; -ms-overflow-style: none;">
    <div class="mb-6">
      <a href="#" class="block">
        <img :src="next_cloud" alt="Next Cloud Logo" class="w-10 h-auto" />
      </a>
    </div>

    <nav class="flex flex-col items-center flex-grow space-y-2">
      <router-link
        v-for="link in navLinks"
        :key="link.name"
        :to="link.to"
        :exact="link.exact"
        class="group relative flex justify-center items-center w-10 h-10 rounded-md text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 shrink-0"
        exact-active-class="bg-blue-600 text-white dark:bg-blue-500 dark:text-white"
      >
        <span v-html="link.icon" class="flex-shrink-0"></span>
        <span
          class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 dark:bg-gray-700 text-xs text-white rounded-lg whitespace-nowrap transition-opacity duration-200"
          role="tooltip"
        >
          {{ link.name }}
        </span>
      </router-link>
    </nav>

    <div class="flex flex-col items-center space-y-0 mt-12 pb-4">
      <router-link
        v-for="link in utilityLinks"
        :key="link.name"
        :to="link.to"
        :exact="link.exact"
        class="group relative flex justify-center items-center w-10 h-10 rounded-md text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 shrink-0"
        exact-active-class="bg-blue-600 text-white dark:bg-blue-500 dark:text-white"
      >
        <span v-html="link.icon" class="flex-shrink-0"></span>
        <span
          class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 dark:bg-gray-700 text-xs text-white rounded-lg whitespace-nowrap transition-opacity duration-200"
          role="tooltip"
        >
          {{ link.name }}
        </span>
      </router-link>
    </div>

    <div class="pt-4">
      <a href="#" class="group relative flex justify-center items-center w-10 h-10 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 shrink-0">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-4.242 4.243a4 4 0 0 1 0 5.657M16.242 12.757a4 4 0 0 0 0 5.657M7.757 7.757a4 4 0 0 1 5.657 0M12.757 7.757a4 4 0 0 0 5.657 0" />
        </svg>
        <span
          class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 dark:bg-gray-700 text-xs text-white rounded-lg whitespace-nowrap transition-opacity duration-200"
          role="tooltip"
        >
          Profile
        </span>
      </a>
    </div>
  </aside>
</template>

<script>
export default {
    name: 'Sidebar',
};
</script>

<style scoped>
/* Scoped styles for the component */
.router-link-exact-active {
    /* Using Tailwind's default blue for exact active state */
    @apply bg-blue-600 text-white;
}

/* Base styles for tooltips (if not handled by a library like HS Preline) */
.hs-tooltip-content {
    left: 100%; /* Position tooltip to the right of the icon */
    margin-left: 10px; /* Add some space */
}

/* Custom scrollbar for better aesthetics if overflow occurs */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>