import { createWebHashHistory, createRouter } from "vue-router";

import CustomerLogin from "@/components/CustomerLogin";
import PhotographerLogin from "@/components/PhotographerLogin";
import CustomerRegister from '@/components/CustomerRegister'



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
  },
  {
    path: "/register",
    name: 'CustomerRegister',
    component: CustomerRegister
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router