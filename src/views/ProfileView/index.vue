<template>
	<Layout title="Perfil">
		<article>
			<div class="row">
				<div class="col">
					<profile-form></profile-form>
				</div>
				<div class="col">
					<profile-pencil></profile-pencil>
				</div>
			</div>
		</article>
	</Layout>
</template>

<script>
	import { Layout } from '@/layout'
	import { ProfilePencil, ProfileForm } from './_components';
	export default {
		name: 'ProfileView',
		components: {
			Layout,
			ProfilePencil,
			ProfileForm	
		}
	}
</script>