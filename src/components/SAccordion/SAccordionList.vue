<template>
    <div :class="['s-accordion__list--ufu', 's-accordion__list-' + align + '--ufu']">
        <div
            class="s-accordion__list-title--ufu"
            v-if="title && title.length"
            v-html="title"
        ></div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'SAccordionList',
    props: {
        title: {
            type: String,
            default: '',
        },
        align: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="scss" scoped>
.s-accordion__list-center--ufu {
    align-items: center !important;
}
.s-accordion__list-left--ufu {
    align-items: flex-start !important;
}
.s-accordion__list-right--ufu {
    align-items: flex-end !important;
}
.s-accordion__list--ufu {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;

    .s-accordion__list-title--ufu {
        color: white;
    }
}
</style>