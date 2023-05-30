<template>
	<header class="app-header">
		<div class="row">
			<div class="col">
				<logo-ufu></logo-ufu>
			</div>
			<div class="col pr-4">
				<nav class="navegacao d-flex justify-content-end">
					<router-link
						v-for="route in routes"
						:class="'nav-item'"
						:key="route.link"
						:to="route.link"
						v-text="route.name"
					></router-link>
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
							</li>
							<li><button type="button" @click="logout">Sair</button></li>
						</ul>
					</div>
				</nav>
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
			font-size: 2.5rem;
			color: #38b6ff;
		}
	}

	.navegacao {
		text-align: right;
		margin-top: 20px;
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
</style>