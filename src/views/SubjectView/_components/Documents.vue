<template>

	<div class="container">
		<div class="s-documents--ufu" v-for="documento in documentos" :key="documento.id">
			<stretched-card
				:title="documento.title"
				:text="documento.description"
				:link="'/recursos/' + documento.id"
			></stretched-card>
		</div>
		<div class="loading hidden">
			<div class="flashing-text">
				Carregando...
			</div>
		</div>
	</div>
</template>

<script>
import _ from 'lodash';
import { SImage, StretchedCard } from '@/components';
import { infiniteScroll } from '@/helpers'
import { getResourcesPage } from '@/services'

const RESOURCE_KEY = 'id';

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
			documentos: [],
			scroller: null,
			collection: [],
			pagination: {
				page: 1,
				per_page: this.$cookies.get('per_page') || 10,
				orderBy: 'id',
				orderDirection: 'desc',
				next_page: true,
				prev_page: true,
			},
			filters: {
				subjectId: this.subject.id,
			}
		}
	},
	created() {
		this.loadData();
	},
	mounted() {
		this.scroller = infiniteScroll({
			callback: this.loadDocuments,
			loading: '.loading',
			bottom: 50,
		})
	},
	watch: {
		collection(newValues) {
            if (Array.isArray(newValues)) {
                this.documentos = this.sort(this.concatDocumentos(newValues));
            }
		}
	},
	methods: {
		getApi() {
			return getResourcesPage({
				pagination: this.pagination,
				filters: this.filters,
			});
		},
        concatDocumentos(newValues) {
            return _.uniqBy([ ...this.documentos, ...newValues ], RESOURCE_KEY);
        },
        sort(values) {
            return _.orderBy(values, this.pagination.orderBy, this.pagination.orderDirection);
        },
        setNextPage() {
            this.pagination.page++;
        },
		loadDocuments() {
			return new Promise((resolve, _) => {
				if (this.pagination.next_page) {
					this.setNextPage();
					this.loadData().then(resolve);
				}
			})
		},
		loadData() {
			return new Promise((resolve, _) => {
				this.getApi()
					.then(response => {
						this.populateCurrentStateAndData(response.data);
						resolve(response.data.next_page);
					})
					.catch(error => {
						console.warn(error);
						resolve(false);
					})
			})
		},
        populateCurrentStateAndData(object) {
            if (object.current_page > object.last_page && object.total > 0) {
                this.pagination.state.current_page = object.last_page;
                this.loadData();
                return;
            }

            this.collection = object.data;
            this.pagination.page = parseInt(object.page);
            this.pagination.last_page = object.last_page;
            this.pagination.next_page = object.next_page;
            this.pagination.num_pages = object.num_pages;
            this.pagination.per_page = parseInt(object.per_page);
        },
        alertLoadDataError(error) {
            this.$notify({
                type: 'error',
                title: 'Erro!',
                text: 'Erro ao carregar dos dados da API! Tente recarregar a página',
            });
        },
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