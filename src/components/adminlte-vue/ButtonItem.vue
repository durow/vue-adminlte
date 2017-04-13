<template>
  <li>
    <a @click="onClick"
       href="javascript:void(0)">
      <i v-if="icon"
         :class="icon"></i>
      <slot></slot>
      <small v-if="badgeText"
             class="label pull-right"
             :class="[badgeBgClass]">{{badgeText}}</small>
    </a>
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
      default: null
    },
    badgeText: {
      type: String,
      default: undefined
    },
    badgeBg: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>