<template>
  <div class="input-group"
       :class="sizeClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  computed: {
    sizeClass() {
      return this.size ? `input-group-${lg}` : ''
    }
  },
  props: {
    size: {
      type: String,
      default: undefined
    }
  }
}
</script>