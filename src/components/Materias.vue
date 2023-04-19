<template>
	<div>
		<ul>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias" role="button" aria-expanded="false" aria-controls="collapseMaterias">
					<h4>1º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias">
					<div class="lista">	
						<a href="/materia">Introdução à Programação de Computadores</a>
						<a href="#">Empreendedorismo em Informática</a>
						<a href="#">Introdução aos Sistemas de Informação</a>
						<a href="#">Programação Funcional</a>
						<a href="#">Lógica para Computação</a>	
					</div>
				</div>
			</li>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias2" role="button" aria-expanded="false" aria-controls="collapseMaterias2">
					<h4>2º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias2">
					<div class="lista">	
						<a href="#">Estrutura de Dados 1</a>
						<a href="#">Matemática 1</a>
						<a href="#">Sistemas Digitais</a>
						<a href="#">Profissão em Sistemas Digitais</a>
						<a href="#">Programação Lógica</a>	
					</div>
				</div>
			</li>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias3" role="button" aria-expanded="false" aria-controls="collapseMaterias3">
					<h4>3º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias3">
					<div class="lista">	
						<a href="#">Estrutura de Dados 2</a>
						<a href="#">Matemática 2</a>
						<a href="#">Arquitetura e Organização de Computadores</a>
						<a href="#">Matemática para Ciência da Computação</a>
						<a href="#">Programação Orientada a Objetos 1</a>	
					</div>
				</div>
			</li>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias4" role="button" aria-expanded="false" aria-controls="collapseMaterias4">
					<h4>4º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias4">
					<div class="lista">	
						<a href="#">Banco de Dados 1</a>
						<a href="#">Estatística</a>
						<a href="#">Sistemas Operacionais</a>
						<a href="#">Programação para Internet</a>
						<a href="#">Programação Orientada a Objetos 2</a>	
					</div>
				</div>
			</li>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias5" role="button" aria-expanded="false" aria-controls="collapseMaterias5">
					<h4>5º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias5">
					<div class="lista">	
						<a href="#">Banco de Dados 2</a>
						<a href="#">Matemática Financeira e Análise de Investimentos</a>
						<a href="#">Redes de Computadores</a>
						<a href="#">Organização e Recuperação da Informação</a>
						<a href="#">Modelagem de Software</a>	
					</div>
				</div>
			</li>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias6" role="button" aria-expanded="false" aria-controls="collapseMaterias6">
					<h4>6º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias6">
					<div class="lista">	
						<a href="#">Gestão Empresarial</a>
						<a href="#">Otimização</a>
						<a href="#">Sistemas Distribuídos</a>
						<a href="#">Contabilidade e Análise de Balanços</a>
						<a href="#">Engenharia de Software</a>	
					</div>
				</div>
			</li>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias7" role="button" aria-expanded="false" aria-controls="collapseMaterias7">
					<h4>7º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias7">
					<div class="lista">	
						<a href="#">Economia</a>
						<a href="#">Fundamentos de Marketing</a>
						<a href="#">Gerência de Projetos de Tecnologia de Informação</a>
						<a href="#">Optativa 1</a>
						<a href="#">Projeto e Desenvolvimento de Sistemas de Informação 1</a>	
						<a href="#">Trabalho de Conclusão de Curso 1</a>
					</div>
				</div>
			</li>
			<li>
				<a class="btn collapsible"  data-bs-toggle="collapse" href="#collapseMaterias8" role="button" aria-expanded="false" aria-controls="collapseMaterias8">
					<h4>8º Período</h4>
				</a>
				<div class="collapse" id="collapseMaterias8">
					<div class="lista">	
						<a href="#">Auditoria e Segurança da Informação</a>
						<a href="#">Direito e Legislação</a>
						<a href="#">Interação Humano Computador</a>
						<a href="#">Optativa 2</a>
						<a href="#">Projeto e Desenvolvimento de Sistemas de Informação 2</a>	
						<a href="#">Trabalho de Conclusão de Curso 2</a>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<style>
	ul{
		list-style-type: none;
		text-align: center;
	}

	.collapsible{
		background-color: #0a223c;
		color:#38b6ff;
		cursor: pointer;
		width: 50%;
		border-bottom:solid 1px #38b6ff;
		outline: none;
	}

	.collapsible:hover{
		background-color: #38b6ff;
		color: white;
	}

	.lista{
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.lista a{
		display: block;
		text-decoration: none;
		color: white;
		padding: 5px;
	}
</style>