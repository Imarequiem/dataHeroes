import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/:pathMatch(.*)*?',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

export default router
