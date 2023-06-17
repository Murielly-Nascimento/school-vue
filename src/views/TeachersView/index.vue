<template>
	<layout title="Docentes">
		<div>
			<button id="show-modal" @click="showModal = true" class="btn btn-salvar">Cadastrar Docente</button>
			<Teleport to="body">
				<modal :show="showModal" @close="showModal = false"></modal>
			</Teleport>
		</div>
		<div class="container">
			<div class="s-teacher-list--ufu" v-for="teacher in listOfTeachers" :key="teacher.id">
				<stretched-card
					:image="avatar[teacher.sex]"
					:title="teacher.name"
					:text="teacher.description"
				></stretched-card>
			</div>
		</div>
	</layout>
</template>

<script>
import { Layout } from "@/layout";
import { StretchedCard } from '@/components';
import Modal from "./_components/Modal.vue";
import { getProfessors } from "@/services";

export default {
	name: "TeachersView",
	components: {
    Layout,
    StretchedCard,
    Modal
},
data() {
	return {
		listOfTeachers: [],
		avatar: {
			"2": `@/assets/img/icon-gentleman.png`,
			"1": `@/assets/img/icon-lady.png`,
		},
		showModal: false,
	};
},
beforeCreate(){
	getProfessors()
		.then(response => {
			let aux = response.data;
			console.log(aux);
			this.listOfTeachers = aux;
			
		})
		.catch(error => console.warn(error));
}
};
</script>


<style lang="scss" scoped>
.btn-salvar{
	border-radius: 30px;
	border-style: solid;
	border-color: #38b6ff;
	background-color: #0a223c;
	color: #38b6ff;
	margin-top: 5px;
	padding: 10px;
	width: 200px;
	margin-right: 15px;
}

.btn-salvar:hover {
	background-color: #38b6ff;
	color: #010214;
}
.s-teacher-list--ufu {
	.card--ufu {
		margin-top: 30px;
	}
}
</style>