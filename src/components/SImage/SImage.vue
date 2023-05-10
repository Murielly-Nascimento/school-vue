<template>
    <img class="s-image--ufu" :src="imagePath" v-if="imagePath.length" />
</template>

<script>
export default {
    name: "Image",
    props: {
        source: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            imagePath: '',
        };
    },
    computed: {
        hasAlias() {
            return this.source.startsWith("@");
        },
        isRemote() {
            return this.source.startsWith('http://') ||
                    this.source.startsWith('https://');
        },
        isLocal() {
            return this.source.startsWith(import.meta.env.VITE_API_URL) ||
                    this.hasAlias;
        }
    },
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            this.setPath(this.resolvePath());
        },
        setPath(path) {
            this.imagePath = path;
        },
        resolvePath() {
            if (this.isRemote || this.isLocal && !this.hasAlias) {
                return this.source;
            }
            return this.resolveAlias();
        },
        resolveAlias() {
            return this.source.replace("@", "/src");
        },
    },
};
</script>