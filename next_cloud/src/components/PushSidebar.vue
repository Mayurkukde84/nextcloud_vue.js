<template>
    <div id="hs-sidebar-content-push"
        class="relative top-0 start-0 bottom-0 z-50 h-full dark:bg-gray-900 bg-white border-e border-gray-200 transition-all duration-300"
        :class="isSidebarOpen ? 'w-60' : 'w-0'" role="dialog">
        <div class="flex h-full flex-col">
            <header class="p-2 flex items-center h-[60px] shrink-0 border-b border-gray-300"
                :class="isSidebarOpen ? 'justify-between' : 'justify-center'">
                <a href="#" class="flex items-center gap-x-2 focus:outline-none"
                    @click.prevent="!isSidebarOpen && (isSidebarOpen = true)"
                    :class="{ 'cursor-pointer': !isSidebarOpen, 'cursor-default': isSidebarOpen }">
                    <Transition name="fade">
                        <span v-show="isSidebarOpen" class="font-semibold text-xl text-black"></span>
                    </Transition>
                </a>
                <form class="flex items-center max-w-lg mx-auto">
                    <div :class="isSidebarOpen ? 'relative w-50' : 'hidden'">
                        <input type="text" id="voice-search"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full ps-4 p-2"
                            placeholder="Search" required />
                        <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
                            <svg class="w-3 h-3 text-gray-500 hover:text-gray-200" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </header>

            <nav class="flex-grow overflow-y-auto px-1.5 mt-2">
                <div class="hs-accordion-group pb-0 px-2 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                    <ul class="space-y-2">
                        <li v-for="item in currentMenu" :key="item.title"
                            :class="{ 'hs-accordion': item.submenu, 'active': isActive(item) }"
                            :id="item.submenu ? 'accordion-' + item.currentPathSegment : null">

                            <!-- Regular menu item (no submenu) -->
                            <a v-if="!item.submenu" :href="item.path"
                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100
                                       dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                :class="{ 'bg-gray-100 dark:bg-gray-700': isActive(item), 'font-semibold': isActive(item) }">
                                <svg class="size-5 text-gray-600 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 24 24" v-html="item.icon"></svg>
                                {{ item.title }}
                            </a>

                            <!-- Accordion menu item (with submenu) -->
                            <button v-else type="button" class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg cursor-pointer
                                       dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
                                :class="{ 'bg-gray-100 dark:bg-gray-700': isActive(item), 'font-semibold': isActive(item) }"
                                :aria-expanded="isAccordionOpen(item)"
                                :aria-controls="'accordion-collapse-' + item.currentPathSegment">
                                <svg class="size-5 text-gray-800 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 24 24" v-html="item.icon"></svg>
                                <p class="text-gray-800 dark:text-gray-200">{{ item.title }}</p>
                                <svg class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="m18 15-6-6-6 6" />
                                </svg>
                                <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 dark:text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>

                            <!-- Submenu items -->
                            <div v-if="item.submenu" :id="'accordion-collapse-' + item.currentPathSegment"
                                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                :class="{ 'hidden': !isAccordionOpen(item) }" role="region"
                                :aria-labelledby="'accordion-' + item.currentPathSegment">
                                <ul class="hs-accordion-group pt-1 ps-7 space-y-1" data-hs-accordion-always-open>
                                    <!-- FIXED: Changed from 'currentMenu' to 'item.submenu' -->
                                    <li v-for="subItem in item.submenu" :key="subItem.title"
                                        :class="{ 'active': isActive(subItem) }">
                                        <a :href="subItem.path" class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100
                                                   dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                            :class="{ 'bg-gray-100 dark:bg-gray-700': isActive(subItem), 'font-semibold': isActive(subItem) }">
                                            {{ subItem.title }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <button @click="isSidebarOpen = !isSidebarOpen" type="button"
            class="absolute top-8 -translate-y-1/2 flex justify-center items-center size-6 rounded-full border border-gray-300 bg-white shadow-md focus:outline-none transition-all duration-300 z-50"
            :class="isSidebarOpen ? '-right-4' : '-right-4'">
            <svg class="w-3 h-3 text-gray-800 transition-transform duration-300 cursor-pointer" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                :class="{ 'rotate-180': !isSidebarOpen }">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 12h14M5 12l4-4m-4 4 4 4" />
            </svg>
        </button>
    </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { useSidebar } from '../composables/useSidebar';
import { sidebarMenu as defaultSidebarMenu, dashboardMenu as defaultDashboardMenu, photosMenu,allActivity } from '../constants/SidebarMenu';
import Activity from '../views/Activity.vue';

const isSidebarOpen = ref(true);
const route = useRoute();
const { isExpanded, isMobileOpen, isHovered, openSubmenu } = useSidebar();

// Function to check if a menu item (or its submenu) is active
const isActive = (menuItem) => {
    if (!menuItem || !menuItem.path) return false;

    if (route.path.startsWith(menuItem.path)) {
        return true;
    }
    if (menuItem.submenu) {
        return menuItem.submenu.some(subItem => subItem?.path && route.path.startsWith(subItem.path));
    }
    return false;
};

const currentMenu = computed(() => {
    console.log('Evaluating currentMenu. Route path:', route.path);

    // More flexible matching - check if path contains 'files' anywhere
    if (route.path.includes('/files')) {
        console.log('Condition met: Path contains "/files". Returning defaultSidebarMenu.');
        return defaultSidebarMenu;
    } else if (route.path.endsWith('/dashboard')) {
        console.log('Condition met: Path contains "/dashboard". Returning defaultDashboardMenu.');
        return defaultDashboardMenu;
    } else if (route.path.endsWith('/photos')) {
        return photosMenu
    }else if(route.path.endsWith('/activity')){
        return allActivity
    }

    console.log('No specific match. Returning defaultSidebarMenu as fallback.');
    return defaultSidebarMenu;
});

const isAccordionOpen = (menuItem) => {
    return isActive(menuItem);
};

// Debug function to check menu data
const debugMenu = () => {
    console.log('Current menu items:', currentMenu.value);
    console.log('Current route:', route.path);
};
const startTransition = (el) => {
    el.style.height = "auto";
    const height = el.scrollHeight;
    el.style.height = "0px";
    el.offsetHeight; // force reflow
    el.style.height = height + "px";
};

const endTransition = (el) => {
    el.style.height = "";
};
// Call debug function when component mounts
debugMenu();
</script>

<style scoped>
/* This CSS creates a smooth fade transition for the text elements */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Active state for menu items */
.active .hs-accordion-toggle {
    /* Apply styles for the active menu item's button */
}

.active a {
    /* Apply styles for the active menu item's link */
}
</style>