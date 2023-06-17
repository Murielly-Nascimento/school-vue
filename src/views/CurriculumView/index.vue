<template>
	<Layout title="Grade Curricular">
		<article>
			<button id="show-modal" @click="showModal = true" class="btn btn-salvar">
				Cadastrar Disciplina
			</button>
			<teleport to="body">
				<modal :show="showModal" @close="showModal = false" action="/subject"></modal>
			</teleport>
		</article>
		<article>
			<s-accordion-list align="center">
				<s-accordion
					v-for="group in linkGroup"
					:key="group.id"
					:title="group.period + 'º Período'"
					
				>
					<s-button-group align="center" :links="group.subjects"></s-button-group>
				</s-accordion>
			</s-accordion-list>
		</article>
	</Layout>
</template>

<script>
import { Layout } from '@/layout';
import groupBy from 'lodash/groupBy';
import { Modal } from './_components';
import { getSubjects } from '@/services';
import { SAccordion, SAccordionList, SButtonGroup } from '@/components';

export default {
	name: 'CurriculumView',
	components: {
		Layout,
		SAccordion,
		SAccordionList,
		SButtonGroup,
		Modal,
	},
	data() {
		return {
			listOfSubjects: [],
			showModal: false,
		}
	},
	beforeCreate(){
		getSubjects()
			.then(response => {
				this.listOfSubjects = groupBy(response.data, 'period');
				console.log(this.listOfSubjects);
			})
			.catch(error => console.warn(error));
	},
	computed: {
		linkGroup() {
			return Object.keys(this.listOfSubjects).map((index) => {
				const subjects = this.listOfSubjects[index];
				const first = subjects[0];
				return {
					id: index,
					period: first?.period,
					subjects: Object.values(subjects)
						.map(({ name: title, id }) => (
							{ id, title, link: '/disciplina/' + id }
						))
				}
			})
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
	margin-right: 15px;
}

.btn-salvar:hover {
	background-color: #38b6ff;
	color: #010214;
}
</style>