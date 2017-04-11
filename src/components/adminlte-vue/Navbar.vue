<template>
  <ul class="nav navbar-nav"
      :class="[rightClass,leftClass]">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  computed: {
    rightClass() {
      return this.right ? 'navbar-right' : ''
    },
    leftClass() {
      return this.left ? 'navbar-left' : ''
    }
  },
  props: {
    right: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    }
  }
}
</script>