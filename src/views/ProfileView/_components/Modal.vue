<template>
	<Transition name="modal">
		<div v-if="show" class="modal-mask">
			<div class="modal-container">
				<div class="modal-header">
					<h3>Remover Conta</h3>
				</div>
				<div class="modal-body">
					Todos os seus dados serão removidos e não poderão ser recuperados!
				</div>
				<div class="modal-footer">
					<button class="modal-confirm-button" @click="deleteAccount()">
						Confirmar
					</button>
					<button class="modal-default-button" @click="$emit('close')">
						Cancelar
					</button>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script>
	import {  getUserData, deleteUser } from '@/services';
	export default {
		props: {
			show: Boolean
		},
	methods:{
		deleteAccount(){
			const response = getUserData().id;
			console.log(response);

			deleteUser(response)             
				.then(_ => {
					console.log("Usuário removido com sucesso");
					this.$router.push('/login')

				})
				.catch(function (error){
					console.log(error)
				})
		}
	}
	}
</script>

<style>
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	transition: opacity 0.3s ease;
}

.modal-container {
	width: 600px;
	margin: auto;
	padding: 20px 30px;
	background-color: #0a223c;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
}

.modal-header h3 {
	margin-top: 0;
	color: #38b6ff;
	text-align: center;
}

.modal-body {
	margin: 20px 0;
}

.modal-default-button {
	float: right;
	background-color: #0a223c;
	border: none;
	color: #38b6ff;
	font-size: 20px;
}

.modal-confirm-button {
	float: right;
	background-color: #0a223c;
	border: none;
	color: #a63535;
	font-size: 20px;
}

.modal-enter-from {
	opacity: 0;
}

.modal-leave-to {
	opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>