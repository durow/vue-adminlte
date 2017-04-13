<template>
  <li>
    <router-link :to="to">
      <i v-if="icon"
         :class="icon"></i>
      <slot></slot>
      <small v-if="badgeText"
             class="label pull-right"
             :class="[badgeBgClass]">{{badgeText}}</small>
    </router-link>
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
    to: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
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