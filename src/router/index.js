import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeVue,
    children: [
      {
        path: "/",
        name: "main",
        component: () => import("@/views/Main.vue"),
      },
      {
        path: "/services",
        name: "services",
        component: () => import("@/views/Services.vue"),
      },
    ],
  },

  {
    path: "/:cathcAll(.*)",
    name: "404",
    component: () => import("@/views/Error404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, sPos) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 10,
      };
    }
  },
});
router.beforeEach((to, from) => {
  if (to.path == "/telegram") window.location.href = "https://t.me/digital_pay_support_bot";
});
export default router;
