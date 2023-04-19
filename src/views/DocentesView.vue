<script setup>
	import Navegacao from '../components/Navegacao.vue'
</script>

<template>
	<div>
		<Navegacao></Navegacao>
		<div class="container">
			<div class="titulo">
				<h1>Docentes</h1>
				<hr>
			</div>
			<table id="tabela">
				<tr>
					<th>
						<div class="row celula">
							<div class="col-2">
								<img src="../assets/img/lady.png" alt="Lady" width="90" height="87">
							</div>
							<div class="col-9">
								<h3>Professora Christiane Regina Soares Brasil</h3>
								<p>Tem dedicado sua pesquisa às técnicas de otimização computacional e algoritmos bioinspirados.</p>
							</div>
						</div>
					</th>
				</tr>
				<tr>
					<th>
						<div class="row celula">
							<div class="col-2">
								<img src="../assets/img/gentleman.png" alt="Lady" width="90" height="87">
							</div>
							<div class="col-9">
								<h3>Professor  João Henrique de Souza Pereira </h3>
								<p>Tem experiência na área de Inteligência Artificial, atuando principalmente nos seguintes temas: 
									computação natural, bioinformática, redes neurais artificiais e computação evolutiva.</p>
							</div>
						</div>
					</th>
				</tr>
				<tr>
					<th>
						<div class="row celula">
							<div class="col-2">
								<img src="../assets/img/lady.png" alt="Lady" width="90" height="87">
							</div>
							<div class="col-9">
								<h3>Professora Maria Adriana Vidigal de Lima</h3>
								<p>Bancos de dados NoSQL, dados semi-estruturados e XML, restrições de integridade aplicadas à dados semi-estruturados.</p>
							</div>
						</div>
					</th>
				</tr>
				<tr>
					<th>
						<div class="row celula">
							<div class="col-2">
								<img src="../assets/img/gentleman.png" alt="Lady" width="90" height="87">
							</div>
							<div class="col-9">
								<h3>Professor  Alexsandro Santos Soares </h3>
								<p>Tem experiência na área de Inteligência Artificial, atuando principalmente nos seguintes temas: computação natural,
									bioinformática, redes neurais artificiais e computação evolutiva..</p>
							</div>
						</div>
					</th>
				</tr>
			</table>
		</div>
	</div>
</template>

<style>
	@import '../assets/main.css';

	.titulo h1{
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		color:#38b6ff;
		text-align: left;
	}

	hr{
		height: 2px;
		color: white;
		background-color: white;
		opacity: 1;
		width: 30%;
	}

	#tabela{
		margin-top: 50px;
	}

	tr{
		margin-bottom: 50px;
	}

	.celula{
		border: solid;
		border-color: white;
		padding: 10px;
	}



</style>