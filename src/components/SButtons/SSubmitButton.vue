<template>
    <button
        type="submit"
        :class="['btn', 'btn-submit', btnStyle]"
        :disabled="$parent.submiting"
    >
        <b>{{ title }}</b> 
    </button>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Enviar',
        },
        typeName: {
            type: String,
            default: 'default',
        }
    },
    computed: {
        btnStyle() {
            return 'btn-submit--' + this.typeName;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>