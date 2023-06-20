<template>
    <div :class="['sidebar', { 'sidebar-open': show }]"><!-- v-click-outside="close" -->
        <logo-ufu max-width="100%" style="padding: 20px 30px"></logo-ufu>
        <router-link class="nav-item" to="/">Home</router-link>
		<router-link class="nav-item" to="/disciplinas">Grade Curricular</router-link>
		<router-link class="nav-item" to="/docentes">Docentes</router-link>
		<router-link class="nav-item" to="/contato">Contato</router-link>

        <div class="sidebar-close" @click="close">
            <font-awesome-icon
                :icon="['fas', 'chevron-left']"
                style="font-size: 20px;"
            />
        </div>
    </div>
</template>

<script>
import LogoUfu from '@/components/LogoUfu.vue';
export default {
    name: 'SideBar',
    components: {
        LogoUfu,
    },
    props: {
        opened: {
            type: Boolean,
        }
    },
    data() {
        return {
            show: this.opened,
        }
    },
    watch: {
        opened() {
            this.show = this.opened;
        }
    },
    methods: {
        open() {
            this.$emit('open');
        },
        close() {
            console.log('close');
            this.$emit('close');
        }
    },
}
</script>

<style lang="scss" scoped>
.sidebar {
    height: 100%;
    width: 250px;
    max-width: 100%;
    background-color: #fff;
    position: fixed!important;
    z-index: 1;
    overflow: auto;
    animation: animateleft .5s;
    left: 0;
    top: 0;
    background-color: black;
    box-shadow: 0 2px 8px 3px rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

    .nav-item { 
        width: 100%;
        padding: 8px 16px;
        text-align: left;
        border: none;
        white-space: normal;
        float: none;
        outline: 0;
        text-decoration: none;
        color: #393939;
        animation: animateleft .7s; 
        display: none;
        visibility: hidden;
        opacity: 0;
        vertical-align: middle;
    }

    &:not(.sidebar-open) {
        display: none;
    }

    &.sidebar-open {
        display: block;
        background-color: #050b12;
        position: fixed!important;
        z-index: 999;
        overflow: auto;
        padding: 10px 0;
        // animation: animateright .5s;

        .nav-item {
            display: block!important;
            visibility: visible;
            opacity: 1;
            font-weight: 900;
            color: #f0f0f5;

            &.router-link-exact-active {
                color: #0a223c;
                background-color: #d3e1ff;
            }
        }
    }

    .sidebar-close {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        position: absolute;
        bottom: 0;
        padding: 10px;
        background-color: #112033;
    }
}

@keyframes animateleft {
    0% {
        left: -300px;
        opacity: 0;
    }
    100% {
        left: 0;
        opacity: 1;
    }
}

@keyframes animateright {
    0% {
        left: 0;
        opacity: 0;
    }
    100% {
        left: -300px;
        opacity: 1;
    }
}
</style>