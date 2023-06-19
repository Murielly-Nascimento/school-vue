<template>
	<layout :title="pageName" v-if="!emptyResource">
		<article>
            <div>
                <div class="mb-4">
                    <h3>Descrição</h3>
                    <div v-html="resource.description"></div>
                </div>

                <div>
                    <div class="mb-4" v-if="images.length">
                        <h3>Imagens</h3>
                        <div class="galery-container">
                            <div class="galery-sidebar">
                                <div
                                    v-for="image in images"
                                    class="galery-item"
                                    :style="'background-image: url(' + (image?.url || defaultImage) + ')'"
                                    @click="selectImage(image)"
                                ></div>
                            </div>
                            <div class="galery-content-preview">
                                <div
                                    class="galery-item"
                                    :style="'background-image: url(' + (selectedImage?.url || defaultImage) + ')'"
                                ></div>
                            </div>
                        </div>
                        <!-- <div v-for="media in images">
                            <img :src="media.url" :alt="media.metadata.name">
                        </div> -->
                    </div>
                    <div class="mb-4" v-if="videos.length">
                        <h3>Vídeos</h3>
                        <div v-for="media in videos">
                            <video style="max-width: 100%;" controls>
                                <source :src="media.url" :type="media.mime_type">
                                Your browser does not support the video.
                            </video>
                        </div>
                    </div>
                    <div class="mb-4" v-if="pdfs.length">
                        <h3>PDF's</h3>
                        <div v-for="media in pdfs">
                            <a :href="media.url" target="_blank">
                                <font-awesome-icon
                                style="margin-right: 10px;"
                                    :icon="['far', 'file-pdf']"
                                />
                                {{ media.metadata.name }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
		</article>
	</layout>
</template>

<script>
import _ from 'lodash';
import { Layout } from '@/layout';
import { getResourceById } from '@/services';
export default {
    name: 'ResourcesView',
    components: {
        Layout
    },
    data() {
        return {
            resource: {},
            selectedImage: {},
            defaultImage: location.origin + '/img/sem_foto.png'
        }
    },
    computed: {
        emptyResource() {
            return _.isEmpty(this.resource);
        },
        pageName() {
            return `${this.resource?.title} (${this.resource?.subject?.name})`;
        },
        medias() {
            return this.resource?.media?.map(media => {
                media.metadata = JSON.parse(media.metadata);
                media.type = media.mime_type.replace(/.*\//, '');

                return media;
            }) || [];
        },
        images() {
            const images = this.medias.filter(media => media.mime_type.startsWith('image/'));
            this.selectedImage = images[0] || {};
            return images;
        },
        videos() {
            return this.medias.filter(media => media.mime_type.startsWith('video/'));
        },
        pdfs() {
            return this.medias.filter(media => media.mime_type.endsWith('pdf'));
        },
    },
    created() {
		getResourceById(this.$route.params.id)
			.then(response => {
				this.resource = response.data;
                console.log(this.resource);
			})
			.catch(error => console.warn(error));
    },
    methods: {
        selectImage(image) {
            this.selectedImage = image;
        }
    },
}
</script>

<style lang="scss" scoped>

</style>