<template>
	<DisciplinaContainer :links="links">
		<Formulario></Formulario>
	</DisciplinaContainer>
</template>

<script>
import DisciplinaContainer from '../DisciplinaContainer.vue';
import Formulario from '@/components/Disciplina/Adicionar/Formulario.vue';

export default {
	components: {
		DisciplinaContainer,
		Formulario,
	},
	data() {
		return {
			links: [
				{prefix: 'disciplina', name: 'Documentos', active: false},
				{prefix: 'ementa', name: 'Ementa', active: false},
				{prefix: 'adicionar', name: 'Adicionar', active: true},
			]
		}
	}
}
</script>

<style>
	.titulo {
		padding-top: 20px;
		padding-left: 30px;
	}

	.titulo h2 {
		color:#38b6ff;
		text-align: left;
	}

	hr {
		height: 2px;
		color: gray;
		background-color: gray;
		opacity: 1;
		width: 30%;
	}
</style>