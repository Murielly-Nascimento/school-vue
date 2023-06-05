<template>
	<div class="row">
		<div class="col">
			<div v-if="userInfo.sex == 'Female'">
				<register-icon sex="female"></register-icon>
			</div>
			<div v-else>
				<register-icon sex="male"></register-icon>
			</div>
		</div>
		<div class="col">
			<div class="btn btn-salvar">
				{{ userInfo.firstName }} {{ userInfo.lastName }}
			</div>
			<div class="btn btn-salvar">
				<b>{{ userInfo.email }} </b>
			</div>
			<div class="btn btn-salvar">
				<b>*************</b>
			</div>
			<div class="btn btn-salvar">
				{{ userInfo.register_number }}
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
import { getUserData } from '@/services';
import RegisterIcon from '@/components/RegisterIcon.vue';

export default {
	name: 'ProfileView',
	components: {
		RegisterIcon
	},
	data() {
		return {
			userInfo: null,
		}
	},
	created(){
		const res = getUserData();
		this.userInfo = res;
		console.log(this.userInfo);	
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