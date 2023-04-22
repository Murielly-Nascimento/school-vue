<template>
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