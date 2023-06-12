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
import { getSubjectById } from '@/services';

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
			subject: {
				id: 0,
				name: '',
				period: 0,
				description: '',
				link: '',
			},
			messageError: '',
			messageSuccess: '',
		}	
	},
	beforeCreate(){
		getSubjectById(this.$route.params.id)
			.then(response => {
				const aux = response.data;
				this.subject.id = aux.id,
				this.subject.name = aux.name,
				this.subject.period = aux.period,
				this.subject.description = aux.goal,
				this.subject.link = aux.curriculum,
				console.log(this.subject);
			})
			.catch(error => console.warn(error));
	},	
}	
</script>
