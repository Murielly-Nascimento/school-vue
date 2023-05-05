<template>
    <form :action="url" class="vue-dropzone dropzone" :id="id">
        <slot></slot>
    </form>
</template>

<script>
import Dropzone from 'dropzone';
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        clickable: {
            type: [Boolean, String],
            default: true
        },
        confirm: {
            type: Function,
            default: undefined
        },
        paramName: {
            type: String,
            default: 'file'
        },
        acceptedFileTypes: {
            type: String
        },
        thumbnailHeight: {
            type: Number,
            default: 200
        },
        thumbnailWidth: {
            type: Number,
            default: 200
        },
        showRemoveLink: {
            type: Boolean,
            default: true
        },
        maxFileSizeInMB: {
            type: Number,
            default: 2
        },
        maxNumberOfFiles: {
            type: Number,
            default: 5
        },
        autoProcessQueue: {
            type: Boolean,
            default: true
        },
        useFontAwesome: {
            type: Boolean,
            default: false
        },
        headers: {
            type: Object
        },
        language: {
            type: Object,
            default: function () {
                return {}
            }
        },
        previewTemplate: {
            type: Function,
            default: (options) => {
                return `
                    <div class="dz-preview dz-file-preview">
                        <div class="dz-image" style="width: ${options.thumbnailWidth}px;height: ${options.thumbnailHeight}px">
                            <img data-dz-thumbnail />
                        </div>
                        <div class="dz-details">
                            <div class="dz-size"><span data-dz-size></span></div>
                            <div class="dz-filename"><span data-dz-name></span></div>
                        </div>
                        <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                        <div class="dz-error-message"><span data-dz-errormessage></span></div>
                        <div class="dz-success-mark">${options.doneIcon}</div>
                        <div class="dz-error-mark">${options.errorIcon}</div>
                    </div>
                `;
            }
        },
        useCustomDropzoneOptions: {
            type: Boolean,
            default: false
        },
        dropzoneOptions: {
            type: Object,
            default (){
                return {}
            }
        },
        resizeWidth:{
            type : Number,
            default : null
        },
        resizeHeight:{
            type : Number,
            default : null
        },
        resizeMimeType:{
            type : String,
            default : null
        },
        resizeQuality:{
            type : Number,
            default : 0.8
        },
        resizeMethod:{
            type : String,
            default : 'contain'
        },
        uploadMultiple:{
            type: Boolean,
            default: false
        },
        duplicateCheck:{
            type: Boolean,
            default: false
        },
        parallelUploads:{
            type : Number,
            default : 2
        },
        timeout:{
            type : Number,
            default : 30000
        },
        method:{
            type : String,
            default : 'POST'
        },
        withCredentials: {
            type : Boolean,
            default : false
        },
        capture:{
            type: String,
            default: null
        },
        hiddenInputContainer:{
            type: String,
            default : 'body'
        }
    },
    methods: {
        manuallyAddFile: function (file, fileUrl, callback, crossOrigin, options) {
            this.dropzone.emit("addedfile", file);
            this.dropzone.emit("thumbnail", file, fileUrl);
            this.dropzone.createThumbnailFromUrl(file, fileUrl, callback, crossOrigin);
            this.dropzone.emit("complete", file);
            if ((typeof options.dontSubstractMaxFiles == 'undefined') || !options.dontSubstractMaxFiles) {
                this.dropzone.options['maxFiles'] = this.dropzone.options['maxFiles'] - 1;
            }
            if ((typeof options.addToFiles != 'undefined') && options.addToFiles) {
                this.dropzone.files.push(file);
            }
            this.$emit('vdropzone-file-added-manually', file);
        },
        setOption: function (option, value) {
            this.dropzone.options[option] = value
        },
        removeAllFiles: function () {
            this.dropzone.removeAllFiles(true)
        },
        processQueue: function () {
            let dropzoneEle = this.dropzone;
            this.dropzone.processQueue();
            this.dropzone.on("success", function () {
                dropzoneEle.options.autoProcessQueue = true
            });
            this.dropzone.on('queuecomplete', function () {
                dropzoneEle.options.autoProcessQueue = false
            })
        },
        removeFile: function (file) {
            this.dropzone.removeFile(file)
        },
        getAcceptedFiles: function () {
            return this.dropzone.getAcceptedFiles();
        },
        getRejectedFiles: function () {
            return this.dropzone.getRejectedFiles();
        },
        getUploadingFiles: function () {
            return this.dropzone.getUploadingFiles();
        },
        getQueuedFiles: function () {
            return this.dropzone.getQueuedFiles();
        },
        getProp:function(attribute_prop,object_prop){
            if (!this.useCustomDropzoneOptions)
                return attribute_prop;

            if (object_prop !== undefined && object_prop !== null && object_prop !== '')
                return object_prop;
            else
                return attribute_prop;
        },

    },
    computed: {
        languageSettings () {
            let defaultValues = {
                dictDefaultMessage          : '<br>Solte os arquivos aqui para enviar',
                dictCancelUpload            : 'Cancelar upload',
                dictCancelUploadConfirmation: 'Tem certeza de que deseja cancelar este upload?',
                dictFallbackMessage         : 'Seu navegador não suporta uploads de arquivos de arrastar e soltar.',
                dictFallbackText            : 'Por favor, use o formulário alternativo abaixo para enviar seus arquivos como nos velhos tempos.',
                dictFileTooBig              : 'O arquivo é muito grande ({{filesize}}MiB). Tamanho máximo do arquivo: {{maxFilesize}}MiB.',
                dictInvalidFileType         : `Você não pode fazer upload de arquivos deste tipo.`,
                dictMaxFilesExceeded        : 'Você não pode enviar mais arquivos. (max: {{maxFiles}})',
                dictRemoveFile              : 'Remover',
                dictRemoveFileConfirmation  : null,
                dictResponseError           : 'O servidor respondeu com o código {{statusCode}}.'
            };

            for (let attrname in this.language) {
                defaultValues[attrname] = this.language[attrname]
            }

            if (this.useCustomDropzoneOptions) {
                if (this.dropzoneOptions.language) {
                    for (let attrname in this.dropzoneOptions.language) {
                        defaultValues[attrname] = this.dropzoneOptions.language[attrname]
                    }
                }
            }

            return defaultValues
        },
        cloudIcon: function () {
            if (this.useFontAwesome) {
                return '<i class="fa fa-cloud-upload"></i>';
            } else {
                return '<i class="material-icons">cloud_upload</i>';
            }
        },
        doneIcon: function () {
            if (this.useFontAwesome) {
                return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>';
            } else {
                return ' <i class="material-icons">done</i>';
            }
        },
        errorIcon: function () {
            if (this.useFontAwesome) {
                return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
            } else {
                return ' <i class="material-icons">error</i>';
            }
        }
    },
    mounted () {
        if (this.$isServer) {
            return
        }
        Dropzone.autoDiscover = false;
        if (this.confirm) {
            Dropzone.confirm = this.getProp(this.confirm, this.dropzoneOptions.confirm);
        }
        let element = document.getElementById(this.id);
        this.dropzone = new Dropzone(element, {
            clickable                   : this.getProp(this.clickable,this.dropzoneOptions.clickable),
            paramName                   : this.getProp(this.paramName,this.dropzoneOptions.paramName),
            thumbnailWidth              : this.getProp(this.thumbnailWidth,this.dropzoneOptions.thumbnailWidth),
            thumbnailHeight             : this.getProp(this.thumbnailHeight,this.dropzoneOptions.thumbnailHeight),
            maxFiles                    : this.getProp(this.maxNumberOfFiles,this.dropzoneOptions.maxNumberOfFiles),
            maxFilesize                 : this.getProp(this.maxFileSizeInMB,this.dropzoneOptions.maxFileSizeInMB),
            addRemoveLinks              : this.getProp(this.showRemoveLink,this.dropzoneOptions.showRemoveLink),
            acceptedFiles               : this.getProp(this.acceptedFileTypes,this.dropzoneOptions.acceptedFileTypes),
            autoProcessQueue            : this.getProp(this.autoProcessQueue,this.dropzoneOptions.autoProcessQueue),
            headers                     : this.getProp(this.headers,this.dropzoneOptions.headers),
            previewTemplate             : this.previewTemplate(this),
            dictDefaultMessage          : this.cloudIcon + this.languageSettings.dictDefaultMessage,
            dictCancelUpload            : this.languageSettings.dictCancelUpload,
            dictCancelUploadConfirmation: this.languageSettings.dictCancelUploadConfirmation,
            dictFallbackMessage         : this.languageSettings.dictFallbackMessage,
            dictFallbackText            : this.languageSettings.dictFallbackText,
            dictFileTooBig              : this.languageSettings.dictFileTooBig,
            dictInvalidFileType         : this.languageSettings.dictInvalidFileType,
            dictMaxFilesExceeded        : this.languageSettings.dictMaxFilesExceeded,
            dictRemoveFile              : this.languageSettings.dictRemoveFile,
            dictRemoveFileConfirmation  : this.languageSettings.dictRemoveFileConfirmation,
            dictResponseError           : this.languageSettings.dictResponseError,
            resizeWidth                 : this.getProp(this.resizeWidth,this.dropzoneOptions.resizeWidth),
            resizeHeight                : this.getProp(this.resizeHeight,this.dropzoneOptions.resizeHeight),
            resizeMimeType              : this.getProp(this.resizeMimeType,this.dropzoneOptions.resizeMimeType),
            resizeQuality               : this.getProp(this.resizeQuality,this.dropzoneOptions.resizeQuality),
            resizeMethod                : this.getProp(this.resizeMethod,this.dropzoneOptions.resizeMethod),
            uploadMultiple              : this.getProp(this.uploadMultiple, this.dropzoneOptions.uploadMultiple),
            parallelUploads             : this.getProp(this.parallelUploads, this.dropzoneOptions.parallelUploads),
            timeout                     : this.getProp(this.timeout, this.dropzoneOptions.timeout),
            method                      : this.getProp(this.method, this.dropzoneOptions.method),
            capture                     : this.getProp(this.capture, this.dropzoneOptions.capture),
            hiddenInputContainer        : this.getProp(this.hiddenInputContainer, this.dropzoneOptions.hiddenInputContainer),
            withCredentials             : this.getProp(this.withCredentials, this.dropzoneOptions.withCredentials)
        })

        // Handle the dropzone events
        let vm = this;

        this.dropzone.on('thumbnail', function (file, dataUrl) {
            vm.$emit('vdropzone-thumbnail', file, dataUrl)
        });

        this.dropzone.on('addedfile', function (file) {
            /**
             * If Duplicate Check enabled remove duplicate file and emit the event.
             */
            if (vm.duplicateCheck) {
                if (this.files.length) {
                    var _i, _len;
                    for (_i = 0, _len = this.files.length; _i < _len - 1; _i++) {
                        if (this.files[_i].name === file.name) {
                            this.removeFile(file);
                            vm.$emit('duplicate-file', file)
                        }
                    }
                }
            }

            vm.$emit('vdropzone-file-added', file)
        });

        this.dropzone.on('addedfiles', function (files) {
            vm.$emit('vdropzone-files-added', files)
        });

        this.dropzone.on('removedfile', function (file) {
            vm.$emit('vdropzone-removed-file', file)
        });

        this.dropzone.on('success', function (file, response) {
            vm.$emit('vdropzone-success', file, response)
        });

        this.dropzone.on('successmultiple', function (file, response) {
            vm.$emit('vdropzone-success-multiple', file, response)
        });

        this.dropzone.on('error', function (file, error, xhr) {
            vm.$emit('vdropzone-error', file, error, xhr)
        });

        this.dropzone.on('sending', function (file, xhr, formData) {
            vm.$emit('vdropzone-sending', file, xhr, formData)
        });

        this.dropzone.on('sendingmultiple', function (file, xhr, formData) {
            vm.$emit('vdropzone-sending-multiple', file, xhr, formData)
        });

        this.dropzone.on('queuecomplete', function (file, xhr, formData) {
            vm.$emit('vdropzone-queue-complete', file, xhr, formData)
        });

        this.dropzone.on('totaluploadprogress', function (totaluploadprogress, totalBytes, totalBytesSent) {
            vm.$emit('vdropzone-total-upload-progress', totaluploadprogress, totalBytes, totalBytesSent)
        });

        vm.$emit('vdropzone-mounted');
    },
    beforeDestroy () {
        this.dropzone.destroy();
    }
}
</script>

