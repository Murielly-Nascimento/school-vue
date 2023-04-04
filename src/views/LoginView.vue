<script setup>
	import LogoUFU from '../components/LogoUFU.vue';
	import ArrowIcon from '../components/icons/ArrowIcon.vue';
</script>

<template>
	<div>
		<div class="container-fluid px-0">
			<div class="row g-0">

				<!-- Formulário -->
				<div class="col-lg-6 vh-100">
					<div id="formulario">
						
						<LogoUFU></LogoUFU>
						
						<div id="login-form">
							<div id="titulo">
								<h1><b>Login</b></h1>
								<p>Bem vindo de volta ao repositório de conteúdos da FACOM,<br> 
									Bacharelado em Sistemas de Informação (BSI)</p>
							</div>
							
							<form>
								<div class="form-floating mb-3">
									<input type="email" class="form-control" id="email" placeholder="Email Institucional">
									<label for="email"><b>Email Institucional</b></label>
								</div>
								<div class="form-floating">
									<input type="text" class="form-control" id="senha" placeholder="Senha">
									<label for="senha"><b>Senha</b></label>
								</div>

								<a class="btn text-black" role="button" id="entrar">
									<b>Entrar</b> <ArrowIcon></ArrowIcon>
								</a>
							
								<div>
									<div id="redefinir-senha">
										<a href="" class="link">
											Esqueceu sua senha? 
										</a>
									</div>
									
									<div>
										<a href="/cadastro" class="link">
											Não possui conta? Cadastre-se. 
										</a>
									</div>
								</div>

							</form>
						</div>
					</div>
				</div>
				<!-- Formulário -->

				<!-- Banner -->
				<div class="col-lg-6 vh-100">
					<div id="banner">
						<img src="../assets/cloud.jpg" alt="nuvem de dados" height="650">
					</div>
				</div>
				<!-- Banner -->
			</div>
		</div>
	</div>
</template>

<style>
	body{
		background-color: #010214;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	}

	#formulario{
		width: 500px;
		margin-right: 300px;
	}

	#login-form{
		margin-top: 60px;
		margin-left: 140px;
		width: 250px;
	}

	.form-control{
		border: #010214;
		color: black;
		background-color: #38b6ff;
	}

	.form-control:focus{
		background-color: #38b6ff;
	}

	#entrar{
		width: 250px;
		height: 40px;
		margin-top: 10px;
		margin-bottom: 10px;
		padding: 6px;
		border-radius: 5px;
		background-color: #f1f1f1;
		text-align: center;
	}

	#titulo{
		text-align: center;
		color: white;
		margin-bottom: 30px;
	}
	#titulo h1{
		color: #38b6ff;
		margin-bottom: 20px;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	}

	.link{
		margin-top: 10px;
		margin-left: 15px;
		color: #a63535;
		text-decoration: none;
	}

	.link:hover{
		background-color: #010214;
		color: #38b6ff;
	}

	#redefinir-senha{
		margin-left: 34px;
	}
	
	#banner{
		width: 500px;
		margin-left: 200px;
	}
</style>