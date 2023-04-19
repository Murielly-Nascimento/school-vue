<script setup>
	import Navegacao from '../components/Navegacao.vue';
	import Sair from '../components/Sair.vue'
</script>

<template>
	<div>
		<Navegacao></Navegacao>
		<article class="row">
			<section class="col">
				<div id="banner">
					<img src="../assets/img/computador.png" alt="computador" width="661" height="500">
				</div>
			</section>
			<section class="col-6" id="conteudo">
				<header class="titulo">
					<h1><b>Sistemas de Informação</b></h1>
					<hr>
				</header>
				<div>
					<p>
						O Curso de Bacharelado em Sistemas de Informação foi criado no ano de 2009 e 
						teve o seu reconhecimento em 31 de Maio de 2013 por meio da Portaria 248/13 
						do Ministério da Educação.
					</p>
					<p>
						O Objetivo do Curso é preparar profissionais com sólida e ampla formação técnica na área
						de tecnologia da informação aplicada às organizações;
						Desenvolver discentes empreendedores, capazes de projetar, implementar e gerenciar a 
						infraestrutura de tecnlogia da informação envolvendo computadores, 
						comunicação e dados em sistemas organizacionais.
					</p>
				</div>
				<div>
					<a class="btn btn-salvar" role="button">
						<b>Saiba Mais</b> <font-awesome-icon icon="fa-solid fa-arrow-right" />
					</a>
				</div>
				<Sair></Sair>
			</section>
		</article>
	</div>
</template>

<style>
	@import '../assets/main.css';

	#conteudo{
		margin-bottom: 10px;
		padding: 50px;
		text-align: justify;
	}

	#banner{
		position: fixed;
		bottom: 0;
		left:0;
	}

	.titulo h1{
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		color:#38b6ff;
		text-align: center;
	}

	hr{
		height: 2px;
		color: #38b6ff;
		background-color: #38b6ff;
		opacity: 1;
		width: 50%;
	}

	#conteudo{
		color: white;
	}

	.btn-salvar{
		border-radius: 30px;
		border-style: solid;
		border-color: #38b6ff;
		background-color: #0a223c;
		color: #38b6ff;
		margin-top: 20px;
		padding: 10px;
		width: 200px;
	}

	.btn-salvar:hover{
		background-color: #38b6ff;
		color: #010214;
	}
</style>