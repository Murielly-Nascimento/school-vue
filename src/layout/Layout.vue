<template>
    <div>
		<navegacao></navegacao>
		<main>
			<slot></slot>
		</main>
    </div>
</template>

<script setup>
import Navegacao from './Navegacao.vue';
</script>

<style lang="scss">
@import '@/assets/main.css';
</style>