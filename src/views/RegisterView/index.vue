<template>
	<register-wires side="right" />
	<div class="container mt-3">	
		<div class="row justify-content-center">
			<div class="col-md-6">
				<logo-ufu></logo-ufu>
				<div class="register-form">
					<register-title></register-title>	
					<register-form action="/users/register"></register-form>
				</div>
			</div>
		</div>
	</div>
	<register-wires side="left" />
</template>

<script setup>
	import LogoUfu from '@/components/LogoUfu.vue';
	import { RegisterWires, RegisterTitle, RegisterForm } from './_components';
</script>

<style>
body {
	background-color: #0a223c;
}

.register-form {
	margin-top: 50px;
}
</style>