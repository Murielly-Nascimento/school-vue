<script setup>
	import LogoUFU from '../components/LogoUFU.vue';
</script>


<template>
	<header>
		<div class="row">
			<div class="col">
				<LogoUFU></LogoUFU>
			</div>
			<div class="col">
				<nav id="navegacao">
					<a href="/home">Home</a>
					<a href="/gradeCurricular">Grade Curricular</a>
					<a href="/docentes">Docentes</a>
					<a href="/contato">Contato</a>
					<a href="/perfil" style="color: #38b6ff; font-size: 1.8em;">
						<font-awesome-icon icon="fa-solid fa-circle-user"/>
					</a>
				</nav>
			</div>
		</div>
	</header>
</template>

<style>
	#navegacao{
		text-align: right;
		margin-top: 20px;
		margin-right: 10px;
		margin-bottom: 40px;
	}

	#navegacao a{
		display: inline-block;
		text-decoration: none;
		padding: 10px;
		font-size: 16px;
		color:white;
	}

	#navegacao a:hover{
		color:#38b6ff;
	}
</style>