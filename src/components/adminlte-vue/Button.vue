<template>
  <button type="button"
          class="btn"
          :class="[variantClass,sizeClass,blockClass,bgClass,flatClass]"
          :disabled="disabled">
    <i :class="icon"></i>
    <slot></slot>
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
    }
  }
}
</script>