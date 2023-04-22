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
						<h6>Ficha de Componente Curricular</h6>
					</div>
					<div class="col" id="icon">
						<a href="#">
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