<template>
  <button type="button"
          class="btn"
          :class="[variantClass,sizeClass,blockClass,bgClass,flatClass]"
          :disabled="disabled"
          @click="onClick">
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
    <span class="badge" v-if="badgeText"
          :class="badgeBgClass">{{badgeText}}</span>
  </button>
</template>

<script>
export default {
  computed: {
    variantClass() { return `btn-${this.variant}` },
    sizeClass() { return this.size ? `btn-${this.size}` : '' },
    blockClass() { return this.block ? 'btn-block' : '' },
    bgClass() { return this.bg ? `bg-${this.bg}` : '' },
    flatClass() { return this.flat ? 'btn-flat' : '' },
    badgeBgClass() {
      if (this.badgeBg) {
        return `bg-${this.badgeBg}`
      }
    }
  },
  props: {
    variant: {
      type: String,
      default: 'default'
    },
    bg: {
      type: String,
      default: undefined
    },
    block: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: undefined
    },
    flat: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: undefined
    },
    badgeBg: {
      type: String,
      default: undefined
    },
    badgeText: {
      type: String,
      default: ''
    }
  },
  methods:{
    onClick(){
      this.$emit('click')
    }
  }
}
</script>