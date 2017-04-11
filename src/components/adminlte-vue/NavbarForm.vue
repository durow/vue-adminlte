<template>
  <form class="navbar-form"
        :class="[rightClass]">
    <slot></slot>
  </form>
</template>

<script>
export default {
  computed: {
    rightClass() {
      return this.right ? 'navbar-right' : 'navbar-left'
    }
  },
  props: {
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>