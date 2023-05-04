<template>
    <button
        type="submit"
        class="btn btn-submit"
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>