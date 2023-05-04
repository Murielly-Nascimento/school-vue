<template>
	<Layout title="Grade Curricular">
		<article>
			<s-accordion-list align="center">
				<s-accordion
					v-for="group in linkGroup"
					:key="group.id"
					:title="group.periodo + 'º Período'"
				>
					<s-button-group align="center" :links="group.disciplinas"></s-button-group>
				</s-accordion>
			</s-accordion-list>
		</article>
	</Layout>
</template>

<script>
import { Layout } from '@/layout';
import { SAccordion, SAccordionList, SButtonGroup } from '@/components';
import {
	getDisciplinasById,
	getDisciplinasGroupByPeriodo
} from '@/mocks/mockDisciplinas';

export default {
	components: {
		Layout,
		SAccordion,
		SAccordionList,
		SButtonGroup,
	},
	data() {
		return {
			disciplinas: getDisciplinasGroupByPeriodo(),
			disciplina: getDisciplinasById(this.$route.params.id),
		}
	},
	computed: {
		linkGroup() {
			return Object.keys(this.disciplinas).map((index) => {
				const disciplinas = this.disciplinas[index];
				const first = disciplinas[0];
				return {
					id: index,
					periodo: first?.periodo,
					disciplinas: Object.values(disciplinas)
						.map(({ nome: title, id }) => (
							{ id, title, link: '/disciplina/' + id }
						))
				}
			})
		}
	}
}
</script>

