<template>
  <layout title="Docentes">
	<div class="container">
		<div class="s-teacher-list--ufu" v-for="docente in docentes" :key="docente.id">
			<stretched-card
				:image="avatar[docente.sexo]"
				:title="docente.nome"
				:text="docente.interesses"
			></stretched-card>
		</div>
	</div>
  </layout>
</template>

<script>
import { Layout } from "@/layout";
import { StretchedCard } from '@/components';
import { docentes } from '@/mocks/mockDocentes.js';

export default {
	name: "ListaDeDocentes",
	components: {
		Layout,
		StretchedCard
	},
	data() {
		return {
			docentes,
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