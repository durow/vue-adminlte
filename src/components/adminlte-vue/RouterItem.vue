<template>
  <li>
    <router-link :to="to">
      <i :class="icon"></i><slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    to: {
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