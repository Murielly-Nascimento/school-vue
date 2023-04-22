<script setup>
	import Navegacao from '../Navegacao.vue'
	import Sair from '../Sair.vue'
	import Titulo from './Titulo.vue'
	import Corpo from './Corpo.vue'
</script>

<template>
	<div>
		<Navegacao></Navegacao>
		<article>
			<Titulo></Titulo>
			<section>
				<Corpo></Corpo>
			</section>
		</article>
		<Sair></Sair>
	</div>
</template>

