<script setup>
	import LogoUFU from '../components/LogoUFU.vue';
	import Titulo from '../components/Login/Titulo.vue';
	import Formulario from '../components/Login/Formulario.vue';
	import Banner from '../components/Login/Banner.vue';
</script>

<template>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<LogoUFU></LogoUFU>
				
				<div class="formulario">
					<Titulo></Titulo>
					<Formulario action="/auth/login"></Formulario>
				</div>
			</div>
			<Banner></Banner>
		</div>
	</div>
</template>

<style>
@import '@/assets/main.css';

body {
	background-color: #010214;
	/* font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; */
}
</style>