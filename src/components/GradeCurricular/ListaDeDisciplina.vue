<template>
	<div>
		<ul>
			<li v-for="periodo in periodos" :key="periodo.id">
				<a
					role="button"
					class="btn collapsible"
					data-bs-toggle="collapse"
					aria-expanded="false"
					aria-controls="collapseMaterias"
					:href="'#collapseDisciplinas' + periodo.id"
				>
					<h4>{{ periodo.name }}</h4>
				</a>
				<div class="collapse" :id="'collapseDisciplinas' + periodo.id">
					<div class="lista" v-for="disciplina in disciplinas[periodo.id]" :key="disciplina.id">
						<router-link :to="'/disciplina/' + disciplina.id">
							{{ disciplina.nome }}
						</router-link>	
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import {
	getDisciplinasById,
	getDisciplinasGroupByPeriodo
} from '@/mocks/mockDisciplinas';
import { periodos } from '@/mocks/mockPeriodos';

export default {
	data() {
		return {
			periodos,
			disciplinas: getDisciplinasGroupByPeriodo(),
			disciplina: getDisciplinasById(this.$route.params.id),
		}
	},
}
</script>

<style>
	ul{
		list-style-type: none;
		text-align: center;
	}

	.collapsible{
		background-color: #0a223c;
		color:#38b6ff;
		cursor: pointer;
		width: 50%;
		border-bottom:solid 1px #38b6ff;
		outline: none;
	}

	.collapsible:hover{
		background-color: #38b6ff;
		color: white;
	}

	.lista{
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.lista a{
		display: block;
		text-decoration: none;
		color: white;
		padding: 5px;
	}

	/* @media */
</style>