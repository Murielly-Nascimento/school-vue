<template>
	<body>
		<div class="container-fluid px-0">
			<div class="row g-0">

				<!-- First column -->
				<div class="col-lg-6 vh-100">
					<div id="formulario">
						<div id="logo-ufu">
							<img src="../assets/logo-ufu.png" alt="Logo UFU" width="415" height="62">
						</div>
						
						<div id="login-form">
							<div id="titulo">
								<h1><b>Login</b></h1>
								<p>Bem vindo de volta ao repositório de conteúdos da FACOM,<br> 
									Bacharelado em Sistemas de Informação (BSI)</p>
							</div>
							
							<form>
								<div class="form-floating mb-3">
									<input type="email" class="form-control" id="email" placeholder="Email Insitucional">
									<label for="email"> Email Institucional </label>
								</div>
								<div class="form-floating">
									<input type="text" class="form-control" id="senha" placeholder="Senha">
									<label for="senha"> Senha </label>
								</div>
								<div id="butao-login">
									<a class="btn text-black" style="background-color: #f1f1f1;" href="#!" role="button">
										Entrar
  										<i class="fab fa-facebook-f"></i>
									</a>
								</div>
								<div id="cadastro">
									<a>Não possui conta? Cadastre-se</a>
								</div>
							</form>
						</div>
					</div>
				</div>
				<!-- First column -->

				<!-- Second column -->
				<div class="col-lg-6 vh-100">
					<div id="banner">
						<img src="../assets/cloud.jpg" alt="nuvem de dados" height="650">
					</div>
				</div>
				<!-- Second column -->
			</div>
		</div>
	</body>
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

	#logo-ufu{
		margin-top: 50px;
	}

	#login-form{
		margin-top: 60px;
		margin-left: 140px;
		width: 250px;
	}

	.form-control{
		color: #38b6ff;
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

	#cadastro{
		margin-top: 10px;
		color: #a63535;
		text-align: center;
	}

	#banner{
		width: 500px;
		margin-left: 200px;
	}
</style>