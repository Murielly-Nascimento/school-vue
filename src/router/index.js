import { createRouter, createWebHistory } from 'vue-router';
import { AuthMiddleware } from '@/middleware';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/LoginView/index.vue')
	},
	{
		path: '/cadastro',
		name: 'cadastro',
		component: () => import('../views/RegisterView/index.vue')
	},
	{
		path: '/',
		name: 'home',
		component: () => import('../views/HomeView/index.vue'),
		meta: {
			middleware: AuthMiddleware,
		}
	},
	{
		path: '/gradeCurricular',
		name: 'gradeCurricular',
		component: () => import('../views/CurriculumView/index.vue'),
		meta: {
			middleware: AuthMiddleware,
		}
	},
	{
		path: '/disciplina/:id',
		component: () => import('../views/SubjectView/index.vue'),
		meta: {
			reload: true,
			middleware: AuthMiddleware,
		},
	},
	{
		path: '/docentes',
		name: 'docentes',
		component: () => import('../views/TeachersView/index.vue'),
		meta: {
			middleware: AuthMiddleware,
		}
	},
	{
		path: '/contato',
		name: 'contato',
		component: () => import('../views/ContactView/index.vue'),
		meta: {
			middleware: AuthMiddleware,
		}
	},
	{
		path: '/perfil',
		name: 'perfil',
		component: () => import('../views/ProfileView/index.vue'),
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
