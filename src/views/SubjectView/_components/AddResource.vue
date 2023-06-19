<template>
    <div class="container">
		<form class="form-create" @submit.prevent="onSubmit" :action="action">
			<div class="row">
				<div class="col-lg">
					<div class="form-floating">
						<input type="text" v-model="form.title" class="form-control" id="nome" placeholder="Nome" />
						<label for="nome">Nome</label>
					</div>
				</div>
				<div class="col-lg">
					<div class="form-floating">
                        <s-multiselect
                            v-model="selectedFileTypes"
                            :options="acceptedFileTypes"
                            label="label"
                            track-by="id"
                            multiple
                        ></s-multiselect>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div class="form-floating">
                        <s-text-area v-model="form.description"></s-text-area>
                    </div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div
                        v-for="fileType in selectedFileTypes"
                        :class="'form-floating'"
                        :key="fileType.id"
                    >
                        {{ fileType.label }}
                        <s-upload
                            :ref="'anexos_' + fileType.type + '_uploader'"
                            :collection="'anexos_' + fileType.type"
                            :accepted-file-types="[fileType.mimeTypes]"
                            :max-number-of-files="10"
                            :max-file-size-in-mb="10"
                        ></s-upload>
                    </div>
				</div>
			</div>

            <div class="alert alert-danger mt-4 mx-2" role="alert" v-if="messageError.length">
                {{ messageError }}
            </div>

			<div class="row btn-enviar mb-5">
				<div class="col">
                    <s-submit-button type-name="rounded-outline"></s-submit-button>
					<!-- <button class="btn btn-salvar" type="submit">
						<b>Enviar</b> 
					</button> -->
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { AppForm } from '@/mixins';
import { SMultiselect, STextArea, SUpload, SSubmitButton } from '@/components';
// import { succesIcon } from '@/assets/icons/success';

export default {
    name: 'AddResource',
    mixins: [AppForm],
    components: {
        SMultiselect,
        STextArea,
        SUpload,
        SSubmitButton,
    },
	props: {
		subject: {
			type: Object,
		},
	},
    data() {
        return {
            form: {
                title: '',
                description: '',
                subjectId: parseInt(this.subject.id),
                medias: [],
            },
            selectedFileTypes: [],
            mediaCollections: ['anexos_pdf', 'anexos_image', 'anexos_video'],
            acceptedFileTypes: [
                { id: 1, type: 'pdf', mimeTypes: 'application/pdf', label: 'PDF' },
                { id: 2, type: 'image', mimeTypes: 'image/*', label: 'Image' },
                { id: 3, type: 'video', mimeTypes: 'video/*', label: 'Vídeo' },
            ],
            messageSuccess: '',
            messageError: '',
            redirectTo: this.$route.path
        }
    },
    watch: {
        selectedFileTypes() {
            console.log(this.$refs);
        }
    },
    methods: {
        // formatType(type) {
        //     return type.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        // },
        onSuccess() {
            this.$notify({
                type: 'success',
                title: 'Sucesso!',
                text: 'Recurso cadastrado com sucesso'
            });
            
            setTimeout(() => {
                this.submiting = false;
                if (this.redirectTo.length) {
                    this.$router.go();
                }
            }, 1000);
        },
        onFail(data) {
            this.submiting = false;

            messageError = data.message
            console.error(data);
        },
    },
}
</script>

<style>
.trumbowyg-editor {
    color: rgb(15, 15, 15)!important;;
}
</style>

<style lang="scss" scoped>
.btn-salvar{
	border-radius: 30px;
	border-style: solid;
	border-color: #38b6ff;
	background-color: #0a223c;
	color: #38b6ff;
	margin-top: 5px;
	padding: 10px;
	width: 200px;
	margin-right: 15px;
}

.btn-salvar:hover {
	background-color: #38b6ff;
	color: #010214;
}
</style>