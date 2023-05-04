<template>
    <div class="s-tabs__item--ufu" v-if="isActive">
        <slot></slot>
    </div>
</template>

<script>
import { ref, inject, watch, onBeforeMount } from 'vue';
export default {
    name: 'STabItem',
    props: {
        title: {
            type: String,
            default: '',
        }
    },
    setup({ title }) {
        const index = ref(0);
        const isActive = ref(false);

        const tabs = inject("TabsProvider");

        watch(
            () => tabs.selectedIndex,
            () => { isActive.value = index.value === tabs.selectedIndex; }
        );

        onBeforeMount(() => {
            index.value = tabs.count;
            tabs.count++;
            isActive.value = index.value === tabs.selectedIndex;
        });

        return { index, isActive };
    }
}
</script>

<style lang="scss" scoped>

</style>