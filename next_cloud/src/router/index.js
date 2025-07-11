// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import DashboardHome from "../views/DashboardHome.vue";

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
import Recent from "../views/files/Recent.vue";
import Files from "../views/files/Files.vue";
import Favourites from "../views/files/Favourites.vue";
import GroupFolders from "../views/files/GroupFolders.vue";
const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "DashboardHome",
        component: DashboardHome,
      },
      {
        path: "/dashboard/files",
        
        children: [
          {
            path: "",
            // Redirect /dashboard/files → /dashboard/files/allfiles
          },
          {
            path: "allfiles",
            name: "AllFiles",
            component: Files,
          },
          {
            path: "recent",
            name: "Recent",
            component:Recent,
          },
          {
            path: "favorites",
            name: "Favorites",
            component:Favourites
          },
          {
            path: "groups",
            name: "Groups",
            component: GroupFolders,
          },
        ],
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
