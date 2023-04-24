<template>
	<DisciplinaContainer :links="links">
		<ul class="container ementa-list">
			<li>
				<div class="row">
					<div class="col-1" id="image">
						<img src="@/assets/img/documento.png" alt="icon de documento" width="64" height="62">
					</div>
					<div class="col-5" id="descricao">
						<h4>Arquivo</h4>
						<h6>Ficha de Componente Curricular</h6>
					</div>
					<div class="col" id="icon">
						<a :href="disciplina.link" target="_blank">
							<font-awesome-icon icon="fa-solid fa-link" />
						</a>
					</div>
				</div>
			</li>
			<li>
				<div class="row">
					<div class="col" id="descricao">
						<h4>Descrição</h4>
						<p>{{ disciplina.descricao }}</p>
					</div>
				</div>
			</li>
		</ul>
	</DisciplinaContainer>
</template>

<script>
import { getDisciplinasById } from '@/mocks/mockDisciplinas';
import DisciplinaContainer from './DisciplinaContainer.vue';

export default {
	components: {
		DisciplinaContainer
	},
	data() {
		return {
			disciplina: getDisciplinasById(this.$route.params.id),
			links: [
				{prefix: 'disciplina', name: 'Documentos', active: false},
				{prefix: 'ementa', name: 'Ementa', active: true},
				{prefix: 'adicionar', name: 'Adicionar', active: false},
			]
		}
	},
	created() {
		console.log(this.$route.params.id, this.disciplina);
	}
}
</script>

<style lang="scss">
	ul.ementa-list {
		list-style-type: none;
		color:white;
		margin-top: 30px;

		li {
			padding: 10px;
			border: solid 1px;
			margin-bottom: 20px;
		}
	}

	#image{
		padding-top: 5px;
		padding-left: 20px;
	}

	#descricao{
		padding-top: 5px;
	}

	#icon{
		font-size: 2.3em;
		text-align: right;
		padding-top: 5px;
		padding-right: 30px;
	}
</style>