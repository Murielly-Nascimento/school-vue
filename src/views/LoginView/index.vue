<template>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<logo-ufu></logo-ufu>
				
				<div class="formulario">
					<login-title></login-title>
					<login-form action="/auth/login"></login-form>
				</div>
			</div>
			<div class="col-md-6">
				<login-banner></login-banner>
			</div>
		</div>
	</div>
</template>

<script setup>
	import LogoUfu from '@/components/LogoUfu.vue';
	import { LoginTitle, LoginForm, LoginBanner } from './_components';
</script>

<style>
@import '@/assets/scss/main.scss';

body {
	background-color: #010214;
	/* font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; */
}
</style>