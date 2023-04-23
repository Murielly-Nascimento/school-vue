<template>
	<header class="titulo">
		<h2>{{ disciplina.nome }}</h2>
		<hr>
	</header>
	<div id="menu">
		<a :href="'/disciplina/' + disciplina.id" class="btn btn-salvar" id="ativo">Documentos</a>	
		<a :href="'/ementa/' + disciplina.id" class="btn btn-salvar">Ementa</a>	
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
						<h6>Arrays e estruturas básicas</h6>
					</div>
					<div class="col" id="icon">
						<font-awesome-icon icon="fa-solid fa-download" />
					</div>
				</div>
			</li>
			<li>
				<div class="row">
					<div class="col-1" id="image">
						<img src="../../assets/img/video.png" alt="icon de video" width="64" height="62">
					</div>
					<div class="col-5" id="descricao">
						<h4>Vídeo</h4>
						<h6>Aula 01 - Introdução a Programação</h6>
					</div>
					<div class="col" id="icon">
						<font-awesome-icon icon="fa-solid fa-link" />
					</div>
				</div>
			</li>
			<li>
				<div class="row">
					<div class="col-1" id="image">
						<img src="../../assets/img/codigo.png" alt="icon de git" width="64" height="62">
					</div>
					<div class="col-5" id="descricao">
						<h4>Código</h4>
						<h6>Arrays e Laços de Repetição</h6>
					</div>
					<div class="col" id="icon">
						<font-awesome-icon icon="fa-solid fa-download" />
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
		padding: 10px;
		border: solid 1px;
		margin-bottom: 20px;
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