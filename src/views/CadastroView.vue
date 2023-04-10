<script setup>
	import LogoUFU from '../components/LogoUFU.vue';
	import FiosDireita from '../components/Cadastro/FiosDireita.vue'
	import FiosEsquerda from '../components/Cadastro/FiosEsquerda.vue'
</script>

<template>
	<FiosDireita></FiosDireita>

	<div class="container">	
		<div class="row d-flex justify-content-center">

			<!-- Formulário -->	
			<div class="col-md-6">

				<LogoUFU></LogoUFU>

				<div class="formulario">
					<header class="form-titulo">
						<h1><b>Cadastre-se</b></h1>
						<p>Bem vindo ao repositório de conteúdos da FACOM,<br> 
							Bacharelado em Sistemas de Informação (BSI)</p>
					</header>
						
					<form>
						<div class="form-floating m-2">
							<input type="text" class="form-control" id="nome" placeholder="Nome">
							<label for="nome"><b>Nome</b></label>
						</div>
						<div class="form-floating m-2">
							<input type="text" class="form-control" id="matricula" placeholder="Matricula">
							<label for="matricula"><b>Matrícula</b></label>
						</div>
						<div class="form-floating m-2">
							<input type="email" class="form-control" id="email" placeholder="Email Institucional">
							<label for="email"><b>Email Institucional</b></label>
						</div>
						<div class="form-floating m-2">
							<input type="text" class="form-control" id="senha" placeholder="Senha">
							<label for="senha"><b>Senha</b></label>
						</div>

						<div class="row">
							<div class="col">
								<a class="btn btn-salvar" href="\" role="button">
									<font-awesome-icon icon="fa-solid fa-arrow-left" /> <b>Logar</b> 
								</a>
							</div>
							<div class="col">
								<a class="btn btn-salvar" href="/home" role="button">
									<b>Salvar</b> <font-awesome-icon icon="fa-solid fa-arrow-right" />
								</a>
							</div>
						</div>  
					</form>
				</div>
			</div>
			<!-- Formulário -->
		</div>
	</div>
	<FiosEsquerda></FiosEsquerda>
</template>

<style>
	body{
		background-color: #0a223c;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		text-align: center;
	}

	.formulario{
		margin-top: 50px;
	}

	.form-titulo{
		color: white;
	}

	.form-titulo h1{
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		color:#38b6ff;
	}

	.form-control{
		border: #010214;
		background-color: #38b6ff;
	}

	.form-control:focus{
		background-color: #38b6ff;
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