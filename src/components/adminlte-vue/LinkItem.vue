<template>
  <li>
    <a :href="href">
      <i :class="icon"></i>
      <slot></slot>
    </a>
  </li>
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
      default: ''
    }
  }
}
</script>