<script setup>
	import Navegacao from '../components/Navegacao.vue';
	import Sair from '../components/Sair.vue';
	import Ementa from '../components/Disciplina/Ementa.vue';
</script>

<template>
	<div>
		<Navegacao></Navegacao>
		<article>
			<Ementa></Ementa>
		</article>
		<Sair></Sair>
	</div>
</template>

<style>
	@import '../assets/main.css';
</style>
