<script setup>
	import Navegacao from '../components/Navegacao.vue';
	import Sair from '../components/Sair.vue';
	import Adicionar from '../components/Disciplina/Adicionar.vue';
</script>

<template>
	<div>
		<Navegacao></Navegacao>
		<article>
			<Adicionar></Adicionar>
		</article>
		<Sair></Sair>
	</div>
</template>

<style>
	@import '../assets/main.css';
</style>
