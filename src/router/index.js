import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./route.js";

Vue.use(VueRouter);



const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: routes
});

export default router;
