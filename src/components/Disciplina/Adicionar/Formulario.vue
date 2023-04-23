<script setup>
	import Upload from '../Adicionar/Upload.vue'
</script>

<template>
	<div class="container">
		<form id="formulario">
			<div class="row">
				<div class="col">
					<div class="form-floating m-2">
						<input type="text" class="form-control" id="nome" placeholder="Nome">
						<label for="nome">Nome</label>
					</div>
				</div>
				<div class="col">
					<select class="form-select m-2" aria-label="Default select">
						<option selected>Tipo de Arquivo</option>
						<option value="1">Arquivo PDF</option>
						<option value="2">Link</option>
					</select>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<Upload></Upload>
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
	</div>
</template>

<style>
	#formulario{
		margin-top: 30px;
		color:gray;
	}

	.form-select{
		color:gray;
		padding: 15px;
		width: 97%;
	}
</style>