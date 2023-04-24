<template>
    <button :type="type" class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'button',
        },
    }
}
</script>

<style lang="scss" scoped>

.btn-cadastrar{
    border-radius: 30px;
    border-style: solid;
    border-color: #38b6ff;
    background-color: #010214;
    color: #38b6ff;
    padding: 10px;
}
.btn-cadastrar:hover{
    background-color: #38b6ff;
    color: #010214;
}
</style>