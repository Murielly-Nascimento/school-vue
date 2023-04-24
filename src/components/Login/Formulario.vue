<template>
	<Form @submit="onSubmit" :validation-schema="schema" class="mx-auto col-10 col-md-8 col-lg-6">
		<div class="row">
			<div class="col-12">
				<Field v-model="form.email" name="email" type="email" placeholder="Email Institucional" class="campo"></Field>
				<ErrorMessage name="email" class="erro"/>
			</div>
			<div class="col-12">
				<Field v-model="form.password" name="password" type="password" placeholder="Senha" class="campo"></Field>
				<ErrorMessage name="password" class="erro"></ErrorMessage>
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
			<a class="btn" role="button" href="/cadastro" id="btn-cadastrar">
				<b>Cadastrar</b> 
			</a>
		</div>
	</Form>
</template>

<script>
import AppForm from '@/mixins/Form/AppForm';
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate';
import { SessionHelper } from '@/helpers'
import { getUser } from '@/services'

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
				email: '',
				password: '',
			},
			schema: {
				email: 'required|email',
				password: 'required',
			}
		}
	},
	beforeCreate() {
		getUser()
			.then(async _ => {
				await this.$router.push('/')
			})
			.catch(error => console.warn('Not authenticated'));
	},
	mounted () {
		defineRule('required', (value) => {
			if (!value || !value.length) {
				return 'Este campo é obrigatório';
			}
			return true;
		});
		defineRule('email', (value) => {
			const regex = /^[A-Z0-9._%+-]+@ufu+\.[A-Z]{2,4}$/i;
			if (!regex.test(value)) {
				return 'Para entrar é obrigatório o uso de um e-mail institucional.';
			}
			return true;
		});
	},
	methods: {
        onSuccess(data) {
            this.submiting = false;

            SessionHelper.setEncodedItem('tk', data);
			this.$router.push('/')
        },
	},
}
</script>

<style>
	.formulario {
		margin-top: 50px;
		text-align: center;
	}

	.campo {
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

	.erro {
		color: #a63535;
	}

	.btn-salvar {
		border-radius: 5px;
		background-color: #f1f1f1;
		text-align: center;
		padding: 10px;
	}

	.btn-salvar:hover {
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

