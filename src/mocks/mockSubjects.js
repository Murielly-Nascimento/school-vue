import groupBy from 'lodash/groupBy';
import get from 'lodash/get';

export const subjects = [
	{
		id: 1,
		name: "Introdução à Programação de Computadores",
		period: 1,
		description: "Introdução à Computação. Sistemas de Numeração. Resolução de problemas utilizando algoritmos e raciocínio lógico. Introdução à programação. Tipos de Dados. Variáveis e Constantes. Expressões e Operadores. Estruturas condicionais. Estruturas de repetição. Tipos de dados homogêneos: vetores e matrizes. Tipos de dados heterogêneos: estruturas",
		link: "https://facom.ufu.br/system/files/conteudo/gsi002.pdf"
	},
	{
		id: 2,
		name: "Empreendedorismo em Informática",
		period: 1,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi001.pdf"
	},
	{
		id: 3,
		name: "Introdução aos Sistemas de Informação",
		period: 1,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi003.pdf"
	},
	{
		id: 4,
		name: "Programação Funcional",
		period: 1,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi004.pdf"
	},
	{
		id: 5,
		name: "Lógica para Computação",
		period: 1,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi005.pdf"
	},
	{
		id: 6,
		name: "Estrutura de Dados 1",
		period: 2,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi006.pdf"
	},
	{
		id: 7,
		name: "Matemática 1",
		period: 2,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi007.pdf"
	},
	{
		id: 8,
		name: "Sistemas Digitais",
		period: 2,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi008.pdf"
	},
	{
		id: 9,
		name: "Profissão em Sistemas Digitais",
		period: 2,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi009.pdf"
	},
	{
		id: 10,
		name: "Programação Lógica",
		period: 2,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi010.pdf"
	},
	{
		id: 11,
		name: "Estrutura de Dados 2",
		period: 3,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi011.pdf"
	},
	{
		id: 12,
		name: "Matemática 2",
		period: 3,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi012.pdf"
	},
	{
		id: 13,
		name: "Arquitetura e Organização de Computadores",
		period: 3,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi013.pdf"
	},
	{
		id: 14,
		name: "Matemática para Ciência da Computação",
		period: 3,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi014.pdf"
	},
	{
		id: 15,
		name: "Programação Orientada a Objetos 1",
		period: 3,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi015.pdf"
	},
	{
		id: 16,
		name: "Banco de Dados 1",
		period: 4,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi016.pdf"
	},
	{
		id: 17,
		name: "Estatística",
		period: 4,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi017.pdf"
	},
	{
		id: 18,
		name: "Sistemas Operacionais",
		period: 4,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi018.pdf"
	},
	{
		id: 19,
		name: "Programação para Internet",
		period: 4,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi019.pdf"
	},
	{
		id: 20,
		name: "Programação Orientada a Objetos 2",
		period: 4,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi020.pdf"
	},
	{
		id: 21,
		name: "Banco de Dados 2",
		period: 5,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi021.pdf"
	},
	{
		id: 22,
		name: "Matemática Financeira e Análise de Investimentos",
		period: 5,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi022.pdf"
	},
	{
		id: 23,
		name: "Redes de Computadores",
		period: 5,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi023.pdf"
	},
	{
		id: 24,
		name: "Organização e Recuperação da Informação",
		period: 5,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi024.pdf"
	},
	{
		id: 25,
		name: "Modelagem de Software",
		period: 5,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi025.pdf"
	},
	{
		id: 26,
		name: "Gestão Empresarial",
		period: 6,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi026.pdf"
	},
	{
		id: 27,
		name: "Otimização",
		period: 6,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi027.pdf"
	},
	{
		id: 28,
		name: "Sistemas Distribuídos",
		period: 6,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi028.pdf"
	},
	{
		id: 29,
		name: "Contabilidade e Análise de Balanços",
		period: 6,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi029.pdf"
	},
	{
		id: 30,
		name: "Engenharia de Software",
		period: 6,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi030.pdf"
	},
	{
		id: 31,
		name: "Economia",
		period: 7,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi031.pdf"
	},
	{
		id: 32,
		name: "Fundamentos de Marketing",
		period: 7,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi032.pdf"
	},
	{
		id: 33,
		name: "Gerência de Projetos de Tecnologia de Informação",
		period: 7,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi033.pdf"
	},
	{
		id: 34,
		name: "Optativa 1",
		period: 7,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi034.pdf"
	},
	{
		id: 35,
		name: "Projeto e Desenvolvimento de Sistemas de Informação 1",
		period: 7,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi035.pdf"
	},
	{
		id: 36,
		name: "Trabalho de Conclusão de Curso 1",
		period: 7,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi036.pdf"
	},
	{
		id: 37,
		name: "Auditoria e Segurança da Informação",
		period: 8,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi037.pdf"
	},
	{
		id: 38,
		name: "Direito e Legislação",
		period: 8,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi038.pdf"
	},
	{
		id: 39,
		name: "Interação Humano Computador",
		period: 8,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi039.pdf"
	},
	{
		id: 40,
		name: "Optativa 2",
		period: 8,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi040.pdf"
	},
	{
		id: 41,
		name: "Projeto e Desenvolvimento de Sistemas de Informação 2",
		period: 8,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi041.pdf"
	},
	{
		id: 42,
		name: "Trabalho de Conclusão de Curso 2",
		period: 8,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ornare turpis. Sed accumsan feugiat nisi ac tincidunt. Aliquam erat volutpat.",
		link: "https://facom.ufu.br/system/files/conteudo/gsi042.pdf"
	},
];

export const getSubjectsGroupByPeriod = () => {
	return groupBy(subjects, 'period');
}

export const getSubjectsByPeriod = (period) => {
	return get(getSubjectsGroupByPeriod(), period);
}

export const getSubjectsById = (id) => {
	return subjects.find(subject => subject.id == id);
}