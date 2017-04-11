<template>
  <a :href="href"
     class="navbar-brand">
    <i v-if="icon"
       :class="icon"></i>
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: undefined
    }
  }
}
</script>