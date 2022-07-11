import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/appointment",
    name: "appointment",
    component: () =>
      import(
        /* webpackChunkName: "appointment" */ "../views/AppointmentView.vue"
      ),
  },
  {
    path: "/create",
    name: "createAppointment",
    component: () =>
      import(
        /* webpackChunkName: "appointment" */ "../views/CreateAppointmentView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
