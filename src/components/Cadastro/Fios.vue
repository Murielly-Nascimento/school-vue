<template>
	<div :id="'fios-' + side">
		<img :src="sources[side]" alt="fios" width="340" height="160">
	</div>
</template>

<script>
export default {
    name: 'Fios',
    props: {
        side: {
            type: String,
        },
    },
    data() {
        return {
            sources: {
                direita: location.origin + '/src/assets/img/wires-right.png',
                esquerda: location.origin + '/src/assets/img/wires-left.png'
            }
        }
    },
    computed: {
        isValid() {
            return Object.keys(this.sources).includes(this.side);
        }
    },
    created() {
        if (!this.isValid) {
            throw new Error('Invalid side');
        }
    }
}
</script>

<style>
	#fios-direita{
		position: fixed;
		top: 0;
		left: 0;
	}
	#fios-esquerda{
		position: fixed;
		bottom: 0;
		right: 0;
	}
</style>