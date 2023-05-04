<template>
    <div>
        <dropzone
            :id="collection"
            :url="url"
            v-bind:preview-template="template"
            v-on:vdropzone-success="onSuccess"
            v-on:vdropzone-error="onUploadError"
            v-on:vdropzone-removed-file="onFileDelete"
            v-on:vdropzone-file-added="onFileAdded"
            :useFontAwesome="true"
            :ref="collection"
            :maxNumberOfFiles="maxNumberOfFiles"
            :maxFileSizeInMB="maxFileSizeInMb"
            :acceptedFileTypes="acceptedFileTypes"
            :thumbnailWidth="thumbnailWidth"
            :timeout="timeout"
            :headers="headers"
        >
            <input type="hidden" name="collection" :value="collection" />
        </dropzone>
    </div>
</template>

<script>
import { reactive, watch, onMounted } from 'vue';
import { useDropzone } from 'vue3-dropzone';

export default {
    props: {
        url: {
            type: String,
            required: true
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
            type: String,
            required: false
        },
        thumbnailWidth: {
            type: Number,
            required: false,
            default: 200
        },
        timeout: {
            type: Number,
            required: false,
            default: 30000
        },
        uploadedImages: {
            type: Array,
            required: false,
            default: function _default() {
            return [];
            }
        }
    },
    setup({ uploadedImages }) {
        const state = reactive({
            files: [],
            mutableUploadedImages: uploadedImages,
        });

        const headers = {
            'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }

        const { getRootProps, getInputProps, isDragActive, ...rest } = useDropzone({ onDrop });

        watch(state, () => {
            console.log('state', state);
        });

        watch(isDragActive, () => {
            console.log('isDragActive', isDragActive.value, rest);
        });

        onMounted(() => {
            this.attachAlreadyUploadedMedia();
        });

        const onDrop = (acceptFiles, rejectReasons) => {
            console.log(acceptFiles);
            console.log(rejectReasons);
            state.files = acceptFiles;
        }

        const handleClickDeleteFile = (index) => {
            state.files.splice(index, 1);
        }

        const onSuccess = (file, response) => {
            if (!file.type.includes('image')) {
                setTimeout(function () {
                    //FIXME jquery
                    file.previewElement.classList.remove('dz-file-preview');
                }, 3000);
            }
        }

        const onUploadError = (file, error) => {
            var errorMessage = typeof error == 'string' ? error : error.message;
            this.$notify({ type: 'error', title: 'Error!', text: errorMessage });
            $(file.previewElement).find('.dz-error-message span').text(errorMessage);
        }

        const onFileAdded = (file) => {
            this.placeIcon(file);
        }

        const onFileDelete = (file, error, xhr) => {
            var deletedFileIndex = _.findIndex(this.mutableUploadedImages, { url: file.url });
            if (this.mutableUploadedImages[deletedFileIndex]) {
                this.mutableUploadedImages[deletedFileIndex]['deleted'] = true;

                //dontSubstractMaxFiles fix
                var currentMax = this.$refs[this.collection].dropzone.options.maxFiles;
                this.$refs[this.collection].setOption('maxFiles', currentMax + 1);
            }
        }

        const attachAlreadyUploadedMedia = () => {
            var _this = this;

            this.$nextTick(function () {
                if (_this.mutableUploadedImages) {
                    _.each(_this.mutableUploadedImages, function (file, key) {

                        _this.$refs[_this.collection].manuallyAddFile({ name: file['name'],
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
        }

        const getFiles = () => {
            var _this2 = this;

            var files = [];

            _.each(this.mutableUploadedImages, function (file, key) {
                if (file.deleted) {
                files.push({
                    id: file.id,
                    collection_name: _this2.collection,
                    action: 'delete'
                });
                }
            });

            _.each(this.$refs[this.collection].getAcceptedFiles(), function (file, key) {
                var response = JSON.parse(file.xhr.response);

                if (response.path) {
                    files.push({
                        id: file.id,
                        collection_name: _this2.collection,
                        path: response.path,
                        action: file.deleted ? 'delete' : 'add', //TODO: update ie. meta_data.name
                        meta_data: {
                        name: file.name, //TODO: editable in the future
                        file_name: file.name,
                        width: file.width,
                        height: file.height
                        }
                    });
                }
            });

            return files;
        }

        const placeIcon = (file) => {
            //FIXME cele to je jqueryoidne, asi si budeme musiet spravit vlastny vue wrapper, tento je zbugovany
            var svg, $previewElement = file.previewElement;

            if (file.url) {
                $previewElement.find('.dz-filename').html('<a href="' + file.url + '" target="_BLANK" class="dz-btn dz-custom-download">' + file.name + '</a>');
            }

            if (file.type.includes('image')) {
                //nothing, default thumb
            } else if (file.type.includes('pdf')) {
                svg = ''

            } else if (file.type.includes('word')) {
                svg = ''

            } else if (file.type.includes('spreadsheet') || file.type.includes('csv')) {
                svg = ''

            } else if (file.type.includes('presentation')) {
                svg = ''

            } else if (file.type.includes('video')) {
                svg = ''

            } else if (file.type.includes('text')) {
                svg = ''

            } else if (file.type.includes('zip') || file.type.includes('rar')) {
                svg = ''

            } else {
                svg = ''

            }

            if (svg) {
                $previewElement.find('.dz-image').html('<span>' + svg + '</span><p>' + file.name + '</p>');
            }
        }

        const template = () => {
            return '\n              <div class="dz-preview dz-file-preview">\n                  <div class="dz-image">\n                      <img data-dz-thumbnail />\n                  </div>\n                  <div class="dz-details">\n                    <div class="dz-size"><span data-dz-size></span></div>\n                    <div class="dz-filename"></div>\n                  </div>\n                  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n                  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n                  <div class="dz-success-mark"><i class="fa fa-check"></i></div>\n                  <div class="dz-error-mark"><i class="fa fa-close"></i></div>\n              </div>\n          ';
        }
    }
}
</script>

<style lang="scss" scoped></style>
