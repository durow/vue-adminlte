<template>
  <a class="btn btn-social"
     @click="onClick"
     :class="[variantClass,bgClass,blockClass,flatClass]">
    <i :class="icon"></i>
    <slot></slot>
  </a>
</template>

<script>
export default {
  computed: {
    variantClass() { return `btn-${this.variant}` },
    bgClass() { return this.bg ? `bg-${this.bg}` : '' },
    blockClass() { return this.block ? 'btn-block' : '' },
    flatClass() { return this.flat ? 'btn-flat' : '' }
  },
  props: {
    icon: {
      type: String,
      default: undefined
    },
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
    flat: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>