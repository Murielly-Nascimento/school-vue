<script setup>
	import Navegacao from '../components/Navegacao.vue'
	import ListaDeDisciplia from '../components/GradeCurricular/ListaDeDisciplina.vue';
	import Sair from '../components/Sair.vue'
</script>

<template>
	<div>
		<Navegacao></Navegacao>
		<article>
			<header class="titulo">
				<h2>Grade Curricular</h2>
				<hr>
			</header>
			
			<section>
				<ListaDeDisciplia></ListaDeDisciplia>
				<Sair></Sair>
			</section>
		</article>
	</div>
</template>

<style>
	@import '../assets/main.css';

	.titulo{
		padding-left: 10px;
		padding-bottom: 10px;
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
</style>
