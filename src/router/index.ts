import { createRouter, createWebHistory } from "vue-router";
import { HOME, NOT_FOUND } from "@/shared/constants/router";

const HomeView = () => import("../views/HomeView.vue");
const ExpiredView = () => import("../views/ExpiredView.vue");
const NotFoundView = () => import("../views/NotFoundView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: HOME.ROOT,
      component: HomeView,
    },
    {
      path: "/expired",
      name: NOT_FOUND.ROOT,
      component: ExpiredView,
    },
    {
      path: "/not-found",
      name: NOT_FOUND.EXPIRED,
      component: NotFoundView,
    },
  ],
});

export default router;
