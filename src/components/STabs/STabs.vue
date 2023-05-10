<template>
    <div>
        <ul class="s-tabs__header--ufu">
            <li
                v-for="(tab, index) in tabs"
                :class="{ 's-tabs__selected--ufu': (index == selectedIndex) }"
                :key="tab._uid"
                @click="selectTab(index)"
            >
                <button
                    type="button"
                    :class="{
                        's-tabs__header-item--ufu': true,
                        'active': (index == selectedIndex)
                    }"
                    v-html="tab.props.title"
                ></button>
            </li>
        </ul>
        <div :class="innerClass">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { reactive, provide, onMounted, onBeforeMount, toRefs } from "vue";
export default {
    name: 'STabs',
    props: {
        innerClass: {
            type: [Array, Object, String],
            default: '',
        }
    },
    setup(_, { slots }) {
        const state = reactive({
            selectedIndex: 0,
            tabs: [],
            count: 0
        });

        provide("TabsProvider", state);
        
        onBeforeMount(() => {
            if (slots.default) {
                state.tabs = slots.default().filter((child) => child.type.name === "STabItem");
            }
        });

        onMounted(() => {
            selectTab(0);
        });
        
        const selectTab = (index) => {
            state.selectedIndex = index;

            state.tabs.forEach((tab, i) => {
                tab.isActive = (index === i)
            })
        };

        return { ...toRefs(state), selectTab };
    }
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: auto;
}

li {
    float: left;
    margin-left: 15px;
    
    .s-tabs__header-item--ufu {
		border-radius: 30px;
		border-style: solid;
		border-color: #38b6ff;
		background-color: #0a223c;
		color: #38b6ff;
		margin: 5px;
		padding: 5px;
		width: 150px;

		&:hover, &.active {
			background-color: #38b6ff;
			color: black;
            font-weight: 500;
		}
	}
}
</style>