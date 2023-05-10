<template>
	<Layout title="Grade Curricular">
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
import { SAccordion, SAccordionList, SButtonGroup } from '@/components';
import {
	getSubjectsById,
	getSubjectsGroupByPeriod
} from '@/mocks/mockSubjects';

export default {
	name: 'CurriculumView',
	components: {
		Layout,
		SAccordion,
		SAccordionList,
		SButtonGroup,
	},
	data() {
		return {
			subjects: getSubjectsGroupByPeriod(),
			subject: getSubjectsById(this.$route.params.id),
		}
	},
	computed: {
		linkGroup() {
			return Object.keys(this.subjects).map((index) => {
				const subjects = this.subjects[index];
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

