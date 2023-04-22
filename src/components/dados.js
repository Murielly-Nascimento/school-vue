export default {
	name: "ListaDeDisciplinas",
	data() {
		return {
			disciplinas: [
				{
					id: 1,
					nome: "Introdução à Programação de Computadores",
					periodo: 1,
					descricao: "Introdução à Computação. Sistemas de Numeração. Resolução de problemas utilizando algoritmos e raciocínio lógico. Introdução à programação. Tipos de Dados. Variáveis e Constantes. Expressões e Operadores. Estruturas condicionais. Estruturas de repetição. Tipos de dados homogêneos: vetores e matrizes. Tipos de dados heterogêneos: estruturas",
					link: "https://facom.ufu.br/system/files/conteudo/gsi002.pdf"
				},
				{
					id: 2,
					nome: "Empreendedorismo em Informática",
					periodo: 1,
				},
				{
					id: 3,
					nome: "Introdução aos Sistemas de Informação",
					periodo: 1,
				},
				{
					id: 4,
					nome: "Programação Funcional",
					periodo: 1,
				},
				{
					id: 5,
					nome: "Lógica para Computação",
					periodo: 1,
				},
				{
					id: 6,
					nome: "Estrutura de Dados 1",
					periodo: 2,
				},
				{
					id: 7,
					nome: "Matemática 1",
					periodo: 2,
				},
				{
					id: 8,
					nome: "Sistemas Digitais",
					periodo: 2,
				},
				{
					id: 9,
					nome: "Profissão em Sistemas Digitais",
					periodo: 2,
				},
				{
					id: 10,
					nome: "Programação Lógica",
					periodo: 2,
				},
				{
					id: 11,
					nome: "Estrutura de Dados 2",
					periodo: 3,
				},
				{
					id: 12,
					nome: "Matemática 2",
					periodo: 3,
				},
				{
					id: 13,
					nome: "Arquitetura e Organização de Computadores",
					periodo: 3,
				},
				{
					id: 14,
					nome: "Matemática para Ciência da Computação",
					periodo: 3,
				},
				{
					id: 15,
					nome: "Programação Orientada a Objetos 1",
					periodo: 3,
				},
				{
					id: 16,
					nome: "Banco de Dados 1",
					periodo: 4,
				},
				{
					id: 17,
					nome: "Estatística",
					periodo: 4,
				},
				{
					id: 18,
					nome: "Sistemas Operacionais",
					periodo: 4,
				},
				{
					id: 19,
					nome: "Programação para Internet",
					periodo: 4,
				},
				{
					id: 20,
					nome: "Programação Orientada a Objetos 2",
					periodo: 4,
				},
				{
					id: 21,
					nome: "Banco de Dados 2",
					periodo: 5,
				},
				{
					id: 22,
					nome: "Matemática Financeira e Análise de Investimentos",
					periodo: 5,
				},
				{
					id: 23,
					nome: "Redes de Computadores",
					periodo: 5,
				},
				{
					id: 24,
					nome: "Organização e Recuperação da Informação",
					periodo: 5,
				},
				{
					id: 25,
					nome: "Modelagem de Software",
					periodo: 5,
				},
				{
					id: 26,
					nome: "Gestão Empresarial",
					periodo: 6,
				},
				{
					id: 27,
					nome: "Otimização",
					periodo: 6,
				},
				{
					id: 28,
					nome: "Sistemas Distribuídos",
					periodo: 6,
				},
				{
					id: 29,
					nome: "Contabilidade e Análise de Balanços",
					periodo: 6,
				},
				{
					id: 30,
					nome: "Engenharia de Software",
					periodo: 6,
				},
				{
					id: 31,
					nome: "Economia",
					periodo: 7,
				},
				{
					id: 32,
					nome: "Fundamentos de Marketing",
					periodo: 7,
				},
				{
					id: 33,
					nome: "Gerência de Projetos de Tecnologia de Informação",
					periodo: 7,
				},
				{
					id: 34,
					nome: "Optativa 1",
					periodo: 7,
				},
				{
					id: 35,
					nome: "Projeto e Desenvolvimento de Sistemas de Informação 1",
					periodo: 7,
				},
				{
					id: 36,
					nome: "Trabalho de Conclusão de Curso 1",
					periodo: 7,
				},
				{
					id: 37,
					nome: "Auditoria e Segurança da Informação",
					periodo: 8,
				},
				{
					id: 38,
					nome: "Direito e Legislação",
					periodo: 8,
				},
				{
					id: 39,
					nome: "Interação Humano Computador",
					periodo: 8,
				},
				{
					id: 40,
					nome: "Optativa 2",
					periodo: 8,
				},
				{
					id: 41,
					nome: "Projeto e Desenvolvimento de Sistemas de Informação 2",
					periodo: 8,
				},
				{
					id: 42,
					nome: "Trabalho de Conclusão de Curso 2",
					periodo: 8,
				},
			],
		};
	},
	computed:{
		primeiroPeriodo(){
			return this.disciplinas.filter(disciplina => disciplina.periodo == 1)
		},
		segundoPeriodo(){
			return this.disciplinas.filter(disciplina => disciplina.periodo == 2)
		},
		terceiroPeriodo(){
			return this.disciplinas.filter(disciplina => disciplina.periodo == 3)
		},
		quartoPeriodo(){
			return this.disciplinas.filter(disciplina => disciplina.periodo == 4)
		},
		quintoPeriodo(){
			return this.disciplinas.filter(disciplina => disciplina.periodo == 5)
		},
		sextoPeriodo(){
			return this.disciplinas.filter(disciplina => disciplina.periodo == 6)
		},
		setimoPeriodo(){
			return this.disciplinas.filter(disciplina => disciplina.periodo == 7)
		},
		oitavoPeriodo(){
			return this.disciplinas.filter(disciplina => disciplina.periodo == 8)
		},
	},
	created() {
		const id = this.$route.params.id;
		this.disciplina = this.disciplinas.find((disciplina) => disciplina.id == id);
	},
};
