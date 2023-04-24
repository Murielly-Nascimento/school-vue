export default {
	name: "ListaDeDocentes",
	data() {
		return {
			docentes: [
				{
					id: 1,
					nome: "Professor Alexsandro Santos Soares",
					interesses: "Tem experiência na área de Inteligência Artificial, atuando principalmente nos seguintes temas: computação natural, bioinformática, redes neurais artificiais e computação evolutiva.",
					link: "https://facom.ufu.br/pessoas/docentes/alexsandro-santos-soares",
					sexo: true
				},
				{
					id: 2,
					nome: "Professora Elaine Ribeiro de Faria Paiva",
					interesses: "Tem experiência na área de Ciência da Computação, com ênfase em Aprendizado de Máquina e dados de fluxo contínuo.",
					link: "https://facom.ufu.br/pessoas/docentes/elaine-ribeiro-de-faria-paiva",
					sexo: false
				},
				{
					id: 3,
					nome: "Professor Humberto Luiz Razente",
					interesses: "Tem experiência na área de Ciência da Computação, com ênfase em banco de dados, atuando principalmente em mineração visual de dados, redução de dimensionalidade, recuperação de imagens baseada em conteúdo e realimentação de relevância. Desenvolveu projeto com bolsa de pós-doutorado na Universidade Federal do ABC (UFABC).",
					link: "https://facom.ufu.br/pessoas/docentes/humberto-luiz-razente",
					sexo: true
				},
				{
					id: 4,
					nome: "Professora Maria Adriana Vidigal de Lima",
					interesses: "Bancos de dados NoSQL, dados semi-estruturados e XML, restrições de integridade aplicadas à dados semi-estruturados.",
					link: "https://facom.ufu.br/pessoas/docentes/maria-adriana-vidigal-de-lima",
					sexo: false
				},
			],
		};
	},
};