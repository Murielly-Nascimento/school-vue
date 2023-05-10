<template>
  <layout title="Docentes">
	<div class="container">
		<div class="s-teacher-list--ufu" v-for="teacher in teachers" :key="teacher.id">
			<stretched-card
				:image="avatar[teacher.sex]"
				:title="teacher.name"
				:text="teacher.interests"
			></stretched-card>
		</div>
	</div>
  </layout>
</template>

<script>
import { Layout } from "@/layout";
import { StretchedCard } from '@/components';
import { teachers } from '@/mocks/mockTeachers.js';

export default {
	name: "TeachersView",
	components: {
		Layout,
		StretchedCard
	},
	data() {
		return {
			teachers,
			avatar: {
				male: `@/assets/img/gentleman.png`,
				female: `@/assets/img/lady.png`,
			}
		};
	},
};
</script>


<style lang="scss" scoped>
.s-teacher-list--ufu {
	.card--ufu {
		margin-top: 30px;
	}
}
</style>