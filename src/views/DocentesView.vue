<script setup>
	import Navegacao from '../components/Navegacao.vue';
	import Titulo from '../components/Docentes/Titulo.vue';
	import ListaDeDocentes from '../components/Docentes/ListaDeDocentes.vue'
</script>

<template>
	<div>
		<Navegacao></Navegacao>
		<div class="container">
			<Titulo></Titulo>
			<ListaDeDocentes></ListaDeDocentes>
		</div>
	</div>
</template>

<style>
	@import '../assets/main.css';
</style>