<style lang="scss">
@import "node_modules/dropzone/dist/dropzone.css";

.vue-dropzone {
    border: 2px dashed rgb(3, 100, 190) !important;
    font-family: 'Arial', sans-serif;
    letter-spacing: 0.2px;
    color: #777;
    transition: background-color .2s linear;
    background-color: #F6F6F6;

    i {
        color: #CCC;
    }

    .dz-preview {

        .dz-image {
            border-radius: 0;

            img {
                height: 100%;
            }

            svg {
                max-height: 100%;
            }

            &:hover {
                img {
                    transform: none;
                    -webkit-filter: none;
                }
            }
        }

        .dz-details {
            bottom: 0;
            top: 0;
            color: white;
            transition: opacity .2s linear;
            text-align: left;
            &:hover {
                background-color: rgba(33, 150, 243, 0.8);
            }
            .dz-filename span, .dz-size span {
                background-color: transparent;
            }
            .dz-filename:not(:hover) span {
                border: none;
            }
            .dz-filename:hover span {
                background-color: transparent;
                border: none;
            }
        }

        .dz-progress .dz-upload {
            background: #cccccc;
        }

        .dz-remove {
            position: absolute;
            z-index: 30;
            color: white;
            margin-left: 15px;
            padding: 10px;
            top: inherit;
            bottom: 15px;
            border: 2px white solid;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 0.8rem;
            font-weight: 800;
            letter-spacing: 1.1px;
            opacity: 0;
        }

        &:hover {
            .dz-remove {
                opacity: 1;
            }
        }

        .dz-success-mark, .dz-error-mark {
            background: transparent !important;
            margin-left: auto !important;
            margin-top: auto !important;
            width: 100% !important;
            top: 35% !important;
            left: 0;
            i {
                color: white !important;
                font-size: 5rem !important;
            }
            svg {
                width: 108px !important;
                height: 108px !important;
            }
        }

        .dz-error-message {
            top: calc(50% + 25px);
            left: calc(50% - 35px);
        }
    }
}
</style>
