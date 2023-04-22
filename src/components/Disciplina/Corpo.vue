<script>
	export default {
		data() {
			return {
			opcao: 1
			}
		}
	};
</script>

<template>
	<nav>
		<button class="btn btn-salvar" @click="opcao = 1">Documentos</button>
		<button class="btn btn-salvar" @click="opcao = 2">Ementa</button>
		<button class="btn btn-salvar" @click="opcao = 3">Adicionar</button>
	</nav>
	<article>
		<section v-if="opcao == 1">
			OIIIIIInnnnnnnnnnnIII
		</section>
		<section v-else-if="opcao == 2">
			OIIIIIIIIIIIIIIIIII
		</section>
		<section v-else-if="opcao == 3">
			EOOOOOOOOOOOOO	
		</section>
	</article>
</template>

<style>
	nav{
		margin-left: 20px;
	}

	.btn-salvar{
		border-radius: 30px;
		border-style: solid;
		border-color: #38b6ff;
		background-color: #0a223c;
		color: #38b6ff;
		margin: 5px;
		padding: 5px;
		width: 110px;
	}

	.btn-salvar:hover, #ativo{
		background-color: #38b6ff;
		color: black;
	}
</style>
