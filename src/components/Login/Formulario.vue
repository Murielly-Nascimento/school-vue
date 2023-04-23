<template>
	<Form @submit.prevent="onSubmit" class="mx-auto col-10 col-md-8 col-lg-6">
		<div class="row">
			<div class="col">
				<Field name="email" type="email" :rules="validarEmail" autocomplete="off" placeholder="Email Institucional" class="campo"></Field>
				<ErrorMessage name="email" class="erro"/>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<Field name="senha" type="text" :rules="validarSenha" autocomplete="off" placeholder="Senha" class="campo"></Field>
				<ErrorMessage name="senha" class="erro"></ErrorMessage>
			</div>
		</div>

		<div class="row m-1">
			<button class="btn text-black btn-salvar" role="button">
				<b>Entrar</b> <font-awesome-icon icon="fa-solid fa-arrow-right" />
			</button>
		</div>
	
		<div class="row m-2">
			<a href="" class="link">
				Esqueceu sua senha? 
			</a>
		</div>
		
		<div class="row m-3">
			<a class="btn" role="button" href="/cadastro" id="btn-cadastrar">
				<b>Cadastrar</b> 
			</a>
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
					return 'A senha deve conter mais que 8 dígitos.';
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
	.formulario{
		margin-top: 50px;
		text-align: center;
	}

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
		border-radius: 5px;
		background-color: #f1f1f1;
		text-align: center;
		padding: 10px;
	}

	.btn-salvar:hover{
		background-color: #38b6ff;
		border-color: blue;
	}

	.link{
		color: #a63535;
		text-decoration: none;
	}

	.link:hover{
		background-color: #010214;
		color: #38b6ff;
	}

	#btn-cadastrar{
		border-radius: 30px;
		border-style: solid;
		border-color: #38b6ff;
		background-color: #010214;
		color: #38b6ff;
		padding: 10px;
	}
	#btn-cadastrar:hover{
		background-color: #38b6ff;
		color: #010214;
	}
</style>

