<template>
	<button id="show-modal" @click="showModal = true" class="btn btn-salvar">Cadastrar Disciplina</button>
	<Teleport to="body">
		<div :show="showModal" @close="showModal = false">
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
							<button class="modal-default-button" @click="deleteAccount()">
								Confirmar
							</button>
							<button class="modal-default-button" @click="$emit('close')">
								Cancelar
							</button>
						</div>
					</div>
				</div>
			</Transition>
		</div>
	</Teleport>
</template>

<script>
export default {
	data() {
		return {
			showModal: false
		}
	}
}
</script>

<style>
.btn-salvar{
	border-radius: 30px;
	border-style: solid;
	border-color: #38b6ff;
	background-color: #0a223c;
	color: #38b6ff;
	margin-top: 5px;
	padding: 10px;
	width: 200px;
}

.btn-salvar:hover {
	background-color: #38b6ff;
	color: #010214;
}
</style>