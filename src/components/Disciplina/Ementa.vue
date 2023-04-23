<template>
	<header class="titulo">
		<h2>{{ disciplina.nome }}</h2>
		<hr>
	</header>
	<div id="menu">
		<a :href="'/disciplina/' + disciplina.id" class="btn btn-salvar">Documentos</a>	
		<a :href="'/ementa/' + disciplina.id" class="btn btn-salvar" id="ativo">Ementa</a>	
		<a :href="'/adicionar/' + disciplina.id" class="btn btn-salvar">Adicionar</a>	
	</div>
	<div>
		<ul class="container">
			<li>
				<div class="row">
					<div class="col-1" id="image">
						<img src="../../assets/img/documento.png" alt="icon de documento" width="64" height="62">
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
	#menu{
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

	ul{
		list-style-type: none;
		color:white;
		margin-top: 30px;
	}

	li{
		padding: 20px;
		border: solid 1px;
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

<script src="../dados.js"></script>