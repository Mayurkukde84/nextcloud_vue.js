// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import DashboardHome from "../views/DashboardHome.vue";
import Files from "../views/Files.vue";
import Photos from "../views/Photos.vue";
import Activity from "../views/Activity.vue";
import Talk from "../views/Talk.vue";

import Contacts from "../views/Contacts.vue";
import Calendar from "../views/Calendar.vue";
import Polls from "../views/Polls.vue";
import Forms from "../views/Forms.vue";
import Tasks from "../views/Tasks.vue";
import Conference from "../views/Conference.vue";
import Deck from "../views/Deck.vue";
import Collecation from "../views/Collecation.vue";
import Mail from "../views/Mail.vue";
const routes = [
  {
    path: "/",
    redirect: "/dashboard", // Redirect root to dashboard
  },
  {
    path: "/dashboard",
    component: DashboardLayout, // This route uses our DashboardLayout
    children: [
      {
        path: "", // Default child route for /dashboard
        name: "DashboardHome",
        component: DashboardHome,
      },
      {
        path: "files",
        name: "Files",
        component: Files,
      },
      {
        path: "photos",
        name: "Photos",
        component: Photos,
      },
      {
        path: "activity",
        name: "Activity",
        component: Activity,
      },
      {
        path: "",
        name: "Activity",
        component: Activity,
      },
      {
        path: "talk",
        name: "Talk",
        component: Talk,
      },
      {
        path: "mail",
        name: "Mail",
        component: Mail,
      },
      {
        path: "contacts",
        name: "Contacts",
        component: Contacts,
      },
      {
        path: "calendar",
        name: "Calendar",
        component: Calendar,
      },
      {
        path: "activity",
        name: "Activity",
        component: Activity,
      },
      {
        path: "deck",
        name: "Deck",
        component: Deck,
      },
      {
        path: "collecation",
        name: "Collecation",
        component: Collecation,
      },
      {
        path: "polls",
        name: "Polls",
        component: Polls,
      },
      {
        path: "forms",
        name: "Forms",
        component: Forms,
      },
      {
        path: "task",
        name: "Task",
        component: Tasks,
      },
      {
        path: "conference",
        name: "Conference",
        component: Conference,
      },
    ],
  },
  // Add other top-level routes here if needed (e.g., /login, /public-page)
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
