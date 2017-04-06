<template>
  <div class="btn-group"
       :class="verticalClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  computed: {
    verticalClass() { return this.vertical ? 'btn-group-vertical' : '' }
  },
  props: {
    vertical: {
      type: Boolean,
      default: false
    }
  }
}
</script>