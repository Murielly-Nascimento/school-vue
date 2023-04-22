<script setup>
	import Navegacao from '../Navegacao.vue'
	import Sair from '../Sair.vue'
	import Documentos from './Documentos.vue';
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

