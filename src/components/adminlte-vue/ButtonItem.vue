<template>
  <li>
    <a @click="onClick"
       href="javascript:void(0)">
      <i v-if="icon"
         :class="icon"></i>
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>