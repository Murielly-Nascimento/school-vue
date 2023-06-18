<template>
    <div class="s-accordion--ufu">
        <button
            type="button"
            class="btn s-accordion__collapsible--ufu"
            @click="toggle"
        >
            <h4>{{ title }}</h4>
        </button>
        <transition>
            <div class="s-accordion__content--ufu" v-if="state">
                <div :class="innerClass">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'SAccordion',
    props: {
        name: {
            type: [String, Number],
        },
        title: {
            type: String,
            default: '',
        },
        innerClass: {
            type: [Array, Object, String],
            default: '',
        }
    },
    data() {
        return {
            state: false,
        }
    },
    methods: {
        show() {
            this.state = true;
        },
        hide() {
            this.state = false;
        },
        toggle() {
            this.state = !this.state;
        }
    },
}
</script>

<style lang="scss" scoped>
.s-accordion__collapsible--ufu {
    background-color: #0a223c;
    color:#38b6ff;
    cursor: pointer;
    border-bottom:solid 1px #38b6ff;
    outline: none;

    &:hover {
        background-color: #38b6ff;
        color: white;
    }
}

.s-accordion__collapsible--ufu,
.s-accordion__content--ufu {
    width: 100%;
    line-height: 1.8;
    word-wrap: break-word;
}

@media (max-width: 576px) {
    .s-accordion--ufu {
        width: 95%;
    }
}

@media (min-width: 576px) and (max-width: 767px) {
    .s-accordion--ufu {
        width: 80%;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .s-accordion--ufu {
        width: 75%;
        word-wrap: break-word;
    }
}

@media (min-width: 992px) and (max-width: 1199px) {
    .s-accordion--ufu {
        width: 75%;
        word-wrap: break-word;
    }
}

@media (min-width: 1200px) {
    .s-accordion--ufu {
        width: 50%;
        word-wrap: break-word;
    }
}

// .v-enter-active,
// .v-leave-active {
//   transition: opacity 0.1s ease;
// }

// .v-enter-from,
// .v-leave-to {
//   opacity: 0;
// }
</style>