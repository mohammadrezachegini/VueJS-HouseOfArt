import { createWebHashHistory, createRouter } from "vue-router";

import CustomerLogin from "../components/CustomerLogin.vue";
// import PhotographerLogin from "../components/PhotographerLogin.vue";
// import CustomerRegister from "../components/CustomerRegister.vue";
// import PhotographerRegister from "../components/PhotographerRegister.vue";




const routes = [
  {
    path: "/",
    alias: "/customer-login",
    name: "CustomerLogin",
    component: CustomerLogin
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;