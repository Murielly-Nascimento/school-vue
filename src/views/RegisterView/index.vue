<template>
	<register-wires side="right" />
	<div class="container mt-3">	
		<div class="row justify-content-center">
			<div class="col-md-6">
				<logo-ufu></logo-ufu>
				<div class="register-form">
					<register-title></register-title>	
					<div class="row">
						<register-icon sex="female"></register-icon>
						<register-icon sex="male"></register-icon>
					</div>
					<register-form action="/users/register"></register-form>
				</div>
			</div>
		</div>
	</div>
	<register-wires side="left" />
</template>

<script setup>
import LogoUfu from '@/components/LogoUfu.vue';
import { RegisterWires, RegisterTitle, RegisterForm, RegisterIcon } from './_components';
</script>

<style>
body {
	background-color: #0a223c;
	text-align: center;
}

.register-form {
	margin-top: 50px;
}
</style>