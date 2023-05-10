<template>
	<layout>
		<article>
			<header class="s-contact__header--ufu">
				<h1>Dúvidas?</h1>
				<p>Entre em contato conosco em caso de dúvidas.</p>
			</header>
			<section class="container">
				<contact-form action="/"></contact-form>
			</section>
		</article>
	</layout>
</template>

<script>
import { Layout } from '@/layout'
import { ContactForm } from './_components';
export default {
	name: 'ContactView',
	components: {
		Layout,
		ContactForm
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
.s-contact__header--ufu {
	text-align: center;
	color: white;
	font-size: large;
	margin-bottom: 40px;
}
</style>