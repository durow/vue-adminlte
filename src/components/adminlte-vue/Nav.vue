<template>
  <nav class="navbar"
       :class="topClass"
       role="navigation">
       <slot></slot>
  </nav>
</template>

<script>
export default {
  computed: {
    topClass() {
      return this.top ? 'navbar-static-top' : ''
    }
  },
  props: {
    top: {
      type: Boolean,
      default: false
    }
  }
}
</script>