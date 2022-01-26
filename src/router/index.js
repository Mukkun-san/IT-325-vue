import Vue from "vue";
import VueRouter from "vue-router";
import { adminGuard, studentGuard } from "./guards";

// Route Vues Components
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import AdminLogin from "@/views/admin/AdminLogin.vue";
import Dashboard from "@/views/admin/Dashboard.vue";
import Students from "@/views/admin/Students.vue";
import Requests from "@/views/admin/Requests.vue";
import AdminGrades from "@/views/admin/Grades.vue";
import QuizGenerator from "@/views/admin/QuizGenerator";
import StudentLogin from "@/views/StudentLogin.vue";
import StudentSignup from "@/views/StudentSignup.vue";
import StudentGrades from "@/views/Grades.vue";

Vue.use(VueRouter);

const routes = [
  // ------------------ ADMIN ROUTES -------------------
  {
    path: "/admin/login",
    name: "AdminDashboard",
    component: AdminLogin,
    beforeEnter: adminGuard,
  },
  {
    path: "/admin/students",
    name: "Students",
    component: Students,
    beforeEnter: adminGuard,
  },
  {
    path: "/admin/requests",
    name: "Requests",
    component: Requests,
    beforeEnter: adminGuard,
  },
  {
    path: "/admin/grades",
    name: "AdminGrades",
    component: AdminGrades,
    beforeEnter: adminGuard,
  },
  {
    path: "/admin/generator",
    name: "QuizGenerator",
    component: QuizGenerator,
    beforeEnter: adminGuard,
  },
  {
    path: "/admin/dashboard",
    name: "dashboard",
    component: Dashboard,
    beforeEnter: adminGuard,
  },
  {
    path: "/admin",
    name: "admin",
    beforeEnter: (to, from, next) => {
      next("/admin/login");
    },
  },

  // ------------------ Public ROUTES -------------------
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: studentGuard,
  },
  {
    path: "/grades",
    name: "StudentGrades",
    component: StudentGrades,
    beforeEnter: studentGuard,
  },
  {
    path: "/login",
    name: "Login",
    component: StudentLogin,
    beforeEnter: studentGuard,
  },
  {
    path: "/signup",
    name: "Signup",
    component: StudentSignup,
    beforeEnter: studentGuard,
  },

  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
