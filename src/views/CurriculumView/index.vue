<template>
	<Layout title="Grade Curricular">
		<subject-register></subject-register>
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
import { SubjectRegister } from './_components';
import { Layout } from '@/layout';
import { SAccordion, SAccordionList, SButtonGroup } from '@/components';
import { getSubjects } from '@/services';
import groupBy from 'lodash/groupBy';

export default {
	name: 'CurriculumView',
	components: {
		Layout,
		SAccordion,
		SAccordionList,
		SButtonGroup,
		SubjectRegister,
	},
	data() {
		return {
			listOfSubjects: [],
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


