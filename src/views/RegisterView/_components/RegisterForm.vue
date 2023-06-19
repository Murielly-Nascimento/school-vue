<template>
	<vee-form @submit="onSubmit">
		<div class="row">
			<div class="col">
				<div class="d-flex justify-content-center">
					<div class="form-check">
						<input v-model="form.sex" class="form-check-input" type="radio" name="sexOption" value="1" id="checkFemale">
						<label class="form-check-label" for="checkFemale">
							Feminino
						</label>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="d-flex justify-content-center">
					<div class="form-check">
						<input v-model="form.sex" class="form-check-input" type="radio" name="sexOption" value="2" id="checkMale">
						<label class="form-check-label" for="checkMale">
							Masculino
						</label>
					</div>
				</div>
			</div>
		</div>
		<div>
			<field v-model="form.firstName" name="nome" type="text" :rules="validarCampo" autocomplete="off" placeholder="Nome" class="s-form__field--ufu"></field>
			<error-message name="nome" class="text-danger text-center"/>
		</div>
		<div>
			<field v-model="form.lastName" name="sobrenome" type="text" :rules="validarCampo" autocomplete="off" placeholder="Sobrenome" class="s-form__field--ufu"></field>
			<error-message name="sobrenome" class="text-danger text-center"/>
		</div>
		<div>
			<field v-model="form.ufuRegister" name="matricula" type="text" :rules="validarCampo" autocomplete="off" placeholder="Matrícula" class="s-form__field--ufu"></field>
			<error-message name="matricula" class="text-danger text-center"/>
		</div>
		<div>
			<field v-model="form.email" name="email" type="email" :rules="validarEmail" autocomplete="off" placeholder="Email Institucional" class="s-form__field--ufu"></field>
			<error-message name="email" class="text-danger text-center"/>
		</div>
		<div>
			<field v-model="form.password" name="senha" type="password" :rules="validarSenha" autocomplete="off" placeholder="Senha" class="s-form__field--ufu"></field>
			<error-message name="senha" class="text-danger text-center"/>
		</div>
		<div class="alert alert-success mt-4 mx-2" role="alert" v-if="messageSuccess.length">
			{{ messageSuccess }}
		</div>

		<div class="alert alert-danger mt-4 mx-2" role="alert" v-if="messageError.length">
			{{ messageError }}
		</div>

		<div class="row mb-5">
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
	</vee-form>
</template>

<script>
import { AppForm } from '@/mixins';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useStorage } from '@/helpers'
import { login } from '@/services'


export default {
	mixins: [AppForm],
	components: {
    Field,
    VeeForm: Form,
    ErrorMessage,
},
	setup() {
		const session = useStorage();
		return { session };
	},
	data() {
		return {
			form: {
				firstName: '',
				lastName: '',
				ufuRegister: '',
				email: '',
				password: '',
				sex:'',
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
						this.session.setEncodedItem('tk', response);
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

<style scoped>
	.s-form__field--ufu {
		background-color: #38b6ff;
		padding: 15px;
		width: 97%;
		border-radius: 1px;
		border-color: #010214;
		margin-top: 3px;
		margin-bottom: 3px;
	}

	::placeholder {
		color:black;
	}

	.error {
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

	.form-check-label{
		color: white;
	}
</style>