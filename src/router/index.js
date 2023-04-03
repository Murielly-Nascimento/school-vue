import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/CadastroView.vue')
    }
  ]
})

export default router
