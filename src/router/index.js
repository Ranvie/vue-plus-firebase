import { createWebHistory, createRouter } from "vue-router";
import HomePage from '@/views/HomePage/HomePage.vue'
import LoginPage from '@/views/LoginPage/LoginPage.vue'

const routes = [
  {
    path: "/", name: "Home", component: HomePage
  },
  {
    path: "/login", name: "Login", component: LoginPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;