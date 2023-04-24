<template>
	<header class="titulo">
		<h2>{{ disciplina.nome }}</h2>
		<hr />
	</header>
	<div class="navigation-menu">
		<router-link
            v-for="(link, index) in links"
            :key="index"
            :to="'/' + link.prefix + '/' + $route.params.id"
            class="btn btn-tab"
            :class="{ 'ativo': link.active }"
        >
            {{ link.name }}
        </router-link>
	</div>
	<div>
		<slot :disciplina="disciplina"></slot>
	</div>
</template>

<script>
import { getDisciplinasById } from '@/mocks/mockDisciplinas';

export default {
	name: 'DisciplinaContainer',
    props: {
        links: {
            type: Array
        }
    },
	data() {
		return {
			disciplina: getDisciplinasById(this.$route.params.id),
		}
	},
	created() {
		console.log(this.$route.params.id, this.disciplina);
	}
}
</script>

<style lang="scss" scoped>
	.titulo {
		padding-top: 20px;
		padding-left: 30px;

		h2 {
			color:#38b6ff;
			text-align: left;
		}
	}


	hr {
		height: 2px;
		color: gray;
		background-color: gray;
		opacity: 1;
		width: 30%;
	}
	
	.navigation-menu {
		margin-left: 20px;
	}

	.btn-tab {
		border-radius: 30px;
		border-style: solid;
		border-color: #38b6ff;
		background-color: #0a223c;
		color: #38b6ff;
		margin: 5px;
		padding: 5px;
		width: 110px;

        &:hover, &.ativo {
            background-color: #38b6ff;
            color: black;
        }
	}
</style>