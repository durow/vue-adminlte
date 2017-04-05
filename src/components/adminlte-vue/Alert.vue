<template>
    <div class="alert"
         :class="[variantClass, bgClass]">
        <button v-show="dismissible"
                type="button"
                class="close"
                data-dismiss="alert"
                aria-hidden="true">×</button>
        <h4 v-show="isShowHeader"><i class="icon" :class="icon" v-show="isShowIcon"></i><span>{{header}}</span></h4>
        <i class="icon"
           :class="icon"
           v-show="!isShowHeader && isShowIcon"></i>
        <slot></slot>
    </div>
</template>

<script>
export default {
    computed: {
        variantClass() {
            if (!this.variant) return ''
            return ['alert-' + this.variant]
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
        },
        isShowIcon() {
            if (this.icon && this.icon != '') {
                return true
            } else {
                return false
            }
        },
        isShowContentIcon() {
            return !isShowIcon()
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
        },
        icon: {
            type: String,
            default: ''
        },
        dismissible: {
            type: Boolean,
            default: false
        }
    }
}
</script>