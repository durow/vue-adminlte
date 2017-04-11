<template>
  <router-link to="/"
               class="logo">
    <span class="logo-mini"><i v-if="icon" :class="icon"></i> {{logoMini}}</span>
    <span class="logo-lg"><i v-if="icon" :class="icon"></i> {{logo}}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: undefined
    },
    logoMini: {
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