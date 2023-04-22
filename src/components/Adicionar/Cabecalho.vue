<script setup>
	import Navegacao from '../Navegacao.vue'
	import Sair from '../Sair.vue'
	import Adicionar from './Adicionar.vue';
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

