import groupBy from 'lodash/groupBy';
import get from 'lodash/get';

export const disciplinas = [
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
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi001.pdf"
	},
	{
		id: 3,
		nome: "Introdução aos Sistemas de Informação",
		periodo: 1,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi003.pdf"
	},
	{
		id: 4,
		nome: "Programação Funcional",
		periodo: 1,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi004.pdf"
	},
	{
		id: 5,
		nome: "Lógica para Computação",
		periodo: 1,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi005.pdf"
	},
	{
		id: 6,
		nome: "Estrutura de Dados 1",
		periodo: 2,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi006.pdf"
	},
	{
		id: 7,
		nome: "Matemática 1",
		periodo: 2,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi007.pdf"
	},
	{
		id: 8,
		nome: "Sistemas Digitais",
		periodo: 2,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi008.pdf"
	},
	{
		id: 9,
		nome: "Profissão em Sistemas Digitais",
		periodo: 2,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi009.pdf"
	},
	{
		id: 10,
		nome: "Programação Lógica",
		periodo: 2,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi010.pdf"
	},
	{
		id: 11,
		nome: "Estrutura de Dados 2",
		periodo: 3,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi011.pdf"
	},
	{
		id: 12,
		nome: "Matemática 2",
		periodo: 3,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi012.pdf"
	},
	{
		id: 13,
		nome: "Arquitetura e Organização de Computadores",
		periodo: 3,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi013.pdf"
	},
	{
		id: 14,
		nome: "Matemática para Ciência da Computação",
		periodo: 3,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi014.pdf"
	},
	{
		id: 15,
		nome: "Programação Orientada a Objetos 1",
		periodo: 3,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi015.pdf"
	},
	{
		id: 16,
		nome: "Banco de Dados 1",
		periodo: 4,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi016.pdf"
	},
	{
		id: 17,
		nome: "Estatística",
		periodo: 4,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi017.pdf"
	},
	{
		id: 18,
		nome: "Sistemas Operacionais",
		periodo: 4,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi018.pdf"
	},
	{
		id: 19,
		nome: "Programação para Internet",
		periodo: 4,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi019.pdf"
	},
	{
		id: 20,
		nome: "Programação Orientada a Objetos 2",
		periodo: 4,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi020.pdf"
	},
	{
		id: 21,
		nome: "Banco de Dados 2",
		periodo: 5,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi021.pdf"
	},
	{
		id: 22,
		nome: "Matemática Financeira e Análise de Investimentos",
		periodo: 5,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi022.pdf"
	},
	{
		id: 23,
		nome: "Redes de Computadores",
		periodo: 5,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi023.pdf"
	},
	{
		id: 24,
		nome: "Organização e Recuperação da Informação",
		periodo: 5,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi024.pdf"
	},
	{
		id: 25,
		nome: "Modelagem de Software",
		periodo: 5,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi025.pdf"
	},
	{
		id: 26,
		nome: "Gestão Empresarial",
		periodo: 6,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi026.pdf"
	},
	{
		id: 27,
		nome: "Otimização",
		periodo: 6,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi027.pdf"
	},
	{
		id: 28,
		nome: "Sistemas Distribuídos",
		periodo: 6,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi028.pdf"
	},
	{
		id: 29,
		nome: "Contabilidade e Análise de Balanços",
		periodo: 6,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi029.pdf"
	},
	{
		id: 30,
		nome: "Engenharia de Software",
		periodo: 6,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi030.pdf"
	},
	{
		id: 31,
		nome: "Economia",
		periodo: 7,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi031.pdf"
	},
	{
		id: 32,
		nome: "Fundamentos de Marketing",
		periodo: 7,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi032.pdf"
	},
	{
		id: 33,
		nome: "Gerência de Projetos de Tecnologia de Informação",
		periodo: 7,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi033.pdf"
	},
	{
		id: 34,
		nome: "Optativa 1",
		periodo: 7,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi034.pdf"
	},
	{
		id: 35,
		nome: "Projeto e Desenvolvimento de Sistemas de Informação 1",
		periodo: 7,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi035.pdf"
	},
	{
		id: 36,
		nome: "Trabalho de Conclusão de Curso 1",
		periodo: 7,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi036.pdf"
	},
	{
		id: 37,
		nome: "Auditoria e Segurança da Informação",
		periodo: 8,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi037.pdf"
	},
	{
		id: 38,
		nome: "Direito e Legislação",
		periodo: 8,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi038.pdf"
	},
	{
		id: 39,
		nome: "Interação Humano Computador",
		periodo: 8,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi039.pdf"
	},
	{
		id: 40,
		nome: "Optativa 2",
		periodo: 8,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi040.pdf"
	},
	{
		id: 41,
		nome: "Projeto e Desenvolvimento de Sistemas de Informação 2",
		periodo: 8,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi041.pdf"
	},
	{
		id: 42,
		nome: "Trabalho de Conclusão de Curso 2",
		periodo: 8,
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi042.pdf"
	},
];

export const getDisciplinasGroupByPeriodo = () => {
	return groupBy(disciplinas, 'periodo');
}

export const getDisciplinasByPeriodo = (periodo) => {
	return get(getDisciplinasGroupByPeriodo(), periodo);
}

export const getDisciplinasById = (id) => {
	return disciplinas.find(disciplina => disciplina.id == id);
}