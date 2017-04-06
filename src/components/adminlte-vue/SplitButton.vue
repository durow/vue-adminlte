<template>
  <div class="btn-group">
    <button type="button"
            class="btn"
            :class="variantClass">
      <i v-if="icon"
         :class="icon"></i> {{text}}
      <span class="badge"
            v-if="badgeText"
            :class="badgeBgClass">{{badgeText}}</span>
    </button>
    <button type="button"
            class="btn dropdown-toggle"
            :class="variantClass"
            data-toggle="dropdown">
      <span class="caret"></span>
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu"
        role="menu">
      <slot></slot>
      <li>
        <a v-for="i in items"
           v-if="i.type=='a'"
           v-on:click="i.click"
           :href="i.to">
          <i :class="i.icon"></i> {{i.text}}
        </a>
      </li>
      <li>
        <router-link v-for="i in items"
                     v-if="!i.type || i.type=='router'"
                     :to="i.to">
          <i :class="i.icon"></i> {{i.text}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    variantClass() {
      return `btn-${this.variant}`
    },
    badgeBgClass() {
      if (this.badgeBg) {
        return `bg-${this.badgeBg}`
      }
    }
  },
  props: {
    variant: {
      type: String,
      default: 'default'
    },
    text: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: undefined
    },
    icon: {
      type: String,
      default: undefined
    },
    badgeBg: {
      type: String,
      default: undefined
    },
    badgeText: {
      type: String,
      default: ''
    }
  }
}
</script>