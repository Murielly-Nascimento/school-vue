<script setup>
	import Navegacao from '../components/Navegacao.vue'
</script>

<template>
	<div>
		<Navegacao></Navegacao>
		<article>
			<header id="titulo">
				<h1>Dúvidas?</h1>
				<p>Entre em contato conosco em caso de dúvidas.</p>
			</header>
			<section class="container">
				<form>
					<div class="row">
						<div class="col">
							<div class="form-floating m-2">
								<input type="text" class="form-control" id="nome" placeholder="Nome">
								<label for="nome"><b>Nome</b></label>
							</div>
						</div>
						<div class="col">
							<div class="form-floating m-2">
								<input type="email" class="form-control" id="email" placeholder="Email Institucional">
								<label for="email"><b>Email Institucional</b></label>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<div class="form-floating m-2">
								<input type="text" class="form-control" id="mensagem" placeholder="Mensagem">
								<label for="mensagem"><b>Mensagem</b></label>
							</div>
						</div>
					</div>
					<div class="row" id="btn-enviar">
						<div class="col">
							<a class="btn" role="button" href="#">
								<b>Enviar</b> 
							</a>
						</div>
					</div>
				</form>
				<div>
					<a class="btn btn-sair" role="button" href="/">
						<font-awesome-icon icon="fa-solid fa-person-through-window" />
					</a>
				</div>
			</section>
		</article>
	</div>
</template>

<style>
	@import '../assets/main.css';

	#titulo{
		text-align: center;
		color: white;
		font-size: large;
		margin-bottom: 40px;
	}

	form{
		color: gray;
	}

	#mensagem{
		height: 200px;
	}

	#btn-enviar{
		display: block;
		margin: 0 auto;
		border-radius: 5px;
		background-color: #38b6ff;
		padding: 10px;
		text-align: center;
		width: 150px;
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