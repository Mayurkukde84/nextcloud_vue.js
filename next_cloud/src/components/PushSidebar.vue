<template>
    <div id="hs-sidebar-content-push"
        class="relative top-0 start-0 bottom-0 z-50 h-full bg-white border-e border-gray-200 transition-all duration-300"
        :class="isSidebarOpen ? 'w-50' : 'w-0'" role="dialog">
        <div class="flex h-full flex-col">
            <header class="p-2 flex items-center h-[60px] shrink-0 border-b border-gray-300  "
                :class="isSidebarOpen ? 'justify-between' : 'justify-center'">
                <a href="#" class="flex items-center gap-x-2 focus:outline-none"
                    @click.prevent="!isSidebarOpen && (isSidebarOpen = true)"
                    :class="{ 'cursor-pointer': !isSidebarOpen, 'cursor-default': isSidebarOpen }">
                    <Transition name="fade">
                        <span v-show="isSidebarOpen" class="font-semibold text-xl text-black "></span>
                    </Transition>
                </a>
                <form class="flex items-center max-w-lg mx-auto">

                    <div :class="isSidebarOpen ? 'relative w-full' : 'hidden'">
                        <!-- <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
            </svg>
        </div> -->
                        <input type="text" id="voice-search"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg  block w-full ps-4 p-2 "
                            placeholder="Search" required />
                        <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">

                            <svg cclass="w-3 h-3 text-gray-500  hover:text-gray-200" aria-hidden="true"
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
                <div class="hs-accordion-group pb-0 px-2  w-full flex flex-col flex-wrap" data-hs-accordion-alwa>
                    <ul class="space-y-2">
                        <li>
                            <a class="flex items-center gap-x-3.5 py-2 px-2.5 bg-white text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden "
                                href="#">
                                <svg class="w-5 h-5 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z" />
                                </svg>
                                All Files
                            </a>
                        </li>
                        <li>
                            <a class="flex items-center gap-x-3.5 py-2 px-2.5 bg-white text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden "
                                href="#">
                                <svg class="size-5 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3" />
                                </svg>

                                Recent
                            </a>
                        </li>
                        <li>
                            <a class="flex items-center gap-x-3.5 py-2 px-2.5 bg-white text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden "
                                href="#">
                                <svg class="size-5 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z" />
                                </svg>


                                Group Folders
                            </a>
                        </li>
                        <li>
                            <a class="flex items-center gap-x-3.5 py-2 px-2.5 bg-white text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden "
                                href="#">
                                <svg class="size-5 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-width="2"
                                        d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                                </svg>

                                Favorites
                            </a>
                        </li>
                        <li class="hs-accordion" id="users-accordion">
                            <button type="button"
                                class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg cursor-pointer "
                                aria-expanded="true" aria-controls="users-accordion-collapse-1">
                                <svg class="size-5 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                        d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                </svg>

                                Shares

                                <svg class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 "
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="m18 15-6-6-6 6" />
                                </svg>

                                <svg class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 "
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>

                            <div id="users-accordion-collapse-1 "
                                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                role="region" aria-labelledby="users-accordion">
                                <ul class="hs-accordion-group pt-1 ps-7 space-y-1" data-hs-accordion-always-open>
                                    <li class="hs-accordion" id="users-accordion-sub-1">
                                        <button type="button"
                                            class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                            aria-expanded="true" aria-controls="users-accordion-sub-1-collapse-1">
                                            Shared with you


                                        </button>

                                        <!-- <div id="users-accordion-sub-1-collapse-1"
                                            class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                            role="region" aria-labelledby="users-accordion-sub-1">
                                            <ul class="pt-1 ps-2 space-y-1">
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 "
                                                        href="#">
                                                        Link 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 "
                                                        href="#">
                                                        Link 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 "
                                                        href="#">
                                                        Link 3
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> -->
                                    </li>

                                    <li class="hs-accordion" id="users-accordion-sub-2">
                                        <button type="button"
                                            class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                            aria-expanded="true" aria-controls="users-accordion-sub-2-collapse-1">
                                            Shared with others

                                        </button>


                                    </li>
                                    <li class="hs-accordion" id="users-accordion-sub-2">
                                        <button type="button"
                                            class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                            aria-expanded="true" aria-controls="users-accordion-sub-2-collapse-1">
                                            Shared by link


                                        </button>


                                    </li>
                                    <li class="hs-accordion" id="users-accordion-sub-2">
                                        <button type="button"
                                            class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                            aria-expanded="true" aria-controls="users-accordion-sub-2-collapse-1">
                                            Delete Shares


                                        </button>


                                    </li>
                                    <li class="hs-accordion" id="users-accordion-sub-2">
                                        <button type="button"
                                            class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                            aria-expanded="true" aria-controls="users-accordion-sub-2-collapse-1">
                                            Pending Shares


                                        </button>

                                        <!-- <div id="users-accordion-sub-2-collapse-1"
                                            class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                                            role="region" aria-labelledby="users-accordion-sub-2">
                                            <ul class="pt-1 ps-2 space-y-1">
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                                        href="#">
                                                        Link 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 "
                                                        href="#">
                                                        Link 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 "
                                                        href="#">
                                                        Link 3
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> -->
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
import { ref } from 'vue'

const isSidebarOpen = ref(true)
const isSubMenu1Open = ref(false)
const isSubMenu2Open = ref(false)
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
</style>