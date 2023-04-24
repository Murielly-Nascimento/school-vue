<script setup>
	import Layout from '@/layout/Layout.vue'
</script>

<template>
	<Layout>
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
			</section>
		</article>
	</Layout>
</template>

<style>
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
</style>