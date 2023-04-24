<template>
	<table id="tabela" v-for="docente in docentes" :key="docente.id">
		<tr>
			<th>
				<div class="row celula">
					<div class="col-2" v-if="docente.sexo" id="image">
						<img src="../../assets/img/gentleman.png" width="90" height="87">
					</div>
					<div class="col-2" v-else id="image">
						<img src="../../assets/img/lady.png" width="90" height="87">
					</div>
					<div class="col-8">
						<h3>{{ docente.nome }}</h3>
						<p>{{ docente.interesses }}</p>
					</div>
					<div class="col-2">
						<a :href="docente.link" id="icon" target="_blank">
							<font-awesome-icon icon="fa-solid fa-link" />
						</a>
					</div>
				</div>
			</th>
		</tr>
	</table>
</template>

<style>
	#tabela{
		margin-top: 50px;
	}

	.celula{
		border: solid 1px;
		border-color: white;
		padding: 10px;
	}

	#icon{
		font-size: 2.3em;
		text-align: right;
		padding-right: 0px;
	}
</style>

<script src="./docentes.js"></script>