import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/users",
      name: "Users",
      component: () => import("../views/UsersView.vue"),
    },
    {
      path: "/orders",
      name: "Orders",
      component: () => import("../views/OrdersView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("../views/404View.vue"),
    },
  ]
})

export default router;