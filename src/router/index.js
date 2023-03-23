import { createWebHashHistory, createRouter } from "vue-router";

import CustomerLogin from "@/components/CustomerLogin";
import PhotographerLogin from "@/components/PhotographerLogin";
import CustomerRegister from '@/components/CustomerRegister'
import PhotographerRegister from "@/components/PhotographerRegister";



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
  },
  {
    path: "/fregister",
    name: 'PhotographerRegister',
    component: PhotographerRegister
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router