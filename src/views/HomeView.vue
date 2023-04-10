<script setup>

</script>

<template>
	<div class="row">
		<div class="col">
			<div id="logo-ufu">
				<img src="../assets/img/logo-ufu.png" alt="Logo UFU" width="286" height="43">
			</div>

			<div class="banner">
				<img src="../assets/img/computador.png" alt="computador" width="661" height="500">
			</div>
		</div>
		<div class="col">
			<header>
				<nav>
					<a href="/home">Home</a>
					<a href="/grade">Grade Curricular</a>
					<a href="/docentes">Docentes</a>
					<a href="/contato">Contato</a>
					<a href="/perfil" id="perfil">
						<font-awesome-icon icon="fa-solid fa-circle-user"/>
					</a>
				</nav>
			</header>
			<div id="conteudo">
				<header class="titulo">
					<h1><b>Sistemas de<br> 
						Informação</b></h1>
					<hr>
				</header>
				<section>
					<article>
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
					</article>
					<div>
						<a class="btn btn-salvar" role="button" href="/grade">
							<b>Saiba Mais</b> <font-awesome-icon icon="fa-solid fa-arrow-right" />
						</a>
					</div>
				</section>
				<div>
					<a class="btn btn-sair" role="button" href="/">
						<font-awesome-icon icon="fa-solid fa-person-through-window" />
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	body{
		background-color: #0a223c;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		color:white;
	}

	#logo-ufu{
		margin-top: 30px;
		margin-left: 10px;
	}

	.banner{
		position: fixed;
		bottom: 0;
		left:0;
	}

	nav{
		text-align: right;
		margin-top: 10px;
		margin-right: 10px;
		margin-bottom: 40px;
	}

	nav a{
		display: inline-block;
		text-decoration: none;
		padding: 10px;
		font-size: 16px;
		color:white;
	}

	nav a:hover{
		color:#38b6ff;
	}

	#perfil{
		color: #38b6ff;
		font-size: 1.8em;
	}

	#conteudo{
		margin-bottom: 10px;
		padding: 50px;
		text-align: justify;
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

	.btn-sair{
		position: fixed;
		right: 0;
		bottom: 0;
		color:#a63535;
		font-size: 1.6em;
		border:none;
	}

	.btn-sair:hover{
		border: none;
	}
</style>