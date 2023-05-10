<template>

	<div class="container">
		<div class="s-documents--ufu" v-for="documento in documentos" :key="documento.id">
			<stretched-card
				:image="documento.src"
				:title="documento.title"
				:text="documento.text"
			></stretched-card>
		</div>
	</div>
</template>

<script>
import { SImage, StretchedCard } from '@/components';

export default {
	name: 'Documents',
	components: {
		SImage,
		StretchedCard,
	},
	props: {
		subject: {
			type: Object,
		},
	},
	data() {
		return {
			documentos: [
				{ src: '@/assets/img/documento.png', title: 'Arquivo', text: 'Arrays e estruturas básicas', icon: 'fa-download' },
				{ src: '@/assets/img/video.png', title: 'Vídeo', text: 'Aula 01 - Introdução a Programação', icon: 'fa-link' },
				{ src: '@/assets/img/codigo.png', title: 'Código', text: 'Arrays e Laços de Repetição', icon: 'fa-download' },
			]
		}
	},
}
</script>

<style lang="scss">
.s-documents--ufu {
	.card--ufu {
		margin-top: 30px;
	}
}
</style>