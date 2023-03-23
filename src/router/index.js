import { createWebHashHistory, createRouter } from "vue-router";

import CustomerLogin from "../components/CustomerLogin.vue";
import PhotographerLogin from "../components/PhotographerLogin.vue";




const routes = [
  {
    path: "/",
    name: 'CustomerLogin',
    component: CustomerLogin
  },
  {
    path: "/photo",
    name: 'PhotographerLogin',
    component: PhotographerLogin
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router