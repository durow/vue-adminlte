<template>
  <div :class="containerClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  computed: {
    containerClass() {
      return this.fluid ? 'container-fluid' : 'container'
    }
  },
  props: {
    fluid: {
      type: Boolean,
      default: false
    }
  }
}
</script>