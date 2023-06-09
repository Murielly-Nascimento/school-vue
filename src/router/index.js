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
		path: '/disciplina/:id',
		component: () => import('../views/DisciplinaView.vue'),
		meta:{
			reload: true,
		},
	},
	{
		path: '/ementa/:id',
		component: () => import('../views/EmentaView.vue'),
		meta:{
			reload: true,
		},
	},
	{
		path: '/adicionar/:id',
		component: () => import('../views/AdicionarView.vue'),
		meta:{
			reload: true,
		},
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
	}
  ]
})

export default router
