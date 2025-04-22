import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/chat-study-edu', name: 'ChatAI', component: () => import("../views/ChatAI.vue")},
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Прокрутка к элементу с указанным ID
      return {
        el: to.hash,
        behavior: 'smooth', // Плавная прокрутка
      };
    }
    return { left: 0, top: 0 }; // Прокрутка к началу страницы по умолчанию
  }
})

export default router
