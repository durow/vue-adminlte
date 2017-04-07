<template>
  <a class="btn btn-app"
     @click="onClick">
    <span class="badge"
          v-if="badgeText"
          :class="badgeBgClass">{{badgeText}}</span>
    <i :class="icon"></i>
    <slot></slot>
  </a>
</template>

<script>
export default {
  computed: {
    badgeBgClass() {
      if (this.badgeBg) {
        return `bg-${this.badgeBg}`
      }
    }
  },
  props: {
    badgeBg: {
      type: String,
      default: undefined
    },
    badgeText: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'fa fa-square-o'
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}

</script>