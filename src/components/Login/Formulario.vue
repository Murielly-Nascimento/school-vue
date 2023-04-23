<template>
	<form class="mx-auto col-10 col-md-8 col-lg-6">
		<div class="row">
			<div class="col">
				<div class="form-floating m-1">
					<input type="email" class="form-control" id="email" autocomplete="off" placeholder="Email Institucional">
					<label for="email"><b>Email Institucional</b></label>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div class="form-floating m-1">
					<input type="text" class="form-control" id="senha" autocomplete="off" placeholder="Senha">
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
</template>

<style>
	.formulario{
		margin-top: 50px;
		text-align: center;
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