<template>
    <div class="progress"
         :class="[activeClass,sizeClass]">
        <div class="progress-bar"
             :class="[variantClass,stripedClass]"
             role="progressbar"
             :aria-valuenow="nowValue"
             :aria-valuemin="minValue"
             :aria-valuemax="maxValue"
             :style="widthStyle">
            <span class="sr-only">{{valuePercent}}% Complete</span>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        variantClass() {
            if (!this.variant) return ''
            return ['progress-bar-' + this.variant]
        },
        activeClass() {
            return this.active ? 'active' : ''
        },
        bgClass() {
            if (!this.bg) return ''
            return ['bg-' + this.bg]
        },
        sizeClass() {
            return 'progress-' + this.size
        },
        stripedClass() {
            return this.striped ? 'progress-bar-striped' : ''
        },
        widthStyle() {
            return 'width: ' + this.valuePercent + '%'
        },
        valuePercent() {
            return (this.nowValue - this.minValue) * 100 / (this.maxValue - this.minValue)
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
        active: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: ''
        },
        striped: {
            type: Boolean,
            default: false
        },
        minValue: {
            type: Number,
            default: 0
        },
        maxValue: {
            type: Number,
            default: 100,
        },
        nowValue: {
            type: Number,
            default: 50
        }
    }
}
</script>