<template>
  <li class="header">
    <i :class="icon"></i>
    <slot></slot>
    <small v-if="badgeText"
           class="label pull-right"
           :class="[badgeBgClass]">{{badgeText}}</small>
  </li>
</template>

<script>
export default {
  computed: {
    badgeBgClass() {
      return this.badgeBg ? `bg-${this.badgeBg}` : ''
    }
  },
  props: {
    icon: {
      type: String,
      default: undefined
    },
    badgeText: {
      type: String,
      default: undefined
    },
    badgeBg: {
      type: String,
      default: 'primary'
    }
  }
}
</script>