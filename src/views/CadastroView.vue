<script setup>
	import LogoUFU from '../components/LogoUFU.vue';
	import ArrowIcon from '../components/icons/ArrowIcon.vue';
</script>

<template>
	<div>
		<div class="fios-direita">
			<img src="../assets/wires-right.png" alt="fios" width="340" height="160">
		</div>

		<div>	
			<!-- Formulário -->	
			<div id="formulario">
				
				<div id="logo-ufu">
					<img src="../assets/logo-ufu.png" alt="Logo UFU" width="286" height="43">
				</div>
				
				<div id="cadastro-form">
					<div id="titulo">
						<h1><b>Cadastre-se</b></h1>
						<p>Bem vindo ao repositório de<br> 
							conteúdos da FACOM, Bacharelado<br> 
							em Sistemas de Informação (BSI)</p>
					</div>
					
					<form>
						<div class="form-floating mb-3">
							<input type="text" class="form-control" id="nome" placeholder="Nome">
							<label for="nome"><b>Nome</b></label>
						</div>
						<div class="form-floating mb-3">
							<input type="text" class="form-control" id="matricula" placeholder="Matricula">
							<label for="matricula"><b>Matrícula</b></label>
						</div>
						<div class="form-floating mb-3">
							<input type="email" class="form-control" id="email" placeholder="Email Institucional">
							<label for="email"><b>Email Institucional</b></label>
						</div>
						<div class="form-floating">
							<input type="text" class="form-control" id="senha" placeholder="Senha">
							<label for="senha"><b>Senha</b></label>
						</div>

						<div>
							<a class="btn text-black" role="button">
								<b>Salvar</b> <ArrowIcon></ArrowIcon>
							</a>
						</div>

						<div>
							<a href="/" class="link">
								Já possui conta? Logar. 
							</a>
						</div>

					</form>
				</div>
			</div>
			<!-- Formulário -->
		</div>

		<div class="fios-esquerda">
			<img src="../assets/wires-left.png" alt="fios" width="340" height="160">
		</div>
	</div>
</template>

<style>
	body{
		background-color: #0a223c;
	}

	#logo-ufu{
		margin-left: 70px;
	}

	.fios-direita{
		position: fixed;
		top: 0;
		left: 0;
	}

	.fios-esquerda{
		position: fixed;
		bottom: 0;
		right: 0;
	}

	#formulario{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	#cadastro-form{
		margin-top: 30px;
		margin-left: 100px;
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

	.btn{
		width: 250px;
		height: 40px;
		margin-top: 10px;
		margin-bottom: 10px;
		padding: 6px;
		border-radius: 5px;
		background-color: #f1f1f1;
		text-align: center;
	}
	.btn:hover{
		background-color: #f1f1f1;
	}

	#titulo{
		text-align: center;
		color: white;
		margin-bottom: 25px;
	}
	#titulo h1{
		color: #38b6ff;
		margin-bottom: 15px;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	}

	.link{
		margin-top: 10px;
		margin-left: 45px;
		color: #a63535;
		text-decoration: none;
	}

	.link:hover{
		background-color: #0a223c;
		color: #38b6ff;
	}
</style>