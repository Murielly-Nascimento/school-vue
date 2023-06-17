<template>
	<nav class="navigation d-flex justify-content-end">
		<router-link class="nav-item" to="/">Home</router-link>
		<router-link class="nav-item" to="/disciplinas">Grade Curricular</router-link>
		<router-link class="nav-item" to="/docentes">Docentes</router-link>
		<router-link class="nav-item" to="/contato">Contato</router-link>
	</nav>
</template>

<script>
export default {
	name: 'NavBar',
}
</script>

<style lang="scss">
.navigation {
	text-align: right;
	margin-right: 10px;
	// margin-top: 20px;
	// margin-bottom: 40px;

	a {
		display: inline-block;
		text-decoration: none;
		padding: 10px;
		font-size: 16px;
		color:white;

		&:hover{
			color:#38b6ff;
		}
	}

	.nav-item {
		font-family: "Garet";
		text-transform: uppercase;

		&.router-link-exact-active {
			color: #38b6ff;
		}
	}
}

header.app-header {
	padding: 10px 40px;
}
</style>