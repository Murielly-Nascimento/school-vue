<template>
	<vee-form @submit="onSubmit">
		<div>
			<field v-model="form.name" name="nome" type="text" :rules="validarCampo" autocomplete="off" placeholder="Nome" class="s-form__field--ufu"></field>
			<error-message name="nome" class="text-danger text-center"/>
		</div>
		<div>
			<field v-model="form.goal" name="objetivo" type="text" :rules="validarCampo" autocomplete="off" placeholder="Objetivos" class="s-form__field--ufu"></field>
			<error-message name="objetivo" class="text-danger text-center"/>
		</div>
		<div>
			<field v-model="form.curriculum" name="curriculo" type="text" :rules="validarCampo" autocomplete="off" placeholder="Link do Componente Curricular" class="s-form__field--ufu"></field>
			<error-message name="curriculo" class="text-danger text-center"/>
		</div>
		<div>
			<field v-model="form.ch_total" name="cargaHoraria" type="number" :rules="validarCampo" autocomplete="off" placeholder="Carga Horária" class="s-form__field--ufu"></field>
			<error-message name="cargaHoraria" class="text-danger text-center"/>
		</div>
		<div>
			<select v-model="form.period" class="form-select" aria-label="Lista de períodos" >
				<option value="" disabled selected hidden>Períodos</option>
				<option value="1">1º Período</option>
				<option value="2">2º Períodoo</option>
				<option value="3">3º Período</option>
				<option value="4">4º Período</option>
				<option value="5">5º Período</option>
				<option value="6">6º Período</option>
				<option value="7">7º Período</option>
				<option value="8">8º Período</option>
				<option value="9">Optativa</option>
			</select>
		</div>
		<div class="alert alert-success mt-4 mx-2" role="alert" v-if="messageSuccess.length">
			{{ messageSuccess }}
		</div>

		<div class="alert alert-danger mt-4 mx-2" role="alert" v-if="messageError.length">
			{{ messageError }}
		</div>

		<div class="row mb-5">
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
import { SMultiselect } from '@/components';
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
	mixins: [AppForm],
	components: {
		Field,
		VeeForm: Form,
		ErrorMessage,
		SMultiselect,
	},
	data() {
		return {
			form: {
				name: '',
				goal: '',
				curriculum: '',
				ch_total: '',
				period: '',
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
<!-- 
<style lang="scss">
.multiselect__tags {
	min-height: 58px;
	display: block;
	padding: 8px 40px 0 8px;
	border-radius: 0;
	border: none;
	background: #38b6ff;
	font-size: 14px;

	.multiselect__placeholder {
		color: #010214 !important;
    	margin: {
			top: 10px;
			bottom: 10px;
		}
	}

	.multiselect__input {
		background: #38b6ff;
		color: #010214;
	}
}

</style> -->

<style lang="scss" scoped>
	.s-form__field--ufu, .form-select{
		background-color: #38b6ff;
		padding: 15px;
		width: 100%;
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