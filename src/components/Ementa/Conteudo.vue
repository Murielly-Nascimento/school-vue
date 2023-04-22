<template>
	<div>
		<header class="titulo">
			<h2>{{ disciplina.nome }}</h2>
			<hr>
		</header>
		<section>
			<nav>
				<RouterLink class="btn btn-salvar" :to="'/documentos/' + disciplina.id">Documentos</RouterLink>
				<RouterLink class="btn btn-salvar" :to="'/ementa/' + disciplina.id" id="ativo">Ementa</RouterLink>
				<RouterLink class="btn btn-salvar" :to="'/adicionar/' + disciplina.id">Adicionar</RouterLink>
			</nav>
			<div>
				<div>
					<RouterView></RouterView>
				</div>
			</div>
		</section>
	</div>
</template>

<style>
	.titulo{
		padding-top: 20px;
		padding-left: 30px;
	}

	.titulo h2{
		color:#38b6ff;
		text-align: left;
	}

	hr{
		height: 2px;
		color: gray;
		background-color: gray;
		opacity: 1;
		width: 30%;
	}

	nav{
		margin-left: 20px;
	}

	.btn-salvar{
		border-radius: 30px;
		border-style: solid;
		border-color: #38b6ff;
		background-color: #0a223c;
		color: #38b6ff;
		margin: 5px;
		padding: 5px;
		width: 110px;
	}

	.btn-salvar:hover, #ativo{
		background-color: #38b6ff;
		color: black;
	}
</style>

<script src="../dados.js"></script>