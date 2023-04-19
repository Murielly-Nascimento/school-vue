<script setup>
	import { RouterLink, RouterView } from 'vue-router'
	import Navegacao from '../components/Navegacao.vue'
	import Sair from '../components/Sair.vue'
</script>

<template>
	<div>
		<Navegacao></Navegacao>
		<article>
			<header class="titulo">
				<h2>Introdução à Programação de Computadores</h2>
				<hr>
			</header>
			<section>
				<nav>
					<RouterLink to="" class="btn btn-salvar">Documentos</RouterLink>
					<RouterLink to="" class="btn btn-salvar">Ementa</RouterLink>
					<RouterLink to="" class="btn btn-salvar">Adicionar</RouterLink>
				</nav>
				<RouterView></RouterView>
				<Sair></Sair>
			</section>
		</article>
	</div>
</template>

<style>
	@import '../assets/main.css';

	.titulo{
		padding-top: 20px;
		padding-left: 30px;
	}

	.titulo h2{
		color:#38b6ff;
		text-align: left;
	}

	hr{
		height: 2px;
		color: gray;
		background-color: gray;
		opacity: 1;
		width: 30%;
	}

	nav{
		margin-left: 20px;
	}

	.btn-salvar{
		border-radius: 30px;
		border-style: solid;
		border-color: #38b6ff;
		background-color: #0a223c;
		color: #38b6ff;
		margin: 5px;
		padding: 5px;
		width: 110px;
	}

	.btn-salvar:hover{
		background-color: #38b6ff;
		color: white;
	}
</style>