<template>
    <div class="row card--ufu">
        <div class="col-lg-2 image">
            <s-image :source="image" width="90" height="87" />
        </div>
        <div class="col-lg-8">
            <h3 class="text-white mt-4 mt-lg-0">{{ title }}</h3>
            <p class="text-white text-muted">{{ text }}</p>
        </div>
        <div class="col-lg-2 d-flex align-items-center justify-content-center">
            <a :href="link" class="link-icon" target="_blank">
                <font-awesome-icon :icon="'fa-solid ' + icon" />
            </a>
        </div>
    </div>
</template>

<script>
import { SImage } from '@/components/SImage';
export default {
    name: "StretchedCard",
    components: {
        SImage
    },
    props: {
        image: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        link: {
            type: String,
            default: "",
        },
        icon: {
            type: String,
            default: 'fa-link',
        }
    },
};
</script>

<style lang="scss" scoped>
.card--ufu {
  border: solid 1px;
  border-color: white;
  padding: 10px;
}
.link-icon {
    font-size: 2.3em;
    text-align: right;
    padding-right: 0px;
}
</style>
