<template>
    <div class="container">
		<form class="form-create">
			<div class="row">
				<div class="col-lg">
					<div class="form-floating">
						<input type="text" class="form-control" id="nome" placeholder="Nome">
						<label for="nome">Nome</label>
					</div>
				</div>
				<div class="col-lg">
					<div class="form-floating">
                        <s-multiselect
                            v-model="selectedFileTypes"
                            :options="acceptedFileTypes"
                            :label="'label'"
                            @input="__log"
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
                        <s-upload :collection="'anexos_' + fileType.type" :accepted-file-types="[fileType.mimeTypes]"></s-upload>
                    </div>
				</div>
			</div>
			<div class="row btn-enviar">
				<div class="col">
					<button class="btn" role="button" href="#">
						<b>Enviar</b> 
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { AppForm } from '@/mixins';
import { SMultiselect, STextArea, SUpload } from '@/components';

export default {
    name: 'AddResource',
    mixins: [AppForm],
    components: {
        SMultiselect,
        STextArea,
        SUpload,
    },
	props: {
		subject: {
			type: Object,
		},
	},
    data() {
        return {
            form: {
                description: '',
                files: [],
            },
            selectedFileTypes: [],
            mediaCollections: ['anexos'],
            acceptedFileTypes: [
                { id: 1, type: 'pdf', mimeTypes: 'application/pdf', label: 'PDF' },
                { id: 2, type: 'image', mimeTypes: 'image/*', label: 'Image' },
                { id: 3, type: 'video', mimeTypes: 'video/*', label: 'Vídeo' },
            ],
        }
    },
    methods: {
        __log() {
            console.log(this.file.type);
        },
        formatType(type) {
            console.log(type.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
            return type.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }
    },
}
</script>

<style lang="scss" scoped>

</style>