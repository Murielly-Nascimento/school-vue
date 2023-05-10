import { createRouter, createWebHistory } from 'vue-router';
import { AuthMiddleware } from '@/middleware';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/login',
			name: 'Login',
			component: () => import('../views/LoginView/index.vue')
		},
		{
			path: '/cadastro',
			name: 'Cadastro',
			component: () => import('../views/RegisterView/index.vue')
		},
		{
			path: '/',
			name: 'Home',
			component: () => import('../views/HomeView/index.vue'),
			meta: {
				middleware: AuthMiddleware,
			}
		},
		{
			path: '/grade-curricular',
			name: 'GradeCurricular',
			component: () => import('../views/CurriculumView/index.vue'),
			meta: {
				middleware: AuthMiddleware,
			}
		},
		{
			path: '/disciplina/:id',
			name: 'Disciplina',
			component: () => import('../views/SubjectView/index.vue'),
			meta: {
				reload: true,
				middleware: AuthMiddleware,
			},
		},
		{
			path: '/docentes',
			name: 'Docentes',
			component: () => import('../views/TeachersView/index.vue'),
			meta: {
				middleware: AuthMiddleware,
			}
		},
		{
			path: '/contato',
			name: 'Contato',
			component: () => import('../views/ContactView/index.vue'),
			meta: {
				middleware: AuthMiddleware,
			}
		},
		{
			path: '/perfil',
			name: 'Perfil',
			component: () => import('../views/ProfileView/index.vue'),
			meta: {
				middleware: AuthMiddleware,
			}
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'PageNotFound',
			component: () => import('../views/PageNotFound/index.vue'),
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
