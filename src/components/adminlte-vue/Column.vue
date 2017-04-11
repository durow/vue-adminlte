<template>
  <div :class="[colClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  computed:{
    colClass(){
      
    }
  },
  props: {
    size: {
      type: String,
      default: 'md'
    },
    width: {
      type: String,
      default: '12'
    },
    offset: {
      type: String,
      default: undefined
    },
    pull: {
      type: String,
      default: undefined
    },
    push: {
      type: String,
      default: undefined
    }
  }
}
</script>