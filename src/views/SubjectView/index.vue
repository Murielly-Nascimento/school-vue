<template>
	<layout :title="subject.name">
		<article v-if="!emptySubject">
			<s-tabs inner-class="my-5">
				<s-tab-item title="Documentos">
					<documents :subject="subject"></documents>
				</s-tab-item>
				<s-tab-item title="Ementa">
					<course-program :subject="subject"></course-program>
				</s-tab-item>
				<s-tab-item title="Adicionar">
					<add-resource :subject="subject" action="/resources"></add-resource>
				</s-tab-item>
			</s-tabs>
		</article>
	</layout>
</template>

<script>
import _ from 'lodash';
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
			subject: {},
			messageError: '',
			messageSuccess: '',
		}	
	},
	computed: {
		emptySubject() {
			return _.isEmpty(this.subject);
		}
	},
	created(){
		getSubjectById(this.$route.params.id)
			.then(response => {
				const aux = response.data;
				this.subject = {
					id: aux.id,
					name: aux.name,
					period: aux.period,
					description: aux.goal,
					link: aux.curriculum,
				}
			})
			.catch(error => console.warn(error));
	},	
}	
</script>
