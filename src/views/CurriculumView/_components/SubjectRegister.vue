<template>
	<button id="show-modal" @click="showModal = true" class="btn btn-salvar">Cadastrar Disciplina</button>
	<Teleport to="body">
		<modal :show="showModal" @close="showModal = false"></modal>
	</Teleport>
</template>

<script>
import Modal from './Modal.vue'

export default {
	components: {
		Modal
	},
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