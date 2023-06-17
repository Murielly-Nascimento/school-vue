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
			<field v-model="form.name" name="nome" type="text" :rules="validarCampo" autocomplete="off" placeholder="Nome" class="s-form__field--ufu"></field>
			<error-message name="nome" class="text-danger text-center"/>
		</div>
		<div>
			<field v-model="form.email" name="email" type="email" :rules="validarCampo" autocomplete="off" placeholder="Email" class="s-form__field--ufu"></field>
			<error-message name="email" class="text-danger text-center"/>
		</div>
		<div>
			<field v-model="form.description" name="descricao" type="text" :rules="validarCampo" autocomplete="off" placeholder="Descrição" class="s-form__field--ufu"></field>
			<error-message name="descricao" class="text-danger text-center"/>
		</div>
		<div>
			<field v-model="form.facomPageUrl" name="paginaFACOM" type="text" :rules="validarCampo" autocomplete="off" placeholder="Link da página FACOM" class="s-form__field--ufu"></field>
			<error-message name="paginaFACOM" class="text-danger text-center"/>
		</div>
		<div class="alert alert-success mt-4 mx-2" role="alert" v-if="messageSuccess.length">
			{{ messageSuccess }}
		</div>

		<div class="alert alert-danger mt-4 mx-2" role="alert" v-if="messageError.length">
			{{ messageError }}
		</div>

		<div class="row">
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

export default {
	mixins: [AppForm],
	components: {
    Field,
    VeeForm: Form,
    ErrorMessage,
},
data() {
	return {
		form: {
			name: '',
			sex: '',
			email: '',
			photoPath: '',
			description: '',
			facomPageUrl: '',
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
	onSuccess(data) {
		this.submiting = false;
		this.messageSuccess = 'Cadastro Efetuado com sucesso';
		this.$router.go()
	},
	onFail() {
		this.submiting = false;
		this.messageError = 'Erro ao cadastrar';
	}
},
};
</script>

<style scoped>
	.s-form__field--ufu, .form-select{
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