<template>
    <VueMultiselect
        v-model="selecteds"
        v-bind="{ ...$props, ...$attrs }"
    ></VueMultiselect>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
export default {
    name: 'SMultiselect',
    components: { VueMultiselect },
    props: VueMultiselect.props,
    data() {
        return {
            selecteds: [],
        }
    }
}
</script>

<style src="">
@import "vue-multiselect/dist/vue-multiselect.css";
.multiselect__tags {
    min-height: 58px;
    padding: 16px 40px 0 8px;
}
.multiselect__input, .multiselect__single {
    min-height: 27px;
}
.multiselect__content-wrapper {
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19) !important;
}
</style>
