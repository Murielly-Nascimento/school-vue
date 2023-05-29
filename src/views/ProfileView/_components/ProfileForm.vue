<template>
	<div class="row">
		<div class="col">
			<div v-if="form.sex == 1">
				<register-icon sex="female"></register-icon>
			</div>
			<div v-else>
				<register-icon sex="male"></register-icon>
			</div>
		</div>
		<div class="col">
			<div class="btn btn-salvar">
				Igor Carvalho Reis{{ form.firstName }} {{ form.lastName }}
			</div>
			<div class="btn btn-salvar">
				igor.carvalho@ufu.br<b>{{ form.email }} </b>
			</div>
			<div class="btn btn-salvar">
				<b>*************</b>
			</div>
			<div class="btn btn-salvar">
				113BSI111{{ form.ufuRegister }}
			</div>
		</div>
	</div>
	<div class="d-flex flex-row justify-content-center">
		<div class="btn btn-delete" role="button">
			<b>Apagar Conta</b> <font-awesome-icon icon="fa-solid fa-trash" />
		</div>
		<div class="btn btn-docs" role="button" to="">
			<b>Meus documentos</b> <font-awesome-icon icon="fa-solid fa-arrow-right" />
		</div>
	</div>
</template>

<script>
import { AppForm } from '@/mixins';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useSession } from '@/helpers';
import { getUser } from '@/services';
import RegisterIcon from '@/components/RegisterIcon.vue';

export default {
	mixins: [AppForm],
	components: {
		Field,
		VeeForm: Form,
		ErrorMessage,
		RegisterIcon
	},
	setup() {
		const session = useSession();
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
	beforeCreate(){
		getUser()
			.then(async _ => {
				this.data = form
			})
			.catch(error => console.warn('Not authenticated'));
	}
};
</script>

<style scoped>
	.btn-salvar{
		border-radius: 30px;
		border-style: solid;
		border-color: #38b6ff;
		background-color: #0a223c;
		color: #38b6ff;
		margin-top: 20px;
		padding: 10px;
		width: 300px;
	}

	.btn-salvar:hover{
		background-color: #38b6ff;
		color: #010214;
	}

	.btn-delete{
		background-color: #a63535;
		margin-top: 50px;
		margin-right: 10px;
		padding: 10px;
		width: 200px;
	}

	.btn-docs{
		background-color: #38b6ff;
		margin-top: 50px;
		margin-left: 10px;
		padding: 10px;
		width: 200px;
	}
</style>