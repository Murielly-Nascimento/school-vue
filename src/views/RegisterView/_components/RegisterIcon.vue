<template>
	<div class="col">
		<div class="d-flex justify-content-center">
			<div :class="'s-icon__' + sex + '--ufu'">
				<s-image :source="sources[sex]" alt="sexIcon" width="92" height="89" />
			</div>
		</div>
	</div>
</template>

<script>
import { SImage } from '@/components';
export default {
    name: 'Icon',
    components: {
        SImage
    },
    props: {
        sex: {
            type: String,
        },
    },
    data() {
        return {
            sources: {
                female: '@/assets/img/icon-lady.png',
                male: '@/assets/img/icon-gentleman.png'
            }
        }
    },
    computed: {
        isValid() {
            return Object.keys(this.sources).includes(this.sex);
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
.s-icon__female--ufu{
    padding-top: 15px;
	padding-bottom: 5px;
}
.s-icon__male--ufu{
    padding-top: 15px;
	padding-bottom: 5px;
}
</style>