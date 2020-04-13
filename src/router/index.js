import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./route.js";
// import Login from '@/views/login'
// import Index from '@/views/index'
// import Course from '@/views/course'
// import Course_details from '@/views/course_details'

Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/admin",
//     name: "Login",
//     component: Login
//   },
//   {
//     path: '/admin/index',
//     name: 'Index',
//     component: Index,
//   },
//   {
//     path: '/admin/course',
//     name: 'Course',
//     component: Course,
//   },
//   {
//     path: '/admin/course/:id',
//     name: 'Course_details',
//     component: Course_details,
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
// ];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: routes
});

export default router;
