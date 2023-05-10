<script setup>
	import { RouterView } from 'vue-router'	
</script>

<template>
	<div>
		<router-view/>
		<notifications position="bottom right" :duration="5000" />
	</div>
</template>
