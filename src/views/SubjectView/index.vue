<template>
	<layout :title="subject.name">
		<article>
			<s-tabs inner-class="mt-5">
				<s-tab-item title="Documentos">
					<documents :subject="subject"></documents>
				</s-tab-item>
				<s-tab-item title="Ementa">
					<course-program :subject="subject"></course-program>
				</s-tab-item>
				<s-tab-item title="Adicionar">
					<add-resource :subject="subject" action="/"></add-resource>
				</s-tab-item>
			</s-tabs>
		</article>
	</layout>
</template>

<script>
import { Layout } from '@/layout';
import { STabs, STabItem } from '@/components';
import { Documents, CourseProgram, AddResource } from './_components';
import { getSubjectsById } from '@/mocks/mockSubjects';

export default {
	name: 'SubjectView',
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
			subject: getSubjectsById(this.$route.params.id),
		}	
	},		
}	
</script>
