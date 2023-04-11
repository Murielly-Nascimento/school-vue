<script setup>
	import LogoUFU from '../components/LogoUFU.vue';
</script>

<template>
	<div class="container">
		<div class="row">

			<!-- Formulário -->
			<div class="col-md-6">
				<LogoUFU></LogoUFU>
				
				<div class="formulario">
					<header class="form-titulo">
						<h1><b>Login</b></h1>
						<p>Bem vindo de volta ao repositório<br>
							de conteúdos da FACOM, Bacharelado<br>
							em Sistemas de Informação (BSI)</p>
					</header>
					
					<form class="mx-auto col-10 col-md-8 col-lg-6">
						<div class="row">
							<div class="col">
								<div class="form-floating m-1">
									<input type="email" class="form-control" id="email" placeholder="Email Institucional">
									<label for="email"><b>Email Institucional</b></label>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col">
								<div class="form-floating m-1">
									<input type="text" class="form-control" id="senha" placeholder="Senha">
									<label for="senha"><b>Senha</b></label>
								</div>
							</div>
						</div>

						<div class="row m-1">
							<a class="btn text-black btn-salvar" role="button">
								<b>Entrar</b> <font-awesome-icon icon="fa-solid fa-arrow-right" />
							</a>
						</div>
					
						<div class="row m-2">
							<a href="" class="link">
								Esqueceu sua senha? 
							</a>
						</div>
						
						<div class="row m-3">
							<a class="btn" role="button" href="/cadastro" id="btn-cadastrar">
								<b>Cadastrar</b> 
							</a>
						</div>
					</form>
				</div>
			</div>
			<!-- Formulário -->

			<!-- Banner -->
			<div class="col-md-6">
				<div id="banner">
					<img src="../assets/img/cloud.jpg" alt="nuvem de dados" height="650">
				</div>
			</div>
			<!-- Banner -->
		</div>
	</div>
</template>

<style>
	body{
		background-color: #010214;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	}

	.formulario{
		margin-top: 50px;
		text-align: center;
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
		border-radius: 5px;
		background-color: #f1f1f1;
		text-align: center;
		padding: 10px;
	}

	.btn-salvar:hover{
		background-color: #38b6ff;
		border-color: blue;
	}

	.link{
		color: #a63535;
		text-decoration: none;
	}

	.link:hover{
		background-color: #010214;
		color: #38b6ff;
	}

	#btn-cadastrar{
		border-radius: 30px;
		border-style: solid;
		border-color: #38b6ff;
		background-color: #010214;
		color: #38b6ff;
		padding: 10px;
	}
	#btn-cadastrar:hover{
		background-color: #38b6ff;
		color: #010214;
	}

</style>