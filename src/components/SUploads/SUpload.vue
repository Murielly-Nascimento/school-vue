<template>
    <div id="s-upload--ufu">
        <s-dropzone
            :id="collection"
            :url="uploadUrl"
            :ref="collection"
            :use-font-awesome="true" 
            :max-number-of-files="maxNumberOfFiles"
            :max-file-size-in-mb="maxFileSizeInMb"
            :accepted-file-types="formatedMymeTypes"
            :thumbnail-width="thumbnailWidth"
            :thumbnail-height="thumbnailHeight"
            :timeout="timeout"
            :headers="headers"
            :uploaded-images="uploadedMedia"
            @vdropzone-success="onSuccess"
            @vdropzone-error="onUploadError"
            @vdropzone-removed-file="onFileDelete"
            @vdropzone-file-added="onFileAdded"
        >
            <input type="hidden" name="collection" :value="collection">
        </s-dropzone>
    </div>
</template>

<script>
import _ from 'lodash';
import { useSession } from "@/helpers";
import { baseURL } from '@/api'
import SDropzone from './SDropzone.vue'

export default {
    name: 'SUpload',
    components: {
        SDropzone
    },
	setup() {
		const session = useSession();
		return { session };
	},
    props: {
        url: {
            type: String,
            required: false
        },
        collection: {
            type: String,
            required: true
        },
        maxNumberOfFiles: {
            type: Number,
            required: false,
            default: 1
        },
        maxFileSizeInMb: {
            type: Number,
            required: false,
            default: 2
        },
        acceptedFileTypes: {
            type: Array,
            required: false
        },
        thumbnailWidth: {
            type: Number,
            required: false,
            default: 200
        },
        thumbnailHeight: {
            type: Number,
            required: false,
            default: 200
        },
        timeout: {
            type: Number,
            required: false,
            default: 30000
        },
        uploadedMedia: {
            type: Array,
            required: false,
            default: function _default() {
                return [];
            }
        }
    },
    data () {
        return {
            mutableUploadedMedia: this.uploadedMedia,
            uploadUrl: '',
            defaultUrl: baseURL + '/media/upload',
            headers: {
                Authorization: `Bearer ${this.session.getDecodedItem("tk")?.access_token}`
            },
        }
    },
    computed: {
        formatedMymeTypes() {
            if (!this.acceptedFileTypes || !Array.isArray(this.acceptedFileTypes)) {
                return undefined;
            }
            return this.acceptedFileTypes.join(',');
        },
    },
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            this.configUrl();
        },
        configUrl() {
            if (this.url == undefined || this.url == null) {
                this.uploadUrl = this.defaultUrl;
            } else if (this.urlHasProtocol(this.url)) {
                this.uploadUrl = this.url;
            } else {
                this.uploadUrl = this.resolveUrl(this.url);
            }
        },
        resolveUrl() {
            if (this.url.startsWith('@api')) {
                return this.url.replace('@api', baseURL);
            }
            if (this.url.startsWith('/')) {
                return baseURL + this.url;
            }
            return baseURL + '/' + this.url;
        },
        urlHasProtocol(url) {
            return url.startsWith('http://') || url.startsWith('https://');
        },
        attachAlreadyUploadedMedia() {
            this.$nextTick(() => {
                if (this.mutableUploadedMedia) {
                    _.each(this.mutableUploadedMedia, (file) => {
                        this.$refs[this.collection].manuallyAddFile({
                            name: file['name'],
                            size: file['size'],
                            type: file['type'],
                            url: file['url']
                        }, file['thumb_url'], false, false, {
                            dontSubstractMaxFiles: false,
                            addToFiles: true
                        });
                    });
                }
            });
        },
        onSuccess(file, response) {
            // console.log('onSuccess');
            if (!file.type.includes('image')) {
                setTimeout(function () {
                    //FIXME jquery
                    $(file.previewElement).removeClass('dz-file-preview');
                }, 3000);
            }
        },
        onUploadError(file, error) {
            // console.log('onUploadError');
            const errorMessage = typeof error == 'string' ? error : error.message;
            this.$notify({ type: 'error', title: 'Erro!', text: errorMessage });
            $(file.previewElement).find('.dz-error-message span').text(errorMessage);
        },
        onFileDelete(file, error, xhr) {
            // console.log('onFileDelete');
            const deletedFileIndex = _.findIndex(this.mutableUploadedImages, { url: file.url });
            if (deletedFileIndex >= 0 && this.mutableUploadedImages[deletedFileIndex]) {
                this.mutableUploadedImages[deletedFileIndex]['deleted'] = true;

                var currentMax = this.$refs[this.collection].dropzone.options.maxFiles;
                this.$refs[this.collection].setOption('maxFiles', currentMax + 1);
            }
        },
        onFileAdded(file) {
            this.placeIcon(file);
        },
        placeIcon(file) {
            this.$nextTick(() => {
                let image;
                const $previewElement = $(file.previewElement);

                if (file.url) {
                    $previewElement
                        .find('.dz-filename')
                        .html(`<a href="${file.url}" target="_blank class="dz-btn dz-custom-download">${file.name}</a>`);
                }

                if (file.type.includes('image')) {
                    image = `<img data-dz-thumbnail src="${file.dataURL}" />`;
                } else if (file.type.includes('pdf')) {
                    image = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>';
                } else if (file.type.includes('word')) {
                    image = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM111 257.1l26.8 89.2 31.6-90.3c3.4-9.6 12.5-16.1 22.7-16.1s19.3 6.4 22.7 16.1l31.6 90.3L273 257.1c3.8-12.7 17.2-19.9 29.9-16.1s19.9 17.2 16.1 29.9l-48 160c-3 10-12 16.9-22.4 17.1s-19.8-6.2-23.2-16.1L192 336.6l-33.3 95.3c-3.4 9.8-12.8 16.3-23.2 16.1s-19.5-7.1-22.4-17.1l-48-160c-3.8-12.7 3.4-26.1 16.1-29.9s26.1 3.4 29.9 16.1z"/></svg>';
                } else if (file.type.includes('spreadsheet') || file.type.includes('csv')) {
                    image = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM155.7 250.2L192 302.1l36.3-51.9c7.6-10.9 22.6-13.5 33.4-5.9s13.5 22.6 5.9 33.4L221.3 344l46.4 66.2c7.6 10.9 5 25.8-5.9 33.4s-25.8 5-33.4-5.9L192 385.8l-36.3 51.9c-7.6 10.9-22.6 13.5-33.4 5.9s-13.5-22.6-5.9-33.4L162.7 344l-46.4-66.2c-7.6-10.9-5-25.8 5.9-33.4s25.8-5 33.4 5.9z"/></svg>'
                } else if (file.type.includes('presentation')) {
                    image = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM136 240h68c42 0 76 34 76 76s-34 76-76 76H160v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V368 264c0-13.3 10.7-24 24-24zm68 104c15.5 0 28-12.5 28-28s-12.5-28-28-28H160v56h44z"/></svg>';
                } else if (file.type.includes('zip') || file.type.includes('rar')) {
                    image = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM96 48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zm-6.3 71.8c3.7-14 16.4-23.8 30.9-23.8h14.8c14.5 0 27.2 9.7 30.9 23.8l23.5 88.2c1.4 5.4 2.1 10.9 2.1 16.4c0 35.2-28.8 63.7-64 63.7s-64-28.5-64-63.7c0-5.5 .7-11.1 2.1-16.4l23.5-88.2zM112 336c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z"/></svg>';
                } else if (file.type.includes('video')) {
                    image = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 288c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V288zM300.9 397.9L256 368V304l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3V387.7c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1z"/></svg>';
                } else if (file.type.includes('text')) {
                    image = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>';
                } else {
                    image = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>'
                }

                $previewElement
                    .find('.dz-image')
                    .html(`${image}<p>${file.name}</p>`);
            })
        },
        getFiles() {
            const files = [];

            _.each(this.mutableUploadedMedia, file => {
                if (file.deleted) {
                    files.push({
                        id: file.id,
                        collection_name: this.collection,
                        action: 'delete'
                    });
                }
            });

            _.each(this.$refs[this.collection].getAcceptedFiles(), file => {
                var response = JSON.parse(file.xhr.response);

                if (response.path) {
                    files.push({
                        id: file.id,
                        collection_name: this.collection,
                        path: response.path,
                        action: file.deleted ? 'delete' : 'add',
                        meta_data: {
                            name: file.name,
                            file_name: file.name,
                            width: file.width,
                            height: file.height
                        }
                    });
                }
            });

            return files;
        },
    }
}
</script>

<style lang="scss" scoped>
    @import url('node_modules/dropzone/dist/dropzone.css');
    @import 'https://fonts.googleapis.com/css?family=Roboto';
</style>