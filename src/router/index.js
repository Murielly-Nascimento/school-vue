import { createRouter, createWebHistory } from 'vue-router';
import { AuthMiddleware } from '@/middleware';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/LoginView.vue')
	},
	{
		path: '/cadastro',
		name: 'cadastro',
		component: () => import('../views/CadastroView.vue')
	},
	{
		path: '/',
		name: 'home',
		component: () => import('../views/HomeView.vue'),
		meta: {
			middleware: AuthMiddleware,
		}
	},
	{
		path: '/gradeCurricular',
		name: 'gradeCurricular',
		component: () => import('../views/GradeCurricularView.vue'),
		meta: {
			middleware: AuthMiddleware,
		}
	},
	{
		path: '/disciplina/:id',
		component: () => import('../views/DisciplinaView.vue'),
		meta: {
			reload: true,
			middleware: AuthMiddleware,
		},
	},
	{
		path: '/ementa/:id',
		component: () => import('../views/EmentaView.vue'),
		meta: {
			reload: true,
			middleware: AuthMiddleware,
		},
	},
	{
		path: '/adicionar/:id',
		component: () => import('../views/AdicionarView.vue'),
		meta: {
			reload: true,
			middleware: AuthMiddleware,
		},
	},
	{
		path: '/docentes',
		name: 'docentes',
		component: () => import('../views/DocentesView.vue'),
		meta: {
			middleware: AuthMiddleware,
		}
	},
	{
		path: '/contato',
		name: 'contato',
		component: () => import('../views/ContatoView.vue'),
		meta: {
			middleware: AuthMiddleware,
		}
	},
	{
		path: '/perfil',
		name: 'perfil',
		component: () => import('../views/PerfilView.vue'),
		meta: {
			middleware: AuthMiddleware,
		}
	}
	]
})

function nextFactory(context, middleware, index) {
	const subsequentMiddleware = middleware[index];
	if (!subsequentMiddleware) {
		return context.next;
	};

	return (...parameters) => {
		context.next(...parameters);

		subsequentMiddleware({
			...context,
			next: nextFactory(context, middleware, index + 1)
		});
	};
}
  
router.beforeEach((to, from, next) => {
	if (to.meta.middleware) {
		const middleware = Array.isArray(to.meta.middleware)
			? to.meta.middleware
			: [to.meta.middleware];
	
		const context = { from, next, router, to };
		const currMiddleware = middleware[0];
	
		return currMiddleware({
			...context,
			next: nextFactory(context, middleware, 1)
		});
	}

	return next();
});

window.router = router;

export default router
