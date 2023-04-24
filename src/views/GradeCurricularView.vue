<script setup>
	import Layout from '@/layout/Layout.vue';
	import ListaDeDisciplia from '@/components/GradeCurricular/ListaDeDisciplina.vue';
</script>

<template>
	<Layout>
		<article>
			<header class="titulo">
				<h2>Grade Curricular</h2>
				<hr class="divisor">
			</header>
			
			<section>
				<ListaDeDisciplia></ListaDeDisciplia>
			</section>
		</article>
	</Layout>
</template>

<style>
	.titulo {
		padding-left: 10px;
		padding-bottom: 10px;
	}

	.titulo h2 {
		color:#38b6ff;
		text-align: left;
	}
</style>

<style scoped>
	hr.divisor {
		height: 2px;
		color: gray;
		background-color: gray;
		opacity: 1;
		width: 30%;
	}
</style>
