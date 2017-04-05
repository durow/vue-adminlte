<template>
    <div class="callout"
         :class="[variantClass, bgClass]">
        <h4 v-show="isShowHeader">{{header}}</h4>
        <slot></slot>
    </div>
</template>

<script>
export default {
    computed: {
        variantClass() {
            if (!this.variant) return ''
            return ['callout-' + this.variant]
        },
        bgClass() {
            if (!this.bg) return ''
            return ['bg-' + this.bg]
        },
        isShowHeader() {
            if (this.header && this.header != '') {
                return true
            } else {
                return false
            }
        }
    },
    props: {
        variant: {
            type: String,
            default: ''
        },
        bg: {
            type: String,
            default: 'primary'
        },
        header: {
            type: String,
            default: ''
        }
    }
}
</script>