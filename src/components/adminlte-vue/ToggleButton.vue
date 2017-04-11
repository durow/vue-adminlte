<template>
  <a href="#"
     :class="toggleClass"
     :data-toggle="data"
     role="button">
    <i v-if="icon" :class="icon"></i>
    <span class="sr-only">Toggle navigation</span>
  </a>
</template>

<script>
export default {
  computed: {
    toggleClass() {
      return this.toggle ? this.toggle + '-toggle' : ''
    }
  },
  props: {
    toggle: {
      type: String,
      default: undefined
    },
    data: {
      type: String,
      default: undefined
    },
    icon: {
      type: String,
      default: undefined
    }
  }
}
</script>