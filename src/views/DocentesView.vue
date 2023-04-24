<script setup>
	import Layout from '@/layout/Layout.vue';
	import ListaDeDocentes from '../components/Docentes/ListaDeDocentes.vue';
</script>

<template>
	<Layout>
		<div class="container">
			<Titulo></Titulo>
			<ListaDeDocentes></ListaDeDocentes>
		</div>
	</Layout>
</template>