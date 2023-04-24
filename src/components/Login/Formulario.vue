<template>
	<form @submit.prevent="onSubmit" class="mx-auto col-10 col-md-8 col-lg-6">
		<div class="row">
			<div class="col">
				<Field v-model="form.email" name="email" type="email" autocomplete="off" placeholder="Email Institucional" class="campo"></Field>
				<ErrorMessage name="email" class="erro"/>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<Field v-model="form.password" name="senha" type="password" autocomplete="off" placeholder="Senha" class="campo"></Field>
				<ErrorMessage name="senha" class="erro"></ErrorMessage>
			</div>
		</div>

		<div class="row m-1">
			<button class="btn text-black btn-salvar" type="submit">
				<b>Entrar</b> <font-awesome-icon icon="fa-solid fa-arrow-right" />
			</button>
		</div>
	
		<div class="row m-2">
			<a to="/" class="link">
				Esqueceu sua senha? 
			</a>
		</div>
		
		<div class="row m-3">
			<button type="button" class="btn" id="btn-cadastrar">
				<b>Cadastrar</b> 
			</button>
		</div>
	</form>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { api } from '@/api';

export default {
	components: {
		Form,
		Field,
		ErrorMessage,
	},
	data() {
		return {
			form: {
				email: '',
				password: '',
			}
		}
	},
	methods: {
		onSubmit() {
			api.post('http://localhost:3000/auth/login', this.form)
				.then(response => {
					console.log(response);
				})
				.catch(error => {
					console.warn(error);
				})
		},
	},
}
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

