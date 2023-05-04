<template>
	<layout :title="disciplina.nome">
		<article>
			<s-tabs inner-class="mt-5">
				<s-tab-item title="Documentos">
					<documents :disciplina="disciplina"></documents>
				</s-tab-item>
				<s-tab-item title="Ementa">
					<course-program :disciplina="disciplina"></course-program>
				</s-tab-item>
				<s-tab-item title="Adicionar">
					<add-resource :disciplina="disciplina" action="/"></add-resource>
				</s-tab-item>
			</s-tabs>
		</article>
	</layout>
</template>

<script>
import { Layout } from '@/layout';
import { STabs, STabItem } from '@/components';
import { Documents, CourseProgram, AddResource } from './_components';
import { getDisciplinasById } from '@/mocks/mockDisciplinas';

export default {
	name: 'DisciplinaView',
	components: {
		Layout,
		STabs,
		STabItem,
		AddResource,
		Documents,
		CourseProgram,
	},	
	data() {
		return {
			disciplina: getDisciplinasById(this.$route.params.id),
		}	
	},		
}	
</script>
