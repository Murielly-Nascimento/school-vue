<script setup>
	import Navegacao from '../components/Navegacao.vue'
	import Sair from '../components/Sair.vue'
	import Titulo from '../components/Perfil/Titulo.vue';
	import Banner from '../components/Perfil/Banner.vue';
</script>

<template>
	<div>
		<Navegacao></Navegacao>
		<article class="container">
			<div class="row">
				<section class="col-md-6">
					<Titulo></Titulo>
					<div class="row">
						<p id="btn-cadastrar">
							Laura Oliveira Carvalho
						</p>
					</div>
					<div class="row">
						<p id="btn-cadastrar">
							11931BSI999
						</p>
					</div>
					<div class="row">
						<p id="btn-cadastrar">
							laura.carvalho@ufu.br
						</p>
					</div>
					<div class="row">
						<p id="btn-cadastrar">
							*****************
						</p>
					</div>
					<div class="row">
						<div class="col">
							<a class="btn" id="btn-cadastrar">
								Apagar Conta
							</a>
						</div>
						<div class="col">
							<a class="btn" id="btn-cadastrar">
								Meus Documentos
							</a>
						</div>
					</div>
				</section>
				<section class="col-md-6">
					<Banner></Banner>
					<Sair></Sair>
				</section>
			</div>
		</article>
	</div>
</template>

<style>
	@import '../assets/main.css';
	#btn-cadastrar{
		border-radius: 30px;
		border: solid 1px;
		border-color: #38b6ff;
		background-color: #0a223c;
		color: white;
		padding: 10px;
		text-align: center;
		width: 60%;
	}
</style>