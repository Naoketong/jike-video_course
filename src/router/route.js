import Login from "@/views/login";
import Index from "@/views/index";
import Course from "@/views/course";
import Course_details from "@/views/course_details";
import Course_search from "@/views/course_search";

export default [
  {
    path: "/"
    // redirect: { name: 'Login' },
  },
  {
    path: "/admin",
    name: "Login",
    component: Login
  },
  {
    path: "/admin/index",
    name: "Index",
    component: Index
  },
  {
    path: "/admin/course",
    name: "Course",
    component: Course
  },
  {
    path: "/admin/course_search/:id",
    name: "Course_search",
    component: Course_search
  },
  {
    path: "/admin/course/:id",
    name: "Course_details",
    component: Course_details
  }

  // {
  //     path: '/admin/',
  //     name: '',
  //     component:
  // },
];
