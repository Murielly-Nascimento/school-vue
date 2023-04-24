<script setup>
	import LogoUFU from '../components/LogoUFU.vue';
	import FiosDireita from '../components/Cadastro/FiosDireita.vue'
	import FiosEsquerda from '../components/Cadastro/FiosEsquerda.vue'
	import Titulo from '../components/Cadastro/Titulo.vue';
	import Formulario from '../components/Cadastro/Formulario.vue';
</script>

<template>
	<FiosDireita></FiosDireita>
	<div class="container">	
		<div class="row justify-content-center">
			<div class="col-md-6">
				<LogoUFU></LogoUFU>
				<div class="formulario">
					<Titulo></Titulo>	
					<Formulario></Formulario>
				</div>
			</div>
		</div>
	</div>
	<FiosEsquerda></FiosEsquerda>
</template>

<style>
	body{
		background-color: #0a223c;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		text-align: center;
	}

	.formulario{
		margin-top: 50px;
	}
</style>