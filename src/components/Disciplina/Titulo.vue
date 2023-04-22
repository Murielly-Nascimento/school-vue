<template>
	<header class="titulo">
		<h2>{{ disciplina.nome }}</h2>
		<hr>
	</header>
</template>

<style>
	.titulo{
		padding-top: 20px;
		padding-left: 30px;
	}

	.titulo h2{
		color:#38b6ff;
		text-align: left;
	}

	hr{
		height: 2px;
		color: gray;
		background-color: gray;
		opacity: 1;
		width: 30%;
	}
</style>

<script src="../dados.js"></script>