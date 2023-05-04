<template>
    <VueTrumbowyg
        v-model="content"
        v-bind="{ ...$props, ...$attrs, config: computedConfig }"
    ></VueTrumbowyg>
</template>

<script>
import VueTrumbowyg from 'vue-trumbowyg';
import 'trumbowyg/dist/ui/trumbowyg.css';
import 'trumbowyg/dist/langs/pt_br.min.js'

export default {
    name: 'STextArea',
    components: { VueTrumbowyg },
    props: VueTrumbowyg.props,
    data() {
        return {
            content: null,
        }
    },
    computed: {
        computedConfig() {
            return this.getConfig();
        }
    },
    methods: {
        getConfig() {
            return { ...this.config, lang: 'pt_br' }
        }
    },
}
</script>

<style lang="scss">
.trumbowyg.trumbowyg-box {
    border-radius: 5px;

    .trumbowyg-editor-box {
        background-color: white;
    }
}
</style>