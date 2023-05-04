<template>
    <div>
        <div :class="['s-button-group--ufu', 's-button-group__' + align + '--ufu']" v-for="link in links" :key="link.id">
            <router-link :to="link.link" v-if="isLocal(link.link)">
                {{ link.title }}
            </router-link>	
            <a :href="link.link" v-if="isRemote(link.link)">
                {{ link.title }}
            </a>	
        </div>
    </div>
</template>

<script>
export default {
    name: 'SButtonGroup',
    props: {
        links: {
            type: Array,
        },
        align: {
            type: String,
            default: '',
        }
    },
    methods: {
        isHttpLink(link) {
            return link.startsWith('http://') ||
                    link.startsWith('https://');
        },
        isRemote(link) {
            return this.isHttpLink(link) && !this.isLocal(link);
        },
        isLocal(link) {
            return link.startsWith(import.meta.env.VITE_API_URL) ||
                    link.startsWith(location.origin) ||
                    link.startsWith('/');
        }
    },
}
</script>

<style lang="scss" scoped>
.s-button-group--ufu {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;

    &.s-button-group__left--ufu {
        text-align: left;
        align-items: flex-start;
    }
    &.s-button-group__center--ufu {
        text-align: center;
        align-items: center;
    }
    &.s-button-group__right--ufu {
        text-align: right;
        align-items: flex-end;
    }

	a, button {
		display: block;
		text-decoration: none;
		color: white;
		padding: 5px;
	}
}
</style>