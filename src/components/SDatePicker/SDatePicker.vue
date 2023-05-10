<template>
    <flat-pickr
        v-model="date"
        v-bind="{ ...$props, ...$attrs, m_config,  }"
    />
</template>

<script>
import FlatPickr from 'vue-flatpickr-component';
import { pt } from 'flatpickr/dist/l10n/pt.js';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/material_blue.css';
export default {
    name: 'SDatePicker',
    components: { FlatPickr },
    props: {
        ...FlatPickr.props,
        config: {
            type: Object,
            default: function _default() {
                return {
                    defaultDate: null,
                    wrap: false,
                    enableTime: true,
                    time_24hr: true,
                    enableSeconds: true,
                    dateFormat: 'Y-m-d H:i:S',
                    altInput: true,
                    altFormat: 'd/m/Y H:i:S',
                    inline: true
                }
            }
        }
    },
    data() {
        return {
            date: '',
            m_config: {
                ...this.config,
                locale: pt,
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>