<template>
    <form @submit.prevent="onSubmit" :action="action">
        <div class="row">
            <div class="col">
                <div class="form-floating m-2">
                    <input type="text" class="form-control" name="nome" placeholder="Nome" v-model="form.nome" />
                    <label for="nome"><b>Nome</b></label>
                </div>
            </div>
            <div class="col">
                <div class="form-floating m-2">
                    <input type="email" class="form-control" name="email" placeholder="Email Institucional" v-model="form.email" />
                    <label for="email"><b>Email Institucional</b></label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-floating m-2">
                    <s-text-area v-model="form.description"></s-text-area>
                    <label for="mensagem"><b>Mensagem</b></label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <s-submit-button></s-submit-button>
            </div>
        </div>
    </form>
</template>

<script>
import { AppForm } from '@/mixins';
import { STextArea, SSubmitButton } from '@/components';
export default {
	mixins: [AppForm],
	components: {
		STextArea,
        SSubmitButton
	},
	data() {
		return {
			form: {
				nome: '',
				email: '',
				description: '',
			}
		}
	}
}
</script>

<style lang="scss" scoped>
form {
	color: gray;
}

.btn-submit {
	display: block;
	margin: 0 auto;
	border-radius: 5px;
	background-color: #38b6ff;
	padding: 10px;
	text-align: center;
	width: 150px;
}
</style>