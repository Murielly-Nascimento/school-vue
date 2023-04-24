<template>
	<Form @submit="onSubmit">
		<div>
			<Field v-model="form.firstName" name="nome" type="text" :rules="validarCampo" autocomplete="off" placeholder="Nome" class="campo"></Field>
			<ErrorMessage name="nome" class="erro"/>
		</div>
		<div>
			<Field v-model="form.lastName" name="sobrenome" type="text" :rules="validarCampo" autocomplete="off" placeholder="Sobrenome" class="campo"></Field>
			<ErrorMessage name="sobrenome" class="erro"/>
		</div>
		<div>
			<Field v-model="form.registration" name="matricula" type="text" :rules="validarCampo" autocomplete="off" placeholder="Matrícula" class="campo"></Field>
			<ErrorMessage name="matricula" class="erro"/>
		</div>
		<div>
			<Field v-model="form.email" name="email" type="email" :rules="validarEmail" autocomplete="off" placeholder="Email Institucional" class="campo"></Field>
			<ErrorMessage name="email" class="erro"/>
		</div>
		<div>
			<Field v-model="form.password" name="senha" type="password" :rules="validarSenha" autocomplete="off" placeholder="Senha" class="campo"></Field>
			<ErrorMessage name="senha" class="erro"/>
		</div>

		<div class="alert alert-success mt-4 mx-2" role="alert" v-if="messageSuccess.length">
			{{ messageSuccess }}
		</div>

		<div class="alert alert-danger mt-4 mx-2" role="alert" v-if="messageError.length">
			{{ messageError }}
		</div>

		<div class="row">
			<div class="col">
				<router-link class="btn btn-salvar" to="login" role="button">
					<font-awesome-icon icon="fa-solid fa-arrow-left" /> <b>Logar</b> 
				</router-link>
			</div>
			<div class="col">
				<button class="btn btn-salvar" type="submit">
					<b>Salvar</b> <font-awesome-icon icon="fa-solid fa-arrow-right" />
				</button>
			</div>
		</div>  
	</Form>
</template>

<script>
import AppForm from '@/mixins/Form/AppForm';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { SessionHelper } from '@/helpers'
import { login } from '@/services'

export default {
	mixins: [AppForm],
	components: {
		Form,
		Field,
		ErrorMessage,
	},
	data() {
		return {
			form: {
				firstName: '',
				lastName: '',
				registration: '',
				email: '',
				password: '',
			},
			messageError: '',
			messageSuccess: '',
		}
	},
	methods: {
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

			if (value.length < 8) {
				return 'A senha deve conter no mínimo 8 dígitos.';
			}

			// const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;
			// if (!regex.test(value)) {
			// 	return 'A senha deve conter números e símbolos.';
			// }

			return true;
		},
        onSuccess(data) {
            this.submiting = false;
			this.messageSuccess = 'Cadastro Efetuado com sucesso, aguarde o redirecionamento';

			setTimeout(() => {
				login(this.form.email, this.form.password)
					.then(response => {
						SessionHelper.setEncodedItem('tk', response);
						this.$router.push('/')
					})
					.catch(error => {
						this.$router.push('/login')
					})
			}, 1000);
        },
		onFail() {
            this.submiting = false;
			this.messageError = 'Erro ao cadastrar';
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