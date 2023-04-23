<script setup>
	import Navegacao from '../components/Navegacao.vue';
	import Sair from '../components/Sair.vue';
	import Documentos from '../components/Disciplina/Documentos.vue';
</script>

<template>
	<div>
		<Navegacao></Navegacao>
		<article>
			<Documentos></Documentos>
		</article>
		<Sair></Sair>
	</div>
</template>

<style>
	@import '../assets/main.css';
</style>
