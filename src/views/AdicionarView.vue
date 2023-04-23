<script setup>
	import Navegacao from '../components/Navegacao.vue';
	import Sair from '../components/Sair.vue';
	import Adicionar from '../components/Disciplina/Adicionar/Adicionar.vue';
	import Formulario from '../components/Disciplina/Adicionar/Formulario.vue';
</script>

<template>
	<div>
		<Navegacao></Navegacao>
		<article>
			<Adicionar></Adicionar>
			<Formulario></Formulario>
		</article>
		<Sair></Sair>
	</div>
</template>

<style>
	@import '../assets/main.css';
</style>
