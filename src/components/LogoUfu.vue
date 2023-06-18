<template>
	<div class="logo-ufu">
		<img src="@/assets/img/logo-ufu.png" alt="Logo UFU" :style="{ maxWidth }" />
	</div>
</template>

<script>
export default {
	name: 'LogoUfu',
	props: {
		maxWidth: {
			type: [String, Number],
		}
	}
}
</script>

<style lang="scss" scoped>
.logo-ufu {
	img {
		width: 420px;
    	height: auto;
	}
}
</style>