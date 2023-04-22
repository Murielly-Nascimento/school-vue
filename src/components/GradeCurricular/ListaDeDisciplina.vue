<template>
	<div>
		<ul>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias" role="button" aria-expanded="false" aria-controls="collapseMaterias">
					<h4>1º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias">
					<div class="lista" v-for="disciplina in primeiroPeriodo" :key="disciplina.id">
						<RouterLink :to="'/disciplina/' + disciplina.id">
							{{ disciplina.nome }}
						</RouterLink>	
					</div>
				</div>
			</li>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias2" role="button" aria-expanded="false" aria-controls="collapseMaterias2">
					<h4>2º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias2">
					<div class="lista" v-for="disciplina in segundoPeriodo" :key="disciplina.id">
						<RouterLink :to="'/disciplina/' + disciplina.id">
							{{ disciplina.nome }}
						</RouterLink>	
					</div>
				</div>
			</li>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias3" role="button" aria-expanded="false" aria-controls="collapseMaterias3">
					<h4>3º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias3">
					<div class="lista" v-for="disciplina in terceiroPeriodo" :key="disciplina.id">
						<RouterLink :to="'/disciplina/' + disciplina.id">
							{{ disciplina.nome }}
						</RouterLink>	
					</div>
				</div>
			</li>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias4" role="button" aria-expanded="false" aria-controls="collapseMaterias4">
					<h4>4º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias4">
					<div class="lista" v-for="disciplina in quartoPeriodo" :key="disciplina.id">
						<RouterLink :to="'/disciplina/' + disciplina.id">
							{{ disciplina.nome }}
						</RouterLink>	
					</div>
				</div>
			</li>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias5" role="button" aria-expanded="false" aria-controls="collapseMaterias5">
					<h4>5º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias5">
					<div class="lista" v-for="disciplina in quintoPeriodo" :key="disciplina.id">
						<RouterLink :to="'/disciplina/' + disciplina.id">
							{{ disciplina.nome }}
						</RouterLink>	
					</div>
				</div>
			</li>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias6" role="button" aria-expanded="false" aria-controls="collapseMaterias6">
					<h4>6º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias6">
					<div class="lista" v-for="disciplina in sextoPeriodo" :key="disciplina.id">
						<RouterLink :to="'/disciplina/' + disciplina.id">
							{{ disciplina.nome }}
						</RouterLink>	
					</div>
				</div>
			</li>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias7" role="button" aria-expanded="false" aria-controls="collapseMaterias7">
					<h4>7º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias7">
					<div class="lista" v-for="disciplina in setimoPeriodo" :key="disciplina.id">
						<RouterLink :to="'/disciplina/' + disciplina.id">
							{{ disciplina.nome }}
						</RouterLink>	
					</div>
				</div>
			</li>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias8" role="button" aria-expanded="false" aria-controls="collapseMaterias8">
					<h4>8º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias8">
					<div class="lista" v-for="disciplina in oitavoPeriodo" :key="disciplina.id">
						<RouterLink :to="'/disciplina/' + disciplina.id">
							{{ disciplina.nome }}
						</RouterLink>	
					</div>
				</div>
			</li>
		</ul>
	</div>

</template>

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
</style>

<script src="../dados.js"></script>