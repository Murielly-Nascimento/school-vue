<template>
	<header class="app-header">
		<div class="row h-100">
			<div class="col col-md-12 col-xl app-header-item">
				<button class="toggle-navigation">
					<font-awesome-icon :icon="['far', 'bars']" />
				</button>
				<logo-ufu></logo-ufu>
			</div>
			<div class="col col-md-12 col-xl pr-4 app-header-item">
				<div class="d-flex d-flex justify-content-center justify-content-xl-end mt-3 mt-xl-0">
					<nav class="navigation">
						<router-link
							v-for="route in routes"
							:class="'nav-item'"
							:key="route.link"
							:to="route.link"
							v-text="route.name"
						></router-link>
					</nav>
					<!-- 
					<router-link class="nav-item" :class="{'active': linkClasses['/']}" to="/">Home</router-link>
					<router-link class="nav-item" :class="{'active': linkClasses['/grade-curricular']}" to="/grade-curricular">Grade Curricular</router-link>
					<router-link class="nav-item" :class="{'active': linkClasses['/docentes']}" to="/docentes">Docentes</router-link>
					<router-link class="nav-item" :class="{'active': linkClasses['/contato']}" to="/contato">Contato</router-link>
					-->
					<div class="dropdown">
						<button
							class="btn-profile"
							type="button"
							id="profile-dropdown"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							>
							<font-awesome-icon icon="fa-solid fa-circle-user" />
						</button>
						<ul class="dropdown-menu profile-dropdown" aria-labelledby="profile-dropdown">
							<li>
								<router-link class="dropdown-item" to="/perfil">Perfil</router-link>
								<hr class="profile-dropdown-divisor" />
							</li>app-header-item
							<li><button type="button" @click="logout">Sair</button></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { logout } from '@/services';
import LogoUfu from '../components/LogoUfu.vue';

export default {
	components: {
		logout,
		LogoUfu
	},
	data() {
		return {
			routes: [
				{ link: '/', name: 'Início', active: false },
				{ link: '/grade-curricular', name: 'Grade Curricular', active: false },
				{ link: '/docentes', name: 'Docentes', active: false },
				{ link: '/contato', name: 'Contato', active: false },
			]
		}
	},
	created () {
		// this.setActive();
	},
	methods: {
		// setActive(suffix) {
		// 	this.routes.forEach(route => {
		// 		route.active = this.hasRoute(suffix)
		// 	});
		// },
		// hasRoute(suffix) {
		// 	const { href, search } = location;
		// 	return href.replace(search, '').includes(suffix);
		// }
	},
}

</script>

<style lang="scss">
.btn-profile {
	margin: {
		left: 1rem;
		right: 2rem;
	}
	background-color: transparent;
	padding: 0 !important;
	border-radius: 50%;
	border: none;
	outline: none;

	.fa-circle-user {
		color: #38b6ff;
	}
}

.navigation {
	text-align: right;
	margin-right: 10px;
	margin-bottom: 40px;

	a {
		display: inline-block;
		text-decoration: none;
		padding: 10px;
		font-size: 16px;
		color:white;

		&.nav-item.router-link-active {
			color: var(--bs-info);
			font-weight: bold;
		}
		&:hover{
			color:#38b6ff;
		}
	}

	.nav-item {
		font-family: "Garet";
		text-transform: uppercase;
	}
}

.profile-dropdown {
	background-color: #38b6ff;
	color: black;
	text-align: center;

	hr.profile-dropdown-divisor {
		width: 90%;
		height: 1px;
		color: #85858545;
		margin: 0 auto !important;
	}

	a, button {
		background-color: inherit;
		text-align: inherit;
		color: inherit;
		width: 100%;
		border: none;
		outline: none;
		padding: 10px;

		&:hover{
			background-color:#294d73;
			color: #f0f0f5;
		}
	}
}

header.app-header {
	padding: 10px 40px;
}

@media (max-width: 699px) {
	.app-header {
		height: 150px;

		.app-header-item {
			height: inherit;
			display: flex;
			align-items: center;
		}
	}

	.logo-ufu {
		margin-left: 10px;
		text-align: center;
	}

	.navigation {
		display: none;
	}
	
	.toggle-navigation {
		display: block;
		background-color: transparent;
		border: none;
		outline: none;
	}

	.fa-circle-user {
		font-size: 3.5rem;
	}

	.dropdown {
		display: flex;
		align-items: center;
	}
}

@media (min-width: 700px) and (max-width: 1199px) {
	.app-header {
		height: auto;
		margin-top: 20px;

		.app-header-item {
			height: inherit;
			display: block;
		}
	}

	.logo-ufu {
		margin-left: 10px;
		text-align: center;
	}
	
	.navigation {
		display: block;
	}
	
	.toggle-navigation {
		display: none;
	}

	.fa-circle-user {
		font-size: 3rem;
	}
}

@media (min-width: 1200px) {
	.app-header {
		height: auto;
		margin-top: 20px;

		.app-header-item {
			height: inherit;
			display: block;
		}
	}

	.logo-ufu {
		margin-left: 20px;
		text-align: left;
	}
	
	.navigation {
		display: block;
	}
	
	.toggle-navigation {
		display: none;
	}

	.fa-circle-user {
		font-size: 2.5rem;
	}
}
</style>