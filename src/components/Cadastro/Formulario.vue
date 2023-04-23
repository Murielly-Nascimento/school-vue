<template>
	<Form @submit.prevent="onSubmit">
		<div>
			<Field name="nome" type="text" :rules="validarCampo" autocomplete="off" placeholder="Nome" class="campo"></Field>
			<ErrorMessage name="nome" class="erro"/>
		</div>
		<div>
			<Field name="matricula" type="text" :rules="validarCampo" autocomplete="off" placeholder="Matrícula" class="campo"></Field>
			<ErrorMessage name="matricula" class="erro"/>
		</div>
		<div>
			<Field name="email" type="email" :rules="validarEmail" autocomplete="off" placeholder="Email Institucional" class="campo"></Field>
			<ErrorMessage name="email" class="erro"/>
		</div>
		<div>
			<Field name="senha" type="senha" :rules="validarSenha" autocomplete="off" placeholder="Senha" class="campo"></Field>
			<ErrorMessage name="senha" class="erro"/>
		</div>

		<div class="row">
			<div class="col">
				<button class="btn btn-salvar" href="\" role="button">
					<font-awesome-icon icon="fa-solid fa-arrow-left" /> <b>Logar</b> 
				</button>
			</div>
			<div class="col">
				<button class="btn btn-salvar" href="/home" role="button">
					<b>Salvar</b> <font-awesome-icon icon="fa-solid fa-arrow-right" />
				</button>
			</div>
		</div>  
	</Form>
</template>

<script>
	import { Form, Field, ErrorMessage } from 'vee-validate';

	export default {
		components: {
			Form,
			Field,
			ErrorMessage,
		},
		methods: {
			onSubmit() {
				console.log(JSON.stringify(values, null, 2));
			},
			validarCampo(value){
				if(!value){
					return 'Esse campo é obrigatório.';
				}
				
				return true;
			},
			validarEmail(value){
				if(!value){
					return 'Esse campo é obrigatório.';
				}

				const regex = /^[A-Z0-9._%+-]+@ufu+\.[A-Z]{2,4}$/i;
				if (!regex.test(value)) {
					return 'Use um e-mail institucional.';
				}

				return true;
			},
			validarSenha(value){
				if(!value){
					return 'Esse campo é obrigatório.';
				}

				if (value.length <= 8) {
					return 'A senha deve conter no mínimo 8 dígitos.';
				}

				const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;
				if (!regex.test(value)) {
					return 'A senha deve conter números e símbolos.';
				}

				return true;
			}
		},
	};
</script>

<style>
	.campo{
		background-color: #38b6ff;
		padding: 15px;
		width: 97%;
		border-radius: 1px;
		border-color: #010214;
		margin-top: 3px;
		margin-bottom: 3px;
	}

	::placeholder{
		color:black;
	}

	.erro{
		color: #a63535;
	}

	.btn-salvar{
		border-radius: 30px;
		border-style: solid;
		border-color: #38b6ff;
		background-color: #0a223c;
		color: #38b6ff;
		margin-top: 20px;
		padding: 10px;
		width: 200px;
	}

	.btn-salvar:hover{
		background-color: #38b6ff;
		color: #010214;
	}
</style>