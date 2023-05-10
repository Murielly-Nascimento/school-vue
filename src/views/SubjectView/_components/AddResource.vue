<template>
    <div class="container">
		<form class="form-create">
			<div class="row">
				<div class="col">
					<div class="form-floating">
						<input type="text" class="form-control" id="nome" placeholder="Nome">
						<label for="nome">Nome</label>
					</div>
				</div>
				<div class="col">
					<div class="form-floating">
                        <s-multiselect
                            v-model="form.file.type"
                            :options="acceptedFileTypes"
                            @input="__log"
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
					<div class="form-floating">
                        <s-upload collection="anexos"></s-upload>
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
                file: {
                    type: '',
                    bin: undefined,
                },
            },
            mediaCollections: ['anexos'],
            acceptedFileTypes: [
                'PDF',
                'Image',
                'Vídeo',
            ],
        }
    },
    methods: {
        __log() {
            console.log(this.file.type);
        },
    },
}
</script>

<style lang="scss" scoped>

</style>