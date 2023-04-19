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
    },
	{
		path: '/home',
		name: 'home',
		component: () => import('../views/HomeView.vue')
	},
	{
		path: '/gradeCurricular',
		name: 'gradeCurricular',
		component: () => import('../views/GradeCurricularView.vue')
	},
	{
		path: '/docentes',
		name: 'docentes',
		component: () => import('../views/DocentesView.vue')
	},
	{
		path: '/contato',
		name: 'contato',
		component: () => import('../views/ContatoView.vue')
	},
	{
		path: '/perfil',
		name: 'perfil',
		component: () => import('../views/PerfilView.vue')
	},
	{
		path:'/materia',
		name: 'materia',
		component: () => import('../views/MateriaView.vue')
	}
  ]
})

export default router
