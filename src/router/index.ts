import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("../views/HomeView.vue");
const ExpiredView = () => import("../views/ExpiredView.vue");
const NotFoundView = () => import("../views/NotFoundView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/expired",
      name: "Expired",
      component: ExpiredView,
    },
    {
      path: "/not-found",
      name: "Not Found",
      component: NotFoundView,
    },
  ],
});

export default router;
