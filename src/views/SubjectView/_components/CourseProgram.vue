<template>
	<div class="container">
		<stretched-card
			image="@/assets/img/documento.png"
			title="Arquivo"
			text="Ficha de Componente Curricular"
		></stretched-card>
		<div class="row bordered">
			<div class="col" id="descricao">
				<h4>Descrição</h4>
				<p>{{ subject.description }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { StretchedCard } from '@/components';

export default {
	name: 'CourseProgram',
	components: {
		StretchedCard
	},
	props: {
		subject: {
			type: Object,
		},
	},
}
</script>

<style lang="scss">
	.bordered {
		border: solid 1px;
		color:white;
		margin-top: 30px;
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