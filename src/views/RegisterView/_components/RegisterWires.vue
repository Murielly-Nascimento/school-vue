<template>
	<div :class="'s-wires__' + side + '--ufu'">
		<s-image :source="sources[side]" alt="fios" width="340" height="160" />
	</div>
</template>

<script>
import { SImage } from '@/components';
export default {
    name: 'Wires',
    components: {
        SImage
    },
    props: {
        side: {
            type: String,
        },
    },
    data() {
        return {
            sources: {
                right: '@/assets/img/wires-right.png',
                left: '@/assets/img/wires-left.png'
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
.s-wires__left--ufu{
    position: fixed;
    top: 0;
    left: 0;
}
.s-wires__right--ufu{
    position: fixed;
    bottom: 0;
    right: 0;
}
</style